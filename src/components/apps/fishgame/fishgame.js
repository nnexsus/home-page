import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import React, { useState } from 'react';

import { Img, ShortcutImg } from '../../desktop.styles';
import icon from "../../../images/Fishgame-logo.png";
import shortcut from '../../../images/shortcut.png';

const Wrapper = styled.div`

    grid-column-start: 2;
    grid-row-end: 5;

    button {
        width: 100%;
        height: 100%;
        padding: 10px;
        background: none;
        border: none;
    }

    button:hover {
        border: lightblue dashed 2px;
    }

    @media screen {
        
        button {
            width: 75px;
            height: 75px;
            padding: 10px;
            background: none;
            border: none;
        }
    
    }

`;

const Open = styled.div`

    display: flex;

    iframe {
        margin-top: 61px;
        margin-left: 7px;
        width: 786px;
        height: 317px;
        border: none;
    }

    .fishContainer {
        margin: 5px 100px;
        padding: 5px;
    }
`;

const Loading = styled.div`
    border: solid 2px red;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 4px black;
    background-color: lightcoral;
    text-align: center;
    font-size: large;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 10px;

    .loader{
        width: 20%;
        text-align: center;
        padding: 1em;
        margin: 0 auto 1em;
        display: inline-block;
        vertical-align: top;
    }

    svg path, svg rect{
        fill: black;
    }
`;

const FishGame = () => {

    const [showTwitter, setShowTwitter] = useState(false);
    const onClick = () => setShowTwitter(showTwitter ? false : true);

    const [loaded, setLoaded] = useState(true);
    const onLoad = () => setLoaded(!loaded);

    return (
    <Wrapper>
        <div>
            <button onClick={() => onClick()}>
                <Img alt='twitter icon' src={icon}></Img>
                <p className='appName'>Fish Game</p>
                <ShortcutImg src={shortcut}></ShortcutImg>
            </button>
        </div>
        {showTwitter ? 
            <Open id="twitterApp">
                {window.innerWidth > 720 ? 
                <Rnd default={{
                    x: 0,
                    y: 0,
                    width: 800,
                    height: 400,
                }}
                resizeGrid={[64, 36]}
                dragGrid={[64, 36]}
                bounds={"#desktop"}
                minHeight={288}
                minWidth={512}
                data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>Fish Game <a href='https://nnexsus-fish-game.netlify.app' target={"_blank"} rel="noreferrer">Full Version</a></h2>
                    <button className='X' onClick={() => {
                        onClick()
                        }}>X</button>
                        <div className='fishContainer'>
                            <iframe src='https://fishgame.d1ms72udm9edoe.amplifyapp.com/' width={"1075px"} height={"630px"} style={{border: 0}}></iframe>
                        </div>
                    </Rnd>                
                : 
                <div data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>Fish Game <a href='https://nnexsus-fish-game.netlify.app' target={"_blank"} rel="noreferrer">Full Version</a></h2>
                    <button className='X' onClick={() => {
                        onClick()
                        }}>X</button>
                        <div className='fishContainer'>
                            <iframe src='https://fishgame.d1ms72udm9edoe.amplifyapp.com/' width={"1075px"} height={"630px"} style={{border: 0}}></iframe>
                        </div>
                    </div>                
                }

            </Open>
        : null}

    </Wrapper>
    )
}

export default FishGame;