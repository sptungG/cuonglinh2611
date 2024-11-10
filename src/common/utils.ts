import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export function flattenColorPalette(colors: any): { [key: string]: string } {
  return Object.assign(
    {},
    ...Object.entries(colors !== null && colors !== void 0 ? colors : {}).flatMap(([color, values]) =>
      typeof values == "object"
        ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
            [color + (number === "DEFAULT" ? "" : `-${number}`)]: hex,
          }))
        : [{ [`${color}`]: values }]
    )
  );
}

export function openInNewTab(href: string) {
  Object.assign(document.createElement("a"), {
    target: "_blank",
    rel: "noopener noreferrer",
    href: href,
  }).click();
  return href;
}

export function getUserDataBySlug(partyType: string) {
  return {
    partyName: partyType === "l" ? "NhaGai" : "NhaTrai",
    invitedTime: partyType === "l" ? "17:00" : partyType === "ca" ? "15:30" : "09:00",
    partyDay: partyType === "l" ? "23/11/2024" : partyType === "ca" ? "25/11/2024" : "26/11/2024",
  };
}
