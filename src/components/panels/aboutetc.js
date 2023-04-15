import React, { useContext } from 'react';
import styled from 'styled-components';
import { LinkContext } from '../context';

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
        height: 25px; 
        padding: 5px;
    }

    .button-on-bar3 {
        height: 30px; 
        padding: 5px;
        margin: 3px;
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
        font-family: 'W95FA';
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

    .content::-webkit-scrollbar {
        height: 5px;
        width: 15px;
    }
    
    .content::-webkit-scrollbar-track {
        background: darkgray;
    }
    
    .content::-webkit-scrollbar-thumb {
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
    
    .content::-webkit-scrollbar-thumb:hover {
        background-color: darkgray;
    }

    .project-container {
        grid-column: 3; 
        grid-row-start: 1; 
        grid-row-end: 4; 
        border: inset 3px; 
        background: black; 
        padding: 3px;

        a {
            color: var(--accentTheme);
        }
    }

    .about-container {
        grid-column: 2; 
        padding: 10px;
    }

    @media screen and (max-width: 750px) {
        .project-container {
            grid-column: span 3;
            grid-row-start: 5;
        }

        .about-container {
            grid-column: span 2;
        }
    }

    @media screen and (max-width: 600px) {
        .content {
            height: 600px;
            overflow-y: auto;
        }
    }
`;

const Paragraph = styled.p`
    color: rgba(1, 1, 1, 0.3);
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    padding: 3px;
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
    color: rgba(1, 1, 1, 0.3);
`;

const Aboutetc = () => {

    const [state, dispatch] = useContext(LinkContext);
    const onImgClick = (link) => dispatch({type: 'update_link', link: link, browser: true})

    const onClick = (cl) => {
        document.querySelectorAll(`.hi-${cl}`).forEach((el) => {
            el.classList.toggle('dark')
            el.classList.toggle('bright')
        })
    }

    return (
        <Wrapper>
            <section className='front' id='panels'>
            <div className='main-container' style={{backgroundColor: "#C0C7C8", border: "groove 2px"}}>
                <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/panels/georadio/Earth (16 colors).ico'/>
                        <h4 className='title' style={{marginLeft: '2px', color: 'white'}}>Internet Explorer - About Me!!</h4>
                    </div>
                    <div className='buttons content' style={{marginRight: '1px'}}>
                        <button className='top-button'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>X</p></button>
                        <button className='top-button'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>◻</p></button>
                        <button className='top-button'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>_</p></button>
                    </div>
                </div>
                <div className='file-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center'}}>
                    <button className='button-on-bar2'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>File</p></button>
                    <button className='button-on-bar2'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>Edit</p></button>
                    <button className='button-on-bar2'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>View</p></button>
                    <button className='button-on-bar2'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>Favorites</p></button>
                    <button className='button-on-bar2'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>Help</p></button>
                </div>
                <div className='buttons-bar' style={{width: '100%', height: '24px', display: 'flex', alignItems: 'center', gridRow: 4}}>
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
                    <input type={'text'} value={'https://georadio.netlify.app/'} placeholder='https://www.youtube.com/watch?v=6j18-JVmf7w' disabled='true'
                    style={{fontFamily: "W95FA", width: "80%", backgroundColor: 'white', border: 'inset 2px'}}/>
                </div>
                <div className='content' style={{border: 'inset 2px', overflowY: 'scroll', overflowX: 'hidden'}}>
                
                    <div id="website" style={{width: '100%', backgroundImage: `url(/images/panels/georadio/tile.jpg)`, paddingTop: '10px', height: '1200px'}}>

                    <div id="Home" style={{width: '100%', imageRendering: 'pixelated', padding: '10px', height: '800px'}}>
                        <div style={{display: 'grid', gridTemplateColumns: '20% 65% calc(15% - 10px)', gridTemplateRows: '250px 260px 500px', gap: '5px', padding: '10px', marginRight: '20px', background: 'url(/images/panels/about/surfacefull.webp)', backgroundSize: 'contain', border: 'outset 3px'}} className='home-1'>

                            <div style={{gridColumn: 1, gridRow: 1}}>
                                <img onClick={(e) => onImgClick(e.currentTarget.src)} src='/images/panels/about/pfp.webp' style={{imageRendering: 'pixelated', maxWidth: '245px', border: 'inset 3px'}} width={'100%'} />
                            </div>

                            <div className='content about-container'>
                                <h1 style={{color: 'black', fontSize: '30px'}}>About Me</h1>
                                <h4 style={{color: "black", textShadow: 'white 0 0 7px', fontStyle: 'italic', background: 'var(--accentThemeDarker)', padding: '10px 0', margin: '15px 0', borderRadius: '6px', border: 'solid 2px var(--accentTheme)'}}>Click a title below to highlight more.</h4>
                                <div className='aboutButtons'>
                                    <button className='selector button-on-bar3' id='name' onClick={(e) => onClick(e.currentTarget.id)}>Nnexsus</button>
                                    <button className='selector button-on-bar3' id='web' onClick={(e) => onClick(e.currentTarget.id)}>Web Developer</button>
                                    <button className='selector button-on-bar3' id='game' onClick={(e) => onClick(e.currentTarget.id)}>Game Developer</button>
                                    <button className='selector button-on-bar3' id='graphic' onClick={(e) => onClick(e.currentTarget.id)}>Graphic Designer</button>
                                    <button className='selector button-on-bar3' id='storm' onClick={(e) => onClick(e.currentTarget.id)}>Stormchaser</button>
                                </div>
                                    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '2px', borderRadius: '5px'}}>
                                        <Title className='hi-name dark'>IT, Developer, Editor, Stormchaser; </Title>
                                        <Title className='hi-web dark'>React, HTML, CSS, Javascript, PHP; </Title>
                                        <Title className='hi-game dark'>Java, Godot Engine / GDScript, Python; </Title>
                                        <Title className='hi-graphic dark'>After Effects, Sony Vegas Pro, Photoshop; </Title>
                                    </div>
                                        <Paragraph className='hi-name dark'>
                                            Hello, I'm Ethan. My screen-name is nnexsus (nec - sus). I'm 20 years old and currently do freelance work & full-time IT.
                                            I really enjoy learning and mastering new topics all the time. I love finding new ways to use my creativity in new fields.
                                            Currently, I love making web apps, making games, and working on my server stuff. But, I also love weather and stormchasing!!
                                            On the side, I'm learning Japanese and video editing and such in Adobe products like AE, and occasionally art (do you like the bg? I made this one).
                                        </Paragraph>
                                        <Paragraph className='hi-web dark'>
                                            My website work can be found through the apps on desktop, the <a href='#web-section'>Web Planet</a> on the left of the title screen (top of site), or in the <a href='#past'>past projects</a> Web panel! These projects are mostly for fun, but are all functional too!
                                            GeoRadio is my favorite project I've worked on, because I love the designs of the early geocities web, and I love the idea of internet radios. nnexsus-server is an app I built mostly for self-use, but anyone can sign up to use storage too!!
                                        </Paragraph>
                                        <Paragraph className='hi-game dark'>
                                            Fish Game can currently be found in the Fish Game panel above, the <a href='#game-section'>Game Planet</a> on the right of the title screen (top of site), or in <a href='#past'>past projects</a>. 
                                            This was my first true game release, and I want to continue to build off of this in the future to making more games!!
                                            My first solo indie game (ASCARDS) is located below in the <a href='#past'>past projects</a>, or has a downloadable demo here <a href='#ascii'>ASCARDS</a>.
                                        </Paragraph>
                                        <Paragraph className='hi-graphic dark'>
                                            Any graphic design and music video work can be found through my <a href='https://twitter.com/_nnexsus' target={"_blank"} rel="noreferrer">Twitter</a>, <a href='https://youtube.com/playlist?list=PLzhN8a1aNzMzLQV-XvjIMG-_yb-jptuGK' target={"_blank"} rel="noreferrer">Youtube</a>, or <a href='#theater-panel'>Theater</a>.
                                            A lot of it is for personal development, or for videos like Project: 22.
                                        </Paragraph>
                                        <Paragraph className='hi-storm dark'>
                                            I love the weather, especially tropical storms and tornadoes. So far, I've chased 3 times, 2 successfully seeing tornadoes!! I post updates to my <a href='https://twitter.com/_nnexsus' target={"_blank"} rel="noreferrer">Twitter</a> when I go, and occasionally drop storm photos there too!!
                                            I live in the Chicago area, so chasing isn't a common availability, with the exception of this year (2023), I made it to both the 3/31 and 4/4 events, and saw the incredible Industry/Lewisberg Tornado on the 4/4 event.
                                            Summer is also my favorite season, I HATE THE COLD!!
                                        </Paragraph>
                            </div>

                            <div style={{gridColumn: 1, gridRowStart: 2, gridRowEnd: 4, height: 'calc(100% - 12px)', background: 'url(/images/panels/about/tile3.jpg)', border: 'inset 3px', padding: '5px'}}>
                                <h2>My Links:</h2>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}} className='home-3'>
                                    <a href='https://twitter.com/_nnexsus'><p>Twitter</p></a>
                                    <a href='https://discord.gg/d8R2tDaBK2'><p>Discord</p></a>
                                    <a href='https://github.com/nnexsus/'><p>Github</p></a>
                                    <a href='https://trello.com/c/6YBXnLYP/'><p>Trello</p></a>
                                    <img src='/images/panels/about/wave.gif' />
                                </div>
                            </div>

                            <div className='project-container'>
                                <div>
                                    <h1 style={{color: 'white'}}>Current Projects</h1>
                                    <a target={"blank"} href='https://trello.com/b/WjQkpKpc/2023'>   <h4>2023 - More info on my Trello.</h4>  </a>
                                        <div>
                                            <h3 style={{color: 'white'}}>Fish Game v1.1</h3>
                                            <p style={{color: 'white'}}>Update Fish Game to include all the originally planned content, and fix all the issues with the base game.<a target={"blank"} href='https://trello.com/c/M7aaJSQj/20-fish-game-v11'>Fish Game v1.1</a></p>
                                        </div>
                                        <div>
                                            <h3 style={{color: 'white'}}>Project: Human</h3>
                                            <p style={{color: 'white'}}>Make a triumphant return to making music videos. <a target={"blank"} href='https://trello.com/c/rOwTCYEY/12-project-human'>Project: Human</a></p>
                                        </div>
                                        <div>
                                            <h3 style={{color: 'white'}}>Project: Deathblow</h3>
                                            <p style={{color: 'white'}}>Rewrite/recreate ASCARDS into a better, easier version. <a target={"blank"} href='https://trello.com/c/7nlCK0tP/2-project-deathblow'>Project: Deathblow</a></p>
                                        </div>
                                        <div>
                                            <h3 style={{color: 'white'}}>Weather Site 3.0</h3>
                                            <p style={{color: 'white'}}>Recreate Weather Site 2,0 to be more info full, and generally more useful to myself for forecasting. <a target={"blank"} href='https://trello.com/c/MGQ7r44D/29-weather-site-30'>Weather Site 3.0</a></p>
                                        </div>
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

export default Aboutetc;