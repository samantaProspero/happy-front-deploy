import React, { InputHTMLAttributes } from 'react';
import '../styles/components/input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  type: string;
  label: string;
  id: string;
  value: string;
  setValue: any;
}

function Input ({label, id, type, value, setValue}:InputProps){
  return(
    <div className="input-block">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={event => setValue(event.target.value)}/>
    </div>
)
}

export default Input;