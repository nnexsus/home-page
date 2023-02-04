import React, {useState} from 'react';
import styled from 'styled-components';

import bg1 from '../../images/peaks.webp';
import bg2 from '../../images/waves.webp';
import bg3 from '../../images/blocks.png';

const Wrapper = styled.div`
    
    h1, h2, h3, h4, p, a, li {
        font-family: monospace;
    }

    h1 {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }

    h1, h2, h3, h4, p, li {
        text-shadow: 0px 0px 4px black;
    }

    h1, h2 {
        text-align: center;
        font-size: 48px;
    }

    p, li {
        font-size: 20px;
    }

    ul {
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(2, 1fr);
    }

    .front {
        margin: 10% 150px 165px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0.95;
        border-radius: 4px;

    .mediaLink {
        background-color: rgba(120, 100, 120, 0.2);
        transition: 0.4s ease-in-out;
        margin: 0 10% 0 10%;

        h2 {
            color: white;
        }

        :hover {
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
        }
    }
    
    .aboutMe {
        background-color: #7B4B94;
        background-image: url(${bg1});
        background-size: cover;
        
        h1, h2, h3, h4, p {
            text-shadow: 0px 0px 2px black;
        }

        h1 {
            color: white;
        }

        button {
            margin-top: 5px;
            margin-bottom: 10px;
            width: 100%;
            height: 100%;
            padding: 10px;
            background: var(--accentTheme);
            border-radius: 10px;
            border: solid var(--accentThemeDarker) 2px;
        }

        button:hover {
            border: dashed 2px lightblue;
            cursor: pointer;
        }

        .aboutButtons {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 2px;
            margin-bottom: 5px;
        }
    }


    .links {
        background-color: #7D82B8;
        background-image: url(${bg2});
        background-size: cover;
        color: white;

        a {
            text-decoration: none;
            div {
                color: #392B58;
                text-shadow: 0px 0px 2px #392B58;
                border: solid 2px #392B58;
                border-radius: 10px;
                padding: 5px;
                margin-bottom: 20px;
            }
        }

    }

    .projects {
        background-color: #98D7B7;
        background-image: url(${bg3});
        background-size: cover;
        color: white;
    }

    .projectContainer {
        a {
            color: lightblue;
            :active {
                color: var(--accentTheme);
            }
        }
        h4 {
            background-color: rgba(0, 0, 0, 0.3);
            border: solid 2px white;
            border-radius: 10px;
            color: white;
            padding: 10px;
            transition: 0.3s ease-in-out;

            :hover {
                background-color: rgba(120, 120, 120, 0.6);
            }
        }
        
        div {
            background-color: rgba(0, 0, 0, 0.3);
            padding: 2px;
            margin: 2px;
            border-radius: 4px;
            border: solid black 2px;
            transition: 0.3s ease-in-out;
        }

        div:hover {
            background-color: rgba(120, 120, 120, 0.6);
        }
    }

    .aboutMe, .links, .projects {
        border-radius: 10px;
        margin: 8px;
        padding: 4px;
        text-align: center;
        box-shadow: 0px 0px 4px 3px black;
        border: solid var(--accentTheme) 3px;
        transition: 0.3s ease-in-out;
    }

    .aboutMe:hover, .links:hover, .projects:hover {
        opacity: 1;
        transform: scale(1.03);
    }

    .selector {
        text-decoration: underline;
    }

    .contactTitle {
        text-shadow: 0px 0px 7px white;
    }
}

    .ascii {
        background-color: black;
        box-shadow: 0px -20px 20px 20px black, 0px 120px 20px 20px black;
        margin-top: 10%;
        margin-bottom: 10%;
        display: flex;
        justify-content: center;
        height: 500px;

        pre {
            margin-top: 5%;
            color: red;
            text-shadow: 0px 0px 20px red;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 1000px) {
        .front {
            margin: 10% 50px 165px;
            display: block;
        }
    }
`;

