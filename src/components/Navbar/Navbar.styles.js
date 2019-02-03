import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { colors } from '../../utils/styles/helpers'
import { NavLink } from 'react-router-dom'

const {
    shadows: { light },
    darkNavy,
    cloudGray
} = colors

const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    grid-column: 1 / span 2;
    background: ${darkNavy};
    display: flex;
    box-shadow: ${light};
    justify-content: space-between;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Logo = styled.div`
    height: 100%;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 30px;
    color: white;
    p {
        padding-right: 20px;
        padding-left: 12px;
    }
`

const UserInfo = styled.div`
    width: 250px;
    height: 100%;
    color: ${cloudGray};
    display: flex;
    align-items: center;
    .user-icon {
        font-size: 35px;
    }
`

const Icon = styled(FontAwesomeIcon)`
    padding-left: 20px;
`

const MenuContainer = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const Links = styled(NavLink)`
    text-decoration: none;
    color: white;
    font-size: 19px;
    margin: 23px 10px;
`

export { NavbarContainer, Logo, Icon, UserInfo, MenuContainer, Links }
