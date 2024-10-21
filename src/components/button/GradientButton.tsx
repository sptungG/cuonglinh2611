import { cn } from "@/common/utils";
import Link from "next/link";
import { ReactNode } from "react";

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { icon?: ReactNode };

export function GradientButton({ children, icon, className, ...props }: TButtonProps) {
  return (
    <button className={cn("relative flex items-center justify-center px-2 py-1 [--bg-size:300%]", className)} {...props}>
      <div
        className={
          "animate-gradient absolute inset-0 block size-full bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[2px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
        }
      />
      {icon}
      <span
        className={cn(
          `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
        )}
      >
        {children}
      </span>
    </button>
  );
}

type TLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { icon?: ReactNode; href: string };

export function GradientButtonLink({ href, children, icon, className, ...props }: TLinkProps) {
  return (
    <Link href={href} className={cn("relative flex items-center justify-center px-2 py-1 [--bg-size:300%]", className)} {...props}>
      <div
        className={
          "animate-gradient absolute inset-0 block size-full bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[2px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
        }
      />
      {icon}
      <span
        className={cn(
          `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
        )}
      >
        {children}
      </span>
    </Link>
  );
}
