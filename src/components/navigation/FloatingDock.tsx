/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/common/utils";
import { AnimatePresence, MotionValue, m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PauseIcon, PlayIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useId, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import NImage from "../next/NextImage";

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

const FloatingDock = ({ items, desktopClassName }: { items: IItem[]; desktopClassName?: string; mobileClassName?: string }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </>
  );
};

const FloatingDockDesktop = ({ items, className }: { items: IItem[]; className?: string }) => {
  const uid = useId();
  const mouseX = useMotionValue(Infinity);
  const mediaAbove640 = useMediaQuery({ minWidth: 640 });

  return (
    <m.div
      onMouseMove={(e) => mediaAbove640 && mouseX.set(e.pageX)}
      onMouseLeave={() => mediaAbove640 && mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex sm:h-12 gap-1 sm:gap-4 bg-gray-100 max-sm:pl-0.5 sm:items-end rounded-full max-sm:overflow-hidden sm:rounded-2xl sm:bg-gray-50 sm:px-4 sm:pb-3 shadow max-sm:[&>*>div]:rounded-none",
        className
      )}
    >
      {items.map((item, index) => (
        <IconContainer
          id={"FloatingDock" + index}
          mouseX={mouseX}
          key={uid + item.title + index}
          sizeTransform={mediaAbove640 ? [60, 100, 60] : [55, 80, 55]}
          // sizeIconTransform={mediaAbove640 ? [30, 60, 30] : [30, 60, 30]}
          {...item}
        />
      ))}

      <ItemMusic
        id={"FloatingDock" + items.length}
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
    id?: string;
  }
) {
  const { mouseX, classNameTitle, extra, sizeTransform = [60, 100, 60], sizeIconTransform = [30, 60, 30], ...itemProps } = props;
  const uid = useId();
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], sizeTransform);
  const heightTransform = useTransform(distance, [-150, 0, 150], sizeTransform);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], sizeIconTransform);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], sizeIconTransform);

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
        <m.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
          {itemProps.icon}
        </m.div>
        {extra}
      </m.div>
    </ItemWrapper>
  );
}

function ItemWrapper({ children, ...itemProps }: IItem & { children: React.ReactNode; id?: string }) {
  if (itemProps?.href) {
    return (
      <Link href={itemProps.href} target={itemProps?.target} rel={itemProps?.rel} className={itemProps?.className} id={itemProps?.id}>
        {children}
      </Link>
    );
  }
  if (itemProps?.onClick) {
    return (
      <button onClick={itemProps?.onClick} className={itemProps?.className} id={itemProps?.id}>
        {children}
      </button>
    );
  }
  return <div className={itemProps?.className}>{children}</div>;
}

const formatTime = (time: number | undefined): string => {
  if (typeof time === "number" && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    // Convert to string and pad with leading zeros if necessary
    const formatMinutes = minutes.toString().padStart(2, "0");
    const formatSeconds = seconds.toString().padStart(2, "0");
    return `${formatMinutes}:${formatSeconds}`;
  }
  return "00:00";
};
function ItemMusic(props: {
  mouseX: MotionValue;
  sizeTransform?: [number, number, number];
  sizeIconTransform?: [number, number, number];
  id?: string;
}) {
  const { mouseX, sizeTransform = [60, 100, 60], sizeIconTransform = [30, 60, 30] } = props;
  const audioRef = useRef<HTMLAudioElement>(null);

  const [timeProgress, setTimeProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioStart = () => {
    const currentAudioRef = audioRef.current;
    const promise = currentAudioRef?.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          // Autoplay started!
        })
        .catch((error) => {
          console.log(error);
          setIsPlaying(false);
        });
    }
  };

  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration;
    if (seconds !== undefined) {
      setDuration(seconds);
    }
  };

  const handleProgressChange = (value: string) => {
    const currentAudioRef = audioRef.current;
    if (currentAudioRef) {
      setIsPlaying(false);
      currentAudioRef?.pause();
      const newTime = Number(value);
      currentAudioRef.currentTime = newTime;
      setTimeProgress(newTime);
      setTimeout(() => {
        setIsPlaying(true);
        handleAudioStart();
      }, 100);
    }
  };

  useEffect(() => {
    const currentAudioRef = audioRef.current;
    if (currentAudioRef && duration) {
      if (isPlaying) {
        handleAudioStart();
      } else {
        currentAudioRef?.pause();
        const currentTime = currentAudioRef.currentTime;
        setTimeProgress(currentTime);
      }
    }
  }, [isPlaying, duration]);

  useEffect(() => {
    const currentAudioRef = audioRef.current;
    const interval = setInterval(() => {
      if (currentAudioRef && duration) {
        const currentTime = currentAudioRef.currentTime;
        setTimeProgress(currentTime);

        if (isPlaying && currentTime === duration) {
          setIsPlaying(false);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  return (
    <>
      <audio
        src="https://res.cloudinary.com/dcos6mpjy/video/upload/v1731195961/audio-01_oluwt2.mp3"
        className="hidden"
        ref={audioRef}
        controls
        onLoadedMetadata={onLoadedMetadata}
      />
      <IconContainer
        id={props?.id}
        mouseX={mouseX}
        sizeTransform={sizeTransform}
        sizeIconTransform={sizeIconTransform}
        onClick={() => {
          setIsPlaying((p) => !p);
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
                <span>{formatTime(timeProgress)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="relative h-2 w-[200px] rounded-full bg-gray-200 [--range-progress:0%]">
                <div
                  className="absolute left-0 top-0 z-0 h-2 w-[var(--range-progress)] rounded-full bg-current"
                  style={{ width: `calc(${(timeProgress / duration) * 100}% + 0px)` }}
                ></div>
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  className="absolute left-0 top-0 h-2 w-full cursor-pointer appearance-none rounded-full bg-transparent accent-current"
                  value={timeProgress}
                  onChange={(e) => {
                    handleProgressChange(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        }
        className=""
        icon={
          <div className="z-10 flex size-full min-h-[34px] min-w-[34px] flex-col items-center justify-center">
            {isPlaying ? <PauseIcon className="size-full fill-white text-white" /> : <PlayIcon className="size-full fill-white text-white" />}
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
            className={cn("absolute left-0 top-0 z-0 rounded-full object-cover animate-[spin_5s_linear_infinite]")}
          />
        }
      />
    </>
  );
}

export default FloatingDock;
