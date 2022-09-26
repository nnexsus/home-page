import styled from 'styled-components';

import fishlogo from '../../images/Fishgame-logo.png';
import serverlogo from '../../images/logofull.webp';
import weatherlogo from '../../images/Weather-logo.png';
import bladelogo from '../../images/edrag.webp';

import planetbanner from '../../images/planet1banner.webp';
import { useState } from 'react';
import Server from '../server';

const Wrapper = styled.div`
    transition: 1s ease;

    h1, h2, h3, h4, p {
        color: white;
        text-align: center;
        text-shadow: 0 0 3px black;
        font-family: monospace;
    }

    a {
        color: lightblue;
        font-weight: bold;
        :visited {
            color: lightcoral;
        }
    }

    .placeholder {
        width: 100%; 
        height: 480px; 
        border: rgba(0, 0, 0, 0.3) 6px solid; 
        border-radius: 25px;
        backdrop-filter: blur(3px);
        filter: drop-shadow(0 0 5px black);
    }

    .site-panels {
        padding: 20px;
        border: solid lightblue 4px;
        border-radius: 4px;

        display: grid; 
        grid-template-columns: repeat(2, 49%); 
        grid-template-rows: repeat(2, 1fr); 
        gap: 30px; 
        margin: 5px 10px;


        button {
            display: flex;
            align-items: center;
            height: 100%;
            width: 11%;
            border-radius: 25px;
            border: solid 2px rgba(0, 0, 0, 0.3);
            background-color: lightcoral;
            margin: 0;
            color: white;
            text-shadow: 0 0 5px black;
            text-align: center;
            padding: 5px;
            transition: 0.3s ease;

            :hover {
                background-color: #d65151;
                padding: 8px;
                width: 13%;
                cursor: pointer;
            }
        }

        iframe {
            border: rgba(0, 0, 0, 0.3) 6px solid;
            border-radius: 25px;
            backdrop-filter: blur(3px);
            filter: drop-shadow(0 0 5px black);
        }
    }

    #server {
      grid-column: span 2;
      --aug-inlay-bg: linear-gradient(35deg, rgba(27,40,69,1) 5%, rgba(69,120,166,1) 100%);
      --aug-border-bg: rgba(0, 0, 0, 0.3);
      --aug-delegated-border: 1px;
      margin: 15px;
      background-color: rgba(27,40,69,1);
    }

    .navigator {
        display: grid;
        grid-template-columns: repeat(3, 25%);
        grid-template-rows: 30px 180px 60px;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(6px);
        margin-bottom: 20px;
        padding-bottom: 120px;

        h2, p {
            color: white;
            font-family: monospace;
            font-weight: bold;
            text-align: center;
            height: 0;
        }
        h2 {
            font-size: 22px;
        }
        svg {
            height: 200px;
            width: 200px;
            justify-self: center;
        }
        circle {
            //fill: rgb(116,140,137);
            stroke: white;
            transform-origin: center;
        }
        .dotted {
            stroke-width: 3;
            stroke-dasharray: 4,6.1;
            stroke-linecap: round;
            animation: navSpin 60s linear infinite;
        }
        .orbit {
            stroke-width: 2;
            stroke-dasharray: 4,12.3;
            stroke-linecap: round;
            animation: navSpin 120s linear infinite;
        }
        div {
            height: 100px;
            width: 100px;
            line-height: 75px;
        }

        @keyframes navSpin {
            0% {
                transform: rotate(0deg);
            } 100% {
                transform: rotate(360deg);
            }
        }
    }

    @media screen and (max-width: 1000px) {
        .site-panels {
            grid-template-columns: repeat(1, 100%);
            grid-template-rows: repeat(1, 1fr);
        }
    }
`;

