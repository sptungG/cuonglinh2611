import React, { useId } from "react";
import { m } from "framer-motion";
import NImage from "../next/NextImage";
import Fonts from "@/styles/fonts";
import { cn } from "@/common/utils";
import { MovingBorder } from "../button/MovingBorder";
import { useMediaQuery } from "react-responsive";

const CardsHeader01 = () => {
  const uid = useId();
  const mediaAbove640 = useMediaQuery({ minWidth: 640 });

  const first = {
    initial: {
      x: 40,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -40,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <m.div
      key={uid + mediaAbove640}
      initial={"initial"}
      animate={"animate"}
      whileHover={"hover"}
      className="flex min-h-[300px] space-x-4 max-sm:flex-col"
    >
      <m.div
        variants={mediaAbove640 ? first : {}}
        className="group flex w-[300px] cursor-pointer flex-col items-center justify-center rounded-2xl border-amber-500/50 bg-white p-4 sm:border lg:w-[340px]"
      >
        <NImage
          src="/images/services2-3.png"
          alt="avatar"
          height={200}
          width={200}
          className="rounded-full transition-all group-hover:-scale-x-100"
        />
        <p className="mt-2 text-amber-600 underline">17:00</p>
        <p className={cn(Fonts.DancingScript.className, "mt-2 text-center text-3xl shrink-0 font-[700] text-amber-900")}>Đón khách</p>
        <p className="mt-2 text-amber-800">Bắt đầu đón khách</p>
      </m.div>

      <m.div className="group relative z-20 flex w-[300px] cursor-pointer flex-col items-center justify-center overflow-hidden bg-amber-500/50 py-[2px] sm:rounded-[18px] sm:p-[3px] lg:w-[366px]">
        <div className="relative z-10 flex size-full flex-col items-center justify-center bg-white sm:rounded-[calc(16px*0.96)]">
          <NImage
            src="/images/services2-1.png"
            alt="avatar"
            height={200}
            width={200}
            className="rounded-full transition-all group-hover:-scale-x-100"
          />
          <p className="mt-2 text-amber-600 underline">18:00</p>
          <p className={cn(Fonts.DancingScript.className, "mt-2 text-center text-3xl shrink-0 font-[700] text-amber-900")}>Làm lễ</p>
          <p className="mt-2 text-center text-amber-800 max-sm:mb-4">Tiến hành rước cô dâu vào sân khấu và làm lễ</p>
        </div>

        <div className="absolute inset-0" style={{ borderRadius: `calc(16px * 0.96)` }}>
          <MovingBorder duration={5000} rx="50%" ry="30%">
            <div className="size-40 bg-[radial-gradient(var(--amber-100)_40%,transparent_60%)]" />
          </MovingBorder>
        </div>
      </m.div>

      <m.div
        variants={mediaAbove640 ? second : {}}
        className="group flex w-[300px] cursor-pointer flex-col items-center justify-center rounded-2xl border-amber-500/50 bg-white p-4 sm:border lg:w-[340px]"
      >
        <NImage
          src="/images/services2-2.png"
          alt="avatar"
          height={200}
          width={200}
          className="rounded-full transition-all group-hover:-scale-x-100"
        />
        <p className="mt-2 text-amber-600 underline">19:00</p>
        <p className={cn(Fonts.DancingScript.className, "mt-2 text-center text-3xl shrink-0 font-[700] text-amber-900")}>Khai tiệc</p>
        <p className="mt-2 text-amber-800">Bắt đầu khai tiệc</p>
      </m.div>
    </m.div>
  );
};

export default CardsHeader01;
