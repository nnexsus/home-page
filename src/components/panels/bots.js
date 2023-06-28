import { useState, useEffect, useContext } from 'react';
import { toHTML } from 'discord-markdown';
import styled from 'styled-components';
import axios from 'axios';

import { LinkContext } from '../context';

const Wrapper = styled.div`

    box-shadow: 0px 0px 20px 20px black, 0px 0px 20px 20px black inset;
    padding: 1px;

    filter: drop-shadow(0px 0px 10px black);

    h1, h2, h3, h4, p, a {
        font-family: monospace;
        color: white;
        text-align: center;
    }

    h1 {
        color: white;
        text-shadow: 0px 0px 3px white;
        font-size: 42px;
    }

    .container {

        .button {
            background-color: rgba(0, 0, 0, 0);
            border: none;
            
            :hover {
                cursor: pointer;
            }
        }

        padding: 20px;
        margin: 20px;

        --aug-inlay-bg: linear-gradient(35deg, rgba(27,40,69,1) 5%, rgba(69,120,166,1) 100%);
        --aug-border-bg: rgba(0, 0, 0, 0.3);
        --aug-delegated-border: 1px;

        filter: drop-shadow(2px 4px 11px #335C81);
        background-image: url('images/panels/past/dc.webp');
        background-size: 50px;
        background-repeat: round;
        backdrop-filter: blur(5px);
        background-color: rgba(255, 255, 255, 0.2);

        .bot {

            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            
            --aug-tr-inset2: 300px;
            --aug-l-inset1: -5px;
            --aug-l-center: 40px;
            --aug-bl-inset1: -5px;
            --aug-bl-inset2: -5px;
            --aug-border-all: 2px;
            --aug-border-bg: rgba(27,40,69,1);

            p {
                font-size: 18px;
                margin: 3px 3px 5px 3px;
                color: lightblue;
                text-shadow: 0px 0px 4px black;
                background-color: #274060;
                border: solid 1px #5899E2;
                border-radius: 2px;
            }
            
            a {
                font-size: 22px;
                text-shadow: 0px 0px 3px white;
            }

            h3 {
                font-size: 26px;
            }
        }
    }

    .scroll-container {
        h3 {
            margin: 20px 5px 5px 5px;
        }

        filter: drop-shadow(2px 4px 11px #335C81);

        display: grid;
        grid-template-columns: repeat(2, 50%);
        gap: 20px;

        align-content: center;
        justify-content: center;
        justify-items: center;

        .preview {
            padding: 10px;
            border: solid #335C81 2px;
            border-radius: 5px;
            
            box-shadow: 0px 0px 10px 4px black, 0px 0px 0px 20px black inset;
        }


        .tags {

            margin: 5px;
            display: flex;
            justify-content: center;

            h4 {
                background-color: green;
                text-shadow: 0 0 2px black;
                border-radius: 50px;
                margin: 0 2px;
                padding: 3px;
                transition: 0.3s ease-in-out;
                cursor: default;
                
                :hover {
                    transform: scale(1.05);
                    background-color: #5dc97a;
                }
            }
        }
    }

    .embed {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(2, 1fr); 
        margin: 20px; 
        background-color: rgba(0, 0, 0, 0.2); 
        padding: 10px; 
        backdrop-filter: invert(1); 
        border-radius: 5px; 
        border: solid 1px rgba(0, 0, 0, 0.3);
    }

    .global-feed {
        margin: 0 15%;
        border: solid 2px var(--accentTheme);
        border-radius: 6px;
        padding: 5px;

        h2 {
            color: white;
            text-shadow: 0px 0px 3px white;
            font-size: 32px;
        }
        .feed-container {
            background-color: #2F3136;
            display: flex;
            flex-direction: column;
            max-height: 500px;
            overflow-y: scroll;
            overflow-x: hidden;

            border: solid 2px black;
            border-radius: 6px;

            ::-webkit-scrollbar {
                height: 5px;
                width: 5px;
            }
            
            ::-webkit-scrollbar-track {
                box-shadow: 0 0 5px black inset;
                border-radius: 15px;
            }
            
            ::-webkit-scrollbar-thumb {
                background-color: var(--accentTheme); 
                border-radius: 10px;
                transition: 0.2s ease;
            }
            
            ::-webkit-scrollbar-thumb:hover {
                background-color: var(--accentTheme);
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.3) inset;
            }
        }
    }

    @media screen and (max-width: 550px) {
        .scroll-container {
            display: block;
            gap: 30px;
        }

        .embed {
            display: block;
        }
        
        .scroll-container {
            h3 {
                padding-top: 20px;
            }
        }
    }

    .mention {
        color: #D4D5F2;
        background: #4E4D73;
        border-radius: 10px; 
        padding: 0;
        margin: 2px 6px 2px 2px;
    }

    .logs {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 150px;
    }

    .entry {
        display: block;
        width: calc(100% - 25px);
        max-width: 435px;

        pre {
            overflow-x: auto;
        }
    }

    @media screen and (max-width: 750px) {
        .global-feed {
            margin: 0;
        }
    }

    @media screen and (max-width: 450px) {
        .logs {
            margin: 0;
        }
    }

    .filter-button, .channel-button {
        border: solid black 2px;
        border-radius: 5px;
        margin: 2px;
        color: black;
        text-shadow: 0px 0px 5px var(--accentTheme);
        background-color: var(--accentThemeEvenDarker);
        transition: 0.2s ease-in-out;

        :hover {
            filter: brightness(0.85);
            scale: 0.95;
        }
    }

    .active {
        background-color: var(--accentTheme);

        :hover {
            scale: 1.1;
        }
    }

    .togdisp {
        display: flex;
        align-items: center; 
        padding: 5px; 
        background: rgba(0,0,0,0.3); 
        border: solid rgba(0,0,0,0.5) 2px; 
        border-radius: 60px; 
        margin: 40px 0 10px 0;
    }

    .end .togdisp {
        display: none;
    }
    
    .togdisp2 {
        height: 0px;
        opacity: 0;
        transition: 0.4s ease-in-out;
    }

    .end:hover .togdisp2 {
        height: 36px;
        opacity: 1;
    }

    .end {
        border-bottom: solid green 5px;
        border-radius: 20px;
        padding: 10px;
    }
`;

