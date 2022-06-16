import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import React, { useState, useEffect } from 'react';
import Game from './game';

import { Img, ShortcutImg } from '../../desktop.styles';
import icon from "../../../images/2048-logo.png";
import shortcut from '../../../images/shortcut.png';

const Wrapper = styled.div`

    grid-column-start: 2;
    grid-row-end: 1;

    button {
        width: 100px;
        height: 100px;
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

    .twofourContainer {
        padding: 5px;
    }
`;

const TwoFour = () => {

    const [showTwoFour, setShowTwoFour] = useState(false);
    const onClick = () => setShowTwoFour(showTwoFour ? false : true);

    return (
    <Wrapper className='twofour'>
        <div>
            <button onClick={() => onClick()}>
                <Img src={icon}></Img>
                <ShortcutImg src={shortcut}></ShortcutImg>
                <p className='appName'>2048</p>
            </button>
        </div>
        {showTwoFour ? 
            <Open id="twofourApp">
                <Rnd default={{
                    x: 0,
                    y: 0,
                    width: 800,
                    height: 400,
                }}
                minHeight={392}
                minWidth={688}
                data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>2048</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        document.querySelector('X').style.background = "darkred";
                        }}>X</button>
                        <div className='twofourContainer'>
                            <Game></Game>
                        </div>
                    </Rnd>
            </Open>
        : null}

    </Wrapper>
    )
}

export default TwoFour;