import { ImageProps } from "next/image";

// https://nextjs.org/docs/app/api-reference/components/image#loaderfile
const imageLoader = ({ src, width, quality }: Pick<ImageProps, "src" | "width" | "quality">) => {
  return `${src}?w=${width}&q=${quality || 10}`;
};

export default imageLoader;
