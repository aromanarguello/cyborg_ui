import styled from 'styled-components'
import { colors } from '../../../utils/styles/helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const {
    shadows: { light },
    turqouise
} = colors

type IconProp = {
    name: string
    value: number
}

const Card: any = styled.div`
    width: 100%;
    height: 55px;
    margin: 5px 10px;
    border-radius: 16.5px;
    padding: 0 10px;
    background: #ffffff;
    box-shadow: ${light};
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: space-around;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const ItemName: any = styled.h5`
    width: 78px;
    margin: 0 10px 0 0;
`

const ItemPrice: any = styled.h1`
    margin: 0;
    display: inline-block;
    align-self: center;
    color: ${turqouise};
`

const Icon: any = styled.p`
    color: red;
    font-size: 32px;
    cursor: pointer;
`

const IconWrapper: any = styled.div``
export { Card, ItemName, ItemPrice, Icon, IconWrapper }
