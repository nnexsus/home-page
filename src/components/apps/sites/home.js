import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    box-shadow: 0px 0px 20px 0px black, 0px 0px 20px 0px black inset;
    padding: 10px;

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

    @media screen and (max-width: 600px) {
        .content {
            min-height: 1000px;
            overflow-y: auto;
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

const Home = () => {

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

    return (
        <Wrapper>
            <section className='front' id='panels'>
            <div style={{backgroundColor: "#C0C7C8", border: "groove 2px"}}>
                <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/panels/georadio/Earth (16 colors).ico'/>
                        <h4 className='title' style={{marginLeft: '2px'}}>Internet Explorer</h4>
                    </div>
                    <div className='buttons content' style={{marginRight: '1px'}}>
                        <button className='top-button'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>X</p></button>
                        <button className='top-button'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>◻</p></button>
                        <button className='top-button'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>_</p></button>
                    </div>
                </div>
                <div className='file-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center'}}>
                    <button className='button-on-bar3'><p style={{margin: 0, color: 'black', textShadow: 'none', padding: '1px 3px'}}>File</p></button>
                    <button className='button-on-bar3'><p style={{margin: 0, color: 'black', textShadow: 'none', padding: '1px 3px'}}>Edit</p></button>
                    <button className='button-on-bar3'><p style={{margin: 0, color: 'black', textShadow: 'none', padding: '1px 3px'}}>View</p></button>
                    <button className='button-on-bar3'><p style={{margin: 0, color: 'black', textShadow: 'none', padding: '1px 3px'}}>Favorites</p></button>
                    <button className='button-on-bar3'><p style={{margin: 0, color: 'black', textShadow: 'none', padding: '1px 3px'}}>Help</p></button>
                </div>
                <div className='buttons-bar' style={{width: '25%', height: '24px', display: 'flex', alignItems: 'center', gridRow: 4}}>
                        <button title='Open Folder' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/opendir.png' width={'20px'} height={'20px'}/></button>
                        <button title='Home' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/panels/georadio/explorer/Home.png' width={'20px'} height={'20px'}/></button>
                        <button title='Back' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/arrowl-lit.png' width={'20px'} height={'20px'}/></button>
                        <button title='Forward' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/panels/georadio/explorer/arrowr-unlit.png' width={'20px'} height={'20px'}/></button>
                        <button title='Unload' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/Shred.png' width={'20px'} height={'20px'}/></button>
                        <button title='Refresh' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/panels/georadio/explorer/Refresh.png' width={'20px'} height={'20px'}/></button>
                        <button title='New Folder' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/New folder.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy to Folder' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/panels/georadio/explorer/Copy to Folder.png' width={'20px'} height={'20px'}/></button>
                        <button title='Upscale Text' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/upsize.png' width={'20px'} height={'20px'}/></button>
                        <button title='Downscale Text' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/panels/georadio/explorer/downsize.png' width={'20px'} height={'20px'}/></button>
                        <button title='Cut' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/Cut.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/Copy.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy to Clipboard' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/panels/georadio/explorer/Paste.png' width={'20px'} height={'20px'}/></button>
                    </div>
                <div className='address-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                    <p style={{color: 'black', marginRight: '3px', textShadow: 'none'}}>Address:</p>
                    <input type={'text'} value={'https://georadio.live/'} placeholder='https://www.youtube.com/watch?v=6j18-JVmf7w' disabled='true'
                    style={{fontFamily: "W95FA", width: "80%", backgroundColor: 'white', border: 'inset 2px'}}/>
                </div>
                <div className='content' style={{border: 'inset 2px', overflowY: 'scroll', overflowX: 'auto'}}>
                
                    <div id="website" style={{width: '100%', backgroundImage: `url(/images/panels/georadio/tile.jpg)`, paddingTop: '10px', height: '1200px'}}>

                    <div id="Home" style={{width: '100%', imageRendering: 'pixelated', padding: '10px', height: '800px'}}>
                        <div style={{display: 'grid', gridTemplateColumns: '30% 70%', gridTemplateRows: '250px 260px 500px', gap: '5px', padding: '10px', marginRight: '20px', background: 'url(/images/panels/about/surfacefull.webp)', backgroundSize: 'contain', border: 'outset 3px'}} className='home-1'>

                            <div style={{gridColumn: 1, gridRow: 1}}>
                                <img alt="decor" loading='lazy' src='/images/panels/about/pfp.webp' style={{imageRendering: 'pixelated', maxWidth: '245px', border: 'inset 3px'}} width={'100%'} />
                            </div>

                            <div style={{gridColumn: 2, padding: '10px'}} className='content'>
                                <h1 style={{color: 'black', fontSize: '30px'}}>About Me</h1>
                                <h4 style={{color: 'black', textShadow: 'white 0 0 7px', fontSize: '36px', textAlign: 'center', fontStyle: 'italic', background: 'var(--accentThemeDarker)', padding: '10px 0', margin: '15px 0', borderRadius: '6px', border: 'solid 2px var(--accentTheme)'}}>Click a title below to highlight more.</h4>
                                <div className='aboutButtons'>
                                    <button title='Click to highlight!' className='selector button-on-bar2' id='name' onClick={(e) => onClick(e.currentTarget.id)}>Nnexsus</button>
                                    <button title='Click to highlight!' className='selector button-on-bar2' id='web' onClick={(e) => onClick(e.currentTarget.id)}>WebDev</button>
                                    <button title='Click to highlight!' className='selector button-on-bar2' id='game' onClick={(e) => onClick(e.currentTarget.id)}>GameDev</button>
                                    <button title='Click to highlight!' className='selector button-on-bar2' id='graphic' onClick={(e) => onClick(e.currentTarget.id)}>Graphics</button>
                                    <button title='Click to highlight!' className='selector button-on-bar2' id='storm' onClick={(e) => onClick(e.currentTarget.id)}>Stormchaser</button>
                                </div>
                                    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '2px', borderRadius: '5px'}}>
                                        <Title className='hi-name dark'>IT, Developer, Editor, Stormchaser; </Title>
                                        <Title className='hi-web dark'>React, HTML, CSS, Javascript, PHP; </Title>
                                        <Title className='hi-game dark'>Java, Godot Engine / GDScript, Python; </Title>
                                        <Title className='hi-graphic dark'>After Effects, Sony Vegas Pro, Photoshop; </Title>
                                    </div>
                                    <Paragraph className='hi-name dark'>
                                            Hello, I'm Ethan. My screen-name is nnexsus (nec - sus). I'm 20 years old and currently do all sorts of stuff, like coding projects, weather forecasting and storm chasing, video/picture editing, and a lot of IT (it's also my full-time job).
                                            I really enjoy learning and mastering new topics all the time. I love finding new ways to use my creativity in new fields.
                                            On the side, I'm learning Japanese and video editing and such in Adobe products like AE, and occasionally art (do you like the bg? I made this one)! My main studies are still further into tech and coding though.
                                        </Paragraph>
                                        <Paragraph className='hi-web dark'>
                                            My website work can be found through the apps on desktop, the <a href='#web-section'>Web Planet</a> on the left of the title screen (top of site), or in the <a href='#past'>past projects</a> Web panel! These projects are mostly for fun, but are all functional too!
                                            GeoRadio is my favorite project I've worked on, because I love the designs of the early geocities web, and I love the idea of internet radios. nnexsus-server is an app I built mostly for self-use, but anyone can sign up to use storage too!!
                                        </Paragraph>
                                        <Paragraph className='hi-game dark'>
                                            Currently, I have 2 non-archived game Projects I really want to come back to, and hopefully will soon!
                                            I have ideas for games and systems very frequently, and sometimes can't hold back but make them! Currently, my gamedev is in a state where I work on various systems for these ideas for me to apply to a future project that I'll actually finish.
                                            Fish Game can currently be found in the Fish Game panel above, the <a href='#game-section'>Game Planet</a> on the right of the title screen (top of site), or in <a href='#past'>past projects</a>. 
                                            This was my first true game release, and I want to continue to build off of this in the future to making more games!! We don't talk about the 2 other games before this one...
                                        </Paragraph>
                                        <Paragraph className='hi-graphic dark'>
                                            I stumbled into video and photo editing originally just to make memes nearly 6 years ago now. Sometimes I make music video stuff, sometimes just cool effect renders, and other times: logos, graphics (for this or other sites), backgrounds, the list is very long, lol.
                                            A lot of my work can be found on this site, through either the <a href="#desktop">Desktop Youtube Site</a> or <a href='#theater-panel'>Theater Panel</a>! Or, for mobile users or other sites, <a href='https://twitter.com/_nnexsus' target={"_blank"} rel="noreferrer">Twitter</a> and <a href='https://youtube.com/playlist?list=PLzhN8a1aNzMzLQV-XvjIMG-_yb-jptuGK' target={"_blank"} rel="noreferrer">Youtube (playlist)</a> work too!
                                        </Paragraph>
                                        <Paragraph className='hi-storm dark'>
                                            I have a pretty deep love for weather! Something about seeing a high number, then watching that number produce insane outcomes is way too engaging for me.
                                            I've only started chasing this year, but with the early activity in IL-IA, I've gotten pretty lucky!! I post updates to my <a href='https://twitter.com/_nnexsus' target={"_blank"} rel="noreferrer">Twitter</a> when I go. 
                                            I don't often post photos from my chases yet since I want to improve first, but occasionally I'll drop some on there (twitter)!
                                            I live in the Chicago area, so chasing isn't a super common availability, I guess with the exception of spring this year (2023), holy heckity. Though (except for 1 awesome day), May and June have been unbelievably dead here...
                                            Summer is also my favorite season, I HATE THE COLD!! Higher temperature = better!!
                                        </Paragraph>
                                    </div>

                            <div style={{gridColumn: 1, height: 'calc(100% - 12px)', background: 'url(/images/panels/about/tile3.jpg)', border: 'inset 3px', padding: '5px'}}>
                                <h2 style={{textAlign: 'center'}}>My Links:</h2>
                                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 33%)', textAlign: 'center'}} className='home-3'>
                                    <a href='https://twitter.com/_nnexsus'><p>Twitter</p></a>
                                    <a href='https://discord.gg/d8R2tDaBK2'><p>Discord</p></a>
                                    <a href='https://github.com/nnexsus/'><p>Github</p></a>
                                    <a href='https://trello.com/c/6YBXnLYP/'><p>Trello</p></a>
                                </div>
                                <img alt="decor" src='/images/panels/about/wave.gif' />
                            </div>

                            <div className='curr' style={{gridColumn: 1, border: 'inset 3px', background: 'black', padding: '3px', overflowY: 'scroll'}}>
                                <div className='projectContainer'>
                                    <h1 style={{color: 'white'}}>Current Projects</h1>
                                    <a target={"blank"} href='https://trello.com/b/WjQkpKpc/2023'>   <h4>2023 - More info on my Trello.</h4>  </a>
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
                                </div>
                            </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    </Wrapper>
    )
}

export default Home;