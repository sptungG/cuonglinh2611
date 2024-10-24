import React from "react";
import FadeWrapper from "../animation/Fade";
import Fonts from "@/styles/fonts";
import { cn } from "@/common/utils";
import TimelineDating from "../timeline/TimelineDating";
import NImage from "../next/NextImage";

type TSection06Props = { children?: React.ReactNode };

const Section06 = ({ children }: TSection06Props) => {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center">
      <FadeWrapper direction="right" className="text-center text-xl uppercase text-amber-500 max-sm:w-[90dvw] max-sm:overflow-hidden">
        Chuyện chúng mình
      </FadeWrapper>
      <FadeWrapper
        direction="right"
        className={cn(Fonts.DancingScript.className, "text-5xl sm:text-6xl text-center font-[600] mb-4 max-sm:w-[90dvw] max-sm:overflow-hidden")}
      >
        Đã bắt đầu như thế nào
      </FadeWrapper>

      <TimelineDating />

      <NImage
        src="/images/icon-flowers-1.png"
        alt="2611"
        height={400}
        width={200}
        className="absolute -bottom-16 left-0 animate-[bounceY_10s_linear_infinite] opacity-50 max-sm:w-[160px]"
      />
      <NImage
        src="/images/icon-flowers-2.png"
        alt="2611"
        height={320}
        width={160}
        className="absolute right-0 top-0 animate-[bounceY_10s_linear_infinite] opacity-50 max-sm:w-[140px]"
      />
    </section>
  );
};

export default Section06;
