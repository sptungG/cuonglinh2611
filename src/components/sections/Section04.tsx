import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import { useMediaQuery } from "react-responsive";
import FadeWrapper from "../animation/Fade";
import NImage from "../next/NextImage";
import { MotionEffect } from "../animation/MotionEffect";

const Section04 = (props: { setModalImage?: (src?: string) => void }) => {
  const mediaAbove640 = useMediaQuery({ minWidth: 640 });

  return (
    <section className="relative flex min-h-dvh items-center justify-center max-sm:flex-col max-sm:pb-40 max-sm:pt-20 sm:max-h-[1500px]">
      <div className="flex flex-col items-center justify-center max-sm:mt-20">
        <MotionEffect
          slide={{ direction: "left" }}
          inView
          inViewOnce={false}
          className={cn(Fonts.DancingScript.className, "text-xl text-amber-400 font-[700] uppercase mb-1")}
        >
          Cô dâu
        </MotionEffect>
        <MotionEffect slide={{ direction: "left" }} inView inViewOnce={false} className={cn(Fonts.DancingScript.className, "text-5xl mb-3")}>
          Nguyễn Yến Linh
        </MotionEffect>
        <MotionEffect
          slide={{ direction: "left" }}
          inView
          inViewOnce={false}
          className="relative flex size-[300px] items-center justify-center max-sm:mt-4 sm:size-[260px]"
        >
          <NImage
            src="https://res.cloudinary.com/dcos6mpjy/image/upload/v1730487153/cuonglinh2611/albums/dx96rtpoodv1ly7c8xcj.jpg"
            height={0}
            width={172}
            loading="eager"
            className="max-h-full cursor-pointer rounded-xl object-cover max-sm:w-full sm:max-h-[172px] sm:rounded-full"
            canPreview
          />
          <div className="absolute -z-10 max-sm:bottom-[-60px] max-sm:right-[-40px] sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
            <NImage
              src="/images/cricle2.png"
              alt="2611"
              height={260}
              width={260}
              className="size-[300px] max-w-screen-sm animate-[zoomTwo_5s_linear_infinite] object-cover sm:size-[260px]"
            />
          </div>
        </MotionEffect>
      </div>

      {mediaAbove640 && (
        <MotionEffect
          slide={{ direction: "left" }}
          inView
          inViewOnce={false}
          className="relative mx-16 hidden h-full max-h-[60%] min-w-[400px] max-w-xs shrink-0 flex-col items-center justify-center rounded-full border-2 border-amber-900/50 p-2 max-sm:-order-1 sm:flex"
        >
          <NImage
            src="https://res.cloudinary.com/dcos6mpjy/image/upload/v1731813522/cuonglinh2611/albums/thyvlfoqcsvx8r2cuot4.png"
            alt="2611"
            height={0}
            width={300}
            className="size-full cursor-pointer rounded-full object-cover sm:min-h-[600px]"
            canPreview
          />
          <NImage
            src="/images/icon-flowers-3.png"
            alt="2611"
            height={0}
            width={100}
            className="absolute left-[-10px] top-0 animate-[bounceY_10s_linear_infinite]"
          />
          <NImage
            src="/images/icon-flowers-4.png"
            alt="2611"
            height={0}
            width={120}
            className="absolute bottom-0 right-[-40px] animate-[bounceY_10s_linear_infinite]"
          />
        </MotionEffect>
      )}

      <div className="flex flex-col items-center justify-center max-sm:-order-1">
        <MotionEffect
          slide={{ direction: "right" }}
          inView
          inViewOnce={false}
          className="relative mb-3 flex size-[300px] items-center justify-center max-sm:order-3 max-sm:mt-6 sm:size-[260px]"
        >
          <NImage
            src="https://res.cloudinary.com/dcos6mpjy/image/upload/v1731813678/cuonglinh2611/albums/rpefcobjdrhmegp1amou.png"
            height={0}
            width={172}
            loading="eager"
            className="max-h-full cursor-pointer rounded-xl object-cover max-sm:w-full sm:max-h-[172px] sm:rounded-full"
            canPreview
          />
          <div className="absolute -z-10 max-sm:bottom-[-60px] max-sm:left-[-40px] sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
            <NImage
              src="/images/cricle1.png"
              alt="2611"
              height={260}
              width={260}
              className="size-[300px] max-w-screen-sm animate-[zoomTwo_5s_linear_infinite] object-cover sm:size-[260px]"
            />
          </div>
        </MotionEffect>
        <MotionEffect
          slide={{ direction: "right" }}
          inView
          inViewOnce={false}
          className={cn(Fonts.DancingScript.className, "text-xl text-amber-400 font-[700] uppercase mb-1")}
        >
          Chú rể
        </MotionEffect>
        <MotionEffect slide={{ direction: "right" }} inView inViewOnce={false} className={cn(Fonts.DancingScript.className, "text-5xl ")}>
          Nguyễn Văn Cường
        </MotionEffect>
      </div>

      <NImage
        src="/images/icon-flowers-1.png"
        alt="2611"
        height={400}
        width={200}
        className="absolute -bottom-16 left-0 -z-10 animate-[bounceY_10s_linear_infinite] opacity-50 max-sm:w-[160px] sm:bottom-1/4"
      />
      <NImage
        src="/images/icon-flowers-2.png"
        alt="2611"
        height={320}
        width={160}
        className="absolute -top-16 right-0 -z-10 animate-[bounceY_10s_linear_infinite] opacity-50 max-sm:w-[140px]"
      />
    </section>
  );
};

export default Section04;
