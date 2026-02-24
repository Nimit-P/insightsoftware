import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className, width = 180, height = 50 }: LogoProps) {
  return (
    <div className={cn("relative flex items-center", className)}>
      <Image
        src='/insight-logo.png'
        alt="Insightsoftware Logo"
        width={width}
        height={height}
        className="object-contain w-auto h-auto"
        priority
      />
    </div>
  )
}
