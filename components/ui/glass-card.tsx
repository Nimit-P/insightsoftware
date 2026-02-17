
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    gradient?: boolean;
}

export function GlassCard({ children, className, gradient = false, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass rounded-2xl p-6 transition-all duration-300",
                gradient && "bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 dark:to-transparent",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
