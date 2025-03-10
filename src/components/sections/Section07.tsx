import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import React from "react";
import { m } from "framer-motion";
import { RainbowButton } from "../button/RainbowButton";
import { PartyPopperIcon } from "lucide-react";
import NImage from "../next/NextImage";
import { useMediaQuery } from "react-responsive";
import { IMG_BLUR } from "@/common/constant";

type TSection07Props = {
  onClickBtn01?: () => void;
  setModalImage?: (src?: string) => void;
};

const Section07 = ({ onClickBtn01, setModalImage }: TSection07Props) => {
  const mediaAbove640 = useMediaQuery({ minWidth: 640 });
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

      <div className="relative flex min-h-fit w-full justify-center overflow-hidden">
        <div className="flex items-center overflow-x-auto px-10 py-8">
          {[
            // "https://res.cloudinary.com/dcos6mpjy/image/upload/v1730487167/cuonglinh2611/albums/bygc1uvdcp8sssvosah0.jpg",
            // "https://res.cloudinary.com/dcos6mpjy/image/upload/v1730487153/cuonglinh2611/albums/jm3pn3xcrm2n2qyrtwly.jpg",
            // "https://res.cloudinary.com/dcos6mpjy/image/upload/v1730487170/cuonglinh2611/albums/sjb4sqfg9jy3ik0lth9x.jpg",
            // "https://res.cloudinary.com/dcos6mpjy/image/upload/v1730487151/cuonglinh2611/albums/vgc8bcfwhfqdew2aqm93.jpg",
            // "https://res.cloudinary.com/dcos6mpjy/image/upload/v1730487156/cuonglinh2611/albums/jqhpuelqjqy7kiylyso2.jpg",
            "https://res.cloudinary.com/dcos6mpjy/image/upload/v1731814136/cuonglinh2611/albums/b1q9cevpesl8c5zvgeiw.jpg",
            "https://res.cloudinary.com/dcos6mpjy/image/upload/v1731814136/cuonglinh2611/albums/jnuctzfli23qggaycf1c.jpg",
            "https://res.cloudinary.com/dcos6mpjy/image/upload/v1730487170/cuonglinh2611/albums/sjb4sqfg9jy3ik0lth9x.jpg",
            // "https://res.cloudinary.com/dcos6mpjy/image/upload/v1731244972/cuonglinh2611/albums/yxq5em5w2bfwojkjn2va.jpg",
            "https://res.cloudinary.com/dcos6mpjy/image/upload/v1731814139/cuonglinh2611/albums/k5bviecjmidqzbny8tep.jpg",
            "https://res.cloudinary.com/dcos6mpjy/image/upload/v1731814139/cuonglinh2611/albums/hcvvubntskbjatx2w2xn.jpg",
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
                  className="shrink-0 cursor-pointer rounded-lg object-cover"
                  loading={index === 2 ? "eager" : "lazy"}
                  canPreview
                  placeholder="blur"
                  blurDataURL={IMG_BLUR}
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
