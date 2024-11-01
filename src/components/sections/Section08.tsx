import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import React from "react";
import NImage from "../next/NextImage";
import { GradientButtonLink } from "../button/GradientButton";
import { ImagesIcon } from "lucide-react";

type TSection08Props = { setModalImage?: (src?: string) => void };

const Section08 = ({ setModalImage }: TSection08Props) => {
  return (
    <section className="relative flex min-h-dvh max-w-[100dvw] flex-col items-center justify-center overflow-x-hidden pb-28">
      <div className="text-center text-xl uppercase text-amber-500">Kỉ niệm cưới</div>
      <div className={cn(Fonts.DancingScript.className, "text-4xl sm:text-6xl text-center font-[600] mb-8 ")}>Những khoảnh khắc đáng nhớ</div>

      <div className="flex max-w-screen-lg items-stretch gap-4 px-4 max-sm:flex-col">
        <div className="grid flex-1 grid-cols-2 items-stretch gap-4">
          <div className="col-span-2 flex items-center">
            <div className={cn(Fonts.DancingScript.className, "text-3xl text-left font-[600] col-span-2 text-amber-600")}>Album chúng mình</div>

            <GradientButtonLink
              href="/albums"
              className="ml-auto rounded-full py-1.5 pl-3 pr-4 font-[600]"
              icon={<ImagesIcon className="mr-2 text-[#ffaa40]" />}
            >
              Xem tất cả
            </GradientButtonLink>
          </div>
          <NImage
            className="cursor-pointer rounded-xl object-cover"
            src="/assets/pexels-san-wedding-5544662.jpg"
            onClick={() => setModalImage?.("/assets/pexels-san-wedding-5544662.jpg")}
            width={300}
            height={0}
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
          <NImage
            className="cursor-pointer rounded-xl object-cover"
            src="/assets/pexels-trung-nguyen-9517421.jpg"
            onClick={() => setModalImage?.("/assets/pexels-trung-nguyen-9517421.jpg")}
            width={300}
            height={0}
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
          <NImage
            className="col-span-2 cursor-pointer rounded-xl object-cover"
            src="/assets/pexels-san-wedding-5544650.jpg"
            onClick={() => setModalImage?.("/assets/pexels-san-wedding-5544650.jpg")}
            width={300}
            loading="eager"
            height={0}
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        </div>
        <div className="grid flex-1 grid-cols-2 items-stretch gap-4">
          <NImage
            className="col-span-2 cursor-pointer rounded-xl object-cover max-sm:order-3"
            src="/assets/pexels-san-wedding-5544650.jpg"
            onClick={() => setModalImage?.("/assets/pexels-san-wedding-5544650.jpg")}
            width={300}
            loading="eager"
            height={0}
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
          <NImage
            className="cursor-pointer rounded-xl object-cover"
            src="/assets/pexels-san-wedding-5544662.jpg"
            onClick={() => setModalImage?.("/assets/pexels-san-wedding-5544662.jpg")}
            width={300}
            height={0}
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
          <NImage
            className="cursor-pointer rounded-xl object-cover"
            src="/assets/pexels-trung-nguyen-9517421.jpg"
            onClick={() => setModalImage?.("/assets/pexels-trung-nguyen-9517421.jpg")}
            width={300}
            height={0}
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
          <div className={cn(Fonts.DancingScript.className, "text-3xl text-left font-[600] col-span-2 text-neutral-500")}>
            “ Hãy để tình yêu diễn biến thật tự nhiên, đã là duyên thì cũng chẳng sợ lạc đường. ”
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-1/2 -z-10 w-full -translate-y-1/2">
        <NImage
          src="/images/pattern-5.png"
          alt="2611"
          height={0}
          width={366}
          className="-z-10 size-full animate-[bounceY_10s_linear_infinite] object-cover"
        />
      </div>
    </section>
  );
};

export default Section08;
