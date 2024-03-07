import React from 'react'
import Link from 'next/link'

function Welcome() {
  return (
    <div className=' mx-auto flex flex-wrap content-center'>
      <h1>
        Welcome to
        <br />
        Guess the Song
      </h1>
      <Link
        href='/choose'
        className='h-10 w-1/3 rounded-full bg-teal-100 px-4 py-2 text-gray-700 hover:bg-emerald-100'
      >
        Enter
      </Link>
    </div>
  )
}

export default Welcome
