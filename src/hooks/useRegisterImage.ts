import { usePreviewImagesContext } from "@/components/context/PreviewImagesContext";
import { ImageElementProps } from "@/types/preview-image-types";
import { useEffect, useState } from "react";

export function useRegisterImage(id: string, registerData: ImageElementProps, canPreview: boolean) {
  const groupContext = usePreviewImagesContext();

  useEffect(() => {
    if (canPreview && groupContext) {
      groupContext?.register?.(id, registerData);
    }
  }, [canPreview, JSON.stringify(registerData)]);

  return id;
}
