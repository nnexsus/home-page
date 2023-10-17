import styled from 'styled-components';

export const Overhead = styled.div`

    transition: 1s ease-in-out;

    .hidden {
        animation: hiddentog 2s ease-in-out 0.2s forwards;
    }

    @keyframes hiddentog {
        0% {
            opacity: 1;
            height: 800px;
        } 99% {
            opacity: 0;
            height: 0px;
        } 100% {
            opacity: 0;
            height: 0px;
            width: 0px;
            display: none;
        }
    }

    .desktogpower {
        display: flex;
        align-items: center;
        background-color: rgba(200,200,200,0.5);
        border-radius: 15px;
        color: white;
        font-family: monospace;
        padding: 40px;

        button {
            background-color: var(--accentTheme);
            border: solid 2px black;
            border-radius: 15px;
            padding: 5px;
            cursor: pointer;
            :hover {
                background-color: var(--accentThemeDarker);
            }
            :active {
                background-color: var(--accentThemeEvenDarker);
            }
        }
    }
`;

export const Wrapper = styled.div`
    background-image: url('images/desktop/anomalybg.webp');
    background-size: cover;
    display: grid;
    grid-template-rows: repeat(6, 100px);
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    margin-bottom: 10px;
    padding: 5px;
    box-shadow: 0px 0px 9px 10px black inset;
    border: solid var(--accentTheme) 2px;
    border-radius: 3px;

    .desktop-icon {
        width: 50px; 
        height: 50px; 
        background-size: contain;
        image-rendering: pixelated;
        :hover {
            cursor: pointer;
            border: dashed white 3px;
        }
    }

    //for power on function
    .powerButton {

        margin: 0 auto;

        h2 {
            font-size: 30px;
            text-align: center;
            -webkit-text-stroke: 1px black;
            margin-bottom: -3px;
        }

        button {
            background-color: var(--accentThemeDarker);
            border: solid 2px black;
            border-radius: 5px;
            padding: 6px;
            color: white;
            transition: 0.1s ease-in-out;

            :hover {
                filter: brightness(1.1);
                cursor: pointer;
            }
        }

    }
    //

    #app {
        margin: 10px;
        width: 100px;
        height: 100px;
    }

    h1, h2, h3, span, th, div {
        font-family: monospace;
        color: white;
    }

    .appName {
        color: white;
        text-shadow: 0px 1px 4px black;
    }

        .container {
            display: flex;
            color: var(--accentTheme);
            box-shadow: 0px 0px 11px 3px var(--accentTheme) inset;
            background-color: black;
            width: 800px;
            height: 400px;
            position: absolute;
            z-index: 5;
            top: 50px;
            left: 50px;

            //shaping tools
            --aug-rect-l1: initial;
            --aug-rect-l2: initial;
            --aug-border-bg: var(--accentTheme);
            --aug-b-offset: 10px;
            --aug-r-offset: -143px;
            --aug-l-offset: -143px;
            --aug-l-inset1: 100px;
            --aug-l-extend1: -20px;
            --aug-r-inset1: 100px;
            --aug-r-extend1: -20px;
            --aug-bl-inset2: 650px;
            --aug-r-center: 203px;
            --aug-l-center: 203px;
            --aug-border-bg: linear-gradient( -135deg, var(--accentTheme) 30%, transparent 30% ), linear-gradient( 45deg, var(--accentTheme) 5% 29%, transparent 29% ), radial-gradient( circle at top left, var(--accentTheme) 0.75in, transparent 0.75in ), linear-gradient( to bottom, transparent 0.0775in, var(--accentTheme) 0.0775in 0.2in, transparent 0.2in );
            --aug-inlay-bg: linear-gradient(180deg, rgba(0,0,0,1) -20%, var(--accentTheme) 50px, rgba(120,120,120,0.6) 11%, rgba(120,120,120,0.6) 100%);

            display: inline-flex;

            .title {
                text-align: left;
                justify-content: center;
                margin: 10px;
                margin-top: 17px;
                margin-left: 20px;
                font-family: monospace;
            }
    
            .X {
                background-color: red;
                border: solid black 2px;
                float: right;
                margin-top: -39px;
                margin-right: 10px;
                width: 60px;
                height: 34px;
            }

            .X:hover {
                background-color: lightcoral;
            }
        }
    

    @media screen and (max-width: 720px) {
       grid-template-columns: repeat(8, 1fr);
       grid-gap: 10px;
       background-position: right;
       
       #app {
           margin: 5px;
           width: 50px;
           height: 50px;
       }

       h1, h2, h3, h4, p {
        font-size: small;
        text-shadow: 0px 0px 4px black;
        }

        .title {
            font-family: monospace;
        }

        .trello, .stats {
            display: none;
        }

        .container {
            color: var(--accentTheme);
            box-shadow: 0px 0px 10px 4px var(--accentTheme);
            background-color: black;
            width: 80%;
            height: 450px;
            position: absolute;
            z-index: 5;
            top: 50px;
            left: 50px;

            //shaping tools
            --aug-rect-l1: initial;
            --aug-rect-l2: initial;
            --aug-border-bg: var(--accentTheme);
            --aug-b-offset: 10px;
            --aug-r-offset: -143px;
            --aug-l-offset: -150px;
            --aug-l-inset1: 100px;
            --aug-l-extend1: -20px;
            --aug-r-inset1: 100px;
            --aug-r-extend1: -20px;
            --aug-bl-inset2: 650px;
            --aug-r-center: 203px;
            --aug-l-center: 203px;
            --aug-border-bg: linear-gradient( -135deg, var(--accentTheme) 30%, transparent 30% ), linear-gradient( 45deg, var(--accentTheme) 5% 29%, transparent 29% ), radial-gradient( circle at top left, var(--accentTheme) 0.75in, transparent 0.75in ), linear-gradient( to bottom, transparent 0.0775in, var(--accentTheme) 0.0775in 0.2in, transparent 0.2in );

            display: block;

            .title {
                text-align: left;
                justify-content: center;
                margin: 10px;
                margin-top: 17px;
                margin-left: 20px;
                font-family: monospace;
            }
    
            .X {
                background-color: red;
                border: solid black 2px;
                float: right;
                margin-top: -39px;
                margin-right: 10px;
                width: 60px;
                height: 34px;
            }

            .X:hover {
                background-color: lightcoral;
            }
        }
    }

    @media screen and (max-width: 420px) {
       grid-template-columns: repeat(4, 70px);
       grid-gap: 5px;
       overflow: hidden;
       
       #app {
           margin: 5px;
           width: 50px;
           height: 50px;
       }

       h1, h2, h3, h4, p {
        font-size: small;
        }

        .twofour, .trello, .stats {
            display: none;
        }

    }
    
`;

export const Img = styled.img`
    width: 50px;
    //height: 50px;

    @media screen and (max-width: 720px) {
        width: 25px;
        height: 25px;
    }
`;

export const ShortcutImg = styled.img`
    width: 15px;
    position: absolute;
    margin-top: -58px;
    margin-left: 17px;

    @media screen and (max-width: 720px) {
        width: 10px;
        height: 10px;
        margin-top: -47px;
        margin-left: 12px;
    }
`;