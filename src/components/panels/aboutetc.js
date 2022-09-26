import React, {useState} from 'react';
import styled from 'styled-components';

import bg1 from '../../images/peaks.webp';
import bg2 from '../../images/waves.webp';
import bg3 from '../../images/blocks.png';

import Twitter from '../../images/Twitter-logo.png';
import Youtube from '../../images/Youtube-logo.png';
import Github from '../../images/Github-logo.webp';
import Discord from '../../images/Discord-logo.webp';

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
        transform-style: preserve-3d;
        transform: skewY(8deg);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0.95;
        border-radius: 4px;
        margin-top: 10%;
        margin-bottom: 165px;

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
            background: lightcoral;
            border-radius: 10px;
            border: solid red 2px;
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
                color: lightcoral;
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
        border: solid lightcoral 3px;
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

    @media screen and (max-width: 700px) {
        .front {
            display: block;
        }
    }
`;

const Paragraph = styled.p`
    color: ${({highlighted}) => highlighted ? "white" : "rgba(1, 1, 1, 0.3)"};

    a {
        color: lightblue;
        :active {
            color: lightcoral;
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
                <div className='aboutMe'>
                    <div className='content'>
                        <h1>About Me</h1>
                        <h4 style={{color: "white"}}>Click a title below to highlight more.</h4>
                        <div className='aboutButtons'>
                            <button className='selector' onClick={() => onClickName()}>Nnexsus</button>
                            <button className='selector' onClick={() => onClickWeb()}>Web Developer</button>
                            <button className='selector' onClick={() => onClickGame()}>Game Developer</button>
                            <button className='selector' onClick={() => onClickGraphic()}>Graphic Designer</button>
                        </div>
                            <div className='headTitles'>
                                <Title highlighted={+showName}>Network Administrator, Developer, Stormchaser, Editor, </Title>
                                <Title highlighted={+showWeb}>PHP, HTML, CSS, Javascript, React, </Title>
                                <Title highlighted={+showGame}>Python, Java, C++, Godot Engine / GDScript, </Title>
                                <Title highlighted={+showGraphic}>After Effects, Sony Vegas Pro, Photoshop </Title>
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
                <div className='projects'>
                    <div className='projectContainer'>
                        <h1>Current Projects</h1>
                        <a target={"blank"} href='https://trello.com/b/jsd5zUAq/2022'>   <h4>2022 - More info on my Trello.</h4>  </a>
                            <div>
                                <h3>Project: Synergy</h3>
                                <p>Project: Synergy is a collection of discord bots, partially for personal use and convience, partially for public use and utility. From webpage snapshots to weather updates, more info can be found on <a target={"blank"} href='https://trello.com/b/jsd5zUAq/2022'>my trello</a>!</p>
                            </div>
                            <div>
                                <h3>Project: Edge</h3>
                                <p>Project: Edge is an ongoing project for websites. The goal is to gain a portfolio of sites and expirience making them, learning new skills and improving my formatting. Most sites I've made are listed here.</p>
                            </div>
                            <div>
                            <h3>Project: Supercell</h3>
                                <p>Project: Supercell is my own study into weather, weather systems, and natural disasters. The end goal is to successfully predict and chase a tornado. Due to gas prices in 2022, this will most likely be held off.</p>
                                </div>
                            <div>
                                <h3>Project: Stone</h3>
                                <p>Project: Stone is a large scale music video. It is meant to be a true test of skill with my After Effects work. This will be the last project of 2022.</p>
                            </div>
                        </div>
                </div>
            <div className='links'>
                <div>
                    <h1 className='contactTitle'>Links & Contacts</h1>
                    <a target="blank" href="https://twitter.com/_nnexsus"> <div className='mediaLink'> <h2>Twitter</h2>  <Img alt='twitter link' loading={'lazy'} src={Twitter}></Img> </div> </a>
                    <a target="blank" href="https://youtube.com/c/nnexsus"> <div className='mediaLink'> <h2>Youtube</h2>  <Img alt='youtube link' loading={'lazy'} src={Youtube}></Img> </div> </a>
                    <a target="blank" href="https://discord.gg/d8R2tDaBK2"> <div className='mediaLink'> <h2>Discord</h2>  <Img alt='discord link' loading={'lazy'} src={Discord}></Img> </div> </a>
                    <a target="blank" href="https://github.com/nnexsus"> <div className='mediaLink'> <h2>Github</h2> <Img alt='github link' loading={'lazy'} src={Github}></Img>  </div> </a>
                </div>
            </div>
        </section>
    </Wrapper>
    )
}

export default Aboutetc;