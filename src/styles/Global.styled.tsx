import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    
    body {
        margin: 0;
        font-family: 'Poppins',  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    ul {
        list-style: none;
        color: #fff;
    }
    button {
        background-color: unset;
        border: none;
    }
    
    section {
        padding: 100px 0;
    }
    
    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg};
    }
    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg};
    }
    #profile {background-color: ${theme.colors.secondaryBg};}
    #portfolio {background-color: ${theme.colors.primaryBg};}
    #footer {background-color: ${theme.colors.secondaryBg};}
`