const Paragraph = styled.p`
    color: ${({highlighted}) => highlighted ? "white" : "rgba(1, 1, 1, 0.3)"};

    a {
        color: lightblue;
        :active {
            color: var(--accentTheme);
        }
    }
`;

const Title = styled.h4`
    display: inline-flex;
    margin: 0;
    color: ${({highlighted}) => highlighted ? "white" : "rgba(1, 1, 1, 0.3)"};
`;

const Img  = styled.img`
    width: 75px;
`;
//this panel set is overdue for an update, it sucks lol
const Aboutetc = () => {

    const [showName, setShowName] = useState(false);
    const onClickName = () => setShowName(!showName)

    const [showWeb, setShowWeb] = useState(false);
    const onClickWeb = () => setShowWeb(!showWeb);

    const [showGame, setShowGame] = useState(false);
    const onClickGame = () => setShowGame(!showGame);

    const [showGraphic, setShowGraphic] = useState(false);
    const onClickGraphic = () => setShowGraphic(!showGraphic);

    return (
        <Wrapper>
            <section className='front' id='panels'>
                <div data-augmented-ui="tl-2-clip-xy tr-clip-x br-rect-x bl-2-clip-xy both" className='aboutMe' style={{transform: 'skewY(7deg)', marginRight: '-5px'}}>
                    <div className='content'>
                        <h1>About Me</h1>
                        <h4 style={{color: "white", textShadow: 'white 0 0 7px', fontStyle: 'italic', background: 'var(--accentThemeDarker)', padding: '10px 0', margin: '15px 0', borderRadius: '6px', border: 'solid 2px var(--accentTheme)'}}>Click a title below to highlight more.</h4>
                        <div className='aboutButtons'>
                            <button className='selector' onClick={() => onClickName()}>Nnexsus</button>
                            <button className='selector' onClick={() => onClickWeb()}>Web Developer</button>
                            <button className='selector' onClick={() => onClickGame()}>Game Developer</button>
                            <button className='selector' onClick={() => onClickGraphic()}>Graphic Designer</button>
                        </div>
                            <div className='headTitles'>
                                <Title highlighted={+showName}>IT, Developer, Editor, Stormchaser, </Title>
                                <Title highlighted={+showWeb}>React, HTML, CSS, Javascript, PHP, </Title>
                                <Title highlighted={+showGame}>Java, Godot Engine / GDScript, Python, </Title>
                                <Title highlighted={+showGraphic}>After Effects, Sony Vegas Pro, Photoshop </Title>
                            </div>
                                <Paragraph highlighted={+showName}>
                                    Hello, I'm Ethan. My screen-name is nnexsus (nec - sus). I'm 20 years old and currently do freelance work & IT.
                                    I really enjoy learning and mastering new topics all the time. I love finding new ways to use my creativity in new fields.
                                    I'm currently employed in full time IT Tech, so most of this doesn't matter as I am not currently searching for a job.
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
                </div>
                <div data-augmented-ui="tl-clip-x tr-2-clip-xy br-2-clip-xy bl-rect-x both" className='projects' style={{transform: 'skewY(-7deg)', marginRight: '5px'}}>
                    <div className='projectContainer'>
                        <h1>Current Projects</h1>
                        <a target={"blank"} href='https://trello.com/b/WjQkpKpc/2023'>   <h4>2022 - More info on my Trello.</h4>  </a>
                            <div>
                                <h3>Project: Eye</h3>
                                <p>Successfully predict, track, and chase nearby tornadoes. <a target={"blank"} href='https://trello.com/c/Tf5jPOHi/3-project-eye'>Project: Eye</a></p>
                            </div>
                            <div>
                                <h3>Project: Deathblow</h3>
                                <p>Rebuild, rescript, redesign ASCARDS into the new version I dreamed about. <a target={"blank"} href='https://trello.com/c/7nlCK0tP/2-project-deathblow'>Project: Deathblow</a></p>
                            </div>
                        </div>
                </div>
        </section>
    </Wrapper>
    )
}

export default Aboutetc;