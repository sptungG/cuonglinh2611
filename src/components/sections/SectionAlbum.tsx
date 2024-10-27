import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { ArrowUpIcon, HomeIcon, SlashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useId, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Modal } from "../modal/AnimatedModal";

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const ALBUMS_LIST = [
  "/album/pexels-tran-long-13114541.jpg",
  "/album/pexels-tuan-anh-nguyen-1806361.jpg",
  "/album/pexels-nguyen-xuan-trung-17586999.jpg",
  "/album/pexels-san-wedding-5544662.jpg",
  "/album/pexels-san-wedding-5544650.jpg",
  "/album/pexels-tran-long-13114541.jpg",
  "/album/pexels-tuan-anh-nguyen-1806361.jpg",
  "/album/pexels-nguyen-xuan-trung-17586999.jpg",
  "/album/pexels-san-wedding-5544662.jpg",
  "/album/pexels-san-wedding-5544650.jpg",
  "/album/pexels-tran-long-13114541.jpg",
  "/album/pexels-tuan-anh-nguyen-1806361.jpg",
  "/album/pexels-nguyen-xuan-trung-17586999.jpg",
  "/album/pexels-san-wedding-5544662.jpg",
  "/album/pexels-san-wedding-5544650.jpg",
  "/album/pexels-tran-long-13114541.jpg",
  "/album/pexels-tuan-anh-nguyen-1806361.jpg",
  "/album/pexels-nguyen-xuan-trung-17586999.jpg",
  "/album/pexels-san-wedding-5544662.jpg",
  "/album/pexels-san-wedding-5544650.jpg",
  "/album/pexels-tran-long-13114541.jpg",
  "/album/pexels-tuan-anh-nguyen-1806361.jpg",
  "/album/pexels-nguyen-xuan-trung-17586999.jpg",
  "/album/pexels-san-wedding-5544662.jpg",
  "/album/pexels-san-wedding-5544650.jpg",
  "/album/pexels-tran-long-13114541.jpg",
  "/album/pexels-tuan-anh-nguyen-1806361.jpg",
  "/album/pexels-nguyen-xuan-trung-17586999.jpg",
  "/album/pexels-san-wedding-5544662.jpg",
  "/album/pexels-san-wedding-5544650.jpg",
];
const ALBUMS = shuffleArray(ALBUMS_LIST);

const SectionAlbum = () => {
  const uid = useId();
  const mediaAbove640 = useMediaQuery({ minWidth: 640 });

  const [selected, setSelected] = useState<string>();

  const listRef = React.useRef<HTMLDivElement | null>(null);
  const virtualizer = useWindowVirtualizer({
    count: ALBUMS.length,
    estimateSize: (i) => 100,
    overscan: mediaAbove640 ? 5 : 1000,
    lanes: mediaAbove640 ? 5 : 2,
    gap: mediaAbove640 ? 20 : 10,
    scrollMargin: 0,
    paddingEnd: 80,
    scrollPaddingEnd: 20,
  });

  const handleClick = (item: string) => {
    setSelected(item);
  };

  return (
    <>
      <div id="AlbumChungMinh" className="relative mx-auto flex w-full max-w-[1900px] items-center p-2 sm:p-5">
        <Link href={"/c"}>
          <HomeIcon className="size-6 text-amber-600 sm:size-8" />
        </Link>
        <SlashIcon className="rotate-[-17deg] text-amber-500" />
        <div className={cn(Fonts.DancingScript.className, "relative text-3xl sm:text-4xl z-10 text-left font-[600] text-amber-600")}>
          Album chúng mình
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1900px] px-1 sm:px-5" ref={listRef} style={{ overflowAnchor: "none" }}>
        <div className="relative min-h-dvh w-full" style={{ height: `${virtualizer.getTotalSize()}px` }}>
          {virtualizer.getVirtualItems().map((item) => {
            const src = ALBUMS[item.index];
            return (
              <button
                key={uid + item.key}
                ref={virtualizer.measureElement}
                data-index={item.index}
                style={
                  mediaAbove640
                    ? {
                        position: "absolute",
                        top: 0,
                        left: `calc(${item.lane * 20}% + 10px)`,
                        width: "calc(20% - 20px)",
                        transform: `translateY(${item.start}px)`,
                      }
                    : {
                        position: "absolute",
                        top: 0,
                        left: `calc(${item.lane * 50}% + 4px)`,
                        width: "calc(50% - 8px)",
                        transform: `translateY(${item.start}px)`,
                      }
                }
                onClick={() => handleClick(src)}
              >
                <Image
                  src={src}
                  height={500}
                  width={500}
                  alt=""
                  className={cn("object-cover object-top inset-0 !h-auto w-auto transition duration-200 rounded")}
                />
              </button>
            );
          })}
        </div>
      </div>

      <Link
        href="#AlbumChungMinh"
        className="fixed bottom-2 right-2 flex size-12 items-center justify-center rounded-full bg-white text-amber-600 shadow"
      >
        <ArrowUpIcon className="size-7" />
      </Link>

      <Modal
        open={!!selected}
        setOpen={(open) => {
          if (!open) setSelected(undefined);
        }}
        className="min-h-fit border-0 max-sm:mt-auto md:max-w-fit"
      >
        <div className="overflow-y-auto">
          {!!selected && (
            <Image
              src={selected}
              height={500}
              width={500}
              alt=""
              className={cn("object-contain object-top inset-0 !h-auto w-auto transition duration-200 rounded")}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default SectionAlbum;
