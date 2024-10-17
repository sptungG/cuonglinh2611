import { Manrope as FontManrope, Great_Vibes as FontGreatVibes, Dancing_Script as FontDancingScript } from "next/font/google";
import localFont from "next/font/local";

const GeistSans = localFont({
  src: "./GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const GeistMono = localFont({
  src: "./GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Manrope = FontManrope({ subsets: ["vietnamese", "latin"], weight: ["400", "600"] });
const DancingScript = FontDancingScript({ subsets: ["vietnamese", "latin"], weight: ["400", "600", "700"] });
const GreatVibes = FontGreatVibes({ subsets: ["vietnamese", "latin"], weight: ["400"] });

const Fonts = {
  Manrope,
  DancingScript,
  GreatVibes,
  //
  GeistMono,
  GeistSans,
};
export default Fonts;
