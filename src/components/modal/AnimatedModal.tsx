import { useClickOutside } from "@/common/useClickOutside";
import { cn } from "@/common/utils";
import { AnimatePresence, m } from "framer-motion";
import { XIcon } from "lucide-react";
import React, { ReactNode, useEffect, useId, useRef } from "react";

interface IModalBodyProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  className?: string;
  classNameCloseBtn?: string;
}

export const Modal = ({ open, children, className, classNameCloseBtn, setOpen }: IModalBodyProps) => {
  const uid = useId();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  // const ref = useClickOutside(() => {
  //   setOpen(false);
  // });

  return (
    <AnimatePresence>
      <m.div
        key={uid + open}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          backdropFilter: "blur(10px)",
        }}
        exit={{
          opacity: 0,
          backdropFilter: "blur(0px)",
        }}
        className="fixed inset-0 z-[100] flex size-full sm:items-center sm:justify-center"
        style={{ display: open ? "flex" : "none" }}
      >
        <Overlay />

        <m.div
          key={uid + "Modal" + open}
          className={cn(
            "min-h-[50%] max-h-[calc(100dvh-40px)] md:max-w-[1000px] bg-white  border border-transparent md:rounded-2xl relative flex flex-col flex-1 overflow-hidden !z-[100]",
            className
          )}
        >
          <CloseIcon onClick={() => setOpen(false)} className={cn("absolute right-2 top-2", classNameCloseBtn)} />
          {children}
        </m.div>
      </m.div>
    </AnimatePresence>
  );
};

const Overlay = ({ className }: { className?: string }) => {
  return (
    <m.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(10px)",
      }}
      exit={{
        opacity: 0,
        backdropFilter: "blur(0px)",
      }}
      className={cn("fixed inset-0 z-[100] size-full bg-black bg-opacity-50", className)}
    ></m.div>
  );
};

const CloseIcon = ({ onClick, className }: { className?: string; onClick?: () => void }) => {
  return (
    <button onClick={onClick} className={cn("group z-10 flex items-center justify-center", className)}>
      <XIcon className="size-6 text-black transition duration-200 group-hover:rotate-3 group-hover:scale-125" />
    </button>
  );
};
