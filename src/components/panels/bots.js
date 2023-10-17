import { useState, useEffect, useContext } from 'react';
import { toHTML } from 'discord-markdown';
import styled from 'styled-components';
import axios from 'axios';

import { LinkContext } from '../context';

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

const Bots = () => {

    const [state, dispatch] = useContext(LinkContext);
    const onImgClick = (link) => dispatch({type: 'update_link', link: link, browser: true})

    const [logs, setLogs] = useState([])
    const [logstore, setLogStore] = useState([])
    const [load, setLoad] = useState(false)

    const [tag, setTag] = useState(':');
    const [chan, setChan] = useState(':');

    useEffect(() => {
        if(logstore.length <= 0) {
            axios.get(`https://arina.lol/api/global/25`).then((res) => {
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
        axios.get(`https://arina.lol/api/global/${amt}`).then((res) => {
            setLogs(res.data)
            setLogStore(res.data)
        }).catch(() => {
            setLogs([{mention: true, content: 'Could not connect to server.', date: `${(new Date).getMonth}/${(new Date).getDate()}`}])
        })
    }

    const revealImages = (links, id) => {
        var newId = id.substring(0, id.length - 1)
        links.split(',').forEach((el) => {
            var img = document.createElement('img')
            img.classList.add('msgImgDiv')
            img.src = `${el}`
            img.onclick = (ev) => onImgClick(ev.currentTarget.src)
            document.getElementById(`${newId}-images`).appendChild(img)
        })
        document.getElementById(`${id}`).remove()
    }

    return (
        <div className='disfeed' style={{gridColumn: 'span 2'}} onLoad={() => setLoad(!load)} id='feed'>
            <div className='container' data-augmented-ui="tl-clip-inset tr-clip-inset br-clip-inset bl-clip-inset border">
                <div className='container2'>
                    <h1>Discord</h1>
                    <div id='global-feed' className='global-feed'>
                        <h2>Discord Feeds</h2>
                        <hr style={{borderColor: 'var(--accentTheme)', height: '0px'}} />
                        <div style={{backgroundImage: 'url(/images/tri.webp', backgroundSize: '8px', maxHeight: '100vh'}} className='feed-container'>
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
                                    <div id={`${message.id}`} style={{maxWidth: '100%'}} className={`${classes}`} key={message.id}>
                                        <div className='togdisp'>
                                            <img loading={'lazy'} alt='profile decor' src='/images/panels/about/pfp.webp' width={'40px'} height={'40px'} style={{borderRadius: '50%', cursor: 'pointer', margin: '2px', border: 'solid var(--accentTheme) 2px'}} />
                                            <p style={{color: '#9c43e0', textShadow: '0 0 2px black', cursor: 'pointer'}}><b>nnexsus</b></p>
                                            <p style={{marginLeft: '10px'}}>on {finDate}</p>
                                        </div>
                                        <div className='togdisp2'>
                                            <p style={{marginLeft: '10px'}}>{finDate} continued...</p>
                                        </div>
                                        <Message style={{fontFamily: 'monospace'}} mention={`${mention}`} dangerouslySetInnerHTML={{__html: msg}} className='entry' key={message.id}/>
                                        {message?.files?.length > 0 ? 
                                        <div className='button-div'>
                                            <button className={`${message.files}`} id={`${message.id}1`} onClick={(e) => revealImages(e.currentTarget.classList[0], e.currentTarget.id)}><p style={{color: 'black'}}>Show Images</p></button>
                                            <div id={`${message.id}-images`} className='msgImgContainer' style={{display: 'flex', overflowX: 'scroll', overflowY: 'hidden'}}></div>
                                        </div>
                                        : null}
                                    </div>
                                )
                            }) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Bots;