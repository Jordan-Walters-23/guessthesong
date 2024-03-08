import React from "react";
import Link from "next/link";

function Page2Nav() {
  return (
    <>
      <button type="reset" className='h-10 w-1/3 rounded-full bg-teal-100 px-4 py-2 text-black hover:bg-emerald-100'>Guess again</button>
      <Link href="/" className='h-10 w-1/3 rounded-full text-center bg-teal-100 px-4 py-2 text-black hover:bg-emerald-100'>New songs</Link>
    </>
  );
}

export default Page2Nav;
