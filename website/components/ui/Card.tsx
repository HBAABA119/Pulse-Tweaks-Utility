import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export const Card = ({ className, glow = false, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-500",
        glow && "hover:shadow-[0_0_30px_rgba(65,105,225,0.15)] hover:border-void-accent/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
