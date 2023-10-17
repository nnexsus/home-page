import React, { useEffect, useState } from 'react';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import styled from 'styled-components';
import axios from 'axios';
import { LinkContext } from '../../context';
import { useContext } from 'react';

const Wrapper = styled.div`

    p, h1, h2, h3, h4, h5, a {
        font-family: 'W95FA';
    }

    button {
        :hover {
            transform: scale(1.1);
        }
    }

    a {
        color: var(--accentTheme);
        :active {
            color: var(--accentThemeDarker);
        }
        :visited {
            color: var(--accentThemeEvenDarker);
            :active {
                color: var(--accentThemeDarker);
            }
        }
    }

    .container {

        padding: 25px;
        
        .container-2 {

            display: flex;
            flex-direction: column;
            align-items: center;

            margin: 50px 15%;

            backdrop-filter: blur(5px) brightness(0.5) drop-shadow(0px 0px 15px white);
            border: outset 5px;

            img {
                margin: 5px;
            }
        }
    }

    .top-button {
        float: right; 
        height: 20px; 
        border: groove 2px; 
        margin: 0 1px;
        cursor: pointer;
    }

    .button-on-bar {
        width: 25px; 
        height: 25px; 
        padding: 0;
    }

    .button-on-bar2 {
        height: 30px; 
        padding: 5px;
        margin: 3px;
        a {
            color: black;
            text-decoration: none;
        }
    }

    .button-on-bar3 {
        height: 22px; 
        padding: 0px;
        margin: 0px;
    }

    .button-on-bar, .button-on-bar2, .button-on-bar3 {
        border: outset 2px; 
        background-color: lightgray;
        border-right-color: black;
        border-bottom-color: black;
        border-top-color: #FFF8FF;
        border-left-color: #FFF8FF;
        outline: 1px black solid;
        image-rendering: pixelated;
    }

    .button-on-bar:hover, .button-on-bar2:hover, .button-on-bar3:hover {
        filter: brightness(1.1);
    }

    .dark {
        color: rgba(0, 0, 0, 0.3);
    }

    .bright {
        color: white;
    }

    .content::-webkit-scrollbar, .curr::-webkit-scrollbar {
        height: 5px;
        width: 15px;
    }
    
    .content::-webkit-scrollbar-track, .curr::-webkit-scrollbar-track {
        background: darkgray;
    }
    
    .content::-webkit-scrollbar-thumb, .curr::-webkit-scrollbar-thumb {
        background-color: lightgray; 
        transition: 0.2s ease;
        border: outset 2px;
        background-color: lightgray;
        border-right-color: black;
        border-bottom-color: black;
        border-top-color: #FFF8FF;
        border-left-color: #FFF8FF;
        outline: 1px black solid;
    }
    
    .content::-webkit-scrollbar-thumb:hover, .curr::-webkit-scrollbar-thumb:hover {
        background-color: darkgray;
    }

    .aboutButtons {
        display: flex;
        justify-content: center;
        background: lightgray;
        border: inset 3px;
        padding: 2px;
        margin: 3px 5px;
        outline: solid black 2px;
    }

    .twit-container {
        margin: 10px 15%;
    }

    .link-grid {
        display: grid; 
        grid-template-columns: repeat(3, 33%);
        text-align: center;
    }

    .home-1 {
        display: grid; 
        grid-template-columns: 30% 70%; 
        grid-template-rows: 250px 260px 500px; 
        gap: 5px; 
        padding: 10px; 
        margin-right: 20px; 
        background: url('/images/panels/about/surfacefull.webp'); 
        background-size: contain; 
        border: outset 3px;
    }

    #website {
        width: 100%; 
        background-image: url('/images/panels/georadio/tile.jpg'); 
        padding-top: 10px; 
        height: 1200px; 
        border-bottom: outset 3px;
    }

    .paragraph-flex {
        scroll-behavior: smooth;
    }

    .show {
        display: none;
    }

    @media screen and (max-width: 1100px) {
        .home-1 {
            grid-template-rows: 250px 260px 800px; 
        }

        #website {
            height: 1400px; 
        }
    }

    @media screen and (max-width: 1080px) {
        .aboutButtons {
            display: block;
        }
        .link-grid {
            display: grid; 
            grid-template-columns: repeat(2, 50%);
            text-align: center;
        }

        .home-1 {
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 10px;
            margin-right: 20px;
            background: url('/images/panels/about/surfacefull.webp');
            background-size: contain;
            border: outset 3px;
        }

        .hide {
            display: none;
        }

        .show {
            display: block;
        }
    }

    @media screen and (max-width: 500px) {
        .home-1 {
            display: flex; 
            flex-direction: column;
        }

        .mobilehide {
            display: none;
        }

        #website {
            height: 100vh; 
        }

        .paragraph-flex {
            display: grid;
            grid-template-columns: repeat(5, 90%);
            overflow: scroll;
            p {
                margin: 4px;
            }
        }
    }
`;

const Paragraph = styled.p`
    color: rgba(1, 1, 1, 0.3);
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    padding: 3px;
`;

