'use client'
import React from 'react'
import Link from 'next/link'

function Page1Nav() {
  return (
    <>
      <button className='m-2 h-10 w-4/6 rounded-full bg-teal-900 px-4 py-2 font-bold text-teal-50 hover:bg-teal-950'>
        +
      </button>
      <Link
        href='/guess'
        className='h-10 w-1/3 rounded-full bg-teal-100 px-4 py-2 text-black hover:bg-emerald-100'
      >
        Play
      </Link>
    </>
  )
}

export default Page1Nav
