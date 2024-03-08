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
        className='m-1 h-10 w-40 rounded-full bg-teal-100 px-4 py-2 text-center text-black hover:bg-teal-50 sm:w-40 md:w-40 lg:w-96'
      >
        Enter
      </Link>
    </div>
  )
}

export default Welcome
