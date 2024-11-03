import { usePreviewImagesContext } from "@/components/context/PreviewImagesContext";
import { ImageElementProps } from "@/types/preview-image-types";
import { useEffect, useState } from "react";

let uid = 0;

export function useRegisterImage(canPreview: boolean, registerData: ImageElementProps) {
  const [id] = useState(() => {
    uid += 1;
    return String(uid);
  });
  const groupContext = usePreviewImagesContext();

  useEffect(() => {
    if (canPreview && groupContext) {
      groupContext.register(id, registerData);
    }
  }, [canPreview, JSON.stringify(registerData)]);

  return id;
}
