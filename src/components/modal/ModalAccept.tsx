import React, { useId } from "react";
import { Modal } from "./AnimatedModal";
import { CalendarHeartIcon } from "lucide-react";
import { useForm } from "react-hook-form";

type TModalAcceptProps = { open: boolean; setOpen: (open: boolean) => void };

const ModalAccept = ({ open, setOpen }: TModalAcceptProps) => {
  const uid = useId();

  const methodForm = useForm({});

  return (
    <Modal open={open} setOpen={setOpen} className="max-sm:mt-auto md:max-w-[800px]">
      <div className="flex items-center gap-4 bg-amber-50 p-4 pr-10 text-amber-500">
        <CalendarHeartIcon className="shrink-0" />
        <div className="flex flex-col">
          <h4 className="mb-0.5 text-lg font-bold leading-[1.1] md:text-xl">Bạn sẽ đến chứ?</h4>
          <div className="leading-[1.1]">Hãy dành chút thời gian để nói cho chúng mình biết nhé!</div>
        </div>
      </div>
      <form className="flex min-h-0 flex-[1_1_auto]"></form>
    </Modal>
  );
};

export default ModalAccept;
