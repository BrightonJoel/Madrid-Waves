import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyles = createGlobalStyle`
    ${normalize};

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
        font-family: ${({ theme }) => theme.fonts.secondary};
    }

    body {
        background: ${({ theme }) => theme.colors.lightGrey};
        cursor: default;
    }

    h1, h2, h3, h4, h5, h6, button {
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 700;
    }
    
    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`
export default GlobalStyles
