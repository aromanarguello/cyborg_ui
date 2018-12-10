import React, { Component } from 'react';
import { AuthCard } from '../index';
import {
    CardContainer,
    InnerCardContainer,
    SubmitRow
} from './Crendentials.styles';

// interface AppProps {
//     token?: string
//     onClick(e: MouseEvent<HTMLElement>): void
// }

interface State {
    readonly userNamePlaceholder: string
    readonly passwordPlaceholder: string
    readonly emailInput: string
    readonly passwordInput: string
}

class Credentials extends Component<any, State> {
    public state = {
        userNamePlaceholder: 'Usuario',
        passwordPlaceholder: 'Contrasena',
        emailInput: String(),
        passwordInput: String()
    };
    public render() {
        const {
            userNamePlaceholder,
            passwordPlaceholder,
            emailInput,
            passwordInput
        } = this.state;
        return (
            <AuthCard
                userNamePlaceholder={userNamePlaceholder}
                passwordPlaceholder={passwordPlaceholder}
                emailInput={emailInput}
                passwordInput={passwordInput}
            />
        );
    }
}

export default Credentials;
