import { cn } from "@/common/utils";
import { ReactNode } from "react";

export function AnimatedGradientText({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div
        className={
          "animate-gradient absolute inset-0 block size-full bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-px [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
        }
      />

      {children}
    </div>
  );
}
