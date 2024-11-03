import { default as NextImage, ImageProps as NextImageProps } from "next/image";
import { useId } from "react";

import imageLoader from "./next-image-loader";
import { useRegisterImage } from "@/hooks/useRegisterImage";
import { usePreviewImagesContext } from "../context/PreviewImagesContext";

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) + keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) + keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) + keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

/**
 * for internal images only (/assets,...)
 */
const NImage = ({
  src,
  alt,
  style,
  fill,
  canPreview = false,
  ...props
}: Omit<NextImageProps, "alt" | "src"> & { alt?: string; src: string; canPreview?: boolean }) => {
  const uid = useId();
  const imageId = useRegisterImage(canPreview, { src, alt });
  const groupContext = usePreviewImagesContext();
  return (
    <NextImage
      src={src}
      alt={alt || uid}
      sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
      loader={imageLoader}
      style={fill ? style : { height: "auto", ...style }}
      fill={fill}
      quality={25}
      onClick={() => {
        if (!canPreview) return;
        if (!groupContext) return;
        groupContext.onPreview(imageId);
      }}
      {...props}
    />
  );
};

export default NImage;
