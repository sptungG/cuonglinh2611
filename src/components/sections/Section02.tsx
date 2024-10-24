import React from "react";
import FadeWrapper from "../animation/Fade";
import CardsHeader01 from "../card/CardsHeader";

const Section02 = () => {
  return (
    <section className="relative mb-20 flex max-w-[100dvw] items-center justify-center overflow-hidden">
      <FadeWrapper className="sm:px-10 sm:py-5">
        <CardsHeader01 />
      </FadeWrapper>
    </section>
  );
};

export default Section02;
