import { cn } from "@/common/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { usePreviewImagesContext } from "../context/PreviewImagesContext";
import NImage from "../next/NextImage";
import { Modal } from "./AnimatedModal";
import { useId } from "react";
import { IMG_BLUR } from "@/common/constant";

type TModalImageProps = { src?: string; onOpenChange?: (src?: string) => void };

const ModalImage = ({ src, onOpenChange }: TModalImageProps) => {
  const uid = useId();
  const { canPreviewNext, canPreviewPrev, onPreviewNext, onPreviewPrev, currentIndex, images } = usePreviewImagesContext();
  const mappedImagesKey = Object.keys(images);
  const imagesLength = mappedImagesKey.length;

  return (
    <Modal
      open={!!src}
      setOpen={(open) => {
        if (!open) onOpenChange?.(undefined);
      }}
      className="h-dvh max-h-[auto] min-h-fit max-w-[1000px] !items-center !justify-center border-0 bg-transparent sm:px-14 md:max-w-fit"
      classNameCloseBtn="sm:bg-gray-100/10 rounded-full top-1 right-1 sm:top-2 sm:right-2 size-9"
    >
      <div className="flex h-full flex-col items-center justify-center overflow-hidden bg-white/90 pb-[48px] pt-[44px] sm:bg-gray-100/10 sm:py-[60px]">
        <NImage
          src={src || ""}
          height={1000}
          width={1000}
          alt=""
          className="inset-0 !h-auto !max-h-full w-auto !min-w-[100dvw] object-contain sm:!min-w-[300px]"
          quality={90}
          loading="eager"
          placeholder="blur"
          blurDataURL={IMG_BLUR}
        />
      </div>

      {imagesLength > 1 && (
        <>
          {currentIndex !== undefined && (
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 sm:bottom-2">
              <span className="text-lg text-gray-900">{`${currentIndex + 1} / ${imagesLength}`}</span>
            </div>
          )}

          <div className="absolute bottom-1 left-1 sm:bottom-1/2 sm:left-0 sm:translate-y-1/2">
            <button
              disabled={!canPreviewPrev}
              onClick={onPreviewPrev}
              className="group flex size-10 items-center justify-center rounded-full text-gray-900 disabled:text-gray-500 disabled:opacity-60 sm:size-11 sm:bg-gray-100/10"
            >
              <ArrowLeftIcon className={cn("size-6 transition duration-200", canPreviewPrev && "sm:group-hover:rotate-3 sm:group-hover:scale-125")} />
            </button>
          </div>
          <div className="absolute bottom-1 right-1 sm:bottom-1/2 sm:right-0 sm:translate-y-1/2">
            <button
              disabled={!canPreviewNext}
              onClick={onPreviewNext}
              className="group flex size-10 items-center justify-center rounded-full text-gray-900 disabled:cursor-not-allowed disabled:text-gray-500 disabled:opacity-60 sm:size-11 sm:bg-gray-100/10"
            >
              <ArrowRightIcon
                className={cn("size-6 transition duration-200", canPreviewNext && "sm:group-hover:rotate-3 sm:group-hover:scale-125")}
              />
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ModalImage;
