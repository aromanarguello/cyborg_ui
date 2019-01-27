import gql from 'graphql-tag'

export const USER_QUERY = gql`
    query fetchUser($email: String!) {
        fetchUser(email: $email) {
            email
            firstName
            lastName
            middleName
        }
    }
`
