import styled from 'styled-components'
import { colors } from './utils/styles/helpers'

const {
    white,
    shadows: { base }
} = colors

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 100px 1fr;
`
const DashboardContainer = styled.div`
    width: 1200px;
    height: 700px;
    background-color: ${white};
    grid-row-start: 2;
    margin: 0 auto;
    box-shadow: ${base};
    display: grid;
    grid-template-rows: 70px 630px;
    grid-template-columns: 250px 950px;
`

export { AppContainer, DashboardContainer }
