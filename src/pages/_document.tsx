import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <div className="border-4 p-4 border-emerald-700">  
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
