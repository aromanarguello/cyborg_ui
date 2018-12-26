import styled from 'styled-components'
import { colors } from '../../../utils/styles/helpers'

interface ItemProp {
    index: number
}
interface StyledProps {
    isComplete?: boolean
}

const { grey, green, red } = colors

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
    background-color: ${({ isComplete }: StyledProps) =>
        isComplete ? red : green};
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
    TableContainer,
    Table,
    TableList,
    TableItem,
    ChipContainer,
    Chip,
    Text
}
