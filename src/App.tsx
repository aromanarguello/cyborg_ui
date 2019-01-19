import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCogs,
    faFlask,
    faHistory,
    faHome,
    faNotesMedical,
    faUserCircle,
    faPlus
} from '@fortawesome/free-solid-svg-icons'
import React, { SFC } from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppContainer, DashboardContainer } from './App.styles'
import { Auth, Navbar, SidePanel } from './components'
import { client } from './graphql/client'
import { Credentials, Home, PriceEstimate } from './pages'
import { GlobalStyle } from './utils/styles/global'

library.add(
    faCogs,
    faHistory,
    faHome,
    faNotesMedical,
    faFlask,
    faUserCircle,
    faPlus
)

const App: SFC<any> = () => (
    <Router>
        <ApolloProvider client={client}>
            <AppContainer className="app">
                <GlobalStyle />
                <Switch>
                    <Route exact={true} path="/" component={Credentials} />
                    <Auth>
                        <DashboardContainer>
                            <Navbar />
                            <SidePanel />
                            <Route path="/inicio" component={Home} />
                            <Route
                                path="/cotizacion"
                                component={PriceEstimate}
                            />
                        </DashboardContainer>
                    </Auth>
                </Switch>
            </AppContainer>
        </ApolloProvider>
    </Router>
)

export default App
