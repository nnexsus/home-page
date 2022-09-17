import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import React, { useState } from 'react';

import { Img, ShortcutImg } from '../../desktop.styles';
import icon from "../../../images/Aftereffects-logo.png";
import shortcut from '../../../images/shortcut.png';
import blocks from '../../../images/blocks.png'

import solar from '../gallery/galleryImages/solar1-1.png';
import banner from '../gallery/galleryImages/logobanner.png'

const Wrapper = styled.div`

    grid-column-start: 1;
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

    .appName {
        height: 24px;
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

    .aeContainer {
        margin: 5px;
        padding: 5px;
        display: grid;
        justify-content: center;
        align-items: center;
        text-align: center;

        h4 {
            width: 30%;
            border: solid 2px red;
            background-color: lightcoral;
            border-radius: 10px;
            padding: 2px;
            margin: 0 auto;
        }

    }

`;

const AfterEffects = () => {

    const [showAE, setShowAE] = useState(false);
    const onClick = () => setShowAE(showAE ? false : true);

    return (
    <Wrapper>
        <div>
            <button onClick={() => onClick()}>
                <Img alt='after effects icon' src={icon}></Img>
                <p className='appName'>After Effects</p>
                <ShortcutImg src={shortcut}></ShortcutImg>
            </button>
        </div>
        {showAE ? 
            <Open id="aeApp">
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
                data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container"
                style={{ 
                    backgroundImage: `url(${blocks})`,
                    backgroundBlendMode: "hard-light",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    opacity: "0.95",
                }}>
                    <h2 className='title'>After Effects</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        }}>X</button>
                        <div className='aeContainer'>
                            <div className='solar entry'>
                                <h3>Solar System Template</h3>
                                <a href="https://drive.google.com/drive/folders/1vIbTAC02dqqKXcvN-AGQZc8HkrJ7ayJg?usp=sharing">
                                    <img alt='solar system template' src={solar} width={"30%"}></img>
                                    <h4>Google Drive Download</h4>
                                </a>
                            </div>
                            <div className='entry'>
                                <h3>Screen Template</h3>
                                <a href="https://drive.google.com/drive/folders/1wyur29XvuPIoGyLQHvACKPoLVjz_WumT?usp=sharing">
                                    <img alt='screen template' src={banner} width={"30%"}></img>
                                    <h4>Google Drive Download</h4>
                                </a>
                            </div>
                        </div>
                    </Rnd>                
                : 
                <div data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>After Effects</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        }}>X</button>
                        <div className='aeContainer'>
                            <div className='solar entry'>
                                <h3>Solar System Template</h3>
                                <a href="https://drive.google.com/drive/folders/1vIbTAC02dqqKXcvN-AGQZc8HkrJ7ayJg?usp=sharing">
                                    <img alt='solar system template' src={solar} width={"30%"}></img>
                                    <h4>Google Drive Download</h4>
                                </a>
                            </div>
                            <div className='entry'>
                                <h3>Screen Template</h3>
                                <a href="https://drive.google.com/drive/folders/1wyur29XvuPIoGyLQHvACKPoLVjz_WumT?usp=sharing">
                                    <img alt='screen template' src={banner} width={"30%"}></img>
                                    <h4>Google Drive Download</h4>
                                </a>
                            </div>
                        </div>
                    </div>                
                }

            </Open>
        : null}

    </Wrapper>
    )
}

export default AfterEffects;