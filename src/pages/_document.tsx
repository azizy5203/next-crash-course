import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="max-h-screen overflow-auto antialiased bg-[image:var(--gradient-main)] bg-no-repeat text-cyan-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
