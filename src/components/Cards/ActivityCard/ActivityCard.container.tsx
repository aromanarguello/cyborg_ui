import { Line } from '@nivo/line'
import React, { useState } from 'react'
import { Card, CardContainer, CardHeader } from '../Cards.styles'
import { ChartContainer } from './ActivityCard.styles'

const ActivityCard = () => {
    const [data, setData] = useState([
        {
            id: 'fake corp. A',
            data: [
                { x: 'Lunes', y: 7 },
                { x: 'Martes', y: 5 },
                { x: 'Miercoles', y: 11 },
                { x: 'Jueves', y: 8 },
                { x: 'Viernes', y: 9 }
            ]
        }
    ])

    return (
        <CardContainer
            width={700}
            column={2}
            row={1}
            className="cardContainer"
            justifyContent="flex-start"
        >
            <Card>
                <CardHeader>
                    <p>Utimos 5 dias</p>
                </CardHeader>
                <ChartContainer>
                    <Line
                        width={500}
                        height={230}
                        margin={{
                            top: 20,
                            right: 35,
                            bottom: 60,
                            left: 40
                        }}
                        axisLeft={{
                            tickSize: 0,
                            tickPadding: 5,
                            tickRotation: 0,
                            format: () => null
                        }}
                        axisBottom={{
                            tickSize: 0,
                            tickPadding: 0
                        }}
                        data={data}
                        animate={true}
                        curve="natural"
                        enableGridX={false}
                        enableGridY={false}
                        enableDotLabel={true}
                        dotSize={9}
                        dotColor="inherit:brighter(0.8)"
                        dotBorderWidth={1}
                        colors="category10"
                        dotBorderColor="inherit:brighter(0.8"
                        lineWidth={1}
                    />
                </ChartContainer>
            </Card>
        </CardContainer>
    )
}
export default ActivityCard
