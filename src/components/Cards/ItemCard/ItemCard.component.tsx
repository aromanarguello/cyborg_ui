import React, { SFC } from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 400px;
    height: 45px;
    border: 1px solid red;
    margin: 10px;
`

const ItemCard: SFC<any> = () => <Card />

export default ItemCard
