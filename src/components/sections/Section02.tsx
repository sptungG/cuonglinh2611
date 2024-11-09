import React from "react";
import FadeWrapper from "../animation/Fade";
import CardsHeader01 from "../card/CardsHeader";
import { Sheet } from "@/common/sheets";
import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";

export type TSection02Props = { userData: Sheet };

const Section02 = ({ userData }: TSection02Props) => {
  return (
    <section className="relative flex max-w-[100dvw] flex-col items-center justify-center overflow-hidden max-sm:py-20 sm:pb-20">
      <div className="mb-2 text-center text-xl uppercase text-amber-500">
        26/11/2024
      </div>
      <div
        className={cn(
          Fonts.DancingScript.className,
          "text-4xl sm:text-6xl text-center font-[600] mb-4 "
        )}
      >
        Lễ Thành Hôn{" "}
      </div>
      <div className="mb-4 text-center text-xl uppercase text-amber-500">
        {userData?.partyName === "NhaGai" ? "Tại nhà gái" : "Tại nhà trai"}
      </div>
      <div className="mb-2 flex items-center gap-1 text-base leading-[1.2] sm:text-lg">
        <span>
          {userData?.partyName === "NhaGai"
            ? "14/305 Phúc Tân, Hoàn Kiếm, Hà Nội"
            : "Đội 5, Phú Thịnh, Kim Động, Hưng Yên"}
        </span>
      </div>
      <FadeWrapper className="sm:px-10 sm:py-5">
        <CardsHeader01 userData={userData} />
      </FadeWrapper>
    </section>
  );
};

export default Section02;
