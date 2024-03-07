import React from 'react'

function GuessSong() {
  return (
    <>
      <h1>Have a guess</h1>
      <div>
        <label className='h-24 w-1/3 m-2 rounded-full bg-teal-100 px-4 py-2 text-black hover:bg-emerald-100'
        >
          <input type='radio' name='myRadio' value='Song1' />
          Song 1
        </label>
        <label>
          <input
            type='radio'
            name='myRadio'
            value='Song2'
            defaultChecked={true}
          />{' '}
          Song 2
        </label>
        <label>
          <input type='radio' name='myRadio' value='Song3' /> Song 3
        </label>
        <label>
          <input type='radio' name='myRadio' value='Song4' /> Song 4
        </label>
        <label>
          <input type='radio' name='myRadio' value='Song5' /> Song 5
        </label>
      </div>
    </>
  )
}

export default GuessSong
