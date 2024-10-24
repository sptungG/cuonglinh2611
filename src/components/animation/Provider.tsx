import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Toaster } from "../toast/Toaster";
import { useMediaQuery } from "react-responsive";

type TProviderProps = { children?: React.ReactNode };

const Provider = ({ children }: TProviderProps) => {
  const mediaAbove640 = useMediaQuery({ minWidth: 640 });
  return (
    <LazyMotion features={domAnimation}>
      {children}
      <Toaster position={mediaAbove640 ? "bottom-right" : "top-right"} />
    </LazyMotion>
  );
};

export default Provider;
