import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FRAME_COUNT = 99;

export function getFrameUrl(index: number): string {
  const frameIndex = Math.min(FRAME_COUNT, Math.max(1, index)); // Clamp between 1 and 99
  // The filename format is "ezgif-frame-001.jpg"
  return `/images/ezgif-frame-${frameIndex.toString().padStart(3, "0")}.jpg`;
}
