import React, { Component } from 'react'
import { Card, CardContainer, CardHeader } from '../Cards.styles'
import { State } from './index'
import {
    Chip,
    ChipContainer,
    Table,
    TableContainer,
    TableItem,
    TableList,
    Text
} from './OrderCard.styles'

export default class OrderCard extends Component<any, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            orders: [
                {
                    provider: 'Dr.Roman',
                    price: 120,
                    isComplete: true,
                    createdAt: '12/12/18',
                    patientName: 'Alejandro'
                },
                {
                    provider: 'Dr.Roman',
                    price: 125,
                    isComplete: false,
                    createdAt: '12/12/18',
                    patientName: 'Carlos'
                },
                {
                    provider: 'Dr.Roman',
                    price: 16,
                    isComplete: true,
                    createdAt: '11/12/18',
                    patientName: 'Alberto'
                },
                {
                    provider: 'Dr.Roman',
                    price: 120,
                    isComplete: false,
                    createdAt: '12/22/18',
                    patientName: 'Mario'
                },
                {
                    provider: 'Dr.Roman',
                    price: 120,
                    isComplete: true,
                    createdAt: '12/02/18',
                    patientName: 'Cristobal'
                },
                {
                    provider: 'Dr.Roman',
                    price: 120,
                    isComplete: true,
                    createdAt: '12/12/18',
                    patientName: 'Jaime'
                },
                {
                    provider: 'Dr.Roman',
                    price: 120,
                    isComplete: true,
                    createdAt: '12/12/18',
                    patientName: 'Jairo'
                },
                {
                    provider: 'Dr.Roman',
                    price: 120,
                    isComplete: true,
                    createdAt: '12/12/18',
                    patientName: 'Jairo'
                },
                {
                    provider: 'Dr.Roman',
                    price: 120,
                    isComplete: true,
                    createdAt: '12/12/18',
                    patientName: 'Jairo'
                },
                {
                    provider: 'Dr.Roman',
                    price: 120,
                    isComplete: true,
                    createdAt: '12/12/18',
                    patientName: 'Jairo'
                }
            ]
        }
    }
    public render() {
        const { orders } = this.state
        return (
            <CardContainer className="order-container" width={500}>
                <Card>
                    <CardHeader>
                        <p>Ordenes Recientes</p>
                    </CardHeader>
                    <TableContainer>
                        <Table>
                            <TableList>
                                {orders.map(
                                    (
                                        {
                                            isComplete,
                                            createdAt,
                                            patientName,
                                            price
                                        },
                                        i
                                    ) => (
                                        <TableItem index={i}>
                                            <ChipContainer>
                                                <Chip isComplete={isComplete}>
                                                    {isComplete
                                                        ? 'Cerrada'
                                                        : 'Abierta'}
                                                </Chip>
                                            </ChipContainer>
                                            <Text>{createdAt}</Text>
                                            <Text>{patientName}</Text>
                                            <Text>{price}$</Text>
                                        </TableItem>
                                    )
                                )}
                            </TableList>
                        </Table>
                    </TableContainer>
                </Card>
            </CardContainer>
        )
    }
}
