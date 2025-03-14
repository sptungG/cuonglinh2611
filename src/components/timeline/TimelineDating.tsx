import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import { m, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useId, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import FadeWrapper from "../animation/Fade";
import NImage from "../next/NextImage";

const dataText = [
  {
    time1: "24",
    time2: "12/2016",
    title: "Ngày bắt đầu",
    desc: "Vào một đêm Giáng sinh lung linh, sau hai năm quen biết, ánh mắt ta tìm thấy nhau giữa muôn ngàn ánh đèn, từ đó một câu chuyện tình yêu bắt đầu.",
    image:
      "https://res.cloudinary.com/dcos6mpjy/image/upload/v1731148882/cuonglinh2611/images/anuvnkp2eo3xv2bxcthm.jpg",
  },
  {
    time1: "08",
    time2: "03/2024",
    title: "Anh ngỏ lời",
    desc: "Trong khoảnh khắc dịu dàng của tháng 3, anh bất ngờ quỳ gối, ánh mắt trao trọn tình yêu, ngỏ lời gắn kết đời ta mãi mãi.",
    image:
      "https://res.cloudinary.com/dcos6mpjy/image/upload/v1730426454/cauhon_k0c8lw.jpg",
  },
  {
    time1: "26",
    time2: "11/2024",
    title: "Chính thức ở bên nhau",
    desc: "Ngày 26 tháng 11 năm 2024, sau gần một thập kỷ cùng trải qua những thăng trầm, chúng mình chính thức trở về chung một mái nhà, viết tiếp câu chuyện tình yêu đẹp như mơ.",
    image:
      "https://res.cloudinary.com/dcos6mpjy/image/upload/v1730487159/cuonglinh2611/albums/jurh3dhvnzzsdp36rplq.jpg",
  },
];

const TimelineDating = (props: {
  className?: string;
  setModalImage?: (src?: string) => void;
}) => {
  const uid = useId();
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const mediaAbove640 = useMediaQuery({ minWidth: 640 });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const [scrollYProgressValue, setScrollYProgressValue] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const activeTitleStyle: React.CSSProperties = {
    textDecoration: "underline",
    color: "#fbbf24 ",
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYProgressValue(latest);
  });

  const formatActiveTitleStyle = (progress: number, index: number) => {
    const progresses = [0.1, 0.5, 0.7];
    if (progress > progresses[index]) {
      return activeTitleStyle;
    }
    return {};
  };

  return (
    <>
      <div
        className={cn("md:px-10 w-full", props?.className)}
        ref={containerRef}
      >
        <div
          ref={ref}
          className="relative mx-auto max-w-7xl pb-20 max-sm:w-dvw"
        >
          {dataText.map((item, index) => (
            <div
              key={uid + index}
              className={cn(
                "flex max-sm:flex-col justify-center pt-20 sm:pt-40 sm:items-center group",
                index % 2 !== 0 && "sm:flex-row-reverse"
              )}
            >
              <FadeWrapper
                direction={index % 2 === 0 ? "left" : "right"}
                className={cn(
                  "flex flex-col sm:max-w-md max-sm:px-5 max-sm:mb-10 sm:flex-1 max-sm:w-[90dvw] max-sm:overflow-hidden",
                  index % 2 === 0 ? "sm:pr-5" : "sm:pl-5"
                )}
              >
                <h3
                  className={cn(
                    Fonts.DancingScript.className,
                    "text-4xl sm:text-5xl font-[600] mb-4 transition-all "
                  )}
                  style={formatActiveTitleStyle(scrollYProgressValue, index)}
                >
                  {item.title}
                </h3>
                <p className="text-base">{item.desc}</p>
              </FadeWrapper>

              <div className="z-10 flex shrink-0 items-baseline border-amber-600 text-amber-700 max-sm:-order-1 max-sm:mb-6 max-sm:px-5 sm:mx-10 sm:size-40 sm:flex-col sm:items-center sm:justify-center sm:rounded-full sm:border sm:bg-white">
                <div className={cn(Fonts.DancingScript.className, "text-7xl")}>
                  {item.time1}
                </div>
                <div className="text-lg sm:text-base">{item.time2}</div>
              </div>

              <FadeWrapper
                direction={index % 2 === 0 ? "right" : "left"}
                className="flex max-sm:ml-5 max-sm:w-[90dvw] max-sm:overflow-hidden sm:max-w-md sm:flex-1"
              >
                <div className="relative mx-auto flex h-[360px] w-[300px] shrink-0 flex-col items-center justify-center rounded-xl border-2 border-amber-900/50 p-2 sm:mx-16 sm:w-[250px] sm:rounded-full">
                  <NImage
                    src={item.image}
                    alt="2611"
                    height={0}
                    width={300}
                    className="size-full min-h-full cursor-pointer rounded-lg object-cover sm:rounded-full"
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
                    width={110}
                    className="absolute bottom-[-30px] right-[-40px] animate-[bounceY_10s_linear_infinite]"
                  />
                </div>
              </FadeWrapper>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute left-2 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 sm:left-1/2 sm:-translate-x-1/2 "
          >
            <m.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-amber-600 from-0% via-amber-400 via-10% to-transparent"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineDating;
