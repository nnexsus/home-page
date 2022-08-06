import styled from 'styled-components';

import Twitter from '../images/Twitter-logo.png';
import Youtube from '../images/Youtube-logo.png';
import Github from '../images/Github-logo.webp';
import Discord from '../images/Discord-logo.webp';

const Wrapper = styled.div`

    width: 100%;
    margin: 0 auto;
    margin-top: -15px;
    position: fixed;
    z-index: 10;

    .header {
        height: 35px;
        --aug-border-all: 2px;
        --aug-border-bg: lightcoral;
        --aug-inlay-bg: rgba(0, 0, 0, 0.7);
        --aug-t-center: 436px;
        filter: drop-shadow(0px 0px 7px white);
        display: flex;
    }

    .buttons {
        margin-left: 50px;
    }

    button {
        background: rgba(0, 0, 0, 0.2);
        margin-top: 5px;
        padding: 3px;
        padding-left: 8px;
        padding-right: 8px;
        border: solid 2px lightcoral;
        cursor: pointer;
        color: white;
        transition: 0.1s ease-in-out;
        font-family: monospace;

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
        color: #ffffff00;
        text-shadow: 0px 0px 6px black;
        -webkit-text-stroke: lightcoral;
        -webkit-text-stroke-width: 1px;
        letter-spacing: 4px;
    }

    .rightButtons {

        margin-right: 10px;
        margin-left: auto;

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

    @media screen and (max-width: 830px) {
        .header {
            --aug-t-center: 266px;
        }
        
        .buttons {
            display: none;
        }
    }

    @media screen and (max-width: 500px) {
        .header {
            --aug-t-center: 245px;
            --aug-t-extend1: -20px;
        }

        .buttons {
            display: none;
        }
    }

`;


const Header = () => {

    

    return (
        <Wrapper>
            <div data-augmented-ui="tl-clip t-rect-x br-clip bl-rect-x both" className="header">
                <div className='buttons'>
                    <button onClick={() => {
                        window.scrollTo(
                        0,
                        0,
                        {behavior: 'smooth'}    )}
                    }>Top</button>
                    <button><a href="#desktop">Desktop</a></button>
                    <button><a href="#panels">About and Links</a></button>
                    <button><a href="#past">Past Projects</a></button>
                </div>
                <div className='rightSide'>
                    <p>nnexsus</p>
                </div>
                <div className='rightButtons'>
                    <a target="blank" href="https://twitter.com/_nnexsus">  <img alt='twitter link' src={Twitter} height={"70%"}/>  </a>
                    <a target="blank" href="https://youtube.com/c/nnexsus">  <img alt='youtube link' src={Youtube} height={"70%"}/>  </a>
                    <a target="blank" href="https://discord.gg/d8R2tDaBK2">  <img alt='discord link' src={Discord} height={"70%"}/>  </a>
                    <a target="blank" href="https://github.com/nnexsus">  <img alt='github link' src={Github} height={"70%"}/>  </a>
                </div>
            </div>
        </Wrapper>
    )

}

export default Header;