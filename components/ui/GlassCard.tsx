import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6",
                hoverEffect && "transition-transform duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
