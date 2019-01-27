import React, { Component } from 'react'
import styled from 'styled-components'
import {
    ActivityCard,
    OrderCard,
    ProfileCard,
    StatsCard
} from '../../components/index'

const HomeContainer = styled.div`
    width: 1200px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 600px);
    grid-template-rows: repeat(2, 300px);
    margin: 0 auto;
    padding: 70px;
    justify-content: center;
`
const BringUp = styled.div`
    margin: -220px auto 0 auto;
`

class Home extends Component {
    public render() {
        return (
            <BringUp>
                <HomeContainer className="home">
                    <ProfileCard />
                    <ActivityCard />
                    <OrderCard />
                    <StatsCard />
                </HomeContainer>
            </BringUp>
        )
    }
}

export default Home
