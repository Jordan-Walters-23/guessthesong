'use client'
import React from 'react'
import { Radio } from '@/components'
import { RadioGroup } from './Radio'
import { useState } from 'react'

function GuessSong() {
  const [plan, setPlan] = useState("")
  return (
    <>
    {/*find specific type for (e)*/}
    <RadioGroup value={plan} onChange={(e: any) => setPlan(e.target.value)}>
      <Radio value="Song 1">Song 1</Radio>
      <Radio value="Song 2">Song 2</Radio>
      <Radio value="Song 3">Song 3</Radio>
      <Radio value="Song 4">Song 4</Radio>
    </RadioGroup>
    <hr className='my-3 w-1/3'/>
    slected: {plan}


      {/* <div className='mx-auto flex items-end justify-between pb-6 pt-8'>
        <label className=''>
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
      </div> */}
    </>
  )
}

export default GuessSong
