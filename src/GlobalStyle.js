import { createGlobalStyle } from 'styled-components';

import baseFont from './louisgeorgecafe.ttf';

export const GlobalStyle = createGlobalStyle`

    :root {
        
        --accentTheme: #5ca7ed;
        //lightcoral = #f08080
        //winterpurple = #9c73f5
        --accentThemeDarker: #2273bf;
        //darkercoral = #d65151
        //darkerpurple: #8c64e3
    }

    * {
        @font-face {
            font-family: "LouisGeorgeCafe";
            src: local("LouisGeorgeCafe"), url(${baseFont});
        }

        @font-face {
            font-family: 'W95FA';
            src: local('W95FA'), url(./fonts/W95FA.otf) format('opentype');
        }
    }
`;