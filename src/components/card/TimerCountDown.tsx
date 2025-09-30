import React, { useMemo } from "react";
import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";
import dynamic from "next/dynamic";
import { MotionEffect } from "../animation/MotionEffect";

const FadeWrapper = dynamic(() => import("../animation/Fade"), { ssr: false });

type TTimerCountDownProps = { targetDate: Date };

const formatNumber = (num: number) => ("0" + num).slice(-2);

const TimerCountDown = ({ targetDate }: TTimerCountDownProps) => {
  const durationTimes = useCountdownTimer({ targetDate });
  const memoDurationTimes = useMemo(() => durationTimes, [durationTimes]);
  return (
    <MotionEffect
      slide={{ direction: "left" }}
      inView
      inViewOnce={false}
      className="mt-4 flex w-full max-w-[700px] items-center justify-between divide-x divide-neutral-200 rounded-full border px-4 py-5 sm:mt-8 sm:px-4"
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className={cn(Fonts.DancingScript.className, "text-3xl mb-2 font-[600]")}>{formatNumber(memoDurationTimes.days)}</div>
        <div className={cn(Fonts.DancingScript.className, "")}>Ngày</div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className={cn(Fonts.DancingScript.className, "text-3xl mb-2 font-[600]")}>{formatNumber(memoDurationTimes.hours)}</div>
        <div className={cn(Fonts.DancingScript.className, "")}>Giờ</div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className={cn(Fonts.DancingScript.className, "text-3xl mb-2 font-[600]")}>{formatNumber(memoDurationTimes.minutes)}</div>
        <div className={cn(Fonts.DancingScript.className, "")}>Phút</div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className={cn(Fonts.DancingScript.className, "text-3xl mb-2 font-[600]")}>{formatNumber(memoDurationTimes.seconds)}</div>
        <div className={cn(Fonts.DancingScript.className, "")}>Giây</div>
      </div>
    </MotionEffect>
  );
};

export default TimerCountDown;
