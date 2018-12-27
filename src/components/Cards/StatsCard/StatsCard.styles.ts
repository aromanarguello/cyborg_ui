import styled from 'styled-components'
const StatsContainer = styled.div`
    grid-column-start: 1;
    grid-row-start: 2;
    grid-column: 1 / span 2;
`

const NumberContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export { StatsContainer, NumberContainer }