const WebPlanet = () => {

    const [showWeather, setShowWeather] = useState(false);
    const [showServer, setShowServer] = useState(false);
    const [showBlade, setShowBlade] = useState(false);
    const [showFishwiki, setShowFishwiki] = useState(false);

    const aFish = () => {
        if (!showFishwiki) {
            document.getElementById("fish-activate").style.width = "100%"
            setTimeout(() => {
                setShowFishwiki(!showFishwiki)
            }, [2000])
        } else {
            setShowFishwiki(!showFishwiki)
        }
    }

    const aServer = () => {
        if (!showServer) {
            document.getElementById("server-activate").style.width = "100%"
            setTimeout(() => {
                setShowServer(!showServer)
            }, [2000])
        } else {
            setShowServer(!showServer)
        }
    }

    const aBlade = () => {
        if (!showBlade) {
            document.getElementById("blade-activate").style.width = "100%"
            setTimeout(() => {
                setShowBlade(!showBlade)
            }, [2000])
        } else {
            setShowBlade(!showBlade)
        }
    }

    const aWeather = () => {
        if (!showWeather) {
            document.getElementById("weather-activate").style.width = "100%"
            setTimeout(() => {
                setShowWeather(!showWeather)
            }, [2000])
        } else {
            setShowWeather(!showWeather)
        }
    }

    return (
        <Wrapper>
            <section id='web-section' style={{backgroundImage: `url(${planetbanner})`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: "0 0 10px 10px black inset, 0 0 20px 20px black", border: "solid 2px white"}}>
            <div className='navigator'>
                <h1 style={{gridColumn: "span 3", gridRow: 1, fontSize: "44px", marginTop: "80px", zIndex: 1}}>Navigator</h1>
                <div style={{gridColumn: "span 3", gridRow: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "-100px", backgroundColor: "rgba(0, 0, 0, 0.3)", borderRadius: "15px"}}>
                    <p><b>Type:</b> Temperate Forest Planet</p>
                    <p><b>Size:</b> 3/10</p>
                    <p><b>Moons:</b> None</p>
                </div>
                <a href='#web-recent'><h2>Recent Releases</h2></a>
                    <svg viewBox="0 0 120 120">
                        <defs>
                            <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stop-color="rgb(166,192,195)" />
                            <stop offset="50%" stop-color="rgb(116,140,137)"/>
                            <stop offset="100%" stop-color="rgb(68,92,76)" />
                            </linearGradient>
                        </defs>
                        <circle cx="60" cy="60" r="50" class="dotted" fill='url(#grad)'/>
                        <circle cx="60" cy="60" r="57" class="orbit" fill='transparent'/>
                        <foreignObject x="10" y="8" height="100px" width="100px">
                        <div style={{backgroundImage: `url(${serverlogo})`, backgroundSize: "40px", backgroundPositionX: "center", backgroundPositionY: "18px", backgroundRepeat: "no-repeat"}}>
                            <p>Arinha</p>
                        </div>
                        </foreignObject>
                    </svg>
                <a href='#web-panels'><h2>Active Site Discovery</h2></a>
            </div>
            <hr style={{color: "white", margin: "3px"}}></hr>
                <div id='web-recent'>
                    <h1 style={{fontSize: "48px"}}>Recent Releases</h1>
                    <Server></Server>
                </div>
                <hr style={{color: "white", margin: "3px"}}></hr>
                <div>
                    <h1 style={{fontSize: "48px"}}>Active Sites</h1>
                    <p>Published web projects. Click a button to load the site.</p>
                </div>
                    <hr style={{color: "white", margin: "3px"}}></hr>
                <div id='web-panels' className='site-panels'>
                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.2)", borderRadius: "10px"}}>
                        <h3>Weather Site 2.0</h3>
                        <p>Simple weather site using the NOAA weather API. <a href='#past-panel'>Learn more here.</a></p>
                        {showWeather ? 
                        <div id='weather-div' className='site-box'>
                            <iframe title='weather site' src='https://nnexsus-weather.netlify.app' width={"100%"} height="480px"/>
                            <button id='weather-activate' onClick={() => aWeather()}><img alt="open site" src={`${weatherlogo}`} width="50px"/>▶</button>
                        </div>
                        : <div className='placeholder'>
                            <button id='weather-activate' onClick={() => aWeather()}><img alt="open site" src={`${weatherlogo}`} width="50px"/>▶</button>
                        </div>}
                    </div>
                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.2)", borderRadius: "10px"}}>
                        <h3>nnexsus-server</h3>
                        <p>Cloud based file storage server, similar to google drive. Secured and usable. <a href='#past-panel'>Learn more here.</a></p>
                        {showServer ? 
                        <div id='server-div' className='site-box'>
                            <iframe title='nnexsus server site' src='https://nnexsus-server.netlify.app' width={"100%"} height="480px"/>
                            <button id='server-activate' onClick={() => aServer()}><img alt="open site" src={`${serverlogo}`} width="50px"/>▶</button>
                        </div>
                        : <div className='placeholder'>
                            <button id='server-activate' onClick={() => aServer()}><img alt="open site" src={`${serverlogo}`} width="50px"/>▶</button>
                        </div>}
                    </div>
                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.2)", borderRadius: "10px"}}>
                        <h3>Blade API Site</h3>
                        <p>Blade API is an all purpose Clash of Clans database API. Integrated discord bot also available on site. <a href='#past-panel'>Learn more here.</a></p>
                        {showBlade ? 
                        <div id='blade-div' className='site-box'>
                            <iframe title='blade API site' src='https://blade-api.netlify.app' width={"100%"} height="480px"/>
                            <button id='blade-activate' onClick={() => aBlade()}><img alt="open site" src={`${bladelogo}`} width="50px"/>▶</button>
                        </div>
                        : <div className='placeholder'>
                            <button id='blade-activate' onClick={() => aBlade()}><img alt="open site" src={`${bladelogo}`} width="50px"/>▶</button>
                        </div>}
                    </div>
                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.2)", borderRadius: "10px"}}>
                        <h3>Fish Game Wiki</h3>
                        <p>Wiki for Fish Game, which is also playable on the same site. <a href='#past-panel'>Learn more here.</a></p>
                        {showFishwiki ? 
                        <div id='fish-div' className='site-box'>
                            <iframe title='fish game wiki' src='https://nnexsus-fish-game.netlify.app/wiki/main' width={"100%"} height="480px"/>
                            <button id='fish-activate' onClick={() => aFish()}><img alt="open site" src={`${fishlogo}`} width="50px"/>▶</button>
                        </div>
                        : <div className='placeholder'>
                            <button id='fish-activate' onClick={() => aFish()}><img alt="open site" src={`${fishlogo}`} width="50px"/>▶</button>
                        </div>}
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default WebPlanet;