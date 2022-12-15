import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { counterFormSchema } from './counterFormSchema';
import { CounterContext } from '../../contexts/CounterContext';
import { tOperations } from '../../contexts/CounterContext/types';
import Input from '../Input';

export interface iCounterFormValues{
   value: string;
   type: tOperations; 
} 

const CounterForm = () => { 
  const { operation } = useContext(CounterContext);  

  const { register, handleSubmit, formState: { errors }, reset } = useForm<iCounterFormValues>({
    resolver: yupResolver(counterFormSchema),
    defaultValues: {
        value: "",
        type: "sum",
    }
  });

  
  const submit: SubmitHandler<iCounterFormValues> = (data) => {
    const newOperation = { ...data, value: Number(data.value)} 
    operation(newOperation);
  }
  
    
  return (
    <form onSubmit={handleSubmit(submit)}>
        <Input label="Número" id="name" type="number" register={register("value")} error={errors.value}/>        
        <select {...register("type")}>
            <option value="sum">Soma</option>
            <option value="sub">Subtração</option>
        </select>
        {errors.type && <p>{errors.type.message}</p>}

        <button type="submit">Enviar</button>
    </form>
  )
}

export default CounterForm