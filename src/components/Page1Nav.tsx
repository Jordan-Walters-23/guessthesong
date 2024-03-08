'use client'
import React from 'react'
import Link from 'next/link'

function Page1Nav() {
  return (
    <>
      <button className='h-10 w-4/6 sm:w-4/6 md:w-4/6 lg:w-500 2lx:w-500 m-1 rounded-full bg-teal-900 px-4 py-2 font-bold text-teal-50 hover:bg-teal-950'>
        +
      </button>
      <Link
        href='/guess'
        className='h-10 w-40 sm:w-40 md:w-40 lg:w-96 m-1 rounded-full text-center bg-teal-100 px-4 py-2 text-black hover:bg-emerald-100'
      >
        Play
      </Link>
    </>
  )
}

export default Page1Nav
