import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import React, { useState } from 'react';

import { Img, ShortcutImg } from '../../desktop.styles';
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
        background: var(--accentTheme);
        border-radius: 10px;
        border: solid var(--accentThemeDarker) 1px;
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
                <Img alt='about icon' src={'/images/desktop/About-logo.webp'}></Img>
                <p className='appName'>About</p>
                <ShortcutImg src={'/images/desktop/shortcut.webp'}></ShortcutImg>
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
                                                    Hello, I'm Ethan, my screen-name is nnexsus (nec - sus). I'm 20 years old and currently do freelance work for any of the above sections.
                                                    I really enjoy learning and mastering new topics all the time. I love finding new ways to use my creativity in new fields.
                                                    I like to travel fairly often, so I prefer remote work to fit a schedule as such.
                                                    I am mostly self taught, with the exceptions of networking and meetups with other developers or sys-admins.
                                                    My certs (Comptia A+, Comptia Sec+) can be found here: <a target={"_blank"} rel="noreferrer" href="/comptiaaplus.pdf">certs</a>.
                                                    My resume can be found here: <a target={"_blank"} rel="noreferrer" href="/resume.pdf">resume</a>.
                                                </Paragraph>
                                                <Paragraph highlighted={+showWeb}>
                                                    My website work can be found through the apps on desktop, the <a href='#web-section'>Web Planet</a> on the left of the title screen (top of site), or in the <a href='#past'>past projects</a> Web panel! Before React, I coded with strictly PHP, HTML, and CSS; these projects are strictly viewable through the past projects section.
                                                </Paragraph>
                                                <Paragraph highlighted={+showGame}>
                                                    Project: Fish (Fish Game) can currently be found in the Fish Game panel above, the <a href='#game-section'>Game Planet</a> on the right of the title screen (top of site), or in <a href='#past'>past projects</a>. Both previews and the game are available.
                                                    My first solo indie game (ASCARDS) is located below in the <a href='#past'>past projects</a>, or has a downloadable demo here <a href='#ascii'>ASCARDS</a>.
                                                </Paragraph>
                                                <Paragraph highlighted={+showGraphic}>
                                                    Any graphic design and music video work can be found through my <a href='https://twitter.com/_nnexsus' target={"_blank"} rel="noreferrer">Twitter</a>, <a href='https://youtube.com/playlist?list=PLzhN8a1aNzMzLQV-XvjIMG-_yb-jptuGK' target={"_blank"} rel="noreferrer">Youtube</a>, or <a href='#theater-panel'>Theater</a>.
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
                                <Paragraph highlighted={+showName}>
                                    Hello, I'm Ethan, my screen-name is nnexsus (nec - sus). I'm 20 years old and currently do freelance work for any of the above sections.
                                    I really enjoy learning and mastering new topics all the time. I love finding new ways to use my creativity in new fields.
                                    I like to travel fairly often, so I prefer remote work to fit a schedule as such.
                                    I am mostly self taught, with the exceptions of networking and meetups with other developers or sys-admins.
                                    My certs (Comptia A+) can be found here: <a target={"_blank"} rel="noreferrer" href="/comptiaaplus.pdf">certs</a>.
                                    My resume can be found here: <a target={"_blank"} rel="noreferrer" href="/resume.pdf">resume</a>.
                                </Paragraph>
                                <Paragraph highlighted={+showWeb}>
                                    My website work can be found through the apps on desktop, the <a href='#web-section'>Web Planet</a> on the left of the title screen (top of site), or in the <a href='#past'>past projects</a> Web panel! Before React, I coded with strictly PHP, HTML, and CSS; these projects are strictly viewable through the past projects section.
                                </Paragraph>
                                <Paragraph highlighted={+showGame}>
                                    Project: Fish (Fish Game) can currently be found in the Fish Game panel above, the <a href='#game-section'>Game Planet</a> on the right of the title screen (top of site), or in <a href='#past'>past projects</a>. Both previews and the game are available.
                                    My first solo indie game (ASCARDS) is located below in the <a href='#past'>past projects</a>, or has a downloadable demo here <a href='#ascii'>ASCARDS</a>.
                                </Paragraph>
                                <Paragraph highlighted={+showGraphic}>
                                    Any graphic design and music video work can be found through my <a href='https://twitter.com/_nnexsus' target={"_blank"} rel="noreferrer">Twitter</a>, <a href='https://youtube.com/playlist?list=PLzhN8a1aNzMzLQV-XvjIMG-_yb-jptuGK' target={"_blank"} rel="noreferrer">Youtube</a>, 
                                    <a href='#theater-panel'>Theater</a>, and Gallery Desktop App.
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