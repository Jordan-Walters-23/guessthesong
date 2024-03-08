import React from "react";
import Link from "next/link";

function Page2Nav() {
  return (
    <>
      <button type="reset" className='h-10 w-40 sm:w-40 md:w-40 lg:w-96 lx:w-1/3 2lx:w-1/3 m-1 rounded-full bg-teal-100 text-black hover:bg-emerald-100'>Guess again</button>
      <Link href="/" className='h-10 w-40 sm:w-40 md:w-40 lg:w-96 lx:w-1/3 2lx:w-1/3 m-1 rounded-full text-center bg-teal-100 text-black hover:bg-emerald-100'>New songs</Link>
    </>
  );
}

export default Page2Nav;
