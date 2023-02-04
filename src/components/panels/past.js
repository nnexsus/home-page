import styled from 'styled-components';
import { useContext, useState, useEffect } from 'react';
import { LinkContext } from '../context';

import domain from '../../images/increment.webp';
import badge from '../../images/badge.webp';
import blade from '../../images/blade.webp';
import server from '../../images/server.webp';
import tether from '../../images/catsushi.webp';
import ascards from '../../images/ascards.webp';
import weather from '../../images/weathersite.webp';

import { ParallaxProvider } from 'react-scroll-parallax';


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

    .top {
        color: var(--accentTheme);
        margin: 10px;

        .content-container {
            margin: 10px;
            --aug-border-all: 2px;
            --aug-t-extend1: 400px;
            --aug-b-extend1: 400px;
            padding: 15px;

            .content {
                display: grid;
                grid-template-rows: repeat(4, 400px);
                gap: 14px;

                img {
                    transition: 0.2s ease-in-out;
                    :hover {
                        width: 100%;
                        transform: scale(1.4) translate(0, 50px);
                    }
                }
            }
        }

        .ptitle {
            grid-column: span 2;
        }

        .p-project {
            width: 850px;
            height: 400px;
            background-color: rgba(0, 0, 0, 0.3);
            border: solid rgba(0, 0, 0, 0.3) 2px;
            border-radius: 10px;
            padding: 2px 6px 2px 6px;
            margin: 2px;
            transition: 0.4s ease-in-out;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            justify-items: center;

            a {
                color: #E6DBE5;
            }

            :hover {
                background-color: rgba(70, 30, 150, 0.6);
            }

            .title {
                grid-row: 1;
                grid-column: 1;
            }

            .tags {
                grid-row: 2;
                grid-column: 1;
                margin: 5px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 1fr);
                gap: 2px;
                text-align: center;
                height: 24px;
                white-space: nowrap;

                .scope {
                    grid-row: 1;
                    grid-column: span 3;
                }

                h4 {
                    background-color: green;
                    text-shadow: 0 0 2px black;
                    border-radius: 50px;
                    margin: 0 2px;
                    padding: 3px;
                    transition: 0.3s ease-in-out;
                    cursor: default;
                    color: white;
                    border: solid 2px rgba(0, 0, 0, 0.3);
                    
                    :hover {
                        transform: scale(1.05);
                        background-color: #5dc97a;
                    }
                }
            }

            img {
                grid-row: 1;
                grid-column: 2;
            }

            .desc {
                grid-row: 3;
                grid-column: 1;
            }

            .links {
                grid-row: span 2;
                grid-column: 3;
            }

            ul {
                grid-row: span 2;
                grid-column: 2;
            }

            .imagespan {
                grid-row: span 3;
                grid-column: 3;
            }
        }

        .p-container {
            padding: 3px 0;
            margin: -7px;
            overflow-x: scroll;
            overflow-y: hidden;
            display: flex;

            .p-grid {
                display: grid;
                grid-template-columns: repeat(5, 175px);
            }

            ::-webkit-scrollbar {
                height: 10px;
            }
            
            ::-webkit-scrollbar-track {
                box-shadow: 0 0 5px black inset;
                border-radius: 15px;
            }
            
            ::-webkit-scrollbar-thumb {
                background-color: lightblue; 
                border-radius: 10px;
                transition: 0.2s ease;
            }
            
            ::-webkit-scrollbar-thumb:hover {
                background-color: #7297a3;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.3) inset;
            }
        }
    }

    .quicknav-buttons {
        display: flex;
    }

    .quicknavs {
        text-align: center;
        font-family: monospace;
        color: black;
        font-size: 16px;
        margin: 5px 5px 10px 5px;
        width: 100%;
        height: 100%;
        padding: 10px;
        background: var(--accentTheme);
        border-radius: 10px;
        border: solid var(--accentThemeDarker) 2px;
        transition: 0.2s ease-in-out;

        :hover {
            transform: scale(1.1);
        }
    }

    .key {
        color: lightblue;
        list-style: square;
        p {
            font-size: 14px;
            margin: 2px;
        }
    }

    @media screen and (max-width: 720px) {
        .top {
            .content-container {
                --aug-t-extend1: 0px;
                --aug-b-extend1: 0px;
                .content {
                    display: block;

                    .webimg {
                        transition: 0.2s ease-in-out;
                    :hover {
                        transform: scale(1.7) translateX(0);
                        }
                    }

                    .otherimg {
                        transition: 0.2s ease-in-out;
                        :hover {
                            transform: scale(1.7) translateX(0);
                        }
                    }
                }
            }
        }
    }
