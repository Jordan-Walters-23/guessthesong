import React from "react";
import Link from "next/link";

function Page1Nav() {
  return (
    <>
      <button>+</button>
      <Link href="/guess">Play</Link>
    </>
  );
}

export default Page1Nav;
