import styled from 'styled-components'
import { colors } from '../../../utils/styles/helpers'

const {
    shadows: { light },
    turqouise
} = colors

const Card = styled.div`
    width: 400px;
    height: 55px;
    margin: 5px 10px;
    border-radius: 16.5px;
    padding: 0 10px;
    background: #ffffff;
    box-shadow: ${light};
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: space-around;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const ItemName = styled.h5`
    width: 78px;
    margin: 0 10px 0 0;
`

const ItemPrice = styled.h1`
    margin: 0;
    display: inline-block;
    align-self: center;
    color: ${turqouise};
`

const ItemDescription = styled.p`
    align-self: center;
    font-size: 10px;
    width: 150px;;
    margin: 0;
    display: block;
    text-align: start;
`
export { Card, ItemName, ItemPrice, ItemDescription }