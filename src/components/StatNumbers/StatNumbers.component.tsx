import React, { SFC } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/styles/helpers'

const {
    gradient: { lightPurple },
    grey
} = colors

const StatContainer = styled.div`
    width: 270px;
    height: 250px;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Stats = styled.p`
    font-size: 65px;
    background: ${lightPurple};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    font-weight: 700;
`

const Description = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: ${grey};
`

interface StatProp {
    value: number
    description: string
}

const StatNumbers: SFC<StatProp> = ({ value, description }) => (
    <StatContainer>
        <Stats>{value}</Stats>
        <Description>{description}</Description>
    </StatContainer>
)

export default StatNumbers
