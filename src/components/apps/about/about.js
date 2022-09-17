import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import React, { useState } from 'react';

import { Img, ShortcutImg } from '../../desktop.styles';
import icon from "../../../images/About-logo.png";
import shortcut from '../../../images/shortcut.png';
import peaks from '../../../images/peaks.webp'

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
                                resizeGrid={[64, 36]}
                                dragGrid={[64, 36]}
                                bounds={"#desktop"}
                                minHeight={288}
                                minWidth={512}
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
                                        }}>X</button>
                                        <div className='content'>
                                            <h2 style={{marginBottom: "-15px"}}>Click a title to highlight more info about it!</h2>
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
                                                        Hello, I'm Ethan, my screen-name is nnexsus (nec - sus). I'm 19 years old and currently do freelance work for any of the above sections.
                                                        I really enjoy learning and mastering new topics all the time. I love finding new ways to use my creativity in new fields.
                                                        I like to travel fairly often, so I prefer remote work to fit a schedule as such.
                                                        I am mostly self taught, with the exceptions of networking and meetups with other developers or sys-admins.
                                                        I do not settle easily for uncompleted work. I am not a perfectionist, but if there is improvement to be made I will make it.
                                                    </Paragraph>
                                                    <Paragraph highlighted={+showWeb}>
                                                        My website work can be found through the apps on this site. Before React, I coded with strictly PHP, HTML, and CSS; these projects are viewable through my github (Visual Studio Code App) or the past projects section.
                                                        Some websites listed may not be online, such as the Cloud Server (back & front-end) megaproject I completed. Plans to get this up are underway, but require some routing infrastructure I do not currently have.
                                                    </Paragraph>
                                                    <Paragraph highlighted={+showGame}>
                                                        Project: Fish (Fish Game) can currently be found in my Twitter previews, but it soon to be playable here as well.
                                                        My first solo indie game (ASCARDS) is viewable through demos on Twitter, Youtube, and in the Gallery App.
                                                    </Paragraph>
                                                    <Paragraph highlighted={+showGraphic}>
                                                        Any graphic design and music video work can be found through my Twitter, Youtube, and Gallery App.
                                                    </Paragraph>
                                        </div>
                                    </Rnd>
                : //if turntable
                <div data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>About App</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        }}>X</button>
                        <div className='content'>
                        <h2 style={{marginBottom: "-15px"}}>Click a title to highlight more info about it!</h2>
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
                                        Hello, I'm Ethan, my screen-name is nnexsus (nec - sus). I'm 19 years old and currently do freelance work for any of the above sections.
                                        I really enjoy learning and mastering new topics all the time. I love finding new ways to use my creativity in new fields.
                                        I like to travel fairly often, so I prefer remote work to fit a schedule as such.
                                        I am mostly self taught, with the exceptions of networking and meetups with other developers or sys-admins.
                                        I do not settle easily for uncompleted work. I am not a perfectionist, but if there is improvement to be made I will make it.
                                    </Paragraph>
                                    <Paragraph high={showWeb}>
                                        My website work can be found through the apps on this site. Before React, I coded with strictly PHP, HTML, and CSS; these projects are viewable through my github (Visual Studio Code App) or the past projects section.
                                        Some websites listed may not be online, such as the Cloud Server (back & front-end) megaproject I completed. Plans to get this up are underway, but require some routing infrastructure I do not currently have.
                                    </Paragraph>
                                    <Paragraph high={showGame}>
                                        Project: Fish (Fish Game) can currently be found in my Twitter previews, but it soon to be playable here as well.
                                        My first solo indie game (ASCARDS) is viewable through demos on Twitter, Youtube, and in the Gallery App.
                                    </Paragraph>
                                    <Paragraph high={showGraphic}>
                                        Any graphic design and music video work can be found through my Twitter, Youtube, and Gallery App.
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