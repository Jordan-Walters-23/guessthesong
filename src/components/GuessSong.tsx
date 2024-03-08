import React from 'react'

function GuessSong() {
  return (
    <>
      <h1>Have a guess</h1>
      <div className='mx-auto pt-8 pb-6 flex justify-between items-end'>
        <label className=''
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