const Message = styled.div` //message container
    background-color: ${prop => prop.mention === 'true' ? "#473e08" : "black"};
    display: flex;
    align-items: flex-start;
    border-radius: 4px;
    color: white;
    padding: 5px;
    margin: 3px;
    border: inset 3px;
    box-shadow: 0 0 5px 1px var(--accentTheme);
    
    div {
        color: #02e33e;
        text-shadow: 0 0 3px #02e33e;
        line-height: 20px;
        font-family: LouisGeorgeCafe;
    }

    img {
        border-radius: 50%;
        height: 50px;
        margin-top: 12px;
    }

    pre {
        margin-top: 5px;
        color: white;
        padding: 5px;
        border: solid var(--accentTheme) 2px;
        border-radius: 12px;
        background-color: #424242;
        text-shadow: none;

        ::-webkit-scrollbar {
            height: 5px;
        }
        
        ::-webkit-scrollbar-track {
            box-shadow: 0 0 5px black inset;
            border-radius: 15px;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: darkgray; 
            border-radius: 10px;
            transition: 0.2s ease;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background-color: darkgray;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3) inset;
        }
    }

    code {
        color: white;
        background-color: #545454;
        padding: 3px;
        border-radius: 3px;
        font-family: monospace;
        text-shadow: none;
    }

    .diff {
        .hljs-addition {
            color: lightgreen;
        }

        .hljs-deletion {
            color: red;
        }
    }
    
    p {
        text-align: left;
        padding-left: 5px;
    }

    a {
        text-shadow: none;
    }
    
    :hover {
        background-color: ${prop => prop.mention === 'true' ? "#46423C" : "#32353B"};
    }
 `;

const Online = styled.div`
    color: ${prop => 
            prop.current === "online" ? "#3dc751" :
            prop.current === "offline" ? "#c73d3d" : 
            "#000"};
    text-shadow: 0px 0px 7px black;
`;

