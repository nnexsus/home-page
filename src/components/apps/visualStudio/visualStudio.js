import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import React, { useState } from 'react';

import { Img, ShortcutImg } from '../../desktop.styles';
import icon from "../../../images/Visualstudio-logo.png";
import shortcut from '../../../images/shortcut.png';
import Github from '../../../images/Github-logo.webp'

const Wrapper = styled.div`

    grid-column-start: 1;
    grid-row-end: 6;

    button {
        width: 75px;
        height: 75px;
        background: none;
        border: none;
    }

    button:hover {
        border: lightblue dashed 2px;
    }

    .appName {
        height: 23px;
    }

`;

const Open = styled.div`

    display: flex;

    textarea {
        margin-top: 20px;
        width: 99%;
        height: 400px;
        border: none;
    }

    .vsContainer {
        padding: 5px;
        margin: 5px;
        margin-top: 20px;
        //text-align: center;

        ul {
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 6px;
            margin: 0 auto;
            text-shadow: 0px 0px 4px black;

            li {
                list-style-type: square;
                transition: 0.4s ease-in-out;
            }

            li:hover {
                transform: scale(1.15);
                background-color: rgba(255, 255, 255, 0.4);
            }

            li:nth-child(odd) {
                background-color: #B1E5F2;
            }
        }

        a {
            text-decoration: none;
            div {
                color: #392B58;
                text-shadow: 0px 0px 2px #392B58;
                border: solid 2px #392B58;
                border-radius: 10px;
                padding: 5px;
                margin-top: 20px;
            }
        }

    .link {
        transition: 0.4s ease-in-out;
        width: 50%;
        margin: 0 auto;
        text-align: center;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.5);

        :hover {
            color: white;
            filter: invert(1);
        }
    }

    .pref {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
        text-align: center;

        div {
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            padding: 10px;
            margin-top: 10px;
        }
    }

    }
`;

const VisualStudio = () => {

    const [showVS, setShowVS] = useState(false);
    const onClick = () => setShowVS(showVS ? false : true);

    return (
    <Wrapper>
        <div>
            <button onClick={() => onClick()}>
                <Img alt='visual studio code icon' src={icon}></Img>
                <p className='appName'>Visual Studio Code</p>
                <ShortcutImg src={shortcut}></ShortcutImg>
            </button>
        </div>
        {showVS ? 
            <Open id="vsApp">
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
                minHeight={392}
                minWidth={688}
                data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>Visual Studio Code</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        }}>X</button>
                        <div className='vsContainer'>
                            <div className='pref'>
                                <div className='web'>
                                    <h2>Web Dev</h2>
                                    <ul>
                                        <li>React</li>
                                        <li>React Router</li>
                                        <li>Node JS</li>
                                        <li>Express API</li>
                                        <li>Nodemon</li>
                                        <li>PHP</li>
                                        <li>MySQL</li>
                                        <li>Mongoose</li>
                                    </ul>
                                </div>
                                <div className='game'>
                                    <h2>Game Dev</h2>
                                    <ul>
                                        <li>Godot</li>
                                        <li>GD-Script</li>
                                        <li>Python</li>
                                        <li>Javascript</li>
                                    </ul>
                                </div>
                                <div className='other'>
                                    <h2>Other</h2>
                                    <ul>
                                        <li>Discord JS</li>
                                        <li>DBM</li>
                                        <li>Linux</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='link'>
                                    <a target="blank" href="https://github.com/nnexsus"> <div className='mediaLink'> <h2>Github</h2> <Img src={Github}></Img>  </div> </a>
                            </div>
                        </div>
                    </Rnd>                
                : 
                <div data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>Visual Studio Code</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        }}>X</button>
                        <div className='vsContainer'>
                        <div className='pref'>
                                <div className='web'>
                                    <h2>Web Dev</h2>
                                    <ul>
                                        <li>React</li>
                                        <li>React Router</li>
                                        <li>Node JS</li>
                                        <li>Express API</li>
                                        <li>Nodemon</li>
                                        <li>PHP</li>
                                        <li>MySQL</li>
                                        <li>Mongoose</li>
                                    </ul>
                                </div>
                                <div className='game'>
                                    <h2>Game Dev</h2>
                                    <ul>
                                        <li>Godot</li>
                                        <li>GD-Script</li>
                                        <li>Python</li>
                                        <li>Javascript</li>
                                    </ul>
                                </div>
                                <div className='other'>
                                    <h2>Other</h2>
                                    <ul>
                                        <li>Discord JS</li>
                                        <li>DBM</li>
                                        <li>Linux</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='link'>
                                    <a target="blank" href="https://github.com/nnexsus"> <div className='mediaLink'> <h2>Github</h2> <Img src={Github}></Img>  </div> </a>
                            </div>
                        </div>
                    </div>                
                }

            </Open>
        : null}

    </Wrapper>
    )
}

export default VisualStudio;