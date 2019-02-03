import React from 'react'
import {
    Icon,
    Logo,
    NavbarContainer,
    UserInfo,
    MenuContainer,
    Links
} from './Navbar.styles'

const Navbar = () => (
    <NavbarContainer>
        <Logo>
            <Icon icon="flask" />
            <p>Cyborg</p>
        </Logo>
        <MenuContainer>
            <Links to="/inicio">Inicio</Links>
            <Links to="/cotizacion">Cotizacion</Links>
        </MenuContainer>
        <UserInfo>
            <p>Hola, Alejandro Roman</p>
            <Icon className="user-icon" icon="user-circle" />
        </UserInfo>
    </NavbarContainer>
)

export default Navbar
