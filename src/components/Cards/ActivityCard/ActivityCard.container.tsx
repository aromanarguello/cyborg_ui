import { Line } from '@nivo/line'
import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, CardContainer, CardHeader } from '../Cards.styles'

const ChartContainer = styled.div`
    width: 100%;
    height: 210px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
`
interface DataObject {
    x: string
    y: number
}

interface DataProp {
    id: string
    data: DataObject[]
}

interface State {
    data: DataProp[]
}

class ActivityCard extends Component<any, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            data: [
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
            ]
        }
    }
    public render() {
        const { data } = this.state
        return (
            <CardContainer grid={1}>
                <Card>
                    <CardHeader>
                        <p>Utimos 5 dias</p>
                    </CardHeader>
                    <ChartContainer>
                        <Line
                            width={400}
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
}

export default ActivityCard
