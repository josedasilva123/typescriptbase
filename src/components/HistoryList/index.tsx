import React, { useContext } from 'react'
import { CounterContext } from '../../contexts/CounterContext'
import HistoryCard from './HistoryCard';

const HistoryList = () => {
  const { history } = useContext(CounterContext);  
  return (
    <ul>
        {history.map((operation, index) => (
            <HistoryCard key={index} operation={operation} />
        ))}
    </ul>
  )
}

export default HistoryList