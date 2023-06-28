import { createGlobalStyle } from 'styled-components';

import baseFont from './fonts/louisgeorgecafe.woff2';
import pixel from './fonts/W95FA.otf';

const themes = {
    sunrise: {theme: "#eba773", dark: "#e08a48", darker: "#c97432"}, //citrine sunrise orange
    bayside: {theme: "#3ff2cb", dark: "#35dbb7", darker: "#1fad8f"}, //bayside sky seagreen
    tjungle: {theme: "#50d48e", dark: "#43b578", darker: "#2f8a59"}, //thicker jungle verdant green
    ltcoral: {theme: "#f08080", dark: "#d65151", darker: "#b82c2c"}, //light coral red
    cirrsky: {theme: "#5ca7ed", dark: "#2273bf", darker: "#1e588f"}, //cirrus sky blue
    wintpur: {theme: "#9c73f5", dark: "#8c64e3", darker: "#774cd4"}  //endless winter sunset purple
}

export const GlobalStyle = createGlobalStyle`

    :root {
        --accentTheme:
        ${(new Date).getHours() > 4 ?
         (new Date).getHours() < 8 ? themes.sunrise.theme :
         (new Date).getHours() < 12 ? themes.bayside.theme :
         (new Date).getHours() < 16 ? themes.tjungle.theme :
         (new Date).getHours() < 20 ? themes.ltcoral.theme :
         (new Date).getHours() < 24 ? themes.cirrsky.theme : themes.wintpur.theme : themes.wintpur.theme};
        --accentThemeDarker:
        ${(new Date).getHours() > 4 ?
         (new Date).getHours() < 8 ? themes.sunrise.dark :
         (new Date).getHours() < 12 ? themes.bayside.dark :
         (new Date).getHours() < 16 ? themes.tjungle.dark :
         (new Date).getHours() < 20 ? themes.ltcoral.dark :
         (new Date).getHours() < 24 ? themes.cirrsky.dark : themes.wintpur.dark : themes.wintpur.dark};
        --accentThemeEvenDarker:
        ${(new Date).getHours() > 4 ?
         (new Date).getHours() < 8 ? themes.sunrise.darker :
         (new Date).getHours() < 12 ? themes.bayside.darker :
         (new Date).getHours() < 16 ? themes.tjungle.darker :
         (new Date).getHours() < 20 ? themes.ltcoral.darker :
         (new Date).getHours() < 24 ? themes.cirrsky.darker : themes.wintpur.darker : themes.wintpur.darker};
    }

    * {
        @font-face {
            font-family: "LouisGeorgeCafe";
            src: local("LouisGeorgeCafe"), url(${baseFont});
            font-display: swap;
        }

        @font-face {
            font-family: 'W95FA';
            src: local('W95FA'), url(${pixel});
            font-display: swap;
        }
    }
`;