import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import React, { useRef, useState } from "react";
import FadeWrapper from "../animation/Fade";
import NImage from "../next/NextImage";
import { Sheet } from "@/common/sheets";
import { HeartIcon } from "lucide-react";
import FlickeringGrid from "../background/FlickeringGrid";
import { useMediaQuery } from "react-responsive";
import { LeafCornorSvg } from "../icons/LeafCornorSvg";
import { useMotionValueEvent, useScroll } from "framer-motion";
import BgEnvelope from "../background/BgEnvelope";

type TSection03Props = { userData: Sheet };

// Mờ Tùng

const Section03 = ({ userData }: TSection03Props) => {
  const mediaAbove640 = useMediaQuery({ minWidth: 640 });
  const [scrollYProgressValue, setScrollYProgressValue] = useState(0);

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 50%", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYProgressValue(latest);
  });

  return (
    <>
      <section
        id="invitation"
        ref={ref}
        className={cn(
          Fonts.Questrial.className,
          "text-lg min-h-dvh relative flex flex-col items-center justify-center"
        )}
      >
        <BgEnvelope
          className={
            scrollYProgressValue > 0.3 ? "open " : "close rounded-b-lg"
          }
        >
          <div
            className={cn(
              "relative flex sm:w-[1000px] flex-col items-center justify-center border-b-2 border-amber-500/20 px-4 py-12 sm:rounded-t-2xl sm:p-10 sm:pb-12",
              scrollYProgressValue > 0.99 ? "border-b-2" : "sm:border-2"
            )}
          >
            <div className="mb-10 flex items-center max-sm:flex-col sm:mb-5">
              <FadeWrapper
                direction="left"
                className="flex w-[220px] flex-col max-sm:mb-4 max-sm:text-center"
              >
                <div className="text-center text-xl uppercase sm:mb-4">
                  Nhà Trai
                </div>
                <div className="">Ông: Nguyễn Văn Linh</div>
                <div className="">Bà: Nguyễn Thị Hoàn</div>
              </FadeWrapper>

              <NImage
                src="/images/asset2.png"
                alt="2611"
                height={0}
                width={306}
                className="max-sm:-order-1 max-sm:mb-8 sm:mx-10"
              />

              <FadeWrapper
                direction="right"
                className="flex w-[220px] flex-col max-sm:text-center"
              >
                <div className="text-center text-xl uppercase sm:mb-4">
                  Nhà Gái
                </div>
                <div className="">Ông: Nguyễn Phương Dũng</div>
                <div className="">Bà: Nguyễn Thị Minh</div>
              </FadeWrapper>
            </div>

            <FadeWrapper className="mb-2 text-lg font-[600]">
              TRÂN TRỌNG KÍNH MỜI
            </FadeWrapper>

            <FadeWrapper
              className={cn(
                "text-2xl font-[700] px-1 text-center",
                "[--bg-size:300%] animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#fde68a] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
              )}
            >
              {userData?.fullName || "Bạn cùng gia đình"}
            </FadeWrapper>
            <div className="text-base italic">{`(Tới dự bữa tiệc chung vui của gia đình chúng tôi)`}</div>

            <div className="my-10 flex items-center max-sm:flex-col">
              <FadeWrapper
                direction="left"
                className={cn(
                  Fonts.DancingScript.className,
                  "font-[600] text-4xl"
                )}
              >
                {userData?.partyName === "NhaGai"
                  ? "Nguyễn Yến Linh"
                  : "Nguyễn Văn Cường"}
              </FadeWrapper>
              <HeartIcon
                className="size-10 text-red-500 max-sm:my-4 sm:mx-10"
                fill="currentColor"
              />
              <FadeWrapper
                direction="right"
                className={cn(
                  Fonts.DancingScript.className,
                  "font-[600] text-4xl"
                )}
              >
                {userData?.partyName === "NhaGai"
                  ? "Nguyễn Văn Cường"
                  : "Nguyễn Yến Linh"}
              </FadeWrapper>
            </div>

            {userData?.partyName === "NhaGai" ? (
              <>
                <FadeWrapper className="flex items-baseline text-neutral-500">
                  <span>Tổ chức vào lúc</span>
                  <span className="ml-1 font-[600]">{"17 giờ 30"}</span>
                </FadeWrapper>
                <FadeWrapper className="text-lg">
                  Thứ Bảy, ngày 23 tháng 11 năm 2024
                </FadeWrapper>
                <FadeWrapper className="mb-6 text-base italic">{`(Tức ngày 23 tháng 10 năm 2024 Giáp Thìn)`}</FadeWrapper>

                <FadeWrapper className="text-xl text-gray-600">
                  Tại gia trung tâm tiệc cưới:
                </FadeWrapper>
                <FadeWrapper className="mb-10">
                  Trống Đồng Place Lãng Yên, Hà Nội
                </FadeWrapper>
              </>
            ) : (
              <>
                <FadeWrapper className="flex items-baseline text-neutral-500">
                  <span>Tổ chức vào lúc</span>
                  <span className="ml-1 font-[600]">
                    {userData?.invitedTime
                      ? `${userData?.invitedTime.split(":")[0]} giờ ${userData?.invitedTime.split(":")[1]}`
                      : "09 giờ 00"}
                  </span>
                </FadeWrapper>
                {userData?.partyDay === "25/11/2024" ||
                userData?.partyName === "NhaTraiChieu" ? (
                  <>
                    <FadeWrapper className="text-lg">
                      Thứ Hai, ngày 25 tháng 11 năm 2024
                    </FadeWrapper>
                    <FadeWrapper className="mb-6 text-base italic">{`(Tức ngày 25 tháng 10 năm 2024 Giáp Thìn)`}</FadeWrapper>
                  </>
                ) : (
                  <>
                    <FadeWrapper className="text-lg">
                      Thứ Ba, ngày 26 tháng 11 năm 2024
                    </FadeWrapper>
                    <FadeWrapper className="mb-6 text-base italic">{`(Tức ngày 26 tháng 10 năm 2024 Giáp Thìn)`}</FadeWrapper>
                  </>
                )}

                <FadeWrapper className="text-xl text-gray-600">
                  Tại gia đình Nhà Trai:
                </FadeWrapper>
                <FadeWrapper className="mb-10">
                  Đội 5, Phú Thịnh, Kim Động, Hưng Yên
                </FadeWrapper>
              </>
            )}

            <FadeWrapper
              className={cn(
                Fonts.DancingScript.className,
                "text-center text-2xl max-sm:mb-10"
              )}
            >
              Sự hiện diện của bạn là niềm vinh hạnh của gia đình chúng tôi!
            </FadeWrapper>

            <NImage
              src="/images/overlay2.jpg"
              alt="2611"
              height={0}
              width={366}
              className="absolute left-0 top-1/2 -z-10 min-h-full min-w-full -translate-y-1/2 object-cover max-sm:opacity-60 sm:rounded-2xl"
            />

            <div className="relative z-10 flex items-center justify-center rounded-full sm:absolute sm:bottom-0 sm:left-0 sm:-translate-x-1/2">
              <NImage
                src="/images/savethedate.svg"
                alt="2611"
                height={0}
                width={250}
                className="z-10 bg-transparent object-cover"
              />
              <div className="absolute left-1/2 top-[33px] z-0 size-[220px] -translate-x-1/2 rounded-full border border-amber-500/20 bg-white"></div>
            </div>

            {mediaAbove640 && (
              <NImage
                src="/images/icon-flower-5.png"
                alt="2611"
                height={0}
                width={250}
                className="absolute bottom-2 right-2 z-10 -scale-x-100 object-cover opacity-80"
              />
            )}

            {mediaAbove640 && (
              <LeafCornorSvg className=" absolute left-0 top-0 z-10 size-[250px] translate-x-[-62px] translate-y-[-55px]" />
            )}
          </div>
        </BgEnvelope>

        {mediaAbove640 && (
          <div
            className={cn(
              "absolute left-0 top-1/2 -z-10 w-full -translate-y-1/2 overflow-hidden",
              scrollYProgressValue > 0.3 && "top-[calc(50%-40px)]"
            )}
          >
            <FlickeringGrid
              className=""
              squareSize={4}
              gridGap={6}
              color="#d97706"
              maxOpacity={0.5}
              flickerChance={0.1}
              height={300}
              width={3000}
            />
          </div>
        )}

        {/* {scrollYProgressValue > 0.99 && (
          <div className="absolute left-1/2 top-0 -z-10 size-full max-w-[1000px] -translate-x-1/2 border-x border-amber-100 bg-gradient-to-b from-white"></div>
        )} */}
      </section>
    </>
  );
};

export default Section03;
