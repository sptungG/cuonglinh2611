import React from "react";
import { Modal } from "./AnimatedModal";
import { GemIcon } from "lucide-react";
import NImage from "../next/NextImage";

type TModalQRProps = { open: boolean; setOpen: (open: boolean) => void };

const ModalQR = ({ open, setOpen }: TModalQRProps) => {
  return (
    <Modal open={open} setOpen={setOpen} className="max-sm:mt-auto md:max-w-[800px]">
      <div className="flex items-center justify-center gap-4 bg-amber-50 p-4 pr-10 text-amber-500">
        <GemIcon />
        <h4 className="text-lg font-bold md:text-2xl">Hộp mừng cưới</h4>
      </div>
      <div className="flex min-h-0 flex-[1_1_auto] justify-between overflow-y-auto pb-24 max-sm:flex-col sm:pb-10 sm:[&>*]:w-1/2">
        <NImage
          priority
          src="/assets/linhny-qrqr.jpeg"
          width={400}
          height={400}
          className="object-cover max-sm:w-full max-sm:border-b-2 max-sm:border-dashed max-sm:border-b-amber-500"
        />
        <NImage priority src="/assets/cuongnv-qrqr.jpeg" width={400} height={400} className=" object-cover max-sm:w-full" />
      </div>
    </Modal>
  );
};

export default ModalQR;
