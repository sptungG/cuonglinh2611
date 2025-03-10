import React from "react";
import { Modal } from "./AnimatedModal";
import { GemIcon } from "lucide-react";
import NImage from "../next/NextImage";
import { Sheet } from "@/common/sheets";

type TModalQRProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  userData: Sheet;
};

const ModalQR = ({ open, setOpen, userData }: TModalQRProps) => {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      className="max-sm:mt-auto md:max-w-[800px]"
      classNameCloseBtn="top-4 right-4"
    >
      <div className="flex items-center justify-center gap-4 bg-amber-50 p-4 pr-10 text-amber-500">
        <GemIcon />
        <h4 className="text-lg font-bold md:text-2xl">Hộp mừng cưới</h4>
      </div>
      <div className="flex min-h-0 flex-[1_1_auto] justify-between overflow-y-auto pb-24 max-sm:flex-col sm:pb-10 sm:[&>*]:w-1/2">
        {userData?.partyName === "NhaGai" ? <></> : <></>}
        <NImage
          loading="eager"
          src={
            userData?.partyName === "NhaGai"
              ? "/assets/linhny-qrqr.jpeg"
              : "/assets/cuongnv-qrqr.jpeg"
          }
          width={400}
          height={400}
          className="object-cover max-sm:w-full max-sm:border-b-2 max-sm:border-dashed max-sm:border-b-amber-500"
        />
        <NImage
          loading="eager"
          src={
            userData?.partyName === "NhaGai"
              ? "/assets/cuongnv-qrqr.jpeg"
              : "/assets/linhny-qrqr.jpeg"
          }
          width={400}
          height={400}
          className=" object-cover max-sm:w-full"
        />
      </div>
    </Modal>
  );
};

export default ModalQR;
