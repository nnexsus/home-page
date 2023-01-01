import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import geo from '../images/geo.webp';
import earth from '../images/earth.webp';
import moonbg from '../images/sky1.webp';
import moon from '../images/moon.webp';
import moon1 from '../images/solarbg.webp';
import planet1 from '../images/planet1.webp';
import planet2 from '../images/planet2.webp';
import planet1banner from '../images/planet1banner.webp';
import planet2banner from '../images/planet2banner.webp';
import twittersat from '../images/twitter-sat.webp';
import youtubesat from '../images/youtube-sat.webp';
import githubsat from '../images/github-sat.webp';
import trellosat from '../images/trello-sat.webp';
import discordsat from '../images/discord-sat.webp';
import test from '../images/sky2.webp';

import server from '../images/logofull.webp';
import blade from '../images/edrag.webp';
import weather from '../images/Weather-logo.png';
import fish from '../images/Fishgame-logo.png';
import ascii from '../images/skull.webp';

const time = new Date

const Wrapper = styled.div`

    width: 100%;
    aspect-ratio: 2/1;
    margin-bottom: 100px;
    padding-top: 50px;

    box-shadow: 0px 0px 5px 5px black;

    background-color: black;

    background-position: center;
    background-size: cover;
    border: solid var(--accentTheme) 2px;

    //background-image: url(${moonbg});
    background-image: url(${time.getHours() >= 16 ? time.getHours() <= 20 ? '/images/potentialbanner.png' : '/images/potentialbanner2.png' : '/images/sky1.webp'}); 
    background-size: 100%;
    background-origin: content-box; 
    background-position-x: center; 
    background-position-y: center; 
    overflow: clip;

    h1 {
        text-align: center;
        font-size: 86px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 6px;
        color: white;
        font-family: monospace;
        -webkit-text-stroke: 1px;
        -webkit-text-stroke-color: white;
        -webkit-text-fill-color: var(--accentTheme);
        text-shadow: 0px 0px 5px black;
        cursor: pointer;
        margin-top: 0px;
        margin-bottom: 5px;
    }

    sub {
        transform: translate(100px, -55px);
        color: white;
        pointer-events: none;
    }

    .planet {
        margin: -5px;
        border: solid 0.1px rgba(0, 0, 0, 0.0);
        border-radius: 50%;
        rotate: 0deg;

        transition: 0.7s ease;

        .sat-box {
            opacity: 0;
            transition: 0.5s ease-in-out;
            color: white;
            font-family: monospace;
            text-shadow: 0 0 3px white;
            border: solid 1px var(--accentTheme);
            border-radius: 50px;
            backdrop-filter: blur(10px) brightness(1.5);
            margin-top: -160px;
            padding: 26px 34px;
            text-align: center;
            max-width: min-content;
            text-decoration-line: none;
        }

        :hover {
            border: solid 10px #b5a270;

            .sat-box {
                opacity: 1;
            }
        }
    }

    .moon {
        filter: drop-shadow(25px 10px 100px #fff);
        :hover {
            animation: moonBlur 1s ease;
            scale: 1.5;
        }
        @keyframes moonBlur {
            0% {
                filter: blur(0px) drop-shadow(25px 10px 100px #fff);
            } 25% {
                filter: blur(2px) drop-shadow(0px 0px 10px #fff);
            } 100% {
                filter: blur(0px) drop-shadow(25px 10px 100px #fff);
            }
        }
    }

    .planet1 {
        filter: drop-shadow(25px 10px 20px #8dc794);
        :hover {
            animation: planet1Blur 0.6s ease;
            scale: 1.25;
            rotate: 3deg;
            padding: 10px;
        }
        @keyframes planet1Blur {
            0% {
                filter: blur(0px) drop-shadow(25px 10px 20px #8dc794);
            } 25% {
                filter: blur(2px) drop-shadow(25px 10px 20px #8dc794);
            } 75% {
                filter: blur(1px) drop-shadow(25px 10px 20px #8dc794);
            } 100% {
                filter: blur(0px) drop-shadow(25px 10px 20px #8dc794);
            }
        }
    }

    .planet2 {
        filter: drop-shadow(25px 10px 20px #e39696);
        :hover {
            animation: planet2Blur 0.6s ease;
            scale: 1.25;
            rotate: -3deg;
            padding: 10px;
        }
        @keyframes planet2Blur {
            0% {
                filter: blur(0px) drop-shadow(25px 10px 20px #e39696);
            } 25% {
                filter: blur(2px) drop-shadow(25px 10px 20px #e39696);
            } 75% {
                filter: blur(1px) drop-shadow(25px 10px 20px #e39696);
            } 100% {
                filter: blur(0px) drop-shadow(25px 10px 20px #e39696);
            }
        }
    }

    .planet-container {
        opacity: 0.85;
        transition: 1.3s ease;
        :hover {
            opacity: 1;
        }
    }

    .satlinks {
        display: flex; 
        flex-direction: column; 
        grid-column: span 3;
        grid-row: 2; 
        transform: translate(0, 125px);
    }

    .info-container {
        opacity: 0;
        transition: 0.5s ease;
        color: white; 
        font-family: monospace;
        text-shadow: 0 0 7px black; 
        text-align: center; 
        margin: -30% auto 0px auto; 
        background-color: rgba(0, 0, 0, 0.8); 
        border-radius: 2px; 
        cursor: default;
        filter: blur(10px);

        background-size: cover; 
        padding: 10px 0 14px 0; 
        background-origin: border-box; 
        z-index: 4; 
        margin-top: -40%; 
        width: 90%;

        --aug-border-all: 3px;
        --aug-border-bg: rgba(0, 0, 0, 0.3);
        --aug-inlay-bg: rgba(255, 255, 255, 0.1);
        --aug-inlay-all: 5px;
    }

    .planet:hover + .info-container {
        opacity: 0.75;

        filter: blur(0px);
    }

    .alink {
        border: solid 0.1px rgba(0, 0, 0, 0.0);

        :hover {
            border: solid 0.1px rgba(0, 0, 0, 0.0);
        }
    }
    .moon-container {
        grid-column: 2;
        grid-row: 4;
    }
    .planet-grid {
        display: grid; 
        grid-template-columns: repeat(3, 1fr); 
        grid-template-rows: 20px 30% 80px repeat(3, 30%) 80px repeat(4, 30%);
    }
    .links {
        margin: 0px 50px;
        grid-column: span 3; 
        grid-row: 1; 
        display: flex; 
        filter: drop-shadow(0 0 5px white);
    }
    .earthdecor {
        grid-row: 6; 
        grid-column: span 3;
        margin-left: -25px;
    }
    .game {
        grid-column: 3;
        grid-row: 3;
    }
    .geo {
        transform: scale(1.2) translate(0, 23%);
    }
    .web {
        grid-column: 1;
        grid-row: 3;
    }
    .title-link {
        color: white;
        text-decoration: none;
        :active {
            color: lightblue;
        }
    }
    .redbanners {
        font-variant: all-petite-caps; 
        font-family: monospace; 
        text-align: center; 
        font-size: 18px; 
        color: white; 
        text-shadow: 0 0 4px black; 
        background-color: red; 
        margin-top: -160px;
    }
    .mobile-banner {
        display: none;
    }
    .desktop-banner {
        transform: translateY(140px);
        text-shadow: 0 0 6px black;
        backdrop-filter: blur(5px);
        border-radius: 25px;
        border: solid 1px white;
        width: max-content;
        margin: 0 auto;
        padding: 5px 10px;
    }
    .geo-alone {
        position: absolute; 
        background-image: url(${test});
        width: 100%; 
        height: 100%;
        background-position: center;
        background-size: 70%;
        top: -11%;
        background-repeat: no-repeat;
    }
    #web-redbanner, #game-redbanner {
        transition: 0.4s ease-in-out;
    }
    @media screen and (max-width: 1550px) {
        .planet-grid {
            grid-template-rows: 20px 30% 80px repeat(3, 30%) repeat(4, 10%);
        }
        .links {
            margin: 100px 50px 0;
        }
    }

    @media screen and (max-width: 1000px) {
        aspect-ratio: 1/1.1;
        background-size: 200%;
        background-position-y: -60px;
        padding-top: 5px;
        .planet-grid {
            scroll-behavior: smooth;
            overflow-x: scroll;
            overflow-y: hidden;
            padding-bottom: 20px;
            padding-top: 100px;
            grid-template-columns: repeat(4, 100%);
            grid-template-rows: repeat(1, 110vh);
        }
        .satlinks {
            display: none;
        }
        .links {
            grid-column: 1; 
            display: grid;
            grid-template-columns: repeat(3, 33%);
            grid-template-rows: repeat(2, 100px);
        }
        .moon-container {
            grid-column: 1;
            grid-row: 1;
        }
        .web {
            grid-column: 2;
            grid-row: 1;
        }
        .game {
            grid-column: 3;
            grid-row: 1;
        }
        .links {
            grid-column: 4;
            grid-row: 1;
        }
        .earthdecor {
            display: none;
        }
        .info-container {
            opacity: 0.75;
            filter: blur(0px);
            margin-top: -50%; 
        }
        .mobile-banner {
            display: block;
        }
        .desktop-banner {
            display: none;
        }
    }

    @media screen and (max-width: 740px) {
        .redbanners {
            display: none;
        }
    }

    .para-img {
        position: absolute;
    }
`;

