import React, { SFC } from 'react'
import { Card, CardContainer } from '../Cards.styles'
import styled from 'styled-components'
import { colors } from '../../../utils/styles/helpers'
import HeadShot from '../../../assets/images/headshot.jpg'
import { USER_QUERY } from '../../../graphql/queries'
import { Query } from 'react-apollo'
import { PulseLoader } from 'react-spinners'

const { pastelBlue, darkNavy } = colors

const Main = styled.div`
    padding: 15px 0 20px 0;
    margin: 20px 0 0 20px;
    display: inline-block;
`
const InnerContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
`

const ProfileImage = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display: inline-block;
`
const UserInfo = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    text-align: start;

    p {
        margin: 5px 0;
        font-weight: 500;
        color: ${pastelBlue};
    }
`

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
                                <p>{`Dr, ${fetchUser.user.firstName} ${
                                    fetchUser.user.lastName
                                }`}</p>
                                <p>{fetchUser.user.specialty}</p>
                                <p>{fetchUser.id}</p>
                            </UserInfo>
                        )
                    }
                </Query>
            </InnerContainer>
        </Card>
    </CardContainer>
)

export default ProfileCard
