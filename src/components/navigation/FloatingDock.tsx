/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/common/utils";
import { AnimatePresence, MotionValue, m, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useCallback, useRef, useState } from "react";

interface IItem {
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  className?: string;
}

export const FloatingDock = ({ items, desktopClassName }: { items: IItem[]; desktopClassName?: string; mobileClassName?: string }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </>
  );
};

const FloatingDockDesktop = ({ items, className }: { items: IItem[]; className?: string }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <m.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn("mx-auto hidden md:flex h-12 gap-4 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3 shadow", className)}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </m.div>
  );
};

function IconContainer({ mouseX, ...itemProps }: IItem & { mouseX: MotionValue }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [60, 100, 60]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [60, 100, 60]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [30, 60, 30]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [30, 60, 30]);

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

  const [hovered, setHovered] = useState(false);

  return (
    <ItemWrapper {...itemProps}>
      <m.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-100 text-neutral-500 hover:text-amber-500 hover:shadow"
      >
        <AnimatePresence>
          {hovered && (
            <m.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-10 left-1/2 w-fit -translate-x-1/2 whitespace-pre rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-base text-amber-700"
            >
              {itemProps.title}
            </m.div>
          )}
        </AnimatePresence>
        <m.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
          {itemProps.icon}
        </m.div>
      </m.div>
    </ItemWrapper>
  );
}

function ItemWrapper({ children, ...itemProps }: IItem & { children: React.ReactNode }) {
  if (itemProps?.href) {
    return (
      <Link href={itemProps.href} target={itemProps?.target} rel={itemProps?.rel} className={itemProps?.className}>
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
