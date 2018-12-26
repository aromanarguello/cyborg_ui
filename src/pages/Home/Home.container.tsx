import React, { Component } from 'react'
import styled from 'styled-components'
import { OrderCard, SidePanel } from '../../components/index'

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
`

class Home extends Component {
    public render() {
        return (
            <HomeContainer>
                <OrderCard />
            </HomeContainer>
        )
    }
}

export default Home
