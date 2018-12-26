import styled from 'styled-components'
import { colors } from '../../../utils/styles/helpers'

interface ItemProp {
    index: number
}
interface StyledProps {
    isComplete?: boolean
}

const {
    white,
    gray,
    grey,
    green,
    red,
    shadows: { light }
} = colors

const OrderCardContainer = styled.div`
    grid-column-start: 2;
    grid-row-start: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const StyledOrderCard = styled.div`
    background-color: ${white};
    height: 90%;
    width: 90%;
    box-shadow: ${light};
    margin: 0;
    display: inline-block;
    border-radius: 12.5px;
`

const CardHeader = styled.div`
    height: 50px;
    color: ${gray};
    letter-spacing: 1px;
    p {
        padding-left: 20px;
        padding-top: 20px;
    }
`
const TableContainer = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
`

const Table = styled.div`
    border-top: 1.5px solid rgba(158, 158, 158, 0.5);
    border-bottom: 1.5px solid rgba(158, 158, 158, 0.5);
    height: 180px;
    width: 400px;
    overflow: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        background: transparent;
    }
    display: inline-block;
`

const TableList = styled.ul`
    padding: 0;
`

const TableItem = styled.li`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-bottom: ${({ index }: ItemProp) =>
        index !== 9 && '1px solid rgba(158, 158, 158, 0.3)'};
`

const Text = styled.p`
    margin: 15px;
    color: ${grey};
`

const ChipContainer = styled.div`
    width: 100%;
    height: 100%;
    border-right: 1px solid rgba(158, 158, 158, 0.3);
`

const Chip = styled.p`
    background-color: ${(props: StyledProps) =>
        props.isComplete ? red : green};
    color: white;
    font-size: 12px;
    border-top-left-radius: 28.5px;
    border-bottom-left-radius: 28.5px;
    display: flex;
    height: 22px;
    width: 96px;
    justify-content: center;
    align-items: center;
`

export {
    OrderCardContainer,
    StyledOrderCard,
    CardHeader,
    TableContainer,
    Table,
    TableList,
    TableItem,
    ChipContainer,
    Chip,
    Text
}
