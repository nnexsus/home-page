import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import React, { useState } from 'react';

import { Img, ShortcutImg } from '../../desktop.styles';
import icon from "../../../images/About-logo.png";
import shortcut from '../../../images/shortcut.png';
import peaks from '../../../images/peaks.png'

const Wrapper = styled.div`

    grid-column-start: 1;
    grid-row-end: 1;
    font-family: monospace;

    button {
        width: 75px;
        height: 75px;
        background: none;
        border: none;
    }

    .selector {
        margin-top: 15px;
        margin-left: 3px;
        width: 100%;
        height: 100%;
        padding: 10px;
        background: lightcoral;
        border-radius: 10px;
        border: solid red 1px;
        text-decoration: underline;
    }

    button:hover {
        border: lightblue dashed 2px;
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

    .content {
        padding: 10px;
        color: white;
        margin-top: 20px;
    }

    .aboutButtons {
        display: inline-flex;
    }
`;

const Paragraph = styled.p`
    color: ${({highlighted}) => highlighted ? "white" : "rgba(1, 1, 1, 0.3)"};
`;

const Title = styled.h4`
    display: inline-flex;
    margin: 0;
    color: ${({highlighted}) => highlighted ? "white" : "rgba(1, 1, 1, 0.3)"};
`;

const About = () => {

    const [showAbout, setShowAbout] = useState(false);
    const onClick = () => setShowAbout(showAbout ? false : true);

    const [showName, setShowName] = useState(false);
    const onClickName = () => setShowName(showName ? false : true)

    const [showWeb, setShowWeb] = useState(false);
    const onClickWeb = () => setShowWeb(showWeb ? false : true);

    const [showGame, setShowGame] = useState(false);
    const onClickGame = () => setShowGame(showGame ? false : true);

    const [showGraphic, setShowGraphic] = useState(false);
    const onClickGraphic = () => setShowGraphic(showGraphic ? false : true);

    return (
    <Wrapper>
        <div>
            <button onClick={() => onClick()}>
                <Img alt='about icon' src={icon}></Img>
                <p className='appName'>About</p>
                <ShortcutImg src={shortcut}></ShortcutImg>
            </button>
        </div>
        {showAbout ? 
            <Open id="aboutApp">
                {window.innerWidth > 720 ? 
                                <Rnd default={{
                                    x: 0,
                                    y: 0,
                                    width: 800,
                                    height: 410,
                                }}
                                minHeight={392}
                                minWidth={688}
                                data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container"
                                style={{ 
                                    backgroundImage: `url(${peaks})`,
                                    backgroundBlendMode: "hard-light",
                                    backgroundSize: "cover",
                                    backgroundPosition: "bottom",
                                    opacity: "0.95",
                                }}>
                                    <h2 className='title'>About App</h2>
                                    <button className='X' onClick={() => {
                                        onClick()
                                        document.querySelector('X').style.background = "darkred";
                                        }}>X</button>
                                        <div className='content'>
                                            <div className='aboutButtons'>
                                                <button className='selector' onClick={() => onClickName()}>Nnexsus</button>
                                                <button className='selector' onClick={() => onClickWeb()}>Web Developer</button>
                                                <button className='selector' onClick={() => onClickGame()}>Game Developer</button>
                                                <button className='selector' onClick={() => onClickGraphic()}>Graphic Designer</button>
                                            </div>
                                                <div className='headTitles'>
                                                    <Title highlighted={+showName}>Computer and Server Building and Repair, Pentester, Stormchaser, Music Video Artist, Editor, </Title>
                                                    <Title highlighted={+showWeb}>Php, HTML, CSS, Javascript, React, </Title>
                                                    <Title highlighted={+showGame}>Python, Java, C++, Godot Engine and GDScript, </Title>
                                                    <Title highlighted={+showGraphic}>After Effects, Vegas Pro, Photoshop, Blender</Title>
                                                </div>
                                                    <Paragraph highlighted={+showName}>
                                                    Hey, I'm Ethan, but I typically go by nnexsus (nec - sus). I'm 19 years old and attend school at Moraine Valley Community College*.
                                                    I really enjoy learning and mastering new topics all the time. I also really enjoy creating literally anything.
                                                    I like to travel fairly often, so I prefer remote work to fit a schedule as such.
                                                    Education speaking, I have taken many online courses to learn, as I found school far to slow. However I have aquired a few certs and such along the way, including the A+. I am only in school for the degree.
                                                    </Paragraph>
                                                    <Paragraph highlighted={+showWeb}>
                                                        All* my website work can be found through the apps on this site. *Before React, I coded with strictly php, html, and css. Those projects are viewable through my github (Visual Studio Code App) and gallery.
                                                    </Paragraph>
                                                    <Paragraph highlighted={+showGame}>
                                                        My solo indie game is viewable through demos on Twitter, Youtube, and in the Gallery. After completion a new app will be made for it.
                                                    </Paragraph>
                                                    <Paragraph highlighted={+showGraphic}>
                                                        Any graphic design and music video work can be found through my Twitter, Youtube, and Gallery.
                                                    </Paragraph>
                                        </div>
                                    </Rnd>
                : //if turntable
                <div data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>About App</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        document.querySelector('X').style.background = "darkred";
                        }}>X</button>
                        <div className='content'>
                            <div className='aboutButtons'>
                                <button className='selector' onClick={() => onClickName()}>Nnexsus</button>
                                <button className='selector' onClick={() => onClickWeb()}>Web Developer</button>
                                <button className='selector' onClick={() => onClickGame()}>Game Developer</button>
                                <button className='selector' onClick={() => onClickGraphic()}>Graphic Designer</button>
                            </div>
                                <div className='headTitles'>
                                    <Title high={showName}>Computer and Server Building and Repair, Pentester, Stormchaser, Music Video Artist, Editor, </Title>
                                    <Title high={showWeb}>Php, HTML, CSS, Javascript, React, </Title>
                                    <Title high={showGame}>Python, Java, C++, Godot Engine and GDScript, </Title>
                                    <Title high={showGraphic}>After Effects, Vegas Pro, Photoshop, Blender</Title>
                                </div>
                                    <Paragraph high={showName}>
                                    Hey, I'm Ethan, but I typically go by nnexsus (nec - sus). I'm 19 years old and attend school at Moraine Valley Community College*.
                                    I really enjoy learning and mastering new topics all the time. I also really enjoy creating literally anything.
                                    I like to travel fairly often, so I prefer remote work to fit a schedule as such.
                                    Education speaking, I have taken many online courses to learn, as I found school far to slow. However I have aquired a few certs and such along the way, including the A+. I am only in school for the degree.
                                    </Paragraph>
                                    <Paragraph high={showWeb}>
                                        All* my website work can be found through the apps on this site. *Before React, I coded with strictly php, html, and css. Those projects are viewable through my github (Visual Studio Code App) and gallery.
                                    </Paragraph>
                                    <Paragraph high={showGame}>
                                        My solo indie game is viewable through demos on Twitter, Youtube, and in the Gallery. After completion a new app will be made for it.
                                    </Paragraph>
                                    <Paragraph high={showGraphic}>
                                        Any graphic design and music video work can be found through my Twitter, Youtube, and Gallery.
                                    </Paragraph>
                        </div>
                    </div>
                }

            </Open>
        : null}

    </Wrapper>
    )
}

export default About;