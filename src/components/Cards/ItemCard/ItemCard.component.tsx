import React, { SFC } from 'react'
import { Card, Icon, ItemName, ItemPrice, IconWrapper } from './ItemCard.styles'

type DataProp = {
    name: string
    price: number
    setPrice: (e: any) => void
}

const ItemCard: SFC<DataProp> = ({ name, price, setPrice }) => (
    <Card name={name} value={price}>
        <ItemName>{name}</ItemName>
        <ItemPrice>{`${price}`}$</ItemPrice>
        <IconWrapper name={name} value={price}>
            <Icon
                icon="plus"
                name={name + ' ' + price + '$'}
                value={price}
                onClick={setPrice}
            >
                +
            </Icon>
        </IconWrapper>
    </Card>
)

export default ItemCard
