import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      animation: {
        rainbow: "rainbow var(--speed, 2s) infinite linear",
      },
      keyframes: {
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
        bounceY: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
          "100%": { transform: "translateY(0)" },
        },
        zoomTwo: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [addVariablesForColors],
};

function flattenColorPalette(colors: any): { [key: string]: string } {
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

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));
  addBase({
    ":root": newVars,
  });
}

export default config;
