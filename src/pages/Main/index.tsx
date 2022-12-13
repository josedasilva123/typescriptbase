import React, { useContext } from 'react'
import CounterForm from '../../components/CounterForm'
import HistoryList from '../../components/HistoryList'
import { CounterContext } from '../../contexts/CounterContext'

const MainPage = () => {
  const { count, resetCount } = useContext(CounterContext);

  return (
    <main>
        <span>{count}</span>
        <CounterForm />
        <HistoryList />
        <button onClick={() => resetCount()}>Resetar contador</button>
    </main>
  )
}

export default MainPage