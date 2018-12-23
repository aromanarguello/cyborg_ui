import React, { SFC } from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppContainer } from './App.styles'
import { Credentials } from './components'
import { client } from './graphql/client'
import { GlobalStyle } from './utils/styles/global'

const App: SFC<any> = () => (
    <ApolloProvider client={client}>
        <AppContainer className="app">
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route path="/" component={Credentials} />
                </Switch>
            </Router>
        </AppContainer>
    </ApolloProvider>
)

export default App
