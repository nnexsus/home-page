import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import React, { useState } from 'react';

import { Img, ShortcutImg } from '../../desktop.styles';
import icon from "../../../images/Youtube-logo.png";
import shortcut from '../../../images/shortcut.png';

const Wrapper = styled.div`

    grid-column-start: 1;
    grid-row-end: 3;

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
        margin-top: 9px;
        margin-left: 7px;
        width: 99%;
        height: 90%;
        border: none;
    }

    .twitContainer {
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

const Youtube = () => {

    const [showYoutube, setShowYoutube] = useState(false);
    const onClick = () => setShowYoutube(showYoutube ? false : true);

    const [loaded, setLoaded] = useState(true);
    const onLoad = () => setLoaded(!loaded);

    return (
    <Wrapper>
        <div>
            <button onClick={() => onClick()}>
                <Img alt='youtube icon' src={icon}></Img>
                <p className='appName'>Youtube</p>
                <ShortcutImg src={shortcut}></ShortcutImg>
            </button>
        </div>
        {showYoutube ? 
            <Open id="youtubeApp">
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
                    <h2 className='title'>Youtube</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        }}>X</button>
                        {loaded ? <Loading>
                            <div class="loader" title="loading">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" xmlSpace="preserve">
                                    <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
                                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">
                                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">
                                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                </svg>
                            </div>
                        </Loading> : null}
                        <iframe onLoad={() => onLoad()} width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLzhN8a1aNzMzLQV-XvjIMG-_yb-jptuGK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    </Rnd>                
                : 
                <div data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>Youtube</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        }}>X</button>
                        {loaded ? <Loading>
                            <div class="loader" title="loading">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" xmlSpace="preserve">
                                    <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
                                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">
                                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">
                                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                </svg>
                            </div>
                        </Loading> : null}
                        <iframe onLoad={() => onLoad()} width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLzhN8a1aNzMzLQV-XvjIMG-_yb-jptuGK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    </div>                
                }

            </Open>
        : null}

    </Wrapper>
    )
}

export default Youtube;