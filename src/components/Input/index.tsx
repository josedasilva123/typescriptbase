import React from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface iInputProps{
    type: 'text' |  'email' | 'password' | 'number';
    id: string;
    label?: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
}

const Input = ({type, id, label, register, error}: iInputProps) => {
  return (
    <fieldset>
        {label && <label htmlFor={id}>{label}</label>}
        <input type={type} id={id} {...register} />
        {error && <p>{error.message}</p>}
    </fieldset>
  )
}

export default Input