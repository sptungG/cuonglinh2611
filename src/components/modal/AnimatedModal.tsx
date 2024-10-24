import { cn } from "@/common/utils";
import { AnimatePresence, m } from "framer-motion";
import { XIcon } from "lucide-react";
import React, { ReactNode, useEffect, useId, useRef } from "react";

interface IModalBodyProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  className?: string;
}

export const Modal = ({ open, children, className, setOpen }: IModalBodyProps) => {
  const uid = useId();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => setOpen(false));

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
        className="fixed inset-0 z-[100] flex size-full [perspective:800px] [transform-style:preserve-3d] sm:items-center sm:justify-center"
        style={{ display: open ? "flex" : "none" }}
      >
        <Overlay />

        <m.div
          ref={modalRef}
          className={cn(
            "min-h-[50%] max-h-[calc(100dvh-40px)] md:max-w-[1000px] bg-white  border border-transparent md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden",
            className
          )}
          initial={{
            opacity: 0,
            scale: 0.5,
            rotateX: 40,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            rotateX: 10,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 15,
          }}
        >
          <CloseIcon onClick={() => setOpen(false)} />
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
      className={cn("fixed inset-0 z-[99] size-full bg-black bg-opacity-50", className)}
    ></m.div>
  );
};

const CloseIcon = ({ onClick, className }: { className?: string; onClick?: () => void }) => {
  return (
    <button onClick={onClick} className={cn("group absolute right-4 top-4 z-10", className)}>
      <XIcon className="size-6 text-black transition duration-200 group-hover:rotate-3 group-hover:scale-125 dark:text-white" />
    </button>
  );
};

// Hook to detect clicks outside of a component.
// Add it in a separate file, I've added here for simplicity
export const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, callback: (event: any) => void) => {
  useEffect(() => {
    const listener = (event: any) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
