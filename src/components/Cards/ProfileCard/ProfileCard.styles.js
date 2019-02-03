import styled from 'styled-components'
import { colors } from '../../../utils/styles/helpers'

const { pastelBlue } = colors

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

export { Main, InnerContainer, ProfileImage, UserInfo }
