import React, { SFC } from 'react'
import {
    ActivityCard,
    OrderCard,
    ProfileCard,
    StatsCard
} from '../../components/index'
import { BringUp, HomeContainer } from './Home.styles.js'

const Home: SFC<any> = () => (
    <BringUp>
        <HomeContainer>
            <ProfileCard />
            <ActivityCard />
            <OrderCard />
            <StatsCard />
        </HomeContainer>
    </BringUp>
)

export default Home
