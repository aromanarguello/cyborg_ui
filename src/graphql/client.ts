import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
})

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token')
    // return the headers to the context so httpLink can read them
    return {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})
