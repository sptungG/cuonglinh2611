import { IMG_BLUR } from "@/common/constant";
import { Sheet } from "@/common/sheets";
import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import { MapPinIcon } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import FadeWrapper from "../animation/Fade";
import { RainbowButtonLink } from "../button/RainbowButton";
import NImage from "../next/NextImage";
import { MotionEffect } from "../animation/MotionEffect";

type TSection01Props = { userData: Sheet; onClickBtn01?: () => void };

const Section01 = ({ userData, onClickBtn01 }: TSection01Props) => {
  const mapParty =
    userData?.partyName === "NhaGai"
      ? "https://www.google.com/maps/search/?api=1&query=21.009745980494834,105.86708485767026"
      : "https://www.google.com/maps/search/?api=1&query=20.748664750735944,105.97718142951669";

  const mediaAbove640 = useMediaQuery({ minWidth: 640 });

  return (
    <section className="relative flex min-h-dvh max-w-[100dvw] flex-col items-center justify-center overflow-x-hidden max-sm:py-20 sm:max-h-[1500px]">
      <div className="z-10 flex items-center max-sm:flex-col sm:justify-between">
        {mediaAbove640 && (
          <MotionEffect
            slide={{ direction: "left" }}
            inView
            inViewOnce={false}
            className="relative hidden h-[476px] max-w-xs flex-col items-center justify-center rounded-full border-2 border-amber-900/50 p-2 sm:flex"
          >
            <NImage
              src="https://res.cloudinary.com/dcos6mpjy/image/upload/v1730487159/cuonglinh2611/albums/jurh3dhvnzzsdp36rplq.jpg"
              alt="2611"
              height={0}
              width={240}
              className="size-full cursor-pointer rounded-full object-cover"
              loading="eager"
              canPreview
              placeholder="blur"
              blurDataURL={IMG_BLUR}
            />
            <NImage
              src="/images/icon-flower-3.png"
              alt="2611"
              height={0}
              width={120}
              className="absolute bottom-[-10px] left-[-55px] animate-[bounceY_12s_linear_infinite]"
            />
            <NImage
              src="/images/icon-flower-4.png"
              alt="2611"
              height={0}
              width={100}
              className="absolute right-[-20px] top-0 animate-[bounceY_12s_linear_infinite]"
            />
          </MotionEffect>
        )}

        <div className="relative flex flex-col items-center justify-center px-0 text-center max-sm:-order-1 sm:px-20">
          <div className={cn(Fonts.Manrope.className, "text-base sm:text-xl font-[600] tracking-[4px] mb-4 sm:mb-8")}>CHÚNG MÌNH CƯỚI</div>
          <h2
            className={cn(
              Fonts.GreatVibes.className,
              "text-4xl sm:text-6xl font-[600] text-center whitespace-pre-line tracking-[4px]  mb-8 leading-[1.2]"
            )}
          >
            {userData?.partyName === "NhaGai" ? `Nguyễn Yến Linh \n&\n Nguyễn Văn Cường` : `Nguyễn Văn Cường \n&\n Nguyễn Yến Linh`}
          </h2>
          <div className={cn(Fonts.DancingScript.className, "text-2xl sm:text-3xl font-[600] tracking-[4px] border-y-2 border-amber-900 py-3 mb-6")}>
            {userData?.partyName === "NhaGai"
              ? `23 Tháng 11, 2024`
              : userData?.partyDay === "25/11/2024" || userData?.partyName === "NhaTraiChieu"
                ? `25 Tháng 11, 2024`
                : `26 Tháng 11, 2024`}
          </div>

          <div className="mb-2 flex items-center gap-1 text-base leading-[1.2] sm:text-lg">
            <MapPinIcon className="shrink-0" />
            <span>
              {userData?.partyName === "NhaGai"
                ? "Nhà Gái: Trống Đồng Place, 2 P. Lãng Yên, Hai Bà Trưng, Hà Nội"
                : "Nhà Trai: Đội 5, Phú Thịnh, Kim Động, Hưng Yên"}
            </span>
          </div>

          <RainbowButtonLink
            href={mapParty}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base uppercase tracking-[2px] text-amber-900 ring-1 ring-amber-300"
          >
            Xem vị trí
          </RainbowButtonLink>
        </div>

        <MotionEffect
          slide={{ direction: "left" }}
          inView
          inViewOnce={false}
          className="relative h-[480px] max-w-xs flex-col items-center justify-center rounded-xl border-2 border-amber-900/50 p-2 max-sm:mt-10 sm:flex sm:h-[476px] sm:rounded-full"
        >
          <NImage
            src="https://res.cloudinary.com/dcos6mpjy/image/upload/v1731813679/cuonglinh2611/albums/lefmebncz09yjkd1x1ma.png"
            alt="2611"
            height={0}
            width={240}
            style={{ height: "100%" }}
            className="size-full min-h-full cursor-pointer rounded-md object-cover sm:rounded-full"
            loading="eager"
            canPreview
            placeholder="blur"
            blurDataURL={IMG_BLUR}
          />
          <NImage
            src="/images/icon-flowers-3.png"
            alt="2611"
            height={0}
            width={100}
            className="absolute left-[-20px] top-0 animate-[bounceY_12s_linear_infinite]"
          />
          <NImage
            src="/images/icon-flowers-4.png"
            alt="2611"
            height={0}
            width={120}
            className="absolute bottom-[-40px] right-[-40px] animate-[bounceY_12s_linear_infinite] sm:bottom-[-10px] sm:right-[-50px]"
          />
        </MotionEffect>
      </div>

      <NImage
        src="/images/icon-flowers-1.png"
        alt="2611"
        height={420}
        width={240}
        className="absolute bottom-10 left-0 animate-[bounceY_10s_linear_infinite] opacity-50 max-sm:w-[200px]"
      />
      <NImage
        src="/images/icon-flowers-2.png"
        alt="2611"
        height={420}
        width={260}
        className="absolute right-0 top-4 animate-[bounceY_10s_linear_infinite] opacity-50 max-sm:w-[180px]"
      />
    </section>
  );
};

export default Section01;
