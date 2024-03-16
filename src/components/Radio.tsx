'use client'
import React, { createContext, useContext, ReactNode, ChangeEvent } from 'react';

interface RadioProps {
  value: string;
  children: ReactNode;
}

interface RadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}

const RadioContext = createContext<{ value: string; onChange: (value: string) => void } | null>(null);

function Radio({ value, children }: RadioProps) {
  const { value: contextValue, onChange: contextOnChange } = useContext(RadioContext) || { value: '', onChange: () => {} };

  return (
    <label>
      <input
        type='radio'
        className='hidden'
        checked={value === contextValue}
        onChange={() => contextOnChange(value)}
      />
      {children}
    </label>
  );
}

Radio.Group = function RadioGroup({ value, onChange, children }: RadioGroupProps) {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
      {children}
    </RadioContext.Provider>
  );
};

export default Radio
