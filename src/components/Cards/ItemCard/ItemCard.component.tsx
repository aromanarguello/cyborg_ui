import React, { SFC } from 'react'
import { Card, ItemDescription, ItemName, ItemPrice } from './ItemCard.styles'

type DataProp = {
    name: string
    price: number
    description: string
    setPrice: (e: any) => void
}

const ItemCard: SFC<DataProp> = ({ name, price, description, setPrice }) => (
    <Card onClick={setPrice}>
        <ItemName>{name}</ItemName>
        <ItemDescription>{description}</ItemDescription>
        <ItemPrice>{`${price}`}$</ItemPrice>
    </Card>
)

export default ItemCard
