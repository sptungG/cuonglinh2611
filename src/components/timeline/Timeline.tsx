import { cn } from "@/common/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useId, useRef, useState } from "react";

interface TimelineEntry {
  center: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white font-sans dark:bg-neutral-950 md:px-10" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <motion.div
            key={uid + index}
            whileInView={{ style: { background: "red" } }}
            viewport={{ root: containerRef }}
            className={cn("flex flex-row justify-center", index % 2 !== 0 && "flex-row-reverse", item?.className)}
          >
            {item.left}

            {item.center}

            {item.right}
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 "
        >
          <motion.div
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
