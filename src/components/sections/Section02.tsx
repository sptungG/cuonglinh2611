import React from "react";
import FadeWrapper from "../animation/Fade";
import CardsHeader01 from "../card/CardsHeader";
import { Sheet } from "@/common/sheets";
import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";

export type TSection02Props = { userData: Sheet };

const Section02 = ({ userData }: TSection02Props) => {
  return (
    <section className="relative mb-20 flex max-w-[100dvw] flex-col items-center justify-center overflow-hidden">
      <div className="text-center text-xl uppercase text-amber-500">26/11/2024</div>
      <div className={cn(Fonts.DancingScript.className, "text-4xl sm:text-6xl text-center font-[600] mb-8 ")}>Lễ Thành Hôn </div>
      <FadeWrapper className="sm:px-10 sm:py-5">
        <CardsHeader01 userData={userData} />
      </FadeWrapper>
      <div className="text-center text-xl uppercase text-amber-500">Tại nhà trai</div>
    </section>
  );
};

export default Section02;
