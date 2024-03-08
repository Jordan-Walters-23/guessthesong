import React from 'react'
import Link from 'next/link'

function Page2Nav() {
  return (
    <>
      <button
        type='reset'
        className='m-1 h-10 w-40 rounded-full bg-teal-100 text-black hover:bg-teal-50 sm:w-40 md:w-40 lg:w-96'
      >
        Guess again
      </button>
      <Link
        href='/'
        className='m-1 h-10 w-40 rounded-full bg-teal-100 text-center text-black hover:bg-teal-50 sm:w-40 md:w-40 lg:w-96'
      >
        New songs
      </Link>
    </>
  )
}

export default Page2Nav
