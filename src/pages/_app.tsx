import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "@/components/AppBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen flex flex-col gap-4">
      <AppBar />
      <div className="flex-1 px-4">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
