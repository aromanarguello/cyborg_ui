import React, { SFC } from 'react'
import { Card, CardContainer } from '../Cards.styles'

import HeadShot from '../../../assets/images/headshot.jpg'
import { USER_QUERY } from '../../../graphql/queries'
import { Query } from 'react-apollo'
import { PulseLoader } from 'react-spinners'

import {
    Main,
    InnerContainer,
    ProfileImage,
    UserInfo
} from './ProfileCard.styles.js'
import { colors } from '../../../utils/styles/helpers'

const { pastelBlue, darkNavy } = colors

const ProfileCard: SFC<any> = () => (
    <CardContainer width={500}>
        <Card>
            <InnerContainer>
                <Main>
                    <ProfileImage src={HeadShot} alt="headshot" />
                </Main>
                <Query
                    query={USER_QUERY}
                    variables={{ email: 'test@test.com' }}
                >
                    {({ data: { fetchUser }, loading }) =>
                        loading ? (
                            <UserInfo>
                                <PulseLoader
                                    size={15}
                                    loading={loading}
                                    color={pastelBlue}
                                />
                            </UserInfo>
                        ) : (
                            <UserInfo>
                                <p>{`Dr, ${fetchUser.firstName} ${
                                    fetchUser.lastName
                                }`}</p>
                                <p>{fetchUser.specialty}</p>
                                <p>{fetchUser.guId}</p>
                            </UserInfo>
                        )
                    }
                </Query>
            </InnerContainer>
        </Card>
    </CardContainer>
)

export default ProfileCard
