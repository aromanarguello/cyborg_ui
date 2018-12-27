export interface TotalOrderProps {
    totalOrderNumber: number
    totalOrderDescription: string
}

export interface TotalIncomeProps {
    totalIncomeNumber: number
    totalIncomeDescription: string
}

export interface BreakDownProps {
    pharmacy: number
    laboratory: number
    images: number
    description: string
}

export interface State {
    totalOrder?: TotalOrderProps
    totalIncome?: TotalIncomeProps
    breakDown?: BreakDownProps[]
    data?: Array<{
        id: string
        value: number
    }>
}
