import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import React, { useState, useEffect } from 'react';

import { Img, ShortcutImg } from '../../desktop.styles';
import icon from "../../../images/Settings-logo.png";
import shortcut from '../../../images/shortcut.png';
import waves from '../../../images/waves.png'

const Wrapper = styled.div`

    grid-column-start: 2;
    grid-row-end: 2;

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

    a {
        color: lightcoral;
        text-shadow: 0px 0px 3px lightcoral;
    }

    .max {
        
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

    .setContainer {
        padding: 5px;
        margin: 5px;
        margin-top: 20px;
    }
`;

const Settings = () => {

    const [showSettings, setShowSettings] = useState(false);
    const onClick = () => setShowSettings(showSettings ? false : true);

    return (
    <Wrapper>
        <div>
            <button onClick={() => onClick()}>
                <Img alt='settings icon' src={icon}></Img>
                <p className='appName'>Settings</p>
                <ShortcutImg src={shortcut}></ShortcutImg>
            </button>
        </div>
        {showSettings ? 
            <Open id="setApp">
                {window.innerWidth > 720 ? 
                <Rnd default={{
                    x: 0,
                    y: 0,
                    width: 800,
                    height: 400,
                }}
                minHeight={392}
                minWidth={688}
                data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container" 
                    style={{ 
                        backgroundImage: `url(${waves})`,
                        backgroundBlendMode: "hard-light",
                        backgroundSize: "cover",
                        backgroundPosition: "bottom",
                        opacity: "0.95",
                    }}>
                    <h2 className='title'>Settings</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        document.querySelector('X').style.background = "darkred";
                        }}>X</button>
                        <div className='setContainer'>
                            <h1>Contacts</h1>
                            
                            <a href="https://discord.gg/d8R2tDaBK2">    <h2>Discord: nnexsus#8460</h2>  </a>
                            <a href="https://twitter.com/_nnexsus">     <h2>Twitter: @_nnexsus</h2>   </a>
                            <a href="mailto:nexsusacc@gmail.com?subject=Contact">       <h2>Email: nexsusacc@gmail.com</h2> </a>

                            <p>I'm mostly likely to respond on discord / twitter. Shoot me a freind request or message any time!</p>

                        </div>
                    </Rnd>                
                : 
                <div data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>Settings</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        document.querySelector('X').style.background = "darkred";
                        }}>X</button>
                        <div className='setContainer'>
                            <h1>Contacts</h1>
                            
                            <a href="https://discord.gg/d8R2tDaBK2">    <p>Discord: nnexsus#8460</p>  </a>
                            <a href="https://twitter.com/_nnexsus">     <p>Twitter: @_nnexsus</p>   </a>
                            <a href="mailto:nexsusacc@gmail.com?subject=Contact">       <p>Email: nexsusacc@gmail.com</p> </a>

                            <p>I'm mostly likely to respond on discord / twitter. Shoot me a freind request or message any time!</p>

                        </div>
                    </div>                
                }

            </Open>
        : null}

    </Wrapper>
    )
}

export default Settings;