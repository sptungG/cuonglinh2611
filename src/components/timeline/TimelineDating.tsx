import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import NImage from "../next/NextImage";
import { m, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useId, useRef, useState } from "react";
import FadeWrapper from "../animation/Fade";

const dataText = [
  {
    time1: "12",
    time2: "11/2019",
    title: "Lần đầu gặp mặt",
    desc: "Chúng mình gặp nhau lần đầu tiên vào ngày 12 tháng 11 năm 2019 tại quán cafe ở quận 1, Sài Gòn.",
    image: "/assets/pexels-eric-do-3675699.jpg",
  },
  {
    time1: "12",
    time2: "02/2020",
    title: "Anh ngỏ lời",
    desc: "Anh ngỏ lời sau 3 tháng quen biết và chúng mình chính thức quen nhau",
    image: "/assets/pexels-jin-wedding-5729127.jpg",
  },
  {
    time1: "26",
    time2: "11/2024",
    title: "Chính thức ở bên nhau",
    desc: "Chúng mình chính thức ở bên nhau vào ngày 26 tháng 11 năm 2024. Sau màn cầu hôn lãng mạn của anh.",
    image: "/assets/pexels-tuan-anh-nguyen-1806361.jpg",
  },
];

const TimelineDating = () => {
  const uid = useId();
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

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

  const activeTitleStyle: React.CSSProperties = { textDecoration: "underline", color: "#fbbf24 " };

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
    <div className="w-full bg-white font-sans dark:bg-neutral-950 md:px-10" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {dataText.map((item, index) => (
          <div key={uid + index} className={cn("flex flex-row justify-center pt-40 items-center group", index % 2 !== 0 && "flex-row-reverse")}>
            <FadeWrapper
              direction={index % 2 === 0 ? "left" : "right"}
              className={cn("flex flex-1 flex-col max-w-md", index % 2 === 0 ? "pr-5" : "pl-5")}
            >
              <h3
                className={cn(Fonts.DancingScript.className, "text-5xl font-[600] mb-4 transition-all ")}
                style={formatActiveTitleStyle(scrollYProgressValue, index)}
              >
                {item.title}
              </h3>
              <p className="text-base">{item.desc}</p>
            </FadeWrapper>

            <div className="z-10 mx-auto flex size-40 shrink-0 flex-col items-center justify-center rounded-full border border-amber-600 bg-white text-amber-700">
              <div className={cn(Fonts.DancingScript.className, "text-7xl")}>{item.time1}</div>
              <div className="">{item.time2}</div>
            </div>

            <FadeWrapper direction={index % 2 === 0 ? "right" : "left"} className="flex max-w-md flex-1">
              <div className="relative mx-16 flex h-[360px] w-[250px] shrink-0 flex-col items-center justify-center rounded-full border-2 border-amber-900/50 p-2">
                <NImage src={item.image} alt="2611" height={0} width={300} className="size-full min-h-full rounded-full object-cover" />
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
          className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 "
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
  );
};

export default TimelineDating;
