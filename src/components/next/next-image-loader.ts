import { ImageProps } from "next/image";

const normalizeSrc = (src: string) => src.replace(/^\//, "");
function replaceVersion(url: string, replacement: string, versionIndex = 6) {
  const parts = url.split("/");
  if (versionIndex >= 0 && versionIndex < parts.length) {
    parts[versionIndex] = replacement;
    return parts.join("/");
  } else {
    return url; // Return original URL if index is invalid
  }
}

// https://nextjs.org/docs/app/api-reference/components/image#loaderfile
const imageLoader = ({ src, width, quality }: Pick<ImageProps, "width" | "quality"> & { src: string }) => {
  const hasCloudinary = (src as string).match(/res\.cloudinary\.com/);
  if (!hasCloudinary) return `${src}?w=${width}&q=${quality || 10}`;

  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `${replaceVersion(normalizeSrc(src), params.join(","))}`;
};

export default imageLoader;
