import { createGlobalStyle } from 'styled-components';

import baseFont from './louisgeorgecafe.ttf';

export const GlobalStyle = createGlobalStyle`

    :root {
        
        --accentTheme: #9c73f5;
        //lightcoral = #f08080
        //winterpurple = #9c73f5
        --accentThemeDarker: #8c64e3;
        //darkercoral = #d65151
    }

    * {
    @font-face {
            font-family: "LouisGeorgeCafe";
            src: local("LouisGeorgeCafe"), url(${baseFont});
        }
    }
`;