`;

const Scope = styled.h3`
    background-color: ${({type}) => type <= 1 ? "#3ba35f" 
    : type === 2 ? "#cfb13c"
    : type >= 3 ? "#d92d27"
    : "white"};
    text-shadow: 0 0 2px black;
    border-radius: 50px;
    margin: 0 2px;
    padding: 3px;
    transition: 0.3s ease-in-out;
    cursor: default;
    color: white;
    border: solid 2px rgba(0, 0, 0, 0.3);
    
    :hover {
        transform: scale(1.05);
        filter: brightness(1.3);
    }
`;
//if reference to project types. 1 = mini, 2 = base, 3 = mega. specifically for the styled component widget
const Past = () => {

    const [state, dispatch] = useContext(LinkContext);
    const onImgClick = (link) => dispatch({type: 'update_link', link: link, browser: true})

    return (
        <Wrapper>
            <section className='top' id='past'>
            <ParallaxProvider>
                <div>
                    <div data-augmented-ui="tl-2-clip-y t-clip-x tr-2-clip-y br-2-clip-y b-clip-x bl-2-clip-y both" className='content-container'>
                        <h2 className='ptitle'>Past Projects</h2>
                        <p style={{textAlign: "center"}}>Any projects that appear here are officially completed. Uncompleted projects will appear in the <a style={{color: "lightblue"}} href='#panels'>About & Links</a> section.</p>
                        <p style={{textAlign: "center", color: "white"}}>Click on an image to expand it!</p>
                        <p style={{texAlign: "center", color: "white"}}>Key:</p>
                        <ul className='key'>
                            <li><p>Legacy Project - Project Started/Finished before 2022, beginner, or before thew new Project-based system I use for my work.</p></li>
                            <li><p>Mega-Project - Project that spans over multiple platforms and/or takes more than a month for completion.</p></li>
                            <li><p>Base-Project - Project that spans over multiple or a single platform, and/or takes more than a week for completion.</p></li>
                            <li><p>Mini-Project - Projects that are finished within a week of start.</p></li>
                        </ul>
                        <div className='quicknav-buttons'>
                            <a className='quicknavs' href='#webprojects'>Web Projects</a>
                            <a className='quicknavs' href='#gameprojects'>Game Projects</a>
                            <a className='quicknavs' href='#videoprojects'>Video Projects</a>
                            <a className='quicknavs' href='#otherprojects'>Other</a>
                        </div>
                        <div className='content'>
                            <div className='p-container web'>

                                <h2 id='webprojects' style={{marginBottom: "6px"}}>Web</h2>
                                <h2 style={{margin: "5px", fontSize: "20px"}}>4</h2>

                                <div className='p-grid'>
                                <div className='p-project' id='project-geo'>
                                    <div className='titles'>
                                        <h3>Project: Geo</h3>
                                        <h4>Local name, Project: <a href='https://youtu.be/QjZyGdLF0z0' target="_blank" rel='noreferrer'>Outlines</a></h4>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={3}>Mega-project</Scope>
                                        <h4>Webapp</h4><h4>Radio</h4><h4>Thematic</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: geo' className='webimg' loading={'lazy'} src={'/images/panels/georadio/chanf.jpg'} width="50%" />
                                    <p className='desc'>A fun megaproject to end 2022! GeoRadio is a radio webapp, with a Windows95 thematic feel to it. You can use the built-in browser to discover a ton of websites, including multiple radios and hidden gems!!</p>
                                        <ul style={{color: "lightblue"}}>
                                            <li>API</li>
                                            <li>Express</li>
                                            <li>HTML</li>
                                            <li>Axios</li>
                                            <li>React</li>
                                        </ul>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://github.com/nnexsus/cloud-file-server' style={{textAlign: "center"}}><p>Check out the github repo here!</p></a>
                                        <a target="_blank" rel="noreferrer" href='https://georadio.netlify.app/' style={{textAlign: "center"}} ><p><b>Or, access the actual site here.</b></p></a>
                                    </div>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project' id='project-intravenous'>
                                    <div className='titles'>
                                        <h3>Project: Oort</h3>
                                        <h4>Local name, Project: <a href='https://youtu.be/m1Op7WF2suQ' target="_blank" rel='noreferrer'>Intravenous</a></h4>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={3}>Mega-project</Scope>
                                        <h4>File Storage</h4><h4>Cloud IaaS</h4><h4>High Security</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: oort' className='webimg' loading={'lazy'} src={`${server}`} width="50%" />
                                    <p className='desc'>A megaproject cloud based file storage, similar to google drive. Includes accounts, databases, secure storage, sharing, and a connect discord bot for saving files on command!</p>
                                        <ul style={{color: "lightblue"}}>
                                            <li>API</li>
                                            <li>MySQL</li>
                                            <li>Express</li>
                                            <li>HTML</li>
                                            <li>Axios</li>
                                            <li>React</li>
                                            <li>Windows Server</li>
                                        </ul>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://github.com/nnexsus/cloud-file-server' style={{textAlign: "center"}}><p>Check out the github repo here!</p></a>
                                        <a target="_blank" rel="noreferrer" href='https://youtu.be/j5kwAONZI2w' style={{textAlign: "center"}} ><p>Or watch the youtube example video (shows all features).</p></a>
                                        <a target="_blank" rel="noreferrer" href='https://nnexsus-server.netlify.app/' style={{textAlign: "center"}} ><p><b>Or, access the actual server here.</b></p></a>
                                    </div>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project' id='project-intravenous'>
                                    <div className='titles'>
                                        <h3>Project: Weather2.0</h3>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={2}>Base-project</Scope>
                                        <h4>API Site</h4><h4>Weather</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: weather2.0' className='webimg' loading={'lazy'} src={`${weather}`} width="50%" />
                                    <p className='desc'>Simple weather site, rebuild of an older version. Connects to NOAA API for weather data. Contains Radar, 24 Hour Forecast, 5 Day Forecast, and Active Alerts.</p>
                                        <ul style={{color: "lightblue"}}>
                                            <li>API</li>
                                            <li>HTML</li>
                                            <li>Axios</li>
                                            <li>React</li>
                                        </ul>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://github.com/nnexsus/weather-app' style={{textAlign: "center"}}><p>Check out the github repo here!</p></a>
                                        <a target="_blank" rel="noreferrer" href='https://nnexsus-weather.netlify.app' style={{textAlign: "center"}} ><p>Or, access the actual site here.</p></a>
                                    </div>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project' id='project-blade'>
                                    <div className='titles'>
                                        <h3>Project: Blade</h3>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={1}>Mini-project</Scope>
                                        <h4>Free API</h4><h4>Database</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: blade' className='webimg' loading={'lazy'} src={`${blade}`} width="50%" />
                                    <p className='desc'>A free public API & discord bot for Clash of Clans related content, including a documentation site. Recently sunset.</p>
                                    <ul style={{color: "lightblue"}}>
                                        <li>API</li>
                                        <li>Express</li>
                                        <li>HTML</li>
                                        <li>React</li>
                                    </ul>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='blade-api.netlify.app'><p>View the API docs here.</p></a>
                                    </div>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project legacy'>
                                    <div className='titles'>
                                        <h3>Project: Domain</h3>
                                    </div>
                                    <div className='tags'>
                                        <h4>Legacy Project</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: domain' className='webimg' loading={'lazy'} src={`${domain}`} width="50%"/>
                                    <p className='desc'>An image board website complete with profiles, public/private boards, customizable profile pages, and moderation.</p>
                                    <ul style={{color: "lightblue"}}>
                                        <li>MySQL</li>
                                        <li>PHP</li>
                                        <li>HTML</li>
                                        <li>JS</li>
                                    </ul>
                                </div>
                                </div>

                            </div>
                            <div className='p-container game'>

                                <h2 id='gameprojects' style={{marginBottom: "6px"}}>Game</h2>
                                <h2 style={{margin: "5px", fontSize: "20px"}}>2</h2>
                            
                                <div className='p-grid'>
                                <div className='p-project' id='project-fish'>
                                    <div className='titles'>
                                        <h3>Project: Fish</h3>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={3}>Mega-project</Scope>
                                        <h4>Tycoon-like</h4><h4>Educational</h4><h4>Pixel Art</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: fish' className='webimg' loading={'lazy'} src={'/images/panels/fish/fishgame.webp'} width="50%" />
                                    <p className='desc'>A web/windows game where you manage your aquarium tycoon. Collecting new fish and discovering new biomes the reside in! Every fish and room has info to learn about. Also has a wiki page built into the site.</p>
                                    <ul style={{color: "lightblue"}}>
                                        <li>Godot</li>
                                        <li>Asprite</li>
                                        <li>Express</li>
                                        <li>HTML</li>
                                        <li>React</li>
                                        <li>Python</li>
                                    </ul>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://youtu.be/1Xs7GNczWPk'><p style={{textAlign: "center"}}>Check out a quick youtube demo here.</p></a>
                                        <a target="_blank" rel="noreferrer" href='https://nnexsus-fish-game.netlify.app/'><p style={{textAlign: "center"}}>Or play the game here!</p></a>
                                    </div>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project' id='project-deathblow'>
                                    <div className='titles'>
                                        <h3>Project: Circuit</h3>
                                        <h4>Local name, Project: <a href='https://youtu.be/11ImVzWeMHE' target="_blank" rel='noreferrer'>Deathblow</a></h4>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={3}>Mega-project</Scope>
                                        <h4>Turn-based</h4><h4>Card Game</h4><h4>ASCII art theme</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: battle-axe' className='webimg' loading={'lazy'} src={`${ascards}`} width="50%" />
                                    <p className='desc'>A turn based, strategy card game. All the art is in ASCII. This project was discontinued due to the lack of income (I couldn't continue to invest much time into a non-profitable game).</p>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://youtu.be/1Xs7GNczWPk'><p style={{textAlign: "center"}}>Check out a quick youtube demo here.</p></a>
                                        <a href='#ascards'><p style={{textAlign: "center"}}>Or play a demo here (click the widget a few times to get a link)!</p></a>
                                    </div>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project legacy'>
                                    <div className='titles'>
                                        <h3>Project: Dune</h3>
                                    </div>
                                    <div className='tags'>
                                        <h4>Legacy Project</h4>
                                    </div>
                                    <p className='desc'>A small mod for minecraft that added better desert generation to the game. This would also evolve to create custom caves with custom biomes.</p>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://youtu.be/ovfq6eYdvZo'><p style={{textAlign: "center"}}>Check out a quick youtube demo here.</p></a>
                                    </div>
                                </div>
                                </div>

                            </div>
                            <div className='p-container video'>

                                <h2 id='videoprojects' style={{marginBottom: "6px"}}>Video</h2>
                                <h2 style={{margin: "5px", fontSize: "20px"}}>5</h2>

                                <div className='p-grid'>
                                <div className='p-project legacy'>
                                    <div className='titles'>
                                        <h3>Project: 2022</h3>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={3}>Mega-project</Scope>
                                        <h4>Vegas Pro</h4><h4>After Effects</h4>
                                    </div>
                                    <p className='desc'>Project: 2022 is a hour long thematic recap for friends and myself to look back on. It has a custom music mix, a few music video segments -including 1 full music video, and plenty of clips and memes throughout the year.</p>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://youtu.be/AJtKME9VfZk'><p>Check it out here!</p></a>
                                    </div>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project legacy'>
                                    <div className='titles'>
                                        <h3>Project: 2021</h3>
                                    </div>
                                    <div className='tags'>
                                        <h4>Legacy Project</h4>
                                    </div>
                                    <p className='desc'>A two hour long recap and celebration for freinds in 2021.</p>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://youtu.be/TseO_VkxOFM'><p>Watch my favorite clip of it here.</p></a>
                                    </div>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project legacy'>
                                    <div className='titles'>
                                        <h3>Project: SAYU</h3>
                                    </div>
                                    <div className='tags'>
                                        <h4>Legacy Project</h4>
                                    </div>
                                    <p className='desc'>A music video for a song I really enjoyed. The song is 6 minutes total and ultimately I moved on from fully finishing it.</p>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://youtu.be/kNV_sXJjoc8'><p>Watch my favorite clip of it here.</p></a>
                                    </div>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project legacy'>
                                    <div className='titles'>
                                        <h3>Project: String (2020)</h3>
                                    </div>
                                    <div className='tags'>
                                        <h4>Legacy Project</h4>
                                    </div>
                                    <p className='desc'>Smaller Music Video I made for a friends song. This is an official music video.</p>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://youtu.be/ShyrdpKcUCQ'><p>Watchable Here.</p></a>
                                    </div>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project legacy'>
                                    <div className='titles'>
                                        <h3>Project: Globe (2020)</h3>
                                    </div>
                                    <div className='tags'>
                                        <h4>Legacy Project</h4>
                                    </div>
                                    <p className='desc'>Music Video I made for a a song I really enjoyed at the time.</p>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://youtu.be/0VNavpVJK3c'><p>Watchable Here.</p></a>
                                    </div>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project legacy'>
                                    <div className='titles'>
                                        <h3>Project: Senko (2020)</h3>
                                    </div>
                                    <div className='tags'>
                                        <h4>Legacy Project</h4>
                                    </div>
                                    <p className='desc'>Smaller Music Video I made for another song I really enjoyed at the time. My first full music video.</p>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://youtu.be/QKkpQcBnCXM'><p>Watchable Here.</p></a>
                                    </div>
                                </div>
                                </div>

                            </div>
                            <div className='p-container other'>

                                <h2 id='moreprojects' style={{marginBottom: "6px"}}>More</h2>
                                <h2 style={{margin: "5px", fontSize: "20px"}}>2</h2>

                                <div className='p-grid'>
                                <div className='p-project' id='project-construct'>
                                    <div className='titles'>
                                        <h3>Project: Construct</h3>
                                        <h4>Local name, Project: <a href='https://youtu.be/D_QLQHkj1XU' target="_blank" rel='noreferrer'>Edge</a></h4>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={3}>Mega-project</Scope>
                                        <h4>Persistant Project</h4>
                                    </div>
                                    <p className='desc'>A yearlong project in 2022 to greatly improve my web building skills.</p>
                                        <ul style={{color: "white"}}>
                                            <li><a target={'_blank'} rel="noreferrer" href='https://nnexsus.net/'>https://nnexsus.net/</a></li>
                                            <li><a target={'_blank'} rel="noreferrer" href='https://blade-api.netlify.app/'>https://blade-api.netlify.app/</a></li>
                                            <li><a target={'_blank'} rel="noreferrer" href='https://nnexsus-weather.netlify.app/'>https://nnexsus-weather.netlify.app/</a></li>
                                            <li><a target={'_blank'} rel="noreferrer" href='https://nnexsus-fish-game.netlify.app/'>https://nnexsus-fish-game.netlify.app/</a></li>
                                            <li><a target={'_blank'} rel="noreferrer" href='https://georadio.netlify.app/'>https://georadio.netlify.app/</a></li>
                                        </ul>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project'>
                                    <div className='titles'>
                                        <h3>Project: Tether</h3>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={2}>Base-project</Scope>
                                        <h4>Image</h4><h4>Files</h4><h4>Managment</h4><h4>Custom Commands</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: tether' className='otherimg imagespan' loading={'lazy'} src={`${tether}`} width="50%" />
                                    <p className='desc'>Tether Bot is a direct access to the nnexsus-server through discord. Save or fetch files from the server! All saved files can be found on the website as well.</p>
                                    <ul style={{color: "lightblue"}}>
                                        <li>NodeJS</li>
                                        <li>Discord.JS</li>
                                        <li>Express</li>
                                    </ul>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project legacy'>
                                    <div className='titles'>
                                        <h3>Project: Badge</h3>
                                    </div>
                                    <div className='tags'>
                                        <h4>Legacy Project</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: badge' className='otherimg imagespan' loading={'lazy'} src={`${badge}`} width="50%" />
                                    <p className='desc'>A high use discord bot, capable of awarding badges (achievements) to users for in app activities. Has built in games, commands, events, and profile pages that allow users to show off their achivements.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxProvider>
        </section>
    </Wrapper>
    )
}

export default Past;