import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";

type TProviderProps = { children?: React.ReactNode };

const Provider = ({ children }: TProviderProps) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default Provider;
