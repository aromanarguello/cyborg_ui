import React, { Component } from 'react'
import styled from 'styled-components'

const PriceEstimateContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
`

class PriceEstimate extends Component {
    public render() {
        return <PriceEstimateContainer />
    }
}

export default PriceEstimate
