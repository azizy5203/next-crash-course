import Link from "next/link";
import React from "react";

function AppBar() {
  return (
    <div className="p-4 flex items-center justify-center border-b border-zinc-300">
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/task">Tasks</Link>
        </li>
      </ul>
    </div>
  );
}

export default AppBar;
