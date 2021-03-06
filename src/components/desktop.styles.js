import styled from 'styled-components';

import MOON from '../images/solarbg.png';

export const Wrapper = styled.div`
    width: 100%;
    min-width: max-content;
    height: 100%;
    min-height: max-content;
    background-image: url(${MOON});
    background-size: cover;
    display: grid;
    grid-template-rows: repeat(6, 100px);
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    margin-bottom: 10px;
    padding: 5px;
    box-shadow: 0px 0px 9px 10px black inset;
    max-width: 99.5%;
    border: solid lightcoral 2px;
    border-radius: 3px;

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
    }

        .container {
            display: flex;
            color: lightcoral;
            box-shadow: 0px 0px 11px 3px lightcoral inset;
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
            --aug-border-bg: lightcoral;
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
            --aug-border-bg: linear-gradient( -135deg, lightcoral 30%, transparent 30% ), linear-gradient( 45deg, lightcoral 5% 29%, transparent 29% ), radial-gradient( circle at top left, lightcoral 0.75in, transparent 0.75in ), linear-gradient( to bottom, transparent 0.0775in, lightcoral 0.0775in 0.2in, transparent 0.2in );
            --aug-inlay-bg: linear-gradient(180deg, rgba(0,0,0,1) -20%, rgba(240,128,128,1) 50px, rgba(120,120,120,0.6) 11%, rgba(120,120,120,0.6) 100%);

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
            color: lightcoral;
            box-shadow: 0px 0px 10px 4px lightcoral;
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
            --aug-border-bg: lightcoral;
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
            --aug-border-bg: linear-gradient( -135deg, lightcoral 30%, transparent 30% ), linear-gradient( 45deg, lightcoral 5% 29%, transparent 29% ), radial-gradient( circle at top left, lightcoral 0.75in, transparent 0.75in ), linear-gradient( to bottom, transparent 0.0775in, lightcoral 0.0775in 0.2in, transparent 0.2in );

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