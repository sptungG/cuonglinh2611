import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import { useMediaQuery } from "react-responsive";
import FadeWrapper from "../animation/Fade";
import NImage from "../next/NextImage";

const Section04 = (props: { setModalImage?: (src?: string) => void }) => {
  const mediaAbove640 = useMediaQuery({ minWidth: 640 });

  return (
    <section className="relative flex min-h-dvh items-center justify-center max-sm:flex-col max-sm:py-40 sm:max-h-[1500px]">
      <div className="flex flex-col items-center justify-center max-sm:mt-20">
        <FadeWrapper direction="left" className={cn(Fonts.DancingScript.className, "text-xl text-amber-400 font-[700] uppercase mb-1")}>
          Cô dâu
        </FadeWrapper>
        <FadeWrapper direction="left" className={cn(Fonts.DancingScript.className, "text-5xl mb-3")}>
          Nguyễn Yến Linh
        </FadeWrapper>
        <FadeWrapper direction="left" className="relative flex size-[300px] items-center justify-center max-sm:mt-4 sm:size-[260px]">
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
              src="/images/couple-frame-2.png"
              alt="2611"
              height={260}
              width={260}
              className="-ml-1 -mt-1 size-[300px] max-w-screen-sm animate-[zoomTwo_5s_linear_infinite] object-cover sm:size-[260px]"
            />
          </div>
        </FadeWrapper>
      </div>

      {mediaAbove640 && (
        <FadeWrapper className="relative mx-16 hidden h-full max-h-[60%] min-w-[400px] max-w-xs shrink-0 flex-col items-center justify-center rounded-full border-2 border-amber-900/50 p-2 max-sm:-order-1 sm:flex">
          <NImage
            src="https://res.cloudinary.com/dcos6mpjy/image/upload/v1730487149/cuonglinh2611/albums/pr8omw0riiihnokxibb7.jpg"
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
        </FadeWrapper>
      )}

      <div className="flex flex-col items-center justify-center max-sm:-order-1">
        <FadeWrapper
          direction="right"
          className="relative mb-3 flex size-[300px] items-center justify-center max-sm:order-3 max-sm:mt-6 sm:size-[260px]"
        >
          <NImage
            src="https://res.cloudinary.com/dcos6mpjy/image/upload/v1730487170/cuonglinh2611/albums/cv5javq9t38zwfzaheuy.jpg"
            height={0}
            width={172}
            loading="eager"
            className="max-h-full cursor-pointer rounded-xl object-cover max-sm:w-full sm:max-h-[172px] sm:rounded-full"
            canPreview
          />
          <div className="absolute -z-10 max-sm:bottom-[-60px] max-sm:left-[-40px] sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
            <NImage
              src="/images/couple-frame-2.png"
              alt="2611"
              height={260}
              width={260}
              className="-ml-1 -mt-1 size-[300px] max-w-screen-sm animate-[zoomTwo_5s_linear_infinite] object-cover sm:size-[260px]"
            />
          </div>
        </FadeWrapper>
        <FadeWrapper direction="right" className={cn(Fonts.DancingScript.className, "text-xl text-amber-400 font-[700] uppercase mb-1")}>
          Chú rể
        </FadeWrapper>
        <FadeWrapper direction="right" className={cn(Fonts.DancingScript.className, "text-5xl ")}>
          Nguyễn Văn Cường
        </FadeWrapper>
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
