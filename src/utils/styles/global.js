import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        src: url('../../../assets/fonts/Roboto-Regular.ttf')
    }

    body {
        background: #ffffff;
        height: 100vh;
        max-width: 100vw;
        overflow-y: hidden;
        margin: 0;
        padding: 0;
    }
`
