'use client'
import { createContext } from 'react'
import { useContext } from 'react'
import React from 'react'

const RadioContext = createContext(null)

interface Props {
  children?: ReactNode
  // type for any props that come into the component
}

export default function Radio({ children, ...props }) {
  const { value, onChange } = useContext(RadioContext)
  return (
    <label>
      <input
        type='radio'
        className='hidden'
        checked={value === props.value}
        onChange={onChange}
        {...props}
      />
      {children}
    </label>
  )
}

export function RadioGroup({ value, onChange, children }) {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
      {children}
    </RadioContext.Provider>
  )
}
