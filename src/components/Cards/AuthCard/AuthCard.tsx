import { Button, Input, InputAdornment, withStyles } from '@material-ui/core';
import { AccountCircle, Keyboard } from '@material-ui/icons';
import React, { SFC } from 'react';
import { Mutation } from 'react-apollo';
import { LOGIN_MUTATION } from '../../../graphql/mutations';
import { CardContainer, InnerCardContainer, SubmitRow } from './AuthCard.styles';

interface AuthProps {
    token?: string
    userNamePlaceholder: string
    passwordPlaceholder: string
    emailInput: string
    passwordInput: string
}

const AuthCard: SFC<AuthProps> = ({
    userNamePlaceholder,
    passwordPlaceholder,
    emailInput,
    passwordInput
}) => (
    <Mutation mutation={LOGIN_MUTATION}>
        {login => (
            <CardContainer className="cardContainer">
                <InnerCardContainer>
                    <form
                        onSubmit={async e => {
                            e.preventDefault();
                            // const data: any;
                            const {
                                data: {
                                    login: {
                                        token,
                                        user: {
                                            firstName,
                                            middleName,
                                            lastName,
                                            email,
                                            id
                                        }
                                    }
                                }
                            }: any = await login({
                                variables: {
                                    email: emailInput,
                                    password: passwordInput
                                }
                            });
                        }}
                        method="post"
                    >
                        <Input
                            type="email"
                            className="signInInput"
                            name="emailInput"
                            placeholder={userNamePlaceholder}
                            // onChange={inputOnChange}
                            // value={emailInput}
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
                            // value={passwordInput}
                            // onChange={inputOnChange}
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
);

export default AuthCard;
