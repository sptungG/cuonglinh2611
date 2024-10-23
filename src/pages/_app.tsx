import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const Provider = dynamic(() => import("@/components/animation/Provider"), { ssr: false, loading: () => <div>Loading...</div> });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
