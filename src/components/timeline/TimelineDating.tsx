import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import NImage from "../next/NextImage";
import { Timeline } from "./Timeline";
import { FadeWrapper } from "../animation/Fade";

const TimelineDating = () => {
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
  return (
    <Timeline
      data={dataText.map((item, index) => ({
        className: "pt-40 items-center group",
        center: (
          <div className="z-10 mx-auto flex size-40 shrink-0 flex-col items-center justify-center rounded-full border border-amber-600 bg-white text-amber-700">
            <div className={cn(Fonts.DancingScript.className, "text-7xl")}>{item.time1}</div>
            <div className="">{item.time2}</div>
          </div>
        ),
        left: (
          <FadeWrapper
            direction={index % 2 === 0 ? "left" : "right"}
            className={cn("flex flex-1 flex-col max-w-md", index % 2 === 0 ? "pr-5" : "pl-5")}
          >
            <h3
              className={cn(
                Fonts.DancingScript.className,
                "text-5xl font-[600] mb-4 group-hover:text-amber-400 group-hover:underline transition-all "
              )}
            >
              {item.title}
            </h3>
            <p className="text-base">{item.desc}</p>
          </FadeWrapper>
        ),
        right: (
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
        ),
      }))}
    />
  );
};

export default TimelineDating;
