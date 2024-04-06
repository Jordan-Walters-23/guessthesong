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
        <center>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='mt-1 h-8 w-8'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
            />
          </svg>
        </center>
      </Link>
    </>
  )
}

export default Page2Nav
