import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { AuthCard } from '../../components/index'
import { setSession } from '../../services'

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

    /**
     * Sets session with token
     * If successful, redirects user to home page
     */
    public authorizeUser = (token: string) => {
        const { history } = this.props
        if (token) setSession(token)
        return history.push('/inicio')
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
                authorizeUser={this.authorizeUser}
            />
        )
    }
}

export default Credentials
