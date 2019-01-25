import React, { Component } from 'react'
import styled from 'styled-components'
import {
    ActivityCard,
    OrderCard,
    StatsCard,
    ProfileCard
} from '../../components/index'

const HomeContainer = styled.div`
    border: 1px solid;
    width: 1200px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 600px);
    grid-template-rows: repeat(2, 300px);
    margin: 0 auto;
    padding: 70px;
`
const BringUp = styled.div`
    margin: -170px auto 0 auto;
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
