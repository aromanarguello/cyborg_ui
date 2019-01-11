import { Button, Input, InputAdornment } from '@material-ui/core'
import { AccountCircle, Keyboard } from '@material-ui/icons'
import React, { SFC } from 'react'
import { Mutation } from 'react-apollo'
import { LOGIN_MUTATION } from '../../../graphql/mutations'
import { CardContainer, InnerCardContainer, SubmitRow } from './AuthCard.styles'

type AuthProps = {
    token?: string
    userNamePlaceholder: string
    passwordPlaceholder: string
    emailInput: string
    passwordInput: string
    emailOnChange: (e: any) => void
    passwordOnChange: (e: any) => void
    authorizeUser: (token: string) => void
}

const AuthCard: SFC<AuthProps> = ({
    userNamePlaceholder,
    passwordPlaceholder,
    emailInput,
    passwordInput,
    emailOnChange,
    passwordOnChange,
    authorizeUser
}) => (
    <Mutation mutation={LOGIN_MUTATION}>
        {login => (
            <CardContainer className="cardContainer">
                <InnerCardContainer>
                    <form
                        onSubmit={async e => {
                            e.preventDefault()
                            const {
                                data: {
                                    login: { token }
                                }
                            }: any = await login({
                                variables: {
                                    email: emailInput,
                                    password: passwordInput
                                }
                            })
                            authorizeUser(token)
                        }}
                        method="post"
                    >
                        <Input
                            type="email"
                            className="signInInput"
                            name="emailInput"
                            placeholder={userNamePlaceholder}
                            onChange={emailOnChange}
                            value={emailInput}
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle className="loginIcons" />
                                </InputAdornment>
                            }
                        />
                        <Input
                            className="signInInput"
                            name="passwordInput"
                            type="password"
                            placeholder={passwordPlaceholder}
                            value={passwordInput}
                            onChange={passwordOnChange}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Keyboard className="loginIcons" />
                                </InputAdornment>
                            }
                        />
                        <SubmitRow>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Ingrese
                            </Button>
                        </SubmitRow>
                    </form>
                </InnerCardContainer>
            </CardContainer>
        )}
    </Mutation>
)

export default AuthCard
