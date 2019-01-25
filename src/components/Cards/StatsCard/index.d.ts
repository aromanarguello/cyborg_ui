export type TotalOrderProps = {
    totalOrderNumber: number
    totalOrderDescription: string
}

export type TotalIncomeProps = {
    totalIncomeNumber: number
    totalIncomeDescription: string
}

export type BreakDownProps = {
    pharmacy: number
    laboratory: number
    images: number
    description: string
}

export type State = {
    totalOrder?: TotalOrderProps
    totalIncome?: TotalIncomeProps
    breakDown?: BreakDownProps[]
    data?: Array<{
        id: string
        value: number
    }>
}
