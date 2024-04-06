'use client'
import React, { createContext, useContext, ReactNode, ChangeEvent } from 'react'

interface RadioProps {
  value: string
  children: ReactNode
}

interface RadioGroupProps {
  value: string
  onChange: (value: string) => void
  children: ReactNode
}

const RadioContext = createContext<{
  value: string
  onChange: (value: string) => void
} | null>(null)

function Radio({ value, children }: RadioPropsRadioGroupProps) {
  const { value: contextValue, onChange: contextOnChange } = useContext(
    RadioContext
  ) || { value: '', onChange: () => {} }

  return (
    <label
  className={`cursor-pointer rounded-lg px-6 py-4 shadow transition-all ${value === contextValue ? 'bg-gradient-to-t from-blue-200 to-blue-100 text-blue-800 shadow-blue-500' : 'shadow-gray-300 hover:shadow-md'}`}
    >
      <input
        type='radio'
        className='hidden'
        checked={value === contextValue}
        onChange={() => contextOnChange(value)}
      />
      {children}
    </label>
  )
}

Radio.Group = function RadioGroup({
  value,
  onChange,
  children
}: RadioGroupProps) {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
      {children}
    </RadioContext.Provider>
  )
}

export default Radio
