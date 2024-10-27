import { useEffect, useRef } from "react";

const DEFAULT_EVENTS = ["mousedown", "touchstart"];

export function useClickOutside<T extends HTMLElement = any>(handler: () => void, events?: string[] | null) {
  const ref = useRef<T>();

  useEffect(() => {
    const listener = (event: any) => {
      const { target } = event ?? {};
      if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };

    (events || DEFAULT_EVENTS).forEach((fn) => document.addEventListener(fn, listener));

    return () => {
      (events || DEFAULT_EVENTS).forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref.current, handler]);

  return ref;
}
