import React from "react";
import FadeWrapper from "../animation/Fade";
import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import TimerCountDown from "../card/TimerCountDown";
import NImage from "../next/NextImage";

type TSection05Props = { children?: React.ReactNode };

const Section05 = ({ children }: TSection05Props) => {
  return (
    <section className="relative flex min-h-[80dvh] max-w-[100dvw] flex-col items-center justify-center overflow-x-hidden px-4 pb-10 sm:max-h-[800px] sm:px-6">
      <FadeWrapper direction="left" className="text-center text-xl uppercase text-amber-500">
        Cho đến ngày
      </FadeWrapper>
      <FadeWrapper direction="left" className={cn(Fonts.DancingScript.className, "text-5xl sm:text-6xl text-center font-[600] mb-4")}>
        Về chung một nhà
      </FadeWrapper>
      <FadeWrapper direction="left" className="text-center text-lg text-neutral-500">
        Cùng chúng mình đếm ngược nhé!
      </FadeWrapper>

      <TimerCountDown targetDate={new Date("2024-11-26T00:00:01")} />

      <div className="absolute left-0 top-1/2 -z-10 w-full -translate-y-1/2 -scale-x-100">
        <NImage
          src="/images/pattern-4.png"
          alt="2611"
          height={0}
          width={366}
          className="-z-10 size-full animate-[bounceY_10s_linear_infinite] object-cover"
        />
      </div>
    </section>
  );
};

export default Section05;
