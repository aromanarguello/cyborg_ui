import styled from 'styled-components'
import { colors } from '../../utils/styles/helpers'

const {
    shadows: { light }
} = colors

const HomeContainer = styled.div`
    width: 1200px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 600px);
    grid-template-rows: repeat(2, 300px);
    margin: 70px auto;
    padding: 70px;
    justify-content: center;
    background-color: white;
    box-shadow: ${light};
    border-radius: 12.5px;
    padding-left: 2px;
`
const BringUp = styled.div`
    margin: -220px auto 0 auto;
`

export { HomeContainer, BringUp }
