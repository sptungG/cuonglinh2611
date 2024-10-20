import React from "react";
import { Modal } from "./AnimatedModal";
import { GemIcon } from "lucide-react";

type TModalQRProps = { open: boolean; setOpen: (open: boolean) => void };

const ModalQR = ({ open, setOpen }: TModalQRProps) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="flex items-center justify-center gap-4 bg-amber-50 p-4 text-amber-500 pr-10">
        <GemIcon />
        <h4 className="text-lg font-bold md:text-2xl">Hộp mừng cưới</h4>
      </div>
      <div className="flex min-h-0 flex-[1_1_auto]"></div>
    </Modal>
  );
};

export default ModalQR;
