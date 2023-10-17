import { useState, useEffect, useContext } from 'react';
import { toHTML } from 'discord-markdown';
import styled from 'styled-components';
import axios from 'axios';

import { LinkContext } from '../context';

import '../css/discordfeed.css';

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
            color: lightcoral;
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

const DiscordFeed = () => {

    const [state, dispatch] = useContext(LinkContext);
    const onImgClick = (link) => dispatch({type: 'update_link', link: link, browser: true})

    const [logs, setLogs] = useState([])
    const [logstore, setLogStore] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        if(logstore.length <= 0) {
            axios.get(`https://arina.lol/api/global/10`).then((res) => {
                setLogs(res.data)
                setLogStore(res.data)
            }).catch(() => {
                setLogs([{mention: true, content: 'Could not connect to server.', date: `${(new Date).getMonth()}/${(new Date).getDate()}`}])
            })
        }
    }, [load])

    return (
        <div className='disfeed disfeedmini' onLoad={() => setLoad(!load)} id='feedmini'>
            <div style={{backgroundImage: 'url(/images/tri.webp', backgroundSize: '8px'}} className='feed-container'>
                <h3 className='title' style={{fontSize: '24px'}}>Quick Updates & News</h3>
                <a href='https://discord.gg/d8R2tDaBK2'>Discord Server (mainly for these updates)</a>
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
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <img loading={'lazy'} className='togdisp' alt='profile decor' src='/images/panels/about/pfp.webp' width={'40px'} height={'40px'} style={{borderRadius: '50%', cursor: 'pointer', margin: '2px', border: 'solid var(--accentTheme) 2px'}} />
                                <p className='togdisp' style={{margin: '10px 0 0 10px', height: '15px'}}>on {finDate}</p>
                            </div>
                            <div className='togdisp2'>
                                <p style={{marginLeft: '10px'}}>{finDate} continued...</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <Message style={{fontFamily: 'monospace'}} mention={`${mention}`} dangerouslySetInnerHTML={{__html: msg}} className='entry' key={message.id}/>
                            </div>
                            <hr style={{margin: 0, padding: 0, borderColor: 'gray', borderWidth: '3px', marginTop: '10px', height: '3px', borderRadius: '20px'}} />
                        </div>
                    )
                }) : null}
                </div>
            </div>
        </div>
    )

}


export default DiscordFeed;