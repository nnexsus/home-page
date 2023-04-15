import React, {useState} from 'react';
import styled from 'styled-components';

import bg1 from '../images/peaks.png';
import bg2 from '../images/waves.png';
import bg3 from '../images/blocks.png';

import domain from '../images/increment.png';
import badge from '../images/badge.png';

import Twitter from '../images/Twitter-logo.png';
import Youtube from '../images/Youtube-logo.png';
import Github from '../images/Github-logo.png';
import Discord from '../images/Discord-logo.png';

const Wrapper = styled.div`

    .top {
        padding: 10px;
        color: lightcoral;
        margin-top: -40px;
        margin-bottom: -200px;
        margin-left: 40px;
        margin-right: -50px;
        transform: skewY(10deg) rotateX(55deg) skewX(350deg);

        .content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        .past1 {
            grid-column-start: 1;
        }

        h1, h2, h3, h4, p {
            text-shadow: 0px 0px 4px black;
        }

        h1, h2 {
            text-align: center;
            font-size: 48px;
        }

        p {
            font-size: 18px;
        }

        .content {
            padding: 20px;
        }

        .p-project {
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            padding: 2px;
            margin: 2px;
            transition: 0.4s ease-in-out;

            :hover {
                background-color: rgba(120, 120, 120, 0.6);
            }
        }
    }

    .front {
        margin-top: -175px;
        transform-style: preserve-3d;
        transform: skewY(10deg);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0.95;
        border-radius: 4px;
    }

    .mediaLink {
        transition: 0.4s ease-in-out;

        :hover {
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
        }
    }


    h1, h2, h3, h4, p, a {
        font-family: monospace;
    }

    h1 {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }
    
    .aboutMe {
        background-color: #7B4B94;
        background-image: url(${bg1});
        background-size: cover;
        
        h1, h2, h3, h4, p {
            text-shadow: 0px 0px 2px black;
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
    }

    .projectContainer {
        
        div {
            background-color: rgba(0, 0, 0, 0.3);
            padding: 2px;
            margin: 2px;
            border-radius: 4px;
            border: solid black 2px;
            transition: 0.4s ease-in-out;
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

    .n1, .n2, .n3 {
        display: none;
        position: absolute;
    }

    .n1 {
    --aug-tr1-height: 100px;
    --aug-tr1-width: 100px;
    width: 185px;
    height: 350px;
    margin-top: -63px;
    color: lightcoral;
    --aug-bl1-height: 100px;
    --aug-bl1-width: 100px;
    --aug-r-offset: 48px;
    --aug-r-extend1: 21px;
    }

    .n2 {
    --aug-tr1-height: 200px;
    --aug-tr1-width: 140px;
    width: 222px;
    height: 348px;
    color: lightcoral;
    left: 195px;
    margin-top: -58px;
    --aug-l-extend1: 118px;
    --aug-l-offset: 22px;
    --aug-bl-extend1: 100px;
    --aug-bl-extend2: 100px;
    --aug-bl: 100px;
    }

    .n3 {
    width: 222px;
    height: 348px;
    color: lightcoral;
    left: 404px;
    margin-top: -58px;
    --aug-bl-inset1: 100px;
    --aug-br1: 100px;
    --aug-tl: 100px;
    }

    .nContainer {
        display: none;
        width: 100%;
        height: 350px;
    }

    @media screen and (max-width: 420px) {
        display: block;
        width: 300px;
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
 
const Img = styled.img`
    width: 75px;
`;


const Panels = () => {

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
            <div className='top'>
                <div data-augmented-ui="tl-2-clip-y t-clip-x tr-2-clip-y br-2-clip-y b-clip-x bl-2-clip-y both"
                className='content'>
                        <h2>Past Projects</h2>
                        <div className='past1 p-project'>
                            <h3>Project: Badge</h3>
                            <p>A high use discord bot, capable of awarding badges (achievements) to users for in app activities. Has built in games, commands, events, and profile pages that allow users to show off their achivements.</p>
                            <img src={`${badge}`} width="360" />
                        </div>
                        <div className='p-project'>
                            <h3>Project: Domain</h3>
                            <p>An image board website complete with profiles, public/private boards, customizable profile pages, and moderation. All done in vanilla HTML, php, and css.</p>
                            <img src={`${domain}`} width="480"/>
                        </div>
                        <div className='p-project'>
                            <h3>Project: 2021</h3>
                            <p>A two hour long recap and celebration for 2021. (Due to being sick with covid i was too tired to save the stream. It will be recovered sometime soon.)</p>
                        </div>
                    </div>
            </div>
            <div className='front'>
                <div className='nContainer'>
                    <div data-augmented-ui="tl-2-clip-y t-clip-x tr-clip br-2-clip-y b-clip-x bl-clip r-clip-y both" 
                    class="n1">
                        
                    </div>
                    <div data-augmented-ui="tl-clip t-clip-x tr-2-clip-y br-clip b-clip-x bl-clip l-clip-y both" 
                    class="n2">

                    </div>
                    <div data-augmented-ui="tl-clip t-clip-x tr-2-clip-y r-clip-xy br-clip b-clip-x bl-clip-y both" 
                    class="n3">

                    </div>
                    <span></span>
                </div>
                <div className='aboutMe'>
                    <div className='content'>
                        <h1>About Me</h1>
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
                </div>
                <div className='projects'>
                    <div className='projectContainer'>
                        <h1>My Projects</h1>
                        <a href='https://trello.com/b/jsd5zUAq/2022'>   <h4>2022 - More info on my Trello.</h4>  </a>
                            <div>
                                <h3>Project: Circuit</h3>
                                <p>Project: Ciruit is a turn-based strategy card game. I am working on the game in godot engine, solo. The game is most heavily inspired by the turn-based strategy Inscryption. Most everything in the game is created through ASCII art (text-art).</p>
                            </div>
                            <div>
                                <h3>Project: Oort</h3>
                                <p>Project: Oort is a large-ish scope cloud server hosting service I am working on. In January of 2022 I built an 8Tb server machine. On this machine I will be creating and hosting a cloud server for myself, friend, and family.</p>
                            </div>
                            <div>
                            <h3>Project: Tether</h3>
                                <p>Project: Tether is a discord bot that connects my cloud server to discord. The bot will allow for incredibly quick storing of media, using only simple commands, as well as fetching online data, and providing some general use.</p>
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
                        <a target="_blank" href="https://twitter.com/_nnexsus"> <div className='mediaLink'> <h2>Twitter</h2>  <Img src={Twitter}></Img> </div> </a>
                        <a target="_blank" href="https://youtube.com/c/nnexsus"> <div className='mediaLink'> <h2>Youtube</h2>  <Img src={Youtube}></Img> </div> </a>
                        <a target="_blank" href="https://discord.gg/d8R2tDaBK2"> <div className='mediaLink'> <h2>Discord</h2>  <Img src={Discord}></Img> </div> </a>
                        <a target="_blank" href="https://github.com/nnexsus"> <div className='mediaLink'> <h2>Github</h2> <Img src={Github}></Img>  </div> </a>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
};

export default Panels;