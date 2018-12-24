import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        src: url('../../../assets/fonts/Roboto-Regular.ttf')
    }

    body {
        background: #D3CCE3;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #E9E4F0, #D3CCE3);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #E9E4F0, #D3CCE3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        height: 100vh;
        max-width: 100vw;
        overflow-y: hidden;
        margin: 0;
        padding: 0;
    }
`;