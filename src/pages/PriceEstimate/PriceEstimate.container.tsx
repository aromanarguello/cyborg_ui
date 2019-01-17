import React, { ChangeEvent, SFC, useState } from 'react'
import styled from 'styled-components'
import { ItemCard, SearchBar, TotalCard } from '../../components/index'

const fakeData = [
    {
        name: 'Glucosa',
        price: 12,
        description: 'La glucosa indica sus niveles de azucar en la sangre'
    },
    {
        name: 'Biometria Hematica',
        price: 12,
        description:
            'datos de tres tipos de células sanguíneas: glóbulos rojos, glóbulos blancos, plaquetas.'
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
        name: 'TSH',
        price: 5.5,
        description: 'Mide Funcion Hormanal de Tiroides'
    },
    {
        name: 'T3 - libre',
        price: 17,
        description: 'Mide Funcion Hormanal de Tiroides'
    },
    {
        name: 'PSA',
        price: 27,
        description: 'Examen de prostata'
    },
    {
        name: 'Glico Hemoglobina',
        price: 17,
        description: 'Mide los niveles de azucar en los eritocitros'
    },
    {
        name: 'LabScan-26',
        price: 32.23,
        description: 'Examen de 26 Marcadores tumorales'
    },
    {
        name: 'HDL',
        price: 17,
        description: 'Mide el colesterol bajo'
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

    const setInput = ({ target: { value } }: { target: { value: string } }) => {
        SetSearchInput(value)
    }

    const setPrice = (e: any) => console.log(e.target)

    return (
        <PriceEstimateContainer>
            <SearchBarContainer>
                <SearchBar setInput={setInput} />
                <TotalCard />
            </SearchBarContainer>
            <ItemContainer className="container">
                {fakeData.map(({ name, price, description }) => (
                    <ItemCard
                    onClick={}
                        name={name}
                        price={price}
                        description={description}
                        setPrice={setPrice}
                    />
                ))}
            </ItemContainer>
        </PriceEstimateContainer>
    )
}

export default PriceEstimate
