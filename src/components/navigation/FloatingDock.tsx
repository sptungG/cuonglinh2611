/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/common/utils";
import {
  AnimatePresence,
  MotionValue,
  m,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { PauseIcon, PlayIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useId, useRef, useState } from "react";
import useSound from "use-sound";
import NImage from "../next/NextImage";
import { useMediaQuery } from "react-responsive";

interface IItem {
  title: React.ReactNode;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  className?: string;
  classNameTitle?: string;
  extra?: React.ReactNode;
}

const FloatingDock = ({
  items,
  desktopClassName,
}: {
  items: IItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: IItem[];
  className?: string;
}) => {
  const uid = useId();
  const mouseX = useMotionValue(Infinity);
  const mediaAbove640 = useMediaQuery({ minWidth: 640 });

  return (
    <m.div
      onMouseMove={(e) => mediaAbove640 && mouseX.set(e.pageX)}
      onMouseLeave={() => mediaAbove640 && mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-12 gap-3 sm:gap-4 items-end rounded-2xl bg-gray-50 px-4 sm:px-4 pb-3 shadow",
        className
      )}
    >
      {items.map((item, index) => (
        <IconContainer
          mouseX={mouseX}
          key={uid + item.title + index}
          sizeTransform={mediaAbove640 ? [60, 100, 60] : [55, 80, 55]}
          // sizeIconTransform={mediaAbove640 ? [30, 60, 30] : [30, 60, 30]}
          {...item}
        />
      ))}

      <ItemMusic
        mouseX={mouseX}
        sizeTransform={mediaAbove640 ? [60, 100, 60] : [55, 80, 55]}
        // sizeIconTransform={mediaAbove640 ? [30, 60, 30] : [30, 60, 30]}
      />
    </m.div>
  );
};

function IconContainer(
  props: IItem & {
    mouseX: MotionValue;
    sizeTransform?: [number, number, number];
    sizeIconTransform?: [number, number, number];
  }
) {
  const {
    mouseX,
    classNameTitle,
    extra,
    sizeTransform = [60, 100, 60],
    sizeIconTransform = [30, 60, 30],
    ...itemProps
  } = props;
  const uid = useId();
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], sizeTransform);
  const heightTransform = useTransform(distance, [-150, 0, 150], sizeTransform);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    sizeIconTransform
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    sizeIconTransform
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const mediaAbove640 = useMediaQuery({ minWidth: 640 });
  const [hovered, setHovered] = useState(false);

  return (
    <ItemWrapper {...itemProps}>
      <m.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => mediaAbove640 && setHovered(true)}
        onMouseLeave={() => mediaAbove640 && setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-100 text-neutral-500 hover:text-amber-500 hover:shadow"
      >
        <AnimatePresence>
          <m.div
            key={uid + hovered}
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className={cn(
              "absolute -top-10 left-1/2 w-fit -translate-x-1/2 whitespace-pre rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-base text-amber-700",
              classNameTitle
            )}
            style={{ display: hovered ? "block" : "none" }}
          >
            {itemProps.title}
          </m.div>
        </AnimatePresence>
        <m.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {itemProps.icon}
        </m.div>
        {extra}
      </m.div>
    </ItemWrapper>
  );
}

function ItemWrapper({
  children,
  ...itemProps
}: IItem & { children: React.ReactNode }) {
  if (itemProps?.href) {
    return (
      <Link
        href={itemProps.href}
        target={itemProps?.target}
        rel={itemProps?.rel}
        className={itemProps?.className}
      >
        {children}
      </Link>
    );
  }
  if (itemProps?.onClick) {
    return (
      <button onClick={itemProps?.onClick} className={itemProps?.className}>
        {children}
      </button>
    );
  }
  return <div className={itemProps?.className}>{children}</div>;
}

const formatNumber = (num: number) => ("0" + num).slice(-2);
function ItemMusic(props: {
  mouseX: MotionValue;
  sizeTransform?: [number, number, number];
  sizeIconTransform?: [number, number, number];
}) {
  const {
    mouseX,
    sizeTransform = [60, 100, 60],
    sizeIconTransform = [30, 60, 30],
  } = props;
  const [time, setTime] = useState({ min: 2, sec: 44 });
  const [currTime, setCurrTime] = useState({ min: 0, sec: 0 });

  const [seconds, setSeconds] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound("/assets/audio-01.mp3", {
    onend: () => setIsPlaying(false),
  });

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  return (
    <IconContainer
      mouseX={mouseX}
      sizeTransform={sizeTransform}
      sizeIconTransform={sizeIconTransform}
      onClick={() => {
        if (isPlaying) {
          pause();
          setIsPlaying(false);
        } else {
          play();
          setIsPlaying(true);
        }
      }}
      classNameTitle="top-[-106px]"
      title={
        <div className="flex flex-col pb-3 pt-2">
          <div className="mb-1 flex flex-col text-xs">
            <span>UNSECRET X TIM HALPERIN</span>
            <span>ONE DAY AT A TIME</span>
          </div>
          <div className="flex flex-col">
            <div className="mb-1 flex items-center justify-between">
              <span>
                {formatNumber(currTime.min)}:{formatNumber(currTime.sec)}
              </span>
              <span>
                {formatNumber(time.min)}:{formatNumber(time.sec)}
              </span>
            </div>
            <input
              id="small-range"
              type="range"
              min="0"
              max={(duration || 0) / 1000}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-current dark:bg-gray-700"
              value={seconds}
              onChange={(e) => {
                sound.seek([e.target.value]);
              }}
            />
          </div>
        </div>
      }
      className=""
      icon={
        <div className="z-10 flex size-full flex-col items-center justify-center">
          {isPlaying ? (
            <PauseIcon className="size-full fill-white/30 text-white" />
          ) : (
            <PlayIcon className="size-full fill-white/30 text-white" />
          )}
        </div>
      }
      extra={
        <NImage
          src="/assets/dianhac.png"
          height={60}
          width={60}
          style={{
            height: "100%",
            width: "100%",
            animationPlayState: isPlaying ? "running" : "paused",
          }}
          className={cn(
            "absolute left-0 top-0 z-0 rounded-full object-cover animate-[spin_5s_linear_infinite]"
          )}
        />
      }
    />
  );
}

export default FloatingDock;