const Open = () => {

    const redBannerWeb = ["GeoRadio is out! click here to check it out!", "nnexsus-server getting an update soon! click here to learn more!"]
    var activeBanner = 0;
    const redBannerGame = ["fish game is out! click here to try a demo!", "ascards demo is available! click here to learn more!"]

    //change red banners
    useEffect(() => {
        const change = () => {
            setTimeout(() => {
                change()
            }, [10000])
            const webBan = document.getElementById('web-redbanner');
            const gameBan = document.getElementById('game-redbanner');
            if (activeBanner === 1) {
                webBan.style.opacity = 0;
                gameBan.style.opacity = 0;
                setTimeout(() => {
                    webBan.innerText = redBannerWeb[1]
                    gameBan.innerText = redBannerGame[1]
                    webBan.style.opacity = 1;
                    gameBan.style.opacity = 1;
                    activeBanner = 0;
                }, [1500])
            } else {
                webBan.style.opacity = 0;
                gameBan.style.opacity = 0;
                setTimeout(() => {
                    webBan.innerText = redBannerWeb[0]
                    gameBan.innerText = redBannerGame[0]
                    webBan.style.opacity = 1;
                    gameBan.style.opacity = 1; //this could be a css animation, might do next update
                    activeBanner = 1;
                }, [1500])
            }
        }
        change()
    })

    document.addEventListener("mousemove", parallax);
    const opener = useRef(null)
    const bgopener = useRef(null)
    const foreopener = useRef(null)
    const fore2opener = useRef(null)
    const fore3opener = useRef(null)
    const geoopener = useRef(null)

    function parallax(e) {
        if (window.innerWidth > 1000) {
            try {
                let mouseX = e.clientX;
                let mouseY = e.clientY;
                let scroll = `translate(${((mouseX * 0.02) - 18) * -1}px, ${(mouseY * 0.01) - 20}px)`;
                let scrollBg = `${(mouseX * 0.02) - 25}px ${((mouseY * 0.01) + 60) * -1}px`;
                let scrollForeground = `translate(${(mouseX * 0.03) - 18}px, ${((mouseY * 0.02)) * -1}px)`;
                let linkScroll = `translate(${(mouseX * 0.035) - 18}px, ${((mouseY * 0.025)) * -1}px)`;
                let scrollGeo = `translate(${((mouseX * 0.005) + 8) * -1}px, ${(mouseY * 0.001) - 6}px)`;
                opener.current.style.transform = scroll;
                bgopener.current.style.backgroundPosition = scrollBg;
                foreopener.current.style.transform = scrollForeground;
                fore2opener.current.style.transform = scrollForeground;
                fore3opener.current.style.transform = linkScroll;
                geoopener.current.style.transform = scrollGeo;
            } catch (error) {
                return
            }
        }
    }

    return (
        <Wrapper id='opener-grab' ref={(el) => {bgopener.current = el}}>
            <div ref={(el) => {geoopener.current = el}} className="geo-alone"></div>
            <div ref={(el) => {opener.current = el}} id="opener">
                <ParallaxProvider>
                    <div className='mobile-banner'>
                        <h2 style={{margin: 0, textAlign: 'center', fontFamily: 'monospace', color: 'white'}}><i>Scroll right</i> to access new sections<a style={{color: "white"}} href='https://youtu.be/p0wUCU_ZnXc' target={"_blank"} rel="noreferrer">!</a></h2>
                        <p style={{margin: "0", textAlign: 'center', fontFamily: 'monospace'}}>
                            <a style={{color: 'white', margin: "0 7px"}} href='#moon'>Main Site Access</a>
                            <a style={{color: 'white', margin: "0 7px"}} href='#web-planet'>Web Panel Access</a>
                            <a style={{color: 'white', margin: "0 7px"}} href='#game-planet'>Game Panel Access</a>
                            <a style={{color: 'white', margin: "0 7px"}} href='#socials'>Socials Access</a>
                        </p>
                    </div>
                    <div className='desktop-banner'>
                        <h2 style={{margin: 0, textAlign: 'center', fontFamily: 'monospace', color: 'white'}}><i>Click planets</i> to access new sections<a style={{color: "white"}} href='https://youtu.be/p0wUCU_ZnXc' target={"_blank"} rel="noreferrer">!</a></h2>
                        <p style={{margin: "0", textAlign: 'center', fontFamily: 'monospace'}}>
                            <a style={{color: 'white', margin: "0 7px"}} href='#desktop'>Main Site Access</a>
                            <a style={{color: 'white', margin: "0 7px"}} href='#web-section'>Web Panel Access</a>
                            <a style={{color: 'white', margin: "0 7px"}} href='#game-section'>Game Panel Access</a>
                            <a style={{color: 'white', margin: "0 7px"}} href='#about-panel'>Socials Access</a>
                        </p>
                    </div>
                    <div className='planet-grid'>
                        <div id='socials' ref={(el) => {fore3opener.current = el}} className="links">
                            <Parallax startScroll={0} endScroll={1000} easing={'easeInOut'} speed={-16} style={{width: "100%", height: "0px", marginTop: "-30px"}}>
                                <a title='Twitter Link' className="planet alink" target={"_blank"} rel="noreferrer" href='https://twitter.com/_nnexsus'><img alt='decor' className="planet" width={"100%"} style={{transform: "scale(0.5)"}} src={`${twittersat}`}/>
                                    <p className='sat-box'>Twitter</p>
                                </a>
                            </Parallax>
                            <Parallax startScroll={0} endScroll={1000} easing={'easeInOut'} speed={-16} style={{width: "100%", height: "0px", marginTop: "-30px"}}>
                                <a title='Youtube Link' className="planet alink" target={"_blank"} rel="noreferrer" href='https://youtube.com/c/nnexsus'><img alt='decor' className="planet" width={"100%"} style={{transform: "scale(0.5)"}} src={`${youtubesat}`}/>
                                    <p className='sat-box'>Youtube</p>
                                </a>
                            </Parallax>
                            <Parallax startScroll={0} endScroll={1000} easing={'easeInOut'} speed={-16} style={{width: "100%", height: "0px", marginTop: "-30px"}}>
                                <a title='Trello Link' className="planet alink" target={"_blank"} rel="noreferrer" href='https://trello.com/b/jsd5zUAq/2022'><img alt='decor' className="planet" width={"100%"} style={{transform: "scale(0.5)"}} src={`${trellosat}`}/>
                                    <p className='sat-box'>Trello</p>
                                </a>
                            </Parallax>
                            <Parallax startScroll={0} endScroll={1000} easing={'easeInOut'} speed={-16} style={{width: "100%", height: "0px", marginTop: "-30px"}}>
                                <a title='Github Link' className="planet alink" target={"_blank"} rel="noreferrer" href='https://github.com/nnexsus'><img alt='decor' className="planet" width={"100%"} style={{transform: "scale(0.5)"}} src={`${githubsat}`}/>
                                    <p className='sat-box'>Github</p>
                                </a>
                            </Parallax>
                            <Parallax startScroll={0} endScroll={1000} easing={'easeInOut'} speed={-16} style={{width: "100%", height: "0px", marginTop: "-30px"}}>
                                <a title='Discord Link' className="planet alink" target={"_blank"} rel="noreferrer" href='https://discord.gg/d8R2tDaBK2'><img alt='decor' className="planet" width={"100%"} style={{transform: "scale(0.5)"}} src={`${discordsat}`}/>
                                    <p className='sat-box'>Discord</p>
                                </a>
                            </Parallax>
                        </div>
                        <div className='satlinks'>
                            <a style={{textDecoration: "none"}} href='#desktop'><h1>nnexsus-v2.2</h1></a>
                        </div>
                        <div id='moon' className="moon-container">
                            <Parallax startScroll={0} endScroll={1000} easing={'easeInOut'} speed={-8} rootMargin={{ top: 100, right: 100, bottom: 100, left: 100 }} style={{width: "100%", height: "0px", marginTop: "-13px", gridColumn: "2"}}>
                                <img alt='decor' width={"100%"} className='geo' src={`${geo}`}/>
                            </Parallax>
                            <Parallax startScroll={0} endScroll={1000} easing={'easeInOut'} speed={-10} style={{width: "100%", height: "0px", marginTop: "-13px", gridColumn: "2"}}>
                                <a className="planet alink" href='#quickdesc'><img alt='decor' className="planet moon" width={"100%"} style={{transform: "scale(0.5) rotate(254deg)"}} src={`${moon}`}/></a>
                                <div style={{backgroundImage: `url(${moon1})`}} data-augmented-ui="tl-2-clip-xy t-clip tr-2-clip-xy r-clip br-2-clip-xy b-clip bl-2-clip-xy l-clip both" className='info-container'>
                                    <a className='title-link' href='#quickdesc'><h2>Click to travel.</h2></a>
                                    <h3>nnexsus</h3>
                                    <h4>Explore the full site.</h4>
                                    <ul style={{textAlign: "left"}}>
                                        <li><p>Upcoming and released projects.</p></li>
                                        <li><p>Access an interactive desktop with several of my apps.</p></li>
                                        <li><p>Quick links to just about anything I've released.</p></li>
                                    </ul>
                                </div>
                            </Parallax>
                        </div>
                        <div id='web-planet' ref={(el) => {fore2opener.current = el}} className='web'>
                            <Parallax startScroll={0} endScroll={1000} easing={'easeInOut'} speed={-12} rootMargin={{ top: 100, right: 100, bottom: 100, left: 100 }} style={{width: "100%", height: "0px", marginTop: "-13px", gridColumn: "2"}}>
                                <img alt='decor' width={"100%"} className='geo' src={`${geo}`}/>
                            </Parallax>
                            <Parallax startScroll={0} endScroll={1000} easing={'easeInOut'} speed={-14} style={{width: "100%", height: "0px", marginTop: "-13px", gridColumn: "2"}}>
                                <a className="planet alink planet-container" href='#web-section'>
                                    <img alt='decor' width={"100%"} className="planet planet1" style={{transform: "scale(0.45)"}} src={`${planet1}`}/>
                                </a>
                                <div style={{backgroundImage: `url(${planet1banner})`, backgroundSize: 'cover', padding: "10px 0 14px 0", backgroundOrigin: 'padding-box', backgroundPositionX: "center"}} data-augmented-ui="tl-2-clip-xy t-clip tr-2-clip-xy r-clip br-2-clip-xy b-clip bl-2-clip-xy l-clip both" className='info-container'>
                                    <a className='title-link' href='#web-section'><h2>Click to travel.</h2></a>
                                    <h3>Web</h3>
                                    <h4>Explore web projects.</h4>
                                    <ul style={{textAlign: "left"}}>
                                        <li><p style={{display: "flex"}}>GeoRadio - <img alt='decor' src={'/images/panels/georadio/radiopixellarge.png'} width="35px"/></p></li>
                                        <li><p style={{display: "flex"}}>nnexsus-server - <img alt='decor' src={`${server}`} width="35px"/></p></li>
                                        <li><p style={{display: "flex"}}>Weather Site 2.0 - <img alt='decor' src={`${weather}`} width="35px"/></p></li>
                                    </ul>
                                </div>
                                <h4 className='redbanners' id='web-redbanner'>{redBannerWeb[0]}</h4>
                            </Parallax>
                        </div>
                        <div id='game-planet' ref={(el) => {foreopener.current = el}} className='game'>
                            <Parallax startScroll={-100} endScroll={1000} easing={'easeInOut'} speed={-12} rootMargin={{ top: 100, right: 100, bottom: 100, left: 100 }} style={{width: "100%", height: "0px", marginTop: "-13px", gridColumn: "2"}}>
                                <img alt='decor' width={"100%"} className='geo' src={`${geo}`}/>
                            </Parallax>
                            <Parallax startScroll={-100} endScroll={1000} easing={'easeInOut'} speed={-14} style={{width: "100%", height: "0px", marginTop: "-13px", gridColumn: "2"}}>
                                <a className="planet alink planet-container" href='#game-section'><img alt='decor' width={"100%"} className="planet planet2" style={{transform: "scale(-0.45) scaleY(-1) rotate(347deg)", backgroundOrigin: "border-box", backgroundPositionY: "center"}} src={`${planet2}`}/></a>
                                <div style={{backgroundImage: `url(${planet2banner})`, backgroundSize: 'cover', padding: "10px 0 14px 0", backgroundOrigin: 'padding-box', backgroundPositionX: "center"}} data-augmented-ui="tl-2-clip-xy t-clip tr-2-clip-xy r-clip br-2-clip-xy b-clip bl-2-clip-xy l-clip both" className='info-container'>
                                    <a className='title-link' href='#game-section'><h2>Click to travel.</h2></a>
                                    <h3>Games</h3>
                                    <h4>Explore game projects.</h4>
                                    <ul style={{textAlign: "left"}}>
                                        <li><p style={{display: "flex"}}>Fish Game - <img alt='decor' src={`${fish}`} width="35px"/></p></li>
                                        <li><p style={{display: "flex"}}>ASCARDS - <img alt='decor' src={`${ascii}`} width="35px"/></p></li>
                                        <li><p style={{display: "flex"}}>Upcoming, apply, and more...</p></li>
                                    </ul>
                                </div>
                                <h4 className='redbanners' id='game-redbanner'>{redBannerGame[0]}</h4>
                            </Parallax>
                        </div>
                        <div className='earthdecor'>
                            <Parallax speed={-5}>
                                <img alt='decor' src={`${earth}`} width={"105%"}/>
                            </Parallax>
                        </div>
                    </div>
                </ParallaxProvider>
            </div>
        </Wrapper>
    )
}

export default Open;