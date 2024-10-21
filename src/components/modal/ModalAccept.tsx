import React from "react";
import { Modal } from "./AnimatedModal";
import { GemIcon } from "lucide-react";

type TModalAcceptProps = { open: boolean; setOpen: (open: boolean) => void };

const ModalAccept = ({ open, setOpen }: TModalAcceptProps) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="flex items-center gap-4 bg-amber-50 p-4 text-amber-500 pr-10">
        <GemIcon />
        <h4 className="text-lg font-bold md:text-2xl">Bạn sẽ đến chứ?</h4>
      </div>
      <div className="px-4">Hãy dành chút thời gian để nói cho chúng mình biết nhé!</div>
      <div className="flex min-h-0 flex-[1_1_auto]"></div>
    </Modal>
  );
};

export default ModalAccept;
