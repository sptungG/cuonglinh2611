import React from "react";
import { Modal } from "./AnimatedModal";
import { cn } from "@/common/utils";
import NImage from "../next/NextImage";

type TModalImageProps = { src?: string; setSrc?: (src?: string) => void };

const ModalImage = ({ src, setSrc }: TModalImageProps) => {
  return (
    <Modal
      open={!!src}
      setOpen={(open) => {
        if (!open) setSrc?.(undefined);
      }}
      className="min-h-fit max-w-[1000px] border-0 max-sm:mt-auto md:max-w-fit"
    >
      <div className="overflow-y-auto sm:max-h-[calc(100dvh-24px)]">
        {!!src && (
          <NImage
            src={src}
            height={500}
            width={500}
            alt=""
            className={cn("object-contain object-top inset-0 !h-auto w-auto transition duration-200 rounded max-w-[1000px]")}
          />
        )}
      </div>
    </Modal>
  );
};

export default ModalImage;
