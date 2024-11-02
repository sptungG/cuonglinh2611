import { cn } from "@/common/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
  classNameContainer?: string;
}

export const AuroraBackground = ({ className, showRadialGradient = true, classNameContainer, ...props }: AuroraBackgroundProps) => {
  return (
    <div className={cn("relative flex flex-col h-[100vh] items-center justify-center bg-white transition-bg", className)} {...props}>
      <div className={cn("absolute inset-0 overflow-hidden", classNameContainer)}>
        <div
          //   I'm sorry but this is what peak developer performance looks like // trigger warning
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--amber-500)_10%,var(--indigo-300)_15%,var(--amber-300)_20%,var(--violet-200)_25%,var(--amber-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

            showRadialGradient && `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        ></div>
      </div>
    </div>
  );
};
