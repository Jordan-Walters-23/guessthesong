'use client'
import React, { useState } from 'react'
import { Radio } from '@/components'
// import { RadioGroup } from './Radio'

function GuessSong() {
  const [plan, setPlan] = useState<string>('');

  const handleChange = (value: string) => {
    setPlan(value);
  };
  return (
    <>
      {/*find specific type for (e)*/}
      <Radio.Group value={plan} onChange={handleChange}>
        <Radio value='Song 1|'>Song 1</Radio>
        <Radio value='Song 2||'>Song 2</Radio>
        <Radio value='Song 3|||'>Song 3</Radio>
        <Radio value='Song 4|| ||'>Song 4</Radio>
      </Radio.Group>
      <hr className='my-3 w-1/3' />
      slected: {plan}
    </>
  )
}

export default GuessSong
