import React, { SFC, useState } from 'react'
import styled from 'styled-components'
import { SearchBar } from '../../components/index'

const PriceEstimateContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
`

const PriceEstimate: SFC<any> = () => {
    const [searchInput, SetSearchInput] = useState('')

    const setInput = ({ target: { value } }: { target: { value: string } }) => {
        SetSearchInput(value)
    }

    return (
        <PriceEstimateContainer>
            <SearchBar setInput={setInput} />
        </PriceEstimateContainer>
    )
}

export default PriceEstimate
