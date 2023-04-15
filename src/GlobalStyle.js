import { createGlobalStyle } from 'styled-components';

import baseFont from './fonts/louisgeorgecafe.ttf';
import pixel from './fonts/W95FA.otf';

export const GlobalStyle = createGlobalStyle`

    :root {
        
        --accentTheme: #3ff2cb;//#50d48e;
        //deepwinterice = #5ca7ed
        //lightcoral = #f08080
        //winterpurple = #9c73f5
        --accentThemeDarker: #35dbb7;//#43b578;
        //darkerice = #2273bf
        //darkercoral = #d65151
        //darkerpurple = #8c64e3
        --accentThemeEvenDarker: #1fad8f;
    }

    * {
        @font-face {
            font-family: "LouisGeorgeCafe";
            src: local("LouisGeorgeCafe"), url(${baseFont});
        }

        @font-face {
            font-family: 'W95FA';
            src: local('W95FA'), url(${pixel});
        }
    }
`;