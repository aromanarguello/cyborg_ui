import React, { Component } from 'react'
import styled from 'styled-components'
import { ActivityCard, OrderCard, StatsCard } from '../../components/index'

const HomeContainer = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;
`
const BringUp = styled.div`
    margin: -170px auto 0 auto;
`

class Home extends Component {
    public render() {
        return (
            <BringUp>
                <HomeContainer className="home">
                    <ActivityCard />
                    <OrderCard />
                    <StatsCard />
                </HomeContainer>
            </BringUp>
        )
    }
}

export default Home
