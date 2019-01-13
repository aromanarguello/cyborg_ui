import React, { SFC, useState } from 'react'
import styled from 'styled-components'
import { ItemCard, SearchBar } from '../../components/index'

const PriceEstimateContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row: 2 / span 3;
`
const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-row: 1 / span 3;
`
const fakeData = [
    {
        name: 'Glucosa',
        price: 12,
        description: 'La glucosa indica sus niveles'
    },
    {
        name: 'Glucosa',
        price: 12,
        description: 'La glucosa indica sus niveles'
    },
    {
        name: 'Glucosa',
        price: 12,
        description: 'La glucosa indica sus niveles'
    },
    {
        name: 'Glucosa',
        price: 12,
        description: 'La glucosa indica sus niveles'
    }
]

const PriceEstimate: SFC<any> = () => {
    const [searchInput, SetSearchInput] = useState('')

    const setInput = ({ target: { value } }: { target: { value: string } }) => {
        SetSearchInput(value)
    }

    return (
        <PriceEstimateContainer>
            <ItemContainer>
                <SearchBar setInput={setInput} />
                {fakeData.map(x => (
                    <ItemCard />
                ))}
            </ItemContainer>
        </PriceEstimateContainer>
    )
}

export default PriceEstimate
