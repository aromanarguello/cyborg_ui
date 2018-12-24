import React from 'react'
import { Icon, Logo, NavbarContainer, UserInfo } from './Navbar.styles'

const Navbar = () => (
    <NavbarContainer>
        <Logo>
            <Icon icon="flask" />
            <p>Cyborg</p>
        </Logo>
        <UserInfo>
            <p>Hola, Alejandro Roman</p>
            <Icon className="user-icon" icon="user-circle" />
        </UserInfo>
    </NavbarContainer>
)

export default Navbar
