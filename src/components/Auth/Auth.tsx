import React, { ReactChild, ReactNode } from 'react'
import { Credentials } from '../../pages/index'
import { hasTokens } from '../../services'

interface Props {
    children: JSX.Element
}

export const Auth = ({ children }: Props) =>
    hasTokens() ? children : <Credentials />
