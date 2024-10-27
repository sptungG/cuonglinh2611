import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Toaster } from "../toast/Toaster";

type TProviderProps = { children?: React.ReactNode };

const Provider = ({ children }: TProviderProps) => {
  return (
    <LazyMotion features={domAnimation}>
      {children}
      <Toaster position="top-center" />
    </LazyMotion>
  );
};

export default Provider;
