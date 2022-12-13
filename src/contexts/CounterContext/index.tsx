import { createContext, useState } from "react";
import { iCounterProviderValue, iCounterProviderProps, iOperationItem } from "./types";

export const CounterContext = createContext({} as iCounterProviderValue);

export const CounterProvider = ({children}: iCounterProviderProps) => {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([] as iOperationItem[]);

    function operation(operationItem: iOperationItem){
        if(operationItem.type === "sum"){
            setCount(count + operationItem.value);            
        } else if (operationItem.type === "sub"){
            setCount(count - operationItem.value);
        }
        setHistory([...history, operationItem]);
    }

    function resetCount(){
        setCount(0);
        setHistory([]);
    }

    return(
        <CounterContext.Provider value={{ count, history, operation, resetCount }}>
            {children}
        </CounterContext.Provider>
    )
}