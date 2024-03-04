import React from "react";
import Link from "next/link";

function Page1Nav() {
  return (
    <>
      <button className="bg-teal-900 rounded-full h-10 w-4/6 mt-6">+</button>
      <Link href="/guess">Play</Link>
    </>
  );
}

export default Page1Nav;
