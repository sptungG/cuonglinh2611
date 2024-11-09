import { cn } from "@/common/utils";
import React from "react";
import { useMediaQuery } from "react-responsive";

type TBgEnvelopeProps = { children?: React.ReactNode; className?: string };

const BgEnvelope = ({ children, className }: TBgEnvelopeProps) => {
  const mediaAbove640 = useMediaQuery({ minWidth: 640 });
  if (mediaAbove640)
    return (
      <div className={cn("relative mx-auto h-full w-[99dvw] sm:w-[1000px] bg-white border-x border-amber-100", className)}>
        <div className="flap absolute z-[3] size-0 [--border-width:50dvw] sm:[--border-width:500px]"></div>
        <div className="pocket absolute z-[3] size-0 rounded-b-lg [--border-width:50dvw] sm:[--border-width:500px]"></div>
        <div className="letter">{children}</div>
      </div>
    );
  return children;
};

export default BgEnvelope;
