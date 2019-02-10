import React, { SFC } from 'react'
import styled from 'styled-components'
import { colors } from '../../../utils/styles/helpers'

const {
    shadows: { light },
    turqouise
} = colors

const Card = styled.div`
    align-self: flex-start;
    border-radius: 16.5px;
    width: 400px;
    height: 250px;
    grid-row-start: 1;
    grid-column-start: 2;
    margin: 30px auto;
    box-shadow: ${light};
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 700;
    align-items: center;
`

const Total = styled.p`
    font-size: 60px;
    margin: 10px auto;
    align-self: flex-start;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${turqouise};
`

const ItemListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 200px;
    width: 100%;
`

const List = styled.ul``

const Item = styled.li`
    list-style: none;
`

type TotalProps = {
    itemList: string[]
}

const TotalCard: SFC<TotalProps> = ({ itemList }) => (
    <Card>
        <Total>63 $</Total>
        <ItemListContainer>
            <List>
                {itemList.map(x => (
                    <Item>{x}</Item>
                ))}
            </List>
        </ItemListContainer>
    </Card>
)

export default TotalCard
