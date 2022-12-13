import React from 'react'
import { iOperationItem } from '../../../contexts/CounterContext/types'

/* TIPAR OBJETOS */
interface iHistoryCardProps{
    operation: iOperationItem;
}

const HistoryCard = ({ operation }: iHistoryCardProps) => {
  return (
    <li>
        <span>Operação: {operation.type}</span>
        <span>Valor: {operation.value}</span>
    </li>    
  )
}

export default HistoryCard