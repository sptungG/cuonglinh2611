import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import React from "react";
import FadeWrapper from "../animation/Fade";
import NImage from "../next/NextImage";
import { Sheet } from "@/common/sheets";
import { HeartIcon } from "lucide-react";
import FlickeringGrid from "../background/FlickeringGrid";
import { useMediaQuery } from "react-responsive";
import { LeafCornorSvg } from "../icons/LeafCornorSvg";

type TSection03Props = { userData: Sheet };

const Section03 = ({ userData }: TSection03Props) => {
  const mediaAbove640 = useMediaQuery({ minWidth: 640 });

  return (
    <section
      id="invitation"
      className={cn(
        Fonts.Questrial.className,
        "text-lg min-h-dvh sm:max-h-[1000px] relative flex flex-col items-center justify-center overflow-hidden"
      )}
    >
      <div className="relative flex flex-col items-center justify-center border-b-2 border-amber-500/20 p-4 pb-0 sm:rounded-2xl sm:border-2 sm:p-10 sm:pb-12">
        <div className="mb-10 flex items-center max-sm:flex-col sm:mb-5">
          <FadeWrapper
            direction="left"
            className="flex flex-col max-sm:mb-4 max-sm:text-center"
          >
            <div className="text-center text-xl uppercase sm:mb-4">
              Nhà Trai
            </div>
            <div className="">Ông: Nguyễn Văn Linh</div>
            <div className="">Bà: Nguyễn Thị Hoàn</div>
          </FadeWrapper>

          <NImage
            src="/images/flower.png"
            alt="2611"
            height={0}
            width={366}
            className="max-sm:-order-1 sm:mx-10"
          />

          <FadeWrapper
            direction="right"
            className="flex flex-col max-sm:text-center"
          >
            <div className="text-center text-xl uppercase sm:mb-4">Nhà Gái</div>
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
            "[--bg-size:300%] animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
          )}
        >
          {userData?.fullName || "Bạn cùng gia đình"}
        </FadeWrapper>
        <div className="text-base italic">{`(Tới dự Lễ Thành Hôn của gia đình chúng tôi)`}</div>

        <div className="my-10 flex items-center max-sm:flex-col">
          <FadeWrapper
            direction="left"
            className={cn(Fonts.DancingScript.className, "font-[600] text-4xl")}
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
            className={cn(Fonts.DancingScript.className, "font-[600] text-4xl")}
          >
            {userData?.partyName === "NhaGai"
              ? "Nguyễn Văn Cường"
              : "Nguyễn Yến Linh"}
          </FadeWrapper>
        </div>

        {userData?.partyName === "NhaGai" ? (
          <>
            <FadeWrapper className="text-neutral-500">
              Tổ chức vào lúc 17 giờ 00
            </FadeWrapper>
            <FadeWrapper className="">
              Thứ Bảy, ngày 23 - tháng 11 năm 2024
            </FadeWrapper>
            <FadeWrapper className="mb-6 text-base italic">{`(Tức ngày 23 tháng 10 năm 2024 Giáp Thìn)`}</FadeWrapper>

            <FadeWrapper className="text-xl">
              Tại gia trung tâm tiệc cưới:
            </FadeWrapper>
            <FadeWrapper className="mb-10">
              Trống Đồng Place Lãng Yên, Hà Nội
            </FadeWrapper>
          </>
        ) : (
          <>
            <FadeWrapper className="text-neutral-500">
              {userData?.invitedTime
                ? `Tổ chức vào lúc ${userData?.invitedTime.split(":")[0]} giờ ${userData?.invitedTime.split(":")[1]}`
                : "Tổ chức vào lúc 09 giờ 00"}
            </FadeWrapper>
            {userData?.partyDay === "25/11/2024" ? (
              <>
                <FadeWrapper className="">
                  Thứ Hai, ngày 25 tháng 11 năm 2024
                </FadeWrapper>
                <FadeWrapper className="mb-6 text-base italic">{`(Tức ngày 25 tháng 10 năm 2024 Giáp Thìn)`}</FadeWrapper>
              </>
            ) : (
              <>
                <FadeWrapper className="">
                  Thứ Ba, ngày 26 tháng 11 năm 2024
                </FadeWrapper>
                <FadeWrapper className="mb-6 text-base italic">{`(Tức ngày 26 tháng 10 năm 2024 Giáp Thìn)`}</FadeWrapper>
              </>
            )}

            <FadeWrapper className="text-xl">
              Tại gia đình Nhà Trai:
            </FadeWrapper>
            <FadeWrapper className="mb-10">
              Đội 5, Phú Thịnh, Kim Động, Hưng Yên
            </FadeWrapper>
          </>
        )}

        <FadeWrapper
          className={cn(Fonts.DancingScript.className, "text-center text-2xl")}
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

        <NImage
          src="/images/save-the-date.png"
          alt="2611"
          height={0}
          width={330}
          className="bottom-0 left-0 z-10 object-cover sm:absolute sm:-translate-x-1/2"
        />

        {mediaAbove640 && (
          <NImage
            src="/images/icon-flower-5.png"
            alt="2611"
            height={0}
            width={250}
            className="absolute bottom-2 right-2 z-10 -scale-x-100 object-cover opacity-80"
          />
        )}

        {mediaAbove640 && <LeafCornorSvg className=" absolute left-0 top-0 z-10 size-[250px] translate-x-[-62px] translate-y-[-55px]" />}
      </div>

      {mediaAbove640 && (
        <div className="absolute left-0 top-1/2 -z-20 w-dvw -translate-y-1/2 ">
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
    </section>
  );
};

export default Section03;
