import React from 'react'
import Link from 'next/link'

function Welcome() {
  return (
    <>
      <h1>
        Welcome to
        <br />
        Guess the Song
      </h1>
      <Link href='/choose'>Enter</Link>
    </>
  )
}

export default Welcome
