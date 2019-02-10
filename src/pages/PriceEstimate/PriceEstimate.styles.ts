import styled from 'styled-components'
import { colors } from '../../utils/styles/helpers'

const {
    shadows: { light }
} = colors

const BringUp = styled.div`
    margin: -140px auto 0 auto;
`

const PriceEstimateContainer = styled.div`
    display: grid;
    width: 1200px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 400px);
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    box-shadow: ${light};
    border-radius: 12.5px;
    background-color: white;
`
const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-column-start: 1;
    margin: 0 0 0 0;
    grid-column-start: 1;
    grid-row-start: 1;
    width: 100%;
    height: 560px;
    overflow: hidden;
    overflow-y: scroll;
    grid-row: 1 / span 2;
`

const SearchBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    grid-row-start: 1;
    grid-column-start: 1;
    align-self: flex-start;
    margin-left: 10px;
`
export { PriceEstimateContainer, ItemContainer, SearchBarContainer, BringUp }