const Title = styled.h4`
    display: inline-flex;
    margin: 0;
    color: rgba(1, 1, 1, 0.3);
`;

const Aboutetc = ({number}) => {

    const [state, dispatch] = useContext(LinkContext);
    
    const onClick = (cl) => {
        document.querySelectorAll(`.hi-${cl}`).forEach((el) => {
            el.classList.toggle('dark')
            el.classList.toggle('bright')
        })
    }

    const [current, setCurrent] = useState([{id: "10000", title: "", htmltext: ""}]);

    useEffect(() => {
        axios.get('https://arina.lol/api/mainsite/current').then((res) => {
            setCurrent(res.data)
        })
    }, [])

    const updateLink = (link) => {
        dispatch({type: 'update_addbar', addbar: `${link}`})
    }

    return (
        <Wrapper>
        <section className='front' id={`panels-${number}`}>
            <div id="website">
                <div id={`Home-${number}`} style={{width: '100%', imageRendering: 'pixelated', padding: '10px', height: 'fit-content'}}>
                    <div className='home-1'>
                        <div className='mobilehide hide' style={{gridColumn: 1, gridRow: 1}}>
                            <img loading='lazy' alt='decor' src='/images/panels/about/pfp.webp' style={{imageRendering: 'pixelated', maxWidth: '245px', border: 'inset 3px'}} width={'100%'} />
                        </div>
                        <div style={{gridColumn: 2, padding: '10px'}} className='content'>
                            <div className='flex-column' style={{display: 'flex', alignItems: 'center'}}>
                                <h1 style={{color: 'black', fontSize: '30px', textAlign: 'center'}}>About Me</h1>
                                <img className='show' loading='lazy' alt='decor' src='/images/panels/about/pfp.webp' style={{marginLeft: '15px', imageRendering: 'pixelated', border: 'inset 3px'}} height={'50px'} width={'50px'} />
                                <div className='browserlinks' style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginLeft: '15px'}}>
                                    <p style={{cursor: 'pointer', display: 'flex', flexDirection: 'column', whiteSpace: 'nowrap', justifyContent: 'center', alignItems: 'center'}} className='button-on-bar2' onClick={() => updateLink('http://youtube.com/')}>Videos</p>
                                    <p style={{cursor: 'pointer', display: 'flex', flexDirection: 'column', whiteSpace: 'nowrap', justifyContent: 'center', alignItems: 'center'}} className='button-on-bar2' onClick={() => updateLink('C:/AE/')}>After Effects</p>
                                    <p style={{cursor: 'pointer', display: 'flex', flexDirection: 'column', whiteSpace: 'nowrap', justifyContent: 'center', alignItems: 'center'}} className='button-on-bar2' onClick={() => updateLink('C:/VS/')}>Coding</p>
                                    <p style={{cursor: 'pointer', display: 'flex', flexDirection: 'column', whiteSpace: 'nowrap', justifyContent: 'center', alignItems: 'center'}} className='button-on-bar2' onClick={() => updateLink('http://twitter.com/')}>Feeds</p>
                                </div>
                            </div>
                            <h4 style={{color: 'black', textShadow: 'white 0 0 7px', fontSize: '24px', textAlign: 'center', fontStyle: 'italic', background: 'var(--accentThemeDarker)', padding: '10px 0', margin: '15px 0', borderRadius: '6px', border: 'solid 2px var(--accentTheme)'}}>Click a title below to highlight more.</h4>
                            <div className='aboutButtons'>
                                <a href={`#nnexsus-desc-${number}`}><button title='Click to highlight!' className='selector button-on-bar2' id={`name-mini-${number}`} onClick={(e) => onClick(e.currentTarget.id)}>Nnexsus</button></a>
                                <a href={`#webdev-desc-${number}`}><button title='Click to highlight!' className='selector button-on-bar2' id={`web-mini-${number}`} onClick={(e) => onClick(e.currentTarget.id)}>WebDev</button></a>
                                <a href={`#graphic-desc-${number}`}><button title='Click to highlight!' className='selector button-on-bar2' id={`graphic-mini-${number}`} onClick={(e) => onClick(e.currentTarget.id)}>Graphics</button></a>
                                <a href={`#storm-desc-${number}`}><button title='Click to highlight!' className='selector button-on-bar2' id={`storm-mini-${number}`} onClick={(e) => onClick(e.currentTarget.id)}>Stormchaser</button></a>
                            </div>
                                <div style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '2px', borderRadius: '5px'}}>
                                    <Title className='hi-name dark'>IT, Developer, Editor, Stormchaser; </Title>
                                    <Title className='hi-web dark'>React, HTML, CSS, Javascript, PHP; </Title>
                                    <Title className='hi-graphic dark'>After Effects, Vegas Pro, Photoshop; </Title>
                                    <Title className='hi-storm dark'>idk what to put here lol; </Title>
                                </div>
                                <div className='paragraph-flex'>
                                    <Paragraph id={`nnexsus-desc-${number}`} className='hi-name dark'>
                                        Hello, I'm nnexsus (en-nex-sus/ｴﾝ-ﾈｸｿｽ). I'm 21 years old and currently do all sorts of stuff, like coding projects, weather forecasting and storm chasing, video/picture editing, and just general IT (networking, programing, security, etc).
                                        I really enjoy learning and mastering new topics all the time. I love finding new ways to use my creativity in new fields.
                                        On the side, I'm learning Japanese and video editing and such in Adobe products like AE, and occasionally art (do you like the bg? I made this one)! My main studies are still further into tech and coding though.
                                    </Paragraph>
                                    <Paragraph id={`webdev-desc-${number}`} className='hi-web dark'>
                                        I have 3 main web projects at this point in time: this site, <a href='#radio'>GeoRadio (links to project panel)</a>, and <a href='#server'>nnserver (also links to panel)</a>. Feel free to check them out, especially GeoRadio! I'd appreciate it.
                                        I also have a giant backend server for all my services that I'd consider a web project; that being Arina (arina.lol). It currently runs about 14 different live services, only a few of which are used publically, but I plan to have more novel services soon!
                                    </Paragraph>
                                    <Paragraph id={`graphic-desc-${number}`} className='hi-graphic dark'>
                                        I stumbled into video and photo editing originally just to make memes nearly 6 years ago now. Sometimes I make music video stuff, sometimes just cool effect renders, and other times: logos, graphics (for this or other sites), backgrounds, the list is very long, lol.
                                        A lot of my work can be found on this site, through either the <a href="#desktop">Desktop Youtube Site</a> or <a href='#theater-panel'>Theater Panel</a>! Or, for mobile users or other sites, <a href='https://twitter.com/_nnexsus' target={"_blank"} rel="noreferrer">Twitter</a> and <a href='https://youtube.com/playlist?list=PLzhN8a1aNzMzLQV-XvjIMG-_yb-jptuGK' target={"_blank"} rel="noreferrer">Youtube (playlist)</a> work too!
                                    </Paragraph>
                                    <Paragraph id={`storm-desc-${number}`} className='hi-storm dark'>
                                        I have a pretty deep love for weather! Something about seeing a high number, then watching that number produce insane outcomes is way too engaging for me.
                                        I've only started chasing this year, but with the early activity in IL-IA, I've gotten pretty lucky!! I post updates to my <a href='https://twitter.com/_nnexsus' target={"_blank"} rel="noreferrer">Twitter</a> when I go. 
                                        I don't often post photos from my chases yet since I want to improve first, but occasionally I'll drop some on there (twitter)!
                                        I live in the Chicago area, so chasing isn't a super common availability, I guess with the exception of spring this year (2023), holy heckity. Though (except for 1 awesome day), May and June have been unbelievably dead here...
                                        Summer is also my favorite season, I HATE THE COLD!! Higher temperature = better!!
                                    </Paragraph>
                                </div>
                            </div>
                        <div className='hide' style={{gridColumn: 1, height: 'calc(100% - 12px)', background: 'url(/images/panels/about/tile3.jpg)', border: 'inset 3px', padding: '5px'}}>
                            <h2 style={{textAlign: 'center'}}>My Links:</h2>
                            <div className='home-3 link-grid'>
                                <a style={{textShadow: '0px 0px 3px black'}} target='_blank' rel='noreferrer' href='https://twitter.com/_nnexsus'><p>Twitter</p></a>
                                <a style={{textShadow: '0px 0px 3px black'}} target='_blank' rel='noreferrer' href='https://discord.gg/d8R2tDaBK2'><p>Discord @nnexsus</p></a>
                                <a style={{textShadow: '0px 0px 3px black'}} target='_blank' rel='noreferrer' href='https://github.com/nnexsus/'><p>Github</p></a>
                                <a style={{textShadow: '0px 0px 3px black'}} target='_blank' rel='noreferrer' href='https://trello.com/c/6YBXnLYP/'><p>Trello</p></a>
                                <img loading='lazy' alt='decor' width={'100%'} height={'100%'} src='/images/panels/about/wave.gif' />
                            </div>
                        </div>
                        <div className='curr' style={{gridColumn: 1, border: 'inset 3px', background: 'black', padding: '3px', overflowY: 'scroll', maxHeight: '50vw'}}>
                            <div className='projectContainer'>
                                <h1 style={{color: 'white'}}>Current Projects</h1>
                                <a target={"_blank"} rel='noreferrer' href='https://trello.com/b/WjQkpKpc/2023'>   <h4>2023 - More info on my Trello.</h4>  </a>
                                    {current.map((curr) => {
                                        return (
                                            <div key={curr.id}>
                                                <hr style={{height: '1px', color: 'white', borderRadius: '50%'}} />
                                                <h3 style={{color: 'white'}}>{curr.title}</h3>
                                                <hr style={{border: '1px inset', opacity: '0.45', width: "70%"}} />
                                                <p style={{color: 'rgba(200, 200, 200)'}}>{curr.htmltext}</p>
                                            </div>
                                        )
                                    })}
                                <hr style={{height: '1px', color: 'white', borderRadius: '50%'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Wrapper>
    )
}

export default Aboutetc;