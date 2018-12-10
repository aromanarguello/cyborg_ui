import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family: 'Roboto';
        src: url('../../../assets/fonts/Roboto-Regular.ttf')
    }

    body {
        background: #7F7FD5;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        /* width: 100vw; */
        height: 100vh;
        max-width: 100vw;
        overflow-y: hidden;
        margin: 0;
        padding: 0;
    }
`;