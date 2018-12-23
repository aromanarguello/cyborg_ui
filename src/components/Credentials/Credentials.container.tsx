import React, { Component } from 'react'
import { AuthCard } from '../index'
import {
    CardContainer,
    InnerCardContainer,
    SubmitRow
} from './Crendentials.styles'

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
    constructor(props: any) {
        super(props)
        this.state = {
            userNamePlaceholder: 'Usuario',
            passwordPlaceholder: 'Contrasena',
            emailInput: String(),
            passwordInput: String()
        }
        this.emailOnChange = this.emailOnChange.bind(this)
    }

    /**
     * Sets input email to state
     */
    public emailOnChange = (e: any) => {
        e.preventDefault()
        this.setState({ emailInput: e.target.value })
    }

    /**
     * Sets input password to state
     */
    public passwordOnChange = (e: any) => {
        e.preventDefault()
        this.setState({ passwordInput: e.target.value })
    }

    public render() {
        const {
            userNamePlaceholder,
            passwordPlaceholder,
            emailInput,
            passwordInput
        } = this.state
        return (
            <AuthCard
                userNamePlaceholder={userNamePlaceholder}
                passwordPlaceholder={passwordPlaceholder}
                emailInput={emailInput}
                passwordInput={passwordInput}
                emailOnChange={this.emailOnChange}
                passwordOnChange={this.passwordOnChange}
            />
        )
    }
}

export default Credentials
