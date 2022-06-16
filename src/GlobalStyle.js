import { createGlobalStyle } from 'styled-components';

import baseFont from './louisgeorgecafe.ttf';

export const GlobalStyle = createGlobalStyle`

    :root {
        
        --testVari: #f08080;
    }

    * {
    @font-face {
            font-family: "LouisGeorgeCafe";
            src: local("LouisGeorgeCafe"), url(${baseFont});
        }
    }
`;