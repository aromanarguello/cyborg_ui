import styled from 'styled-components'
import { colors } from '../../utils/styles/helpers'

const {
    white,
    gray,
    shadows: { light }
} = colors

type GridProp = {
    grid?: number
    width?: number | undefined
}

const CardContainer = styled.div`
    grid-column-start: ${({ grid }: GridProp) => grid};
    grid-row-start: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Card = styled.div`
    background-color: ${white};
    height: 90%;
    width: ${({ width }: GridProp) =>
        width !== undefined ? width + '%' : '90%'};
    box-shadow: ${light};
    margin: 0;
    display: inline-block;
    border-radius: 12.5px;
`

const CardHeader = styled.div`
    height: 50px;
    color: ${gray};
    letter-spacing: 1px;
    p {
        padding-left: 20px;
        padding-top: 20px;
    }
`

export { CardContainer, Card, CardHeader }
