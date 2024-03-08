'use client'
import React from 'react'
import Link from 'next/link'

function Page1Nav() {
  return (
    <>
      <button className='lg:w-500 2lx:w-500 m-1 h-10 w-4/6 rounded-full bg-teal-900 px-4 py-2 font-bold text-teal-50 hover:bg-teal-950 sm:w-4/6 md:w-4/6'>
        +
      </button>
      <Link
        href='/guess'
        className='m-1 h-10 w-40 rounded-full bg-teal-100 px-4 py-2 text-center text-black hover:bg-teal-50 sm:w-40 md:w-40 lg:w-96'
      >
        Play
      </Link>
    </>
  )
}

export default Page1Nav
