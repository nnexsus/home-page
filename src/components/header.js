import styled from 'styled-components';

const Wrapper = styled.div`

    width: 100%;
    margin: -15px 0 0 5vw;
    max-width: 90vw;
    position: fixed;
    z-index: 50;
    filter: drop-shadow(0 0 8px var(--accentTheme));

    .header {
        height: 35px;
        --aug-border-all: 2px;
        --aug-border-bg: var(--accentTheme);
        --aug-inlay-bg: rgba(0, 0, 0, 0.7);
        --aug-t-center: 43%;
        filter: drop-shadow(0px 0px 7px white);
        display: grid;
        grid-template-columns: calc(43% - 77px) 67%;
        grid-template-rows: 100%;
        z-index: 10;
    }

    .buttons {
        margin-left: 50px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 20%);
        grid-template-rows: 30px;
        z-index: 9;
    }

    button {
        background: rgba(50, 50, 50, 1);
        margin-top: 5px;
        padding: 3px;
        padding-left: 8px;
        padding-right: 8px;
        border: solid 2px var(--accentTheme);
        cursor: pointer;
        color: white;
        transition: 0.1s ease-in-out;
        font-family: monospace;
        font-size: 1vw;
        white-space: nowrap;

        :hover {
            background: rgba(128, 128, 128, 0.7);
        }

        a {
            color: white;
            text-decoration: none;
        }
    }

    .rightSide {
        margin-left: 60px;
        font-size: 40px;
        margin-top: -50px;
        font-family: monospace;
        color: #ffffff;
        text-shadow: 0px 0px 6px black;
        -webkit-text-stroke: var(--accentTheme);
        -webkit-text-stroke-width: 1px;
        letter-spacing: 4px;
        z-index: 8;
    }

    .rightButtons {
        grid-column: 3;
        float: right;
        display: flex;
        align-items: center;
        img {
            margin-top: 5px;
            transition: 0.1s ease-in-out;
        }
        a {
            transition: 0.1s ease-in-out;
            margin-right: 5px;
        }
        a:hover {
            transform: scale(1.1);
            img {
                transform: scale(1.1);
                filter: drop-shadow(2px 4px 6px black);
            }
        }
    }

    .right-container {
        display: flex;
        margin-right: 25px;
    }

    @media screen and (max-width: 830px) {

        width: 100%;

        .rightSide {
            margin-left: 50px;
        }

        .header {
            --aug-t-center: 266px;
            --aug-t-inset1: -15px;
        }
        
        .buttons {
            display: none;
        }
        .header {
            grid-template-columns: 100%;
        }
        .right-container {
            display: grid;
            justify-content: start;
        }
    }
    
    @media screen and (max-width: 500px) {

        width: 94.2%;

        .header {
            --aug-t-center: 245px;
            --aug-t-extend1: -20px;
        }

        .buttons {
            display: none;
        }

        .rightButtons {
            display: none;
        }
        .right-container {
            display: block;
            margin-right: 0px;
        }
    }

    .text-stroke {
        font-size: 110px;
        margin-top: 1px;
        margin-left: 110px;
        font-family: monospace;
        letter-spacing: 4px;
        opacity: 0;
        fill: black;
        stroke: var(--accentTheme);
        stroke-width: 0.8;
        stroke-dasharray: 100%;
        stroke-dashoffset: 100%;
        animation: textStrokeAnim 4000ms 4s ease-out both;
        animation-iteration-count: 1;
        filter: drop-shadow(2px 2px 10px white);
        display: block;
    }

    @media screen and (min-width: 1800px) {
        button {
            a {
                margin-top: -10px;
            }
            font-size: 0.75vw;
        }
    }

    @keyframes textStrokeAnim {
        0% {
            stroke-dasharray: 100%;
            stroke-dashoffset: 100%;
            fill: gray;
            letter-spacing: 12px;
            opacity: 0.1;
            filter: drop-shadow(2px 2px 10px black);
        }
        100% {
            stroke-dasharray: 0%;
            stroke-dashoffset: 0%;
            fill: white;
            letter-spacing: 4px;
            opacity: 1;
            filter: drop-shadow(2px 2px 10px white);
        }
    }

`;


const Header = () => {

    

    return (
        <Wrapper>
            <div data-augmented-ui="tl-clip t-rect-x br-clip bl-rect-x both" className="header">
                <div className='buttons'>
                    <button onClick={() => {window.scrollTo(0, 0, {behavior: 'smooth'})}}>Top</button>
                    <button><a href="#desktop">Desktop</a></button>
                    <button><a href="#projects">Projects</a></button>
                    <button><a href="#about-panel">About</a></button>
                    <button style={{paddingRight: "8px", paddingLeft: "8px"}}><a href="#past-panel">Showcase</a></button>
                </div>
                <div className='right-container'>
                    <svg class="text-stroke" viewBox="0 0 1000 100" height="100%">
                        <text class="text" x="20" y="75">nnexsus</text>    
                    </svg>
                    <div className='rightButtons'>
                        <a target="blank" href="https://github.com/nnexsus">  <img loading='lazy' alt='github link' src={'/images/desktop/Github-logo.webp'} height={'23px'} width={'23px'}/>  </a>
                        <a target="blank" href="https://youtube.com/c/nnexsus">  <img loading='lazy' alt='youtube link' src={'/images/desktop/Youtube-logo.webp'} height={'20px'} width={'38px'}/>  </a>
                        <a target="blank" href="https://twitter.com/_nnexsus">  <img loading='lazy' alt='twitter link' src={'/images/desktop/Twitter-logo.webp'} height={'22px'} width={'28px'}/>  </a>
                        <a target="blank" href="https://discord.gg/d8R2tDaBK2">  <img loading='lazy' alt='discord link' src={'/images/desktop/Discord-logo.webp'} height={'23px'} width={'23px'}/>  </a>
                    </div>
                </div>
            </div>
        </Wrapper>
    )

}

export default Header;