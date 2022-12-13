import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { counterFormSchema } from './counterFormSchema';
import { CounterContext } from '../../contexts/CounterContext';
import { tOperations } from '../../contexts/CounterContext/types';

interface iCounterFormValues{
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
        <input type="number" {...register("value")} />
        {errors.value && <p>{errors.value.message}</p>}
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