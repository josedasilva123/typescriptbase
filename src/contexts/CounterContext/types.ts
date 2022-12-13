export interface iCounterProviderProps{
    children: React.ReactNode;
}

export type tOperations = 'sum' | 'sub';

export interface iOperationItem{
    value: number;
    type: tOperations;
}

export interface iCounterProviderValue{
    count: number;
    history: iOperationItem[];
    operation: (operationItem: iOperationItem) => void;
    resetCount: () => void;
}
