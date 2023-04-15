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

    .container {

        padding: 25px;
        
        .container-2 {

            display: flex;
            flex-direction: column;
            align-items: center;

            margin: 50px 15%;

            backdrop-filter: blur(5px) brightness(0.5) drop-shadow(0px 0px 15px white);
            border: outset 5px;

            //filter: drop-shadow(0px 0px 5px black);
            //box-shadow: 0px 0px 4px 2px black;

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
        border: outset 2px; 
        width: 25px; 
        height: 25px; 
        padding: 0;
        background-color: lightgray;
        border-right-color: black;
        border-bottom-color: black;
        border-top-color: #FFF8FF;
        border-left-color: #FFF8FF;
        outline: 1px black solid;
        image-rendering: pixelated;
    }

    .button-on-bar:hover {
        filter: brightness(1.1);
    }

    .button-on-bar2 {
        border: outset 2px; 
        height: 30px; 
        padding: 5px;
        margin: 3px;
        background-color: lightgray;
        border-right-color: black;
        border-bottom-color: black;
        border-top-color: #FFF8FF;
        border-left-color: #FFF8FF;
        outline: 1px black solid;
        image-rendering: pixelated;
    }

    .button-on-bar2:hover {
        filter: brightness(1.1);
    }

    .dark {
        color: rgba(0, 0, 0, 0.3);
    }

    .bright {
        color: white;
    }
`;

const Paragraph = styled.p`
    color: rgba(1, 1, 1, 0.6);
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

const Home = () => {

    const onClick = (cl) => {
        document.querySelectorAll(`.hi-${cl}`).forEach((el) => {
            el.classList.toggle('dark')
            el.classList.toggle('bright')
        })
    }

    return (
        <Wrapper id="website" style={{width: '100%', backgroundImage: `url(/images/panels/georadio/tile.jpg)`, paddingTop: '10px', height: '1200px'}}>

        <div id="Home" style={{width: '100%', imageRendering: 'pixelated', padding: '10px', height: '800px'}}>
            <div style={{display: 'grid', gridTemplateColumns: '20% 65% calc(15% - 10px)', gridTemplateRows: '250px 260px 500px', gap: '5px', padding: '10px', marginRight: '20px', background: 'url(/images/panels/about/surfacefull.webp)', backgroundSize: 'contain', border: 'outset 3px'}} className='home-1'>

                <div style={{gridColumn: 1, gridRow: 1}}>
                    <img src='/images/panels/about/pfp.webp' style={{imageRendering: 'pixelated', maxWidth: '245px', border: 'inset 3px'}} width={'100%'} />
                </div>

                <div style={{gridColumn: 2, padding: '10px'}} className='content'>
                    <h1 style={{color: 'black', fontSize: '30px'}}>About Me</h1>
                    <h4 style={{color: "black", textShadow: 'white 0 0 7px', fontStyle: 'italic', background: 'var(--accentThemeDarker)', padding: '10px 0', margin: '15px 0', borderRadius: '6px', border: 'solid 2px var(--accentTheme)'}}>Click a title below to highlight more.</h4>
                    <div className='aboutButtons'>
                        <button className='selector button-on-bar2' id='name' onClick={(e) => onClick(e.currentTarget.id)}>Nnexsus</button>
                        <button className='selector button-on-bar2' id='web' onClick={(e) => onClick(e.currentTarget.id)}>Web Developer</button>
                        <button className='selector button-on-bar2' id='game' onClick={(e) => onClick(e.currentTarget.id)}>Game Developer</button>
                        <button className='selector button-on-bar2' id='graphic' onClick={(e) => onClick(e.currentTarget.id)}>Graphic Designer</button>
                        <button className='selector button-on-bar2' id='storm' onClick={(e) => onClick(e.currentTarget.id)}>Stormchaser</button>
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
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 33%)', textAlign: 'center'}} className='home-3'>
                        <a href='https://twitter.com/_nnexsus'><p>Twitter</p></a>
                        <a href='https://discord.gg/d8R2tDaBK2'><p>Discord</p></a>
                        <a href='https://github.com/nnexsus/'><p>Github</p></a>
                        <a href='https://trello.com/c/6YBXnLYP/'><p>Trello</p></a>
                    </div>
                    <img src='/images/panels/about/wave.gif' />
                </div>

                <div style={{gridColumn: 3, gridRowStart: 1, gridRowEnd: 4, border: 'inset 3px', background: 'black', padding: '3px'}}>
                    <div className='projectContainer'>
                        <h1 style={{color: 'white'}}>Current Projects</h1>
                        <a target={"blank"} href='https://trello.com/b/WjQkpKpc/2023'>   <h4>2023 - More info on my Trello.</h4>  </a>
                            <div>
                                <h3 style={{color: 'white'}}>Project: Eye</h3>
                                <p style={{color: 'white'}}>Successfully predict, track, and chase nearby tornadoes. <a target={"blank"} href='https://trello.com/c/Tf5jPOHi/3-project-eye'>Project: Eye</a></p>
                            </div>
                            <div>
                                <h3 style={{color: 'white'}}>Project: Deathblow</h3>
                                <p style={{color: 'white'}}>Rebuild, rescript, redesign ASCARDS into the new version I dreamed about. <a target={"blank"} href='https://trello.com/c/7nlCK0tP/2-project-deathblow'>Project: Deathblow</a></p>
                            </div>
                    </div>
                </div>

                </div>
            </div>

        </Wrapper>
    )
}

export default Home;