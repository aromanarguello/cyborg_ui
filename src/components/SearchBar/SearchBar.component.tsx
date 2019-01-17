import React, { ChangeEvent, SFC, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/styles/helpers'

const {
    shadows: { light }
} = colors

const SearchBarContainer = styled.div`
    grid-row-start: 1;
    grid-column-start: 1;
    width: 400px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0 auto;
    padding: 0 0 20px 0;
`
const SearchBarInput = styled.input`
    width: 350px;
    height: 40px;
    border-radius: 28.5px;
    border: 0;
    box-shadow: ${light};
    padding: 5px 15px;
    &:focus {
        outline: none;
    }
`
type Props = {
    setInput: (e: any) => void
}
const SearchBar: SFC<Props> = ({ setInput }) => (
    <SearchBarContainer>
        <SearchBarInput onChange={setInput} />
    </SearchBarContainer>
)

export default SearchBar
