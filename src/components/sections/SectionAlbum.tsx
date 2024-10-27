import { cn } from "@/common/utils";
import React, { useId, useState } from "react";
import { m } from "framer-motion";
import NImage from "../next/NextImage";

const ALBUMS = [
  "/album/pexels-tran-long-13114541.jpg",
  "/album/pexels-tuan-anh-nguyen-1806361.jpg",
  "/album/pexels-nguyen-xuan-trung-17586999.jpg",
  "/album/pexels-san-wedding-5544662.jpg",
  "/album/pexels-san-wedding-5544650.jpg",
];

const SectionAlbum = () => {
  const uid = useId();

  const [selected, setSelected] = useState<string>();
  const [lastSelected, setLastSelected] = useState<string>();

  const handleClick = (item: string) => {
    setLastSelected(selected);
    setSelected(item);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(undefined);
  };

  return (
    <div className="relative w-full">
      <div className="mx-auto grid min-h-dvh w-full max-w-7xl grid-cols-1 gap-4 p-10 md:grid-cols-3">
        {ALBUMS.map((src, index) => (
          <div key={uid + "ALBUMS" + index} className={cn("col-span-1")}>
            <m.div
              onClick={() => handleClick(src)}
              className={cn(
                "relative overflow-hidden",
                selected === src
                  ? "rounded-lg cursor-pointer absolute inset-0 h-full w-full max-w-[400px] m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                  : lastSelected === src
                    ? "z-40 bg-white rounded-xl h-full w-full"
                    : "bg-white rounded-xl h-full w-full"
              )}
              layoutId={`image-${src}`}
            >
              {selected === src && <div className="relative z-[60] flex size-full flex-col justify-end rounded-lg bg-transparent shadow-2xl"></div>}
              <NImage
                src={src}
                height={500}
                width={500}
                className={cn("object-cover object-top absolute inset-0 !h-auto w-full transition duration-200")}
              />
            </m.div>
          </div>
        ))}
      </div>

      <m.div
        onClick={handleOutsideClick}
        className={cn("absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10", selected ? "pointer-events-auto" : "pointer-events-none")}
        animate={{ opacity: selected ? 0.3 : 0 }}
      />
    </div>
  );
};

export default SectionAlbum;
