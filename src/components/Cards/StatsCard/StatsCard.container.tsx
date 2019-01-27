import React, { Component } from 'react'
import { PieChart, StatNumbers } from '../../index'
import { Card, CardContainer, CardHeader } from '../Cards.styles'
import { State } from './index'
import { NumberContainer, StatsContainer } from './StatsCard.styles'

class StatsCard extends Component<any, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            totalOrder: {
                totalOrderNumber: 175,
                totalOrderDescription: 'Total de Ordenes'
            },
            totalIncome: {
                totalIncomeNumber: 304,
                totalIncomeDescription: 'Ingreso Mensual'
            },
            data: [
                {
                    id: 'farmacia',
                    value: 355
                },
                {
                    id: 'laboratiorio',
                    value: 263
                },
                {
                    id: 'imagenes',
                    value: 187
                }
            ]
        }
    }

    public render() {
        const {
            totalOrder: { totalOrderNumber, totalOrderDescription },
            totalIncome: { totalIncomeNumber, totalIncomeDescription },
            data
        }: any = this.state
        return (
            <StatsContainer>
                <CardContainer width={664} justifyContent="flex-start">
                    <Card width={95}>
                        <NumberContainer>
                            <StatNumbers
                                value={totalOrderNumber}
                                description={totalOrderDescription}
                            />
                            <StatNumbers
                                value={totalIncomeNumber}
                                description={totalIncomeDescription}
                            />
                            <PieChart chartData={data} />
                        </NumberContainer>
                    </Card>
                </CardContainer>
            </StatsContainer>
        )
    }
}

export default StatsCard
