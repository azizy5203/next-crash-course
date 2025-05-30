import Head from "next/head";
import { useState } from "react";
function task() {
    const [titleText, setTitleText] = useState<string>("rres");
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta
          name="description"
          content="My page description"
        />
        <link
          rel="icon"
          href="/file.svg"
        />
      </Head>
      <main>
        <button className="border border-amber-300 rounded-md px-4 py-2 cursor-pointer" onClick={()=>setTitleText('new Title')}>{titleText}</button>
        <div className="border border-slate-500 rounded-md p-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt blanditiis odio eveniet!
        </div>
      </main>
    </>
  );
}

export default task;
