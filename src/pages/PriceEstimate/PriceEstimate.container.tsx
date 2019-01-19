import React, { ChangeEvent, SFC, useState } from 'react'
import styled from 'styled-components'
import { ItemCard, SearchBar, TotalCard } from '../../components/index'

const fakeData = [
    {
        name: 'Glucosa',
        price: 12,
        icon: 'fas fa-plus'
    },
    {
        name: 'Biometria Hematica',
        price: 12,
        icon: 'fas fa-plus'
    },
    {
        name: 'Glucosa',
        price: 12,
        icon: 'fas fa-plus'
    },
    {
        name: 'Glucosa',
        price: 12,
        icon: 'fas fa-plus'
    },
    {
        name: 'TSH',
        price: 5.5,
        icon: 'fas fa-plus'
    },
    {
        name: 'T3 - libre',
        price: 17,
        icon: 'fas fa-plus'
    },
    {
        name: 'PSA',
        price: 27,
        icon: 'fas fa-plus'
    },
    {
        name: 'Glico Hemoglobina',
        price: 17,
        icon: 'fas fa-plus'
    },
    {
        name: 'LabScan-26',
        price: 32.23,
        icon: 'fas fa-plus'
    },
    {
        name: 'HDL',
        price: 17,
        icon: 'fas fa-plus'
    }
]

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
    margin: 50px 0 0 0;
    grid-column-start: 1;
    width: 475px;
    height: 560px;
    overflow: hidden;
    overflow-y: scroll;
`

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const PriceEstimate: SFC<any> = () => {
    const [searchInput, SetSearchInput] = useState('')
    const [item, setItem] = useState([String()])

    const setInput = ({ target: { value } }: { target: { value: string } }) => {
        SetSearchInput(value)
    }

    const createItemList = (e: any) =>
        setItem([...item, `${e.target.getAttribute('name')}`])

    return (
        <PriceEstimateContainer>
            <SearchBarContainer>
                <SearchBar setInput={setInput} />
                <TotalCard itemList={item} />
            </SearchBarContainer>
            <ItemContainer className="container">
                {fakeData.map(({ name, price }, index) => (
                    <ItemCard
                        name={name}
                        price={price}
                        setPrice={createItemList}
                        key={index}
                    />
                ))}
            </ItemContainer>
        </PriceEstimateContainer>
    )
}

export default PriceEstimate
