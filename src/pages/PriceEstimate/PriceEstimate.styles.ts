import styled from 'styled-components'

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
export { PriceEstimateContainer, ItemContainer, SearchBarContainer }
