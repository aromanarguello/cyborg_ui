import React, { ChangeEvent, SFC, useState } from 'react'
import { ItemCard, SearchBar, TotalCard } from '../../components/index'
import {
    ItemContainer,
    PriceEstimateContainer,
    SearchBarContainer
} from './PriceEstimate.styles'

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

type ValueProps = {
    target: {
        value: string
    }
}

const PriceEstimate: SFC<any> = () => {
    const [searchInput, SetSearchInput] = useState('')
    const [item, setItem] = useState([String()])
    const [total, setTotal] = useState(0)

    const setInput = ({ target: { value } }: ValueProps) => {
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