const Bots = () => {

    const [state, dispatch] = useContext(LinkContext);
    const onImgClick = (link) => dispatch({type: 'update_link', link: link, browser: true})

    const [online, setOnline] = useState(null)
    const [logs, setLogs] = useState([])
    const [logstore, setLogStore] = useState([])
    const [load, setLoad] = useState(false)

    const [tag, setTag] = useState(':');
    const [chan, setChan] = useState(':');

    useEffect(() => {
        if(logstore.length <= 0) {
            axios.get("https://discord.com/api/guilds/799042979871588419/widget.json").then((res) => {
                setOnline(res.data)
            }).catch((err) => {
                setOnline(err)
            })
            axios.get(`https://api-nnexsus-server.cfd/api/global/25`).then((res) => {
                setLogs(res.data)
                setLogStore(res.data)
            }).catch(() => {
                setLogs([{mention: true, content: 'Could not connect to server.', date: `${(new Date).getMonth()}/${(new Date).getDate()}`}])
            })
        }
    }, [load])

    const filter = (e) => {
        document.querySelectorAll('.filter-button').forEach((a) => a.classList.remove('active'))
        e.currentTarget.classList.toggle('active');
        setTag(e.currentTarget.value)
    }

    const channel = (e) => {
        document.querySelectorAll('.channel-button').forEach((a) => a.classList.remove('active'))
        e.currentTarget.classList.toggle('active')
        setChan(e.currentTarget.value)
    }

    useEffect(() => {
        reSort();
    }, [tag, chan])

    const reSort = () => {
        const newArr = []
        logstore.forEach((log) => {
            if(log.source.includes(chan) && log.source.includes(tag)) {
                newArr.push(log)
            }
            setLogs(newArr)
        })
    }

    const newAmount = (amt) => {
        axios.get(`https://api-nnexsus-server.cfd/api/global/${amt}`).then((res) => {
            setLogs(res.data)
            setLogStore(res.data)
        }).catch(() => {
            setLogs([{mention: true, content: 'Could not connect to server.', date: `${(new Date).getMonth}/${(new Date).getDate()}`}])
        })
    }

    return (
        <Wrapper onLoad={() => setLoad(!load)} id='bots'>
            <div className='container' data-augmented-ui="tl-clip-inset tr-clip-inset br-clip-inset bl-clip-inset border">
                <div className='container2'>
                    <h1>Discord</h1>
                    <div className='scroll-container'>
                        <div className='bot' data-augmented-ui="tr-clip-x br-clip bl-rect-y l-rect-y border">
                            <h3 className='mobilemargin'>PASS-Mini Bot 📷</h3>
                            <div className='tags'>
                                <h4>Images</h4><h4>Web Navigation</h4><h4>Command Intervals</h4>
                            </div>
                            <p>This is a bot designed to <b>access the web without leaving discord</b>. Currently, the bot can navigate websites, take screenshots on <b>command or intervals</b>, scrape images, play music, all from the web.</p>
                            <ul>
                                <li><p>/snapshot [site-link]</p></li>
                                <li><p>/register [site-link] [snap-interval]</p></li>
                                <li><p>&play [song-search-term-or-link]</p></li>
                            </ul>
                            <p><a href='https://discord.com/api/oauth2/authorize?client_id=1011452531286741102&permissions=277025508352&scope=bot' target="_blank" rel="noreferrer">Invite PASS-Mini here!</a></p>
                        </div>
                        <div className='bot' data-augmented-ui="tr-clip-x br-clip bl-rect-y l-rect-y border">
                            <h3 className='mobilemargin'>Tether Bot 📁</h3>
                            <div className='tags'>
                                <h4>Images</h4><h4>Files</h4><h4>Management</h4><h4>Custom Commands</h4>
                            </div>
                            <p>Tether bot is able to <b>save and send images and links on command!</b> All media saved is backed up and downloaded on nnexsus-server, and is also visible on my site. Connects to the nnexsus-server and site, <a style={{fontSize: '18px'}} href='https://nnexsus-server.netlify.app'>visit here</a>.</p>
                            <ul>
                                <li><p>/save [custom-name]</p></li>
                                <li><p>/get [custom-name]</p></li>
                                <li><p>/server</p></li>
                            </ul>
                            <p><a href='https://discord.com/api/oauth2/authorize?client_id=898770846657675305&permissions=277025508352&scope=bot%20applications.commands' target="_blank" rel="noreferrer">Invite Tether Bot here!</a></p>
                        </div>
                    </div>
                    <div>
                        <h3>All bots can be tested in my <a href='https://discord.gg/d8R2tDaBK2'>Discord server</a> as well!</h3>
                    </div>
                    <div>
                        {online !== null ?
                        <div className='embed'>
                            {online.members.map((mem) => {
                                if ((mem.username === "PASS-Mini") || (mem.username === "Tether Bot")) {
                                    return (
                                        <div key={`${mem.username}`} className='member' style={{display: 'flex', fontFamily: "monospace", backgroundColor: "rgba(0, 0, 0, 0.3)", padding: "10px", borderRadius: "5px", border: "solid 1px rgba(0, 0, 0, 0.3)", textAlign: "center",}}>
                                            <img onClick={(e) => onImgClick(e.currentTarget.src)} alt={`${mem.username} profile picture`} src={`${mem.avatar_url}`} style={{borderRadius: "15px", cursor: 'pointer'}}/>
                                            <h2>{mem.username}</h2>
                                            <Online current={mem.status}>●{mem.status}</Online>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        : null}
                    </div>
                    <div id='global-feed' className='global-feed'>
                        <h2>Discord Feeds</h2>
                        <hr style={{borderColor: 'var(--accentTheme)', height: '0px'}} />
                        <div style={{backgroundImage: 'url(/images/tri.webp', backgroundSize: '8px'}} className='feed-container'>
                            <h3 className='title' style={{fontSize: '24px'}}>Updates & News</h3>
                            <a href='https://discord.gg/d8R2tDaBK2'>Discord Server (mainly for these updates)</a>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', margin: '3px'}}>
                                <div>
                                    <p>Channels:</p>
                                    <button className='channel-button' value={':'} onClick={(e) => channel(e)}>All</button>
                                    <button className='channel-button' value={'news'} onClick={(e) => channel(e)}>News</button>
                                    <button className='channel-button' value={'updates'} onClick={(e) => channel(e)}>Updates</button>
                                </div>
                                <div>
                                    <p>Filters:</p>
                                    <button className='filter-button' value={':'} onClick={(e) => filter(e)}>all</button>
                                    <button className='filter-button' value={'nnexsusnet'} onClick={(e) => filter(e)}>nnexsusnet</button>
                                    <button className='filter-button' value={'nnserver'} onClick={(e) => filter(e)}>nnserver</button>
                                    <button className='filter-button' value={'georadio'} onClick={(e) => filter(e)}>georadio</button>
                                    <button className='filter-button' value={'arina'} onClick={(e) => filter(e)}>arina</button>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <p>Display:</p>
                                    <select className='filter-button' onChange={(e) => newAmount(e.currentTarget.value)}>
                                        <option value={'25'}>25</option>
                                        <option value={'50'}>50</option>
                                        <option value={'100'}>100</option>
                                        <option value={'200'}>200</option>
                                        <option value={'500'}>500</option>
                                    </select>
                                </div>
                            </div>
                            <div className='logs'>
                            {logs.length >= 1 ? 
                            logs.map((message, index, arr) => {
                                var mention = 'false';
                                const msg = `<div>${toHTML(message.content, {
                                    discordCallback: {
                                        here: () => {
                                            return '<b style="color: #D4D5F2; background: #4E4D73; border-radius: 10px; padding: 0; margin: 2px 6px 2px 2px; cursor: pointer; text-shadow: none; padding: 3px;" className="mention">@here</b>';
                                        },
                                        everyone: () => {
                                            return '<b style="color: #D4D5F2; background: #4E4D73; border-radius: 10px; padding: 0; margin: 2px 6px 2px 2px; cursor: pointer; text-shadow: none; padding: 3px;" className="mention">@everyone</b>'
                                        }
                                    }
                                })}</div>`
                                if (message.content.includes('@everyone') || message.content.includes('@here')) {
                                    mention = 'true'
                                }
                                var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Setpember', "October", "November", 'December']
                                var splDate = message.date.split('-')
                                var not = ['st', 'nd', 'rd'][((parseInt(splDate[2]) + 90) % 100 - 10) % 10 - 1] || "th"
                                var finDate = months[splDate[1] - 1] + " " + splDate[2] + not + ", " + splDate[0]
                                var classes = ((index - 1) > 0 ? ((arr[index - 1]).date === message.date ? 'end' : 'start') : 'start')
                                return (
                                    <div style={{maxWidth: '100%'}} className={`${classes}`} key={message.id}>
                                        <div className='togdisp'>
                                            <img alt='profile decor' src='/images/panels/about/pfp.webp' width={'40px'} height={'40px'} style={{borderRadius: '50%', cursor: 'pointer', margin: '2px', border: 'solid var(--accentTheme) 2px'}} />
                                            <p style={{color: '#9c43e0', textShadow: '0 0 2px black', cursor: 'pointer'}}><b>nnexsus</b></p>
                                            <p style={{marginLeft: '10px'}}>on {finDate}</p>
                                        </div>
                                        <div className='togdisp2'>
                                            <p style={{marginLeft: '10px'}}>{finDate} continued...</p>
                                        </div>
                                        <Message style={{fontFamily: 'monospace'}} mention={`${mention}`} dangerouslySetInnerHTML={{__html: msg}} className='entry' key={message.id}/>
                                    </div>
                                )
                            }) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )

}


export default Bots;