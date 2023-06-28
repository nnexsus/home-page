import styled from 'styled-components';
import { useContext, useRef } from 'react';
import { LinkContext } from '../context';

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


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

    .p-content::-webkit-scrollbar, .init-grid::-webkit-scrollbar {
        height: 15px;
    }
    .p-content::-webkit-scrollbar-track, .init-grid::-webkit-scrollbar-track {
        box-shadow: 0 0 3px black inset;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 15%, var(--accentTheme) 100%); 
        border-radius: 15px;
    }
    .p-content::-webkit-scrollbar-thumb, .init-grid::-webkit-scrollbar-thumb {
        padding: 2px;
        background-color: var(--accentTheme); 
        border-radius: 10px;
        border: solid var(--accentThemeEvenDarker) 2px;
        transition: 0.2s ease-in-out;
    }
    .p-content::-webkit-scrollbar-thumb:hover, .init-grid::-webkit-scrollbar-thumb:hover {
        background-color: var(--accentTheme);
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

            .p-content {
                display: grid;
                grid-template-columns: repeat(4, 500px);
                overflow-x: scroll;
                overflow-y: hidden;
                gap: 8px;

                img {
                    transition: 0.2s ease-in-out;
                    :hover {
                        width: 100%;
                        transform: scale(1.2) translate(0, 25px);
                    }
                }
            }
        }

        .ptitle {
            grid-column: span 2;
        }

        .p-project {
            background-color: rgba(0, 0, 0, 0.3);
            border: solid rgba(0, 0, 0, 0.3) 2px;
            border-radius: 10px;
            margin: 8px;
            padding: 2px 6px;
            transition: 0.4s ease-in-out;

            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 15% 15% 70%;
            gap: 10px;
            justify-items: center;

            a {
                color: #E6DBE5;
            }

            :hover {
                background-color: rgba(70, 30, 150, 0.6);
            }

            .title {
                grid-row: 1;
            }

            .tags {
                grid-row: 2;
                grid-column: 1;
                margin: 5px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(4, 1fr);
                height: 48px;
                gap: 2px;
                text-align: center;
                white-space: nowrap;

                .scope {
                    grid-row: 1;
                    grid-column: span 2;
                }

                .yeartag {
                    background-color: lightcoral;
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
            .imagespan {
                //grid-row: span 3;
            }

            .desc {
                grid-row: 2;
                grid-column: 2;
            }

            .links {
                grid-column: 1;
                grid-row: 3;
            }

        }

        .p-container {
            padding: 6px;
            overflow-x: hidden;
            overflow-y: scroll;
            display: flex;
            flex-direction: column;
            max-height: 600px;
            border-left: solid white 2px;
            border-right: solid white 2px;
            border-radius: 10px;

            ::-webkit-scrollbar {
                height: 10px;
            }
            ::-webkit-scrollbar-track {
                box-shadow: 0 0 5px black inset;
                border-radius: 15px;
                background: linear-gradient(180deg, rgba(83,76,204,1) 0%, rgba(79,193,223,1) 50%, rgba(155,222,250,1) 100%);
            }
            ::-webkit-scrollbar-thumb {
                background-color: lightblue; 
                border-radius: 10px;
                border: solid rgba(0,0,0,0.3) 3px;
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

    @media screen and (max-width: 750px) {
        .top {
            .content-container {
                --aug-t-extend1: 0px;
                --aug-b-extend1: 0px;
                .p-content {
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
            .p-project {
                display: flex;
                flex-direction: column;
                .tags {
                    height: 80px;
                    gap: 0px;
                    margin: 0px;
                }
                .desc {
                    font-size: 150%;
                }
            }
            .p-container {
                margin-bottom: 10px;
            }
        }

        .quicknav-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 15px;
            margin: 5px;
        }
        .quicknavs {
            padding: 0px;
            margin: 2px;
            width: 100%;
            height: 100%;
        }
    }

    .scroller {
        transition: 0.2s ease;
        cursor: pointer;
        padding: 4px;
        :hover {
            scale: 1.05;
        }
    }

    .p-grid {
        margin: 4px;
        margin-bottom: 20px;
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

    const [past, setPast] = useState([])
    const [inits, setInits] = useState([])

    useEffect(() => {
        if(past.length < 1) {
            axios.get('https://api-nnexsus-server.cfd/api/mainsite/past').then((res) => {
              setPast(res.data)
            })
        }
    }, [])

    useEffect(() => {
        if(inits.length < 1) {
            axios.get('https://api-nnexsus-server.cfd/api/mainsite/inits').then((res) => {
                setInits(res.data)
            })
        }
    }, [])

    const scroller = useRef(null)

    return (
        <Wrapper>
            <section className='top' id='past'>
                <div>
                    <div data-augmented-ui="tl-2-clip-y t-clip-x tr-2-clip-y br-2-clip-y b-clip-x bl-2-clip-y both" className='content-container'>
                        <h2 className='ptitle'>Showcase</h2>
                        <p style={{textAlign: "center"}}>Any projects that appear here are officially completed. Uncompleted projects will appear in the <a style={{color: "lightblue"}} href='#panels'>About & Links</a> section.</p>
                        <p style={{textAlign: "center", color: "white"}}>Click on an image to expand it!</p>
                        <p style={{texAlign: "center", color: "white"}}>Key:</p>
                        <ul className='key'>
                            <li><p>Legacy Project - Project Started/Finished before 2022, beginner, or before the new Project-based system I use for my work.</p></li>
                            <li><p>Mega-Project/Update - Project that spans over multiple platforms and/or takes more than a month for completion.</p></li>
                            <li><p>Base-Project/Update - Project that spans over multiple or a single platform, and/or takes more than a week for completion.</p></li>
                            <li><p>Mini-Project/Update - Projects that are finished within a week of start.</p></li>
                        </ul>
                        <div className='quicknav-buttons'>
                            <a className='quicknavs' style={{textDecoration: 'none'}} href='#webprojects'><pre>{asciiArt[0]}Web Projects</pre></a>
                            <a className='quicknavs' style={{textDecoration: 'none'}} href='#gameprojects'><pre>{asciiArt[1]}Game Projects</pre></a>
                            <a className='quicknavs' style={{textDecoration: 'none'}} href='#videoprojects'><pre>{asciiArt[2]}Video Projects</pre></a>
                            <a className='quicknavs' style={{textDecoration: 'none'}} href='#otherprojects'><pre>{asciiArt[3]}Other</pre></a>
                        </div>
                        <div className='p-content'>
                            <div className='p-container web'>

                                <h2 id='webprojects' style={{marginBottom: "6px"}}>Web</h2>

                                {past.length > 1 ? past.map((el) => {
                                    if(el.category === 'w') {
                                    var projlink = el.HTMLname.split('\\')
                                    var projscope = 1
                                    if (el.largetag === "Base-update" || el.largetag === "Base-project") {
                                        projscope = 3
                                    }
                                    if (el.largetag === "Mega-update" || el.largetag === "Mega-project") {
                                        projscope = 3
                                    }
                                    var tags = el.tags.split(',')
                                    var linkdir = el.HTMLlinks.split(',')
                                    var Linkel = linkdir.map((li) => {
                                        var link = li.split('\\')
                                        return (
                                            <a key={link[1]} target='_blank' rel='noreferrer' style={{textAlign: "center"}} href={`${link[1]}`}><p>{link[0]}</p></a>
                                        )
                                    })
                                    return (
                                        <div key={el.customid} className='p-grid'>
                                            <div style={{backgroundImage: `url(${el.imageref})`, borderRadius: '10px', border: 'solid var(--accentThemeDarker) 2px'}}>
                                        <div className='p-project' id='project-geo' style={{backdropFilter: 'brightness(0.5) blur(4px)'}}>
                                            <div className='titles'>
                                                <h3>{el.title}</h3>
                                                <h4><a href={`${projlink[1]}`} target="_blank" rel='noreferrer'>{projlink[0]}</a></h4>
                                            </div>
                                            <div className='tags'>
                                                <Scope className='scope' type={projscope}>{el.largetag}</Scope>
                                                <h4>{tags[0]}</h4><h4>{tags[1]}</h4><h4>{tags[2]}</h4>
                                                <h4 className='yeartag'>{tags[3]}</h4>
                                            </div>
                                            <img style={{cursor: 'pointer'}} title='click to expand' onClick={(e) => onImgClick(e.currentTarget.src)} alt='project preview' className='webimg' loading={'lazy'} src={`${el.imageref}`} width="90%" />
                                            <p className='desc'>{el.HTMLdesc}</p>
                                            <div className='links'>
                                                {Linkel}
                                            </div>
                                        </div>
                                            </div>
                                        </div>
                                    )
                                }}): null}

                                <div className='p-grid'>
                                <div className='p-project' id='project-geo'>
                                    <div className='titles'>
                                        <h3>Project: Geo</h3>
                                        <h4>Local name, Project: <a href='https://youtu.be/QjZyGdLF0z0' target="_blank" rel='noreferrer'>Outlines</a></h4>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={3}>Mega-project</Scope>
                                        <h4>Webapp</h4><h4>Radio</h4><h4>Thematic</h4>
                                        <h4 className='yeartag'>2022</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} title='click to expand' onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: geo' className='webimg' loading={'lazy'} src={'/images/panels/georadio/neonsun.webp'} width="90%" />
                                    <p className='desc'>A fun megaproject to end 2022! GeoRadio is a radio webapp, with a Windows95 thematic feel to it. You can use the built-in browser to discover a ton of websites, including multiple radios and hidden gems!!</p>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://github.com/nnexsus/georadio' style={{textAlign: "center"}}><p>Check out the github repo here!</p></a>
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
                                        <h4>File Storage</h4><h4>Cloud Service</h4><h4>Security</h4>
                                        <h4 className='yeartag'>2022</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} title='click to expand' onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: oort' className='webimg' loading={'lazy'} src="/images/panels/past/server.webp" width="90%" />
                                    <p className='desc'>A megaproject cloud based file storage, similar to google drive. Includes accounts, databases, secure storage, sharing, and a connect discord bot for saving files on command!</p>
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
                                        <h4 className='yeartag'>2022</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} title='click to expand' onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: weather2.0' className='webimg' loading={'lazy'} src="/images/panels/past/weathersite.webp" width="90%" />
                                    <p className='desc'>Simple weather site, rebuild of an older version. Connects to NOAA API for weather data. Contains Radar, 24 Hour Forecast, 5 Day Forecast, and Active Alerts.</p>
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
                                        <h4 className='yeartag'>2022</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} title='click to expand' onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: blade' className='webimg' loading={'lazy'} src="/images/panels/past/blade.webp" width="90%" />
                                    <p className='desc'>A free public API & discord bot for Clash of Clans related content, including a documentation site. Recently sunset.</p>
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
                                        <h4 className='yeartag'>2021</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} title='click to expand' onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: domain' className='webimg' loading={'lazy'} src="/images/panels/past/increment.webp" width="90%"/>
                                    <p className='desc'>An image board website complete with profiles, public/private boards, customizable profile pages, and moderation.</p>
                                </div>
                                </div>

                            </div>
                            <div className='p-container game'>

                                <h2 id='gameprojects' style={{marginBottom: "6px"}}>Game</h2>

                                {past.length > 1 ? past.map((el) => {
                                    if(el.category === 'g') {
                                    var projlink = el.HTMLname.split('\\')
                                    var projscope = 1
                                    if (el.largetag === "Base-update" || el.largetag === "Base-project") {
                                        projscope = 3
                                    }
                                    if (el.largetag === "Mega-update" || el.largetag === "Mega-project") {
                                        projscope = 3
                                    }
                                    var tags = el.tags.split(',')
                                    var linkdir = el.HTMLlinks.split(',')
                                    var Linkel = linkdir.map((li) => {
                                        var link = li.split('\\')
                                        return (
                                            <a key={link[1]} target='_blank' rel='noreferrer' style={{textAlign: "center"}} href={`${link[1]}`}><p>{link[0]}</p></a>
                                        )
                                    })
                                    return (
                                        <div key={el.customid} className='p-grid'>
                                            <div style={{backgroundImage: `url(${el.imageref})`, borderRadius: '10px', border: 'solid var(--accentThemeDarker) 2px'}}>
                                        <div className='p-project' id='project-geo' style={{backdropFilter: 'brightness(0.5) blur(4px)'}}>
                                            <div className='titles'>
                                                <h3>{el.title}</h3>
                                                <h4><a href={`${projlink[1]}`} target="_blank" rel='noreferrer'>{projlink[0]}</a></h4>
                                            </div>
                                            <div className='tags'>
                                                <Scope className='scope' type={projscope}>{el.largetag}</Scope>
                                                <h4>{tags[0]}</h4><h4>{tags[1]}</h4><h4>{tags[2]}</h4>
                                                <h4 className='yeartag'>{tags[3]}</h4>
                                            </div>
                                            <img style={{cursor: 'pointer'}} title='click to expand' onClick={(e) => onImgClick(e.currentTarget.src)} alt='project preview' className='webimg' loading={'lazy'} src={`${el.imageref}`} width="90%" />
                                            <p className='desc'>{el.HTMLdesc}</p>
                                            <div className='links'>
                                                {Linkel}
                                            </div>
                                        </div>
                                            </div>
                                        </div>
                                    )
                                }}): null}
                            
                                <div className='p-grid'>
                                <div className='p-project' id='project-fish'>
                                    <div className='titles'>
                                        <h3>Project: Fish</h3>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={3}>Mega-project</Scope>
                                        <h4>Tycoon-like</h4><h4>Educational</h4><h4>Pixel Art</h4>
                                        <h4 className='yeartag'>2022</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} title='click to expand' onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: fish' className='webimg' loading={'lazy'} src={'/images/panels/fish/fishgame.webp'} width="90%" />
                                    <p className='desc'>A web/windows game where you manage your aquarium tycoon. Collecting new fish and discovering new biomes the reside in! Every fish and room has info to learn about. Also has a wiki page built into the site.</p>
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
                                        <h4 className='yeartag'>2022</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} title='click to expand' onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: battle-axe' className='webimg' loading={'lazy'} src="/images/panels/past/ascards.webp" width="90%" />
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
                                        <h4 className='yeartag'>2021</h4>
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

                                {past.length > 1 ? past.map((el) => {
                                    if(el.category === 'v') {
                                    var projlink = el.HTMLname.split('\\')
                                    var projscope = 1
                                    if (el.largetag === "Base-update" || el.largetag === "Base-project") {
                                        projscope = 3
                                    }
                                    if (el.largetag === "Mega-update" || el.largetag === "Mega-project") {
                                        projscope = 3
                                    }
                                    var tags = el.tags.split(',')
                                    var linkdir = el.HTMLlinks.split(',')
                                    var Linkel = linkdir.map((li) => {
                                        var link = li.split('\\')
                                        return (
                                            <a key={link[1]} target='_blank' rel='noreferrer' style={{textAlign: "center"}} href={`${link[1]}`}><p>{link[0]}</p></a>
                                        )
                                    })
                                    return (
                                        <div key={el.customid} className='p-grid'>
                                            <div style={{backgroundImage: `url(${el.imageref})`, borderRadius: '10px', border: 'solid var(--accentThemeDarker) 2px'}}>
                                        <div className='p-project' id='project-geo' style={{backdropFilter: 'brightness(0.5) blur(4px)'}}>
                                            <div className='titles'>
                                                <h3>{el.title}</h3>
                                                <h4><a href={`${projlink[1]}`} target="_blank" rel='noreferrer'>{projlink[0]}</a></h4>
                                            </div>
                                            <div className='tags'>
                                                <Scope className='scope' type={projscope}>{el.largetag}</Scope>
                                                <h4>{tags[0]}</h4><h4>{tags[1]}</h4><h4>{tags[2]}</h4>
                                                <h4 className='yeartag'>{tags[3]}</h4>
                                            </div>
                                            <img style={{cursor: 'pointer'}} title='click to expand' onClick={(e) => onImgClick(e.currentTarget.src)} alt='project preview' className='webimg' loading={'lazy'} src={`${el.imageref}`} width="90%" />
                                            <p className='desc'>{el.HTMLdesc}</p>
                                            <div className='links'>
                                                {Linkel}
                                            </div>
                                        </div>
                                            </div>
                                        </div>
                                    )
                                }}): null}

                                <div className='p-grid'>
                                <div className='p-project legacy'>
                                    <div className='titles'>
                                        <h3>Project: 2022</h3>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={3}>Mega-project</Scope>
                                        <h4>Vegas Pro</h4><h4>After Effects</h4>
                                        <h4 className='yeartag'>2022</h4>
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
                                        <h4 className='yeartag'>2021</h4>
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
                                        <h4 className='yeartag'>2021</h4>
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
                                        <h4 className='yeartag'>2020</h4>
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
                                        <h4 className='yeartag'>2020</h4>
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
                                        <h4 className='yeartag'>2020</h4>
                                    </div>
                                    <p className='desc'>Smaller Music Video I made for another song I really enjoyed at the time. My first full music video.</p>
                                    <div className='links'>
                                        <a target="_blank" rel="noreferrer" href='https://youtu.be/QKkpQcBnCXM'><p>Watchable Here.</p></a>
                                    </div>
                                </div>
                                </div>

                            </div>
                            <div className='p-container other'>

                                <h2 id='otherprojects' style={{marginBottom: "6px"}}>More</h2>

                                {past.length > 1 ? past.map((el) => {
                                    if(el.category === 'o') {
                                    var projlink = el.HTMLname.split('\\')
                                    var projscope = 1
                                    if (el.largetag === "Base-update" || el.largetag === "Base-project") {
                                        projscope = 3
                                    }
                                    if (el.largetag === "Mega-update" || el.largetag === "Mega-project") {
                                        projscope = 3
                                    }
                                    var tags = el.tags.split(',')
                                    var linkdir = el.HTMLlinks.split(',')
                                    var Linkel = linkdir.map((li) => {
                                        var link = li.split('\\')
                                        return (
                                            <a key={link[1]} target='_blank' rel='noreferrer' style={{textAlign: "center"}} href={`${link[1]}`}><p>{link[0]}</p></a>
                                        )
                                    })
                                    return (
                                        <div key={el.customid} className='p-grid'>
                                            <div style={{backgroundImage: `url(${el.imageref})`, borderRadius: '10px', border: 'solid var(--accentThemeDarker) 2px'}}>
                                        <div className='p-project' id='project-geo' style={{backdropFilter: 'brightness(0.5) blur(4px)'}}>
                                            <div className='titles'>
                                                <h3>{el.title}</h3>
                                                <h4><a href={`${projlink[1]}`} target="_blank" rel='noreferrer'>{projlink[0]}</a></h4>
                                            </div>
                                            <div className='tags'>
                                                <Scope className='scope' type={projscope}>{el.largetag}</Scope>
                                                <h4>{tags[0]}</h4><h4>{tags[1]}</h4><h4>{tags[2]}</h4>
                                                <h4 className='yeartag'>{tags[3]}</h4>
                                            </div>
                                            <img style={{cursor: 'pointer'}} title='click to expand' onClick={(e) => onImgClick(e.currentTarget.src)} alt='project preview' className='webimg' loading={'lazy'} src={`${el.imageref}`} width="90%" />
                                            <p className='desc'>{el.HTMLdesc}</p>
                                            <div className='links'>
                                                {Linkel}
                                            </div>
                                        </div>
                                            </div>
                                        </div>
                                    )
                                }}): null}

                                <div className='p-grid'>
                                <div className='p-project' id='project-construct'>
                                    <div className='titles'>
                                        <h3>Project: Construct</h3>
                                        <h4>Local name, Project: <a href='https://youtu.be/D_QLQHkj1XU' target="_blank" rel='noreferrer'>Edge</a></h4>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={3}>Mega-project</Scope>
                                        <h4>Persistant Project</h4>
                                        <h4 className='yeartag'>2022</h4>
                                    </div>
                                    <p className='desc'>A yearlong project in 2022 to greatly improve my web building skills.</p>
                                    <div className='links'>
                                        <a target={'_blank'} rel="noreferrer" href='https://nnexsus.net/'><p>https://nnexsus.net/</p></a>
                                        <p>https://blade-api.netlify.app/</p>
                                        <a target={'_blank'} rel="noreferrer" href='https://nnexsus-weather.netlify.app/'><p>https://nnexsus-weather.netlify.app/</p></a>
                                        <a target={'_blank'} rel="noreferrer" href='https://nnexsus-fish-game.netlify.app/'><p>https://nnexsus-fish-game.netlify.app/</p></a>
                                        <a target={'_blank'} rel="noreferrer" href='https://georadio.live/'><p>https://georadio.live/</p></a>
                                    </div>
                                </div>
                                </div>

                                <div className='p-grid'>
                                <div className='p-project'>
                                    <div className='titles'>
                                        <h3>Project: Tether</h3>
                                    </div>
                                    <div className='tags'>
                                        <Scope className='scope' type={2}>Base-project</Scope>
                                        <h4>Image</h4><h4>Files</h4><h4>Custom Commands</h4>
                                        <h4 className='yeartag'>2022</h4>
                                    </div>
                                    <img style={{cursor: 'pointer'}} title='click to expand' onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: tether' className='otherimg imagespan' loading={'lazy'} src="/images/panels/past/catsushi.webp" width="90%" />
                                    <p className='desc'>Tether Bot is a direct access to the nnexsus-server through discord. Save or fetch files from the server! All saved files can be found on the website as well.</p>
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
                                    <img style={{cursor: 'pointer'}} title='click to expand' onClick={(e) => onImgClick(e.currentTarget.src)} alt='project: badge' className='otherimg imagespan' loading={'lazy'} src="/images/panels/past/badge.webp" width="90%" />
                                    <p className='desc'>A high use discord bot, capable of awarding badges (achievements) to users for in app activities. Has built in games, commands, events, and profile pages that allow users to show off their achivements.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='init-tracker'>
                            <h1>Initiative Tracker</h1>
                            <h3 style={{color: 'lightblue'}}>The section below serves as an Initiative Tracker. What are initiatives? Well, anything event that requires excursion, such as storm or aurora chasing, or just getting footage or shots for something! This will also act as somewhat of a gallery.</h3>
                        
                            <div ref={scroller} className='init-grid' style={{scrollBehavior: 'smooth', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: '100%', gap: '5px', overflowX: 'scroll', overflowY: 'hidden', maxWidth: '100%'}}>
                                {inits.length > 1 ? inits.map((el) => {
                                    var datef = el.date.split('T')
                                    var initresult = ['Failure', 'Fair Enough', 'Decent', 'Pretty Good', 'Very Great', 'Overwhelmingly Amazing']
                                    var initcol = ['#d92d27', '#cfb13c', '#2ebcd9', '#3ba35f', '#2ed99a', '#7b2ed9']
                                    return (
                                        <div key={el.date} style={{backgroundImage: `url(${el.imageref})`, backgroundSize: 'cover', borderRadius: '15px 30px 15px 30px'}}>
                                            <div className='init-entry' style={{width: '600px', height: '600px', display: 'grid', gridTemplateRows: '50% 50%', backdropFilter: 'brightness(0.5) blur(4px)', border: 'solid var(--accentTheme) 3px', borderRadius: '15px 30px 15px 30px'}}>
                                                <div style={{gridColumn: 'span 2', gridRow: 1}}>
                                                    <div style={{float: 'left', width: '35%', margin: '5px', textAlign: 'center'}}>
                                                        <h1 style={{fontSize: '24px', color: 'white'}}>{el.title}</h1>
                                                        <h3 style={{color: 'lightblue'}}>{datef[0]}</h3>
                                                        <h4 style={{backgroundColor: `${initcol[el.initresult]}`, padding: '8px', borderRadius: '20px', border: 'solid rgba(0,0,0,0.3) 4px', color: 'white', fontSize: '18px'}}>{initresult[el.initresult]}</h4>
                                                    </div>
                                                    <p style={{padding: '5px', color: 'var(--accentThemeDarker)', textIndent: '50px'}}>{el.HTMLdesc}</p>
                                                </div>
                                                <div style={{gridColumn: 'span 2', gridRow: 2}}>
                                                    <img alt='decor' loading='lazy' width={'100%'} style={{scale: '0.90', borderRadius: '15px 45px 15px 45px'}} src={`${el.imageref}`} />
                                                    <p style={{position: 'sticky', maxWidth: '600px', marginTop: '-75px', color: 'white', padding: '5px', textAlign: 'center', fontSize: '12px'}}>{el.alttext}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }): null}
                            </div>
                            <div>
                                <button className='scroller' style={{background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', borderRadius: '15px'}} onClick={() => scroller.current.scrollBy(600, 0)}>
                                    <h2 style={{color: 'white', margin: '0'}}>►</h2>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
        </section>
    </Wrapper>
    )
}

export default Past;

const asciiArt = [`
.-'';'-.
,'   <_,-.'.
/)   ,--,_>\\_\\
|'   (      \\_ |
 |     \\      / | 
|_    '-.    / |
\\'-.   ;  _('/
'.(    \\/ ,'
  '-....-' 
`,`


   ,-------,
    /       / | 
  /______ /  /
|___/___/  /
|__..___|.' 
//    
.'/      
`, `
______________
|[]            |
|  __________  |
|  |        |  |
|  |        |  |
|  |________|  |
|   ________   |
|   [ [ ]  ]   |
\\___[_[_]__]___|
`, `
\\ ( ' ,_) ) \\_/
(_ , /\\  ,_/
  '--\\ '\\--'  
     _\\ _\\    
     '\\ \\    
      _\\_\\    
      \\\\    
        \\\\    
    -.'.'\\.'.-
`]