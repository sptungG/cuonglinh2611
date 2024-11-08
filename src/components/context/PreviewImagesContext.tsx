import { PreviewImageElementProps } from "@/types/preview-image-types";
import { createContext, memo, useCallback, useContext, useMemo, useState } from "react";
import ModalImage from "../modal/ModalImage";

const PreviewImagesContext = createContext<TContextValues>({} as any);
export const usePreviewImagesContext = () => useContext(PreviewImagesContext);
const Provider = ({ children, ...props }: React.PropsWithChildren & TContextValues) => (
  <PreviewImagesContext.Provider value={props}>{children}</PreviewImagesContext.Provider>
);
const MemoProvider = memo(Provider);

// MAIN
const PreviewImagesProvider = ({ children }: React.PropsWithChildren) => {
  const [images, setImages] = useState<Record<string, PreviewImageElementProps>>({});
  const mappedImagesKey = Object.keys(images);
  const [currentId, setCurrentId] = useState<string>();
  const currentImage = images[String(currentId)];

  const handleCurrentIndex = (id?: string) => {
    const index = mappedImagesKey.findIndex((item) => item == id);
    if (index === -1) return;
    return index;
  };

  const nextImage = useMemo(() => {
    const currentIndex = handleCurrentIndex(currentId);
    if (currentIndex === undefined) return;
    const nextIndex = currentIndex + 1;
    const id = mappedImagesKey[nextIndex];
    return { id, data: images[id] };
  }, [currentId, mappedImagesKey]);

  const prevImage = useMemo(() => {
    const currentIndex = handleCurrentIndex(currentId);
    if (currentIndex === undefined) return;
    const prevIndex = currentIndex - 1;
    const id = mappedImagesKey[prevIndex];
    return { id, data: images[id] };
  }, [currentId, mappedImagesKey]);

  const handleRegisterImage = useCallback((id: string, data: PreviewImageElementProps) => {
    setImages((imgs) => ({
      ...imgs,
      [id]: data,
    }));
  }, []);

  const handlePreviewFromImage = useCallback(
    (id: string) => {
      const foundSrc = images[id]?.src;

      if (!foundSrc) return;
      setCurrentId(id);
    },
    [images]
  );

  const handlePreviewNext = useCallback(() => {
    if (!nextImage?.data?.src) return;
    setCurrentId(nextImage?.id);
  }, [nextImage]);

  const handlePreviewPrev = useCallback(() => {
    if (!prevImage?.data?.src) return;
    setCurrentId(prevImage?.id);
  }, [prevImage]);

  const data: TContextValues = {
    images,
    currentId,
    currentIndex: handleCurrentIndex(currentId),
    register: handleRegisterImage,
    onPreview: handlePreviewFromImage,
    onPreviewNext: handlePreviewNext,
    onPreviewPrev: handlePreviewPrev,
    canPreviewNext: !!nextImage?.data?.src,
    canPreviewPrev: !!prevImage?.data?.src,
  };
  return (
    <MemoProvider {...data}>
      {children}
      <ModalImage
        src={currentImage?.src}
        onOpenChange={(value) => {
          if (!value) {
            setCurrentId(undefined);
            return;
          }
        }}
      />
    </MemoProvider>
  );
};

interface TContextValues {
  images: Record<number, PreviewImageElementProps>;
  currentId?: string;
  currentIndex?: number;
  register: (id: string, data: PreviewImageElementProps) => void;
  onPreview: (id: string) => void;
  onPreviewNext: () => void;
  onPreviewPrev: () => void;
  canPreviewNext: boolean;
  canPreviewPrev: boolean;
}

export default PreviewImagesProvider;
