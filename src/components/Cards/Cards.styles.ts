import styled from 'styled-components'
import { colors } from '../../utils/styles/helpers'

const {
    darkNavyTwo,
    shadows: { light }
} = colors

type CardProp = {
    width?: number
}

const CardContainer = styled.div`
    width: ${({ width }: CardProp) => `${width}px`};
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Card = styled.div`
    background-color: #ffffff;
    height: 90%;
    width: ${({ width }: CardProp) =>
        width !== undefined ? width + '%' : '90%'};
    box-shadow: ${light};
    margin: 0;
    display: inline-block;
    border-radius: 12.5px;
`

const CardHeader = styled.div`
    height: 50px;
    color: ${darkNavyTwo};
    letter-spacing: 1px;
    p {
        font-size: 23px;
        padding-left: 20px;
        padding-top: 20px;
    }
`

export { CardContainer, Card, CardHeader }
