import React from "react";
import { motion } from "framer-motion";
import NImage from "../next/NextImage";
import Fonts from "@/styles/fonts";
import { cn } from "@/common/utils";
import { MovingBorder } from "../button/MovingBorder";

export const CardsHeader01 = () => {
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
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="bg-dot-black/[0.2] flex size-full min-h-24 flex-1 flex-row space-x-4"
    >
      <motion.div
        variants={first}
        className="flex w-[340px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-amber-500/50 bg-white p-4"
      >
        <NImage src="/images/services2-3.png" alt="avatar" height={200} width={200} className="rounded-full hover:-scale-x-100" />
        <p className="mt-2 text-amber-600 underline">17:00</p>
        <p className={cn(Fonts.DancingScript.className, "mt-2 text-center text-3xl shrink-0 font-[700] text-amber-900")}>Đón khách</p>
        <p className="mt-2 text-amber-800">Bắt đầu đón khách</p>
      </motion.div>

      <motion.div className="relative z-20 w-[366px] cursor-pointer overflow-hidden rounded-[18px] bg-amber-500/50 p-0.5">
        <div
          className="relative z-10 flex size-full flex-col items-center justify-center bg-white"
          style={{
            borderRadius: `calc(16px * 0.96)`,
          }}
        >
          <NImage src="/images/services2-1.png" alt="avatar" height={200} width={200} className="rounded-full hover:-scale-x-100" />
          <p className="mt-2 text-amber-600 underline">18:00</p>
          <p className={cn(Fonts.DancingScript.className, "mt-2 text-center text-3xl shrink-0 font-[700] text-amber-900")}>Làm lễ</p>
          <p className="mt-2 text-center text-amber-800">Tiến hành rước cô dâu vào sân khấu và làm lễ</p>
        </div>

        <div className="absolute inset-0" style={{ borderRadius: `calc(16px * 0.96)` }}>
          <MovingBorder duration={5000} rx="50%" ry="30%">
            <div className="size-40 bg-[radial-gradient(var(--amber-100)_40%,transparent_60%)]" />
          </MovingBorder>
        </div>
      </motion.div>

      <motion.div
        variants={second}
        className="flex w-[340px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-amber-500/50 bg-white p-4"
      >
        <NImage src="/images/services2-2.png" alt="avatar" height={200} width={200} className="rounded-full hover:-scale-x-100" />
        <p className="mt-2 text-amber-600 underline">19:00</p>
        <p className={cn(Fonts.DancingScript.className, "mt-2 text-center text-3xl shrink-0 font-[700] text-amber-900")}>Khai tiệc</p>
        <p className="mt-2 text-amber-800">Bắt đầu khai tiệc</p>
      </motion.div>
    </motion.div>
  );
};
