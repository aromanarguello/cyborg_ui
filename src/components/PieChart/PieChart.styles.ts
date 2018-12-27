import styled from 'styled-components'
import { colors } from '../../utils/styles/helpers'

const { grey } = colors
const ChartContainer = styled.div`
    width: 270px;
    height: 250px;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`

const PieChartContainer = styled.div`
    width: 270px;
    height: 250px;
`

const Description = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: ${grey};
    position: absolute;
    top: 130px;
`

export { ChartContainer, PieChartContainer, Description }
