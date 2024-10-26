import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import React from "react";
import { m } from "framer-motion";
import { RainbowButton } from "../button/RainbowButton";
import { PartyPopperIcon } from "lucide-react";
import NImage from "../next/NextImage";

type TSection07Props = { onClickBtn01?: () => void };

const Section07 = ({ onClickBtn01 }: TSection07Props) => {
  return (
    <section className="relative flex min-h-fit max-w-[100dvw] flex-col items-center justify-center overflow-x-hidden py-40">
      <div className="mb-1 text-center text-base uppercase text-amber-500 max-sm:px-8">
        Hãy dành chút thời gian để nói cho chúng mình biết nhé!
      </div>
      <div
        className={cn(
          Fonts.DancingScript.className,
          "text-4xl text-center font-[600] mb-4"
        )}
      >
        Chúng mình rất mong bạn/anh/chị đến chung vui với chúng mình
      </div>

      <div className="z-50 flex items-center justify-center sm:px-8">
        <RainbowButton
          onClick={onClickBtn01}
          className="items-center text-base uppercase tracking-[2px] text-amber-900 ring-1 ring-amber-300"
        >
          <PartyPopperIcon className="mr-2 size-6" />
          <span>Bạn sẽ đến chứ?</span>
        </RainbowButton>
      </div>

      <div className="relative min-h-fit w-full overflow-hidden">
        <div className="flex items-center justify-center py-8">
          {[
            "/assets/pexels-tran-long-13114541.jpg",
            "/assets/pexels-tuan-anh-nguyen-1806361.jpg",
            "/assets/pexels-nguyen-xuan-trung-17586999.jpg",
            "/assets/pexels-san-wedding-5544662.jpg",
            "/assets/pexels-san-wedding-5544650.jpg",
          ].map((image, index) => {
            const zIndex = 10;
            return (
              <m.div
                key={"ImageRotate" + index}
                style={{ rotate: Math.random() * 20 - 10 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex,
                }}
                whileTap={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex,
                }}
                className="-mr-4 mt-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
              >
                <NImage
                  src={image}
                  alt="bali images"
                  width={300}
                  height={300}
                  style={
                    index === 2
                      ? { width: 320, height: 320 }
                      : { width: 300, height: 300 }
                  }
                  className="shrink-0 rounded-lg object-cover"
                  loading={index === 2 ? "eager" : "lazy"}
                />
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section07;
