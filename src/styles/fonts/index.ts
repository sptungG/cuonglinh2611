import { Manrope, Great_Vibes, Dancing_Script } from "next/font/google";
import localFont from "next/font/local";

const fontGeistSans = localFont({
  src: "./GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const fontGeistMono = localFont({
  src: "./GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const fontManrope = Manrope({ subsets: ["vietnamese", "latin"] });
const fontDancingScript = Dancing_Script({ subsets: ["vietnamese", "latin"] });
const fontGreatVibes = Great_Vibes({ subsets: ["vietnamese", "latin"], weight: ["400"] });

const Fonts = {
  fontManrope,
  fontDancingScript,
  fontGreatVibes,
  fontGeistMono,
  fontGeistSans,
};
export default Fonts;
