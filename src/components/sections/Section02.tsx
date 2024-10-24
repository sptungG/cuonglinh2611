import React from "react";
import FadeWrapper from "../animation/Fade";
import CardsHeader01 from "../card/CardsHeader";
import { Sheet } from "@/common/sheets";

export type TSection02Props = { userData: Sheet };

const Section02 = ({ userData }: TSection02Props) => {
  return (
    <section className="relative mb-20 flex max-w-[100dvw] items-center justify-center overflow-hidden">
      <FadeWrapper className="sm:px-10 sm:py-5">
        <CardsHeader01 userData={userData} />
      </FadeWrapper>
    </section>
  );
};

export default Section02;
