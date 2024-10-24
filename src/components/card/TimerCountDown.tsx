import React, { useMemo } from "react";
import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";
import dynamic from "next/dynamic";

const FadeWrapper = dynamic(() => import("../animation/Fade"), { ssr: false });

type TTimerCountDownProps = { targetDate: Date };

const formatNumber = (num: number) => ("0" + num).slice(-2);

const TimerCountDown = ({ targetDate }: TTimerCountDownProps) => {
  const durationTimes = useCountdownTimer({ targetDate });
  const memoDurationTimes = useMemo(() => durationTimes, [durationTimes]);
  return (
    <FadeWrapper className="mt-8 flex w-full max-w-screen-lg items-center justify-between divide-x divide-neutral-200 rounded-full border px-4 py-14 sm:px-8">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className={cn(Fonts.DancingScript.className, "text-5xl mb-2 font-[600]")}>{formatNumber(memoDurationTimes.days)}</div>
        <div className={cn(Fonts.DancingScript.className, "")}>Ngày</div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className={cn(Fonts.DancingScript.className, "text-5xl mb-2 font-[600]")}>{formatNumber(memoDurationTimes.hours)}</div>
        <div className={cn(Fonts.DancingScript.className, "")}>Giờ</div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className={cn(Fonts.DancingScript.className, "text-5xl mb-2 font-[600]")}>{formatNumber(memoDurationTimes.minutes)}</div>
        <div className={cn(Fonts.DancingScript.className, "")}>Phút</div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className={cn(Fonts.DancingScript.className, "text-5xl mb-2 font-[600]")}>{formatNumber(memoDurationTimes.seconds)}</div>
        <div className={cn(Fonts.DancingScript.className, "")}>Giây</div>
      </div>
    </FadeWrapper>
  );
};

export default TimerCountDown;
