import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../utils/styles/helpers'

const {
    shadows: { light },
    turqouise
} = colors

const Card = styled.div`
    border-radius: 16.5px;
    width: 400px;
    height: 250px;
    grid-row-start: 1;
    grid-column-start: 2;
    margin: 0 auto;
    box-shadow: ${light};
    background: #ffffff;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    display: flex;
    justify-content: center;
    font-weight: 700;
`

const Total = styled.p`
    font-size: 60px;
    margin: 10px 0;
    align-self: flex-start;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${turqouise};
`

const TotalCard = () => (
    <Card>
        <Total>63 $</Total>
    </Card>
)

export default TotalCard
