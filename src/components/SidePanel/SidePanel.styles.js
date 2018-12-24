import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from '../../utils/styles/helpers'

const { darkNavy, white } = colors

const SidePanelContainer = styled.div`
    grid-row-start: 2;
    grid-column-start: 1;
    width: 100%;
    height: 100%;
    background-color: ${darkNavy};
`

const SidePanelList = styled.ul`
    padding: 0;
`
const SidePanelItem = styled.li`
    width: 100%;
    list-style: none;
    color: ${white};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 15px 0;
    height: 50px;
    display: grid;
    grid-template-columns: 50px 200px;
    div {
        grid-column-start: 2;
    }
    align-items: center;
    &:focus,
    &:hover {
        cursor: pointer;
        border-bottom: 1px solid ${white};
    }
`

const Icon = styled(FontAwesomeIcon)`
    width: 100%;
    display: flex;
    justify-items: center;
    margin: 0 auto;
`

export { SidePanelContainer, SidePanelList, SidePanelItem, Icon}