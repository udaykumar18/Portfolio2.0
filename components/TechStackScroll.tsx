"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { getFrameUrl, FRAME_COUNT } from "@/lib/utils";

export default function TechStackScroll() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const scrollAccumulator = useRef(0);

    // Preload Images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let count = 0;

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                const url = getFrameUrl(i);
                img.src = url;
                img.onload = () => {
                    count++;
                    setLoadedCount(count);
                    if (count === FRAME_COUNT) {
                        console.log("All images loaded successfully");
                        setIsLoading(false);
                    }
                };
                img.onerror = (e) => {
                    console.error("Failed to load image:", url, e);
                }
                loadedImages.push(img);
            }
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    // Draw on Canvas
    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        if (!img || !img.complete) return;

        // Ensure canvas matches window size
        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        // Clear
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate Aspect Ratio
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }, [images]);

    // Handle wheel events to control animation
    useEffect(() => {
        if (isLoading || images.length === 0) return;

        const handleWheel = (e: WheelEvent) => {
            // If animation is complete and scrolling down, allow normal scroll
            if (isAnimationComplete && e.deltaY > 0) {
                return;
            }

            // If at the start (progress = 0) and scrolling up, allow normal scroll
            if (scrollProgress === 0 && e.deltaY < 0) {
                return;
            }

            // Otherwise, prevent default and control the animation
            e.preventDefault();

            const delta = e.deltaY;
            const sensitivity = 0.08; // Adjust scroll sensitivity

            scrollAccumulator.current += delta * sensitivity;
            scrollAccumulator.current = Math.max(0, Math.min(100, scrollAccumulator.current));

            setScrollProgress(scrollAccumulator.current);

            // Calculate frame index
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor((scrollAccumulator.current / 100) * FRAME_COUNT)
            );

            renderFrame(frameIndex);

            // Check if animation is complete
            if (scrollAccumulator.current >= 100 && !isAnimationComplete) {
                setIsAnimationComplete(true);
            } else if (scrollAccumulator.current < 100 && isAnimationComplete) {
                setIsAnimationComplete(false);
            }
        };

        // Add wheel event listener with passive: false to allow preventDefault
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [isLoading, images, scrollProgress, isAnimationComplete, renderFrame]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor((scrollProgress / 100) * FRAME_COUNT));
            renderFrame(frameIndex);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [scrollProgress, renderFrame]);

    // Initial Draw when loaded
    useEffect(() => {
        if (!isLoading && images.length > 0) {
            renderFrame(0);
        }
    }, [isLoading, images, renderFrame]);

    const progress = scrollProgress / 100;

    return (
        <div className="relative h-screen bg-black">
            {!isAnimationComplete && (
                <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">

                    {/* Loading Spinner */}
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-50">
                            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
                            <p className="font-mono text-sm tracking-widest text-white/50">LOADING STACK... {Math.round((loadedCount / FRAME_COUNT) * 100)}%</p>
                        </div>
                    )}

                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-contain" />

                    {/* Overlay Text Logic */}
                    <TextSection progress={progress} />

                    {/* Progress indicator */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800 z-50">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transition-all duration-100"
                            style={{ width: `${progress * 100}%` }}
                        />
                    </div>

                    {/* Debug info */}
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded text-sm font-mono">
                        Frame: {Math.floor((scrollProgress / 100) * FRAME_COUNT) + 1}/{FRAME_COUNT} | Progress: {Math.round(scrollProgress)}%
                    </div>

                    {/* Instruction */}
                    <div className="absolute bottom-4 left-4 bg-black/80 text-white/60 px-4 py-2 rounded text-sm font-mono">
                        Scroll to explore →
                    </div>
                </div>
            )}
        </div>
    );
}

function TextSection({ progress }: { progress: number }) {
    // Calculate opacity based on progress milestones
    const getOpacity = (start: number, peak: number, end: number) => {
        if (progress < start) return 0;
        if (progress < peak) return (progress - start) / (peak - start);
        if (progress < end) return 1 - (progress - peak) / (end - peak);
        return 0;
    };

    const getY = (start: number, end: number) => {
        if (progress < start) return 50;
        if (progress > end) return -50;
        return 50 - ((progress - start) / (end - start)) * 100;
    };

    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center px-4">

            {/* Section 1: Intro */}
            <div
                style={{
                    opacity: getOpacity(0, 0.1, 0.2),
                    transform: `translateY(${getY(0, 0.2)}px)`
                }}
                className="absolute transition-opacity duration-300"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">
                    Modern Tech Stack
                </h1>
                <p className="text-xl md:text-2xl text-blue-400 font-light tracking-wide">
                    Powering next-generation AI applications
                </p>
            </div>

            {/* Section 2: Languages */}
            <div
                style={{
                    opacity: getOpacity(0.2, 0.3, 0.45),
                    transform: `translateY(${getY(0.2, 0.45)}px)`
                }}
                className="absolute left-10 md:left-32 text-left transition-opacity duration-300"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                    Python & JavaScript
                </h2>
                <p className="text-lg text-white/60">Industry-standard languages</p>
            </div>

            {/* Section 3: AI */}
            <div
                style={{
                    opacity: getOpacity(0.45, 0.55, 0.65),
                    transform: `translateY(${getY(0.45, 0.65)}px)`
                }}
                className="absolute right-10 md:right-32 text-right transition-opacity duration-300"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2 glow-text">
                    Powered by AI
                </h2>
                <p className="text-lg text-purple-200/60">Llama models for intelligent processing</p>
            </div>

            {/* Section 4: Cloud */}
            <div
                style={{
                    opacity: getOpacity(0.7, 0.8, 0.9),
                    transform: `translateY(${getY(0.7, 0.9)}px)`
                }}
                className="absolute transition-opacity duration-300"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-orange-400 mb-2">
                    Scalable Cloud
                </h2>
                <p className="text-lg text-white/60">AWS & Node.js ecosystem</p>
            </div>

            {/* Section 5: CTA */}
            <div
                style={{
                    opacity: getOpacity(0.85, 0.95, 1.1),
                    transform: `translateY(${Math.max(0, getY(0.9, 1))}px)`
                }}
                className="absolute pointer-events-auto transition-opacity duration-300"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
                    Build The Future
                </h2>
                <button className="px-8 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-blue-50 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                    Explore Stack &rarr;
                </button>
            </div>
        </div>
    );
}
