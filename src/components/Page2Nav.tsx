import React from "react";
import Link from "next/link";

function Page2Nav() {
  return (
    <>
      <button type="reset">Guess again</button>
      <Link href="/">New songs</Link>
    </>
  );
}

export default Page2Nav;
