import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import axios from 'axios';

import DC from '../images/dc.webp'

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
        background-image: url(${DC});
        background-size: 50px;
        background-repeat: round;
        backdrop-filter: blur(5px);
        background-color: rgba(255, 255, 255, 0.2);
        
        .scroll-container {

            h3 {
                margin: 20px 5px 5px 5px;
            }

            filter: drop-shadow(2px 4px 11px #335C81);

            display: grid;
            grid-template-columns: repeat(3, 33%);
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

    .embed {
        display: 'flex'; 
        justify-content: 'space-between'; 
        margin: "20px"; 
        background-color: "rgba(0, 0, 0, 0.2)"; 
        padding: "10px"; 
        backdrop-filter: "invert(1)"; 
        border-radius: "5px"; 
        border: "solid 1px rgba(0, 0, 0, 0.3)";
    }

    @media screen and (max-width: 750px) {
        .container {
            .scroll-container {
                grid-template-columns: repeat(1, 100%);
            }
        }
    }
`;

const Online = styled.div`

    color: ${prop => 
            prop.current === "online" ? "#3dc751" :
            prop.current === "offline" ? "#c73d3d" : 
            "#000"};

`;

const Bots = () => {

    const [online, setOnline] = useState(null)

    useEffect(() => {
        axios.get("https://discord.com/api/guilds/799042979871588419/widget.json").then((res) => {
            setOnline(res.data)
        }).catch((err) => {
            console.log(err)
            setOnline(err)
        })
    }, [])

    const control = useAnimation()
    const [ref, inView] = useInView()

    const box1 = {
        init: {opacity: 0, transform: "translateY(-100px)"},
        end: {opacity: 1, transform: "translateY(0px)", transition: {duration: 1.5}}
    }
    const box2 = {
        init: {opacity: 0, transform: "translateY(-100px)"},
        end: {opacity: 1, transform: "translateY(0px)", transition: {duration: 2}}
    }
    const box3 = {
        init: {opacity: 0, transform: "translateY(-100px)"},
        end: {opacity: 1, transform: "translateY(0px)", transition: {duration: 2.5}}
    }

    useEffect(() => {
        if (inView) {
            control.start("end")
        }
    }, [control, inView])

    return (
        <Wrapper id='bots'>
            <div className='container' data-augmented-ui="tl-clip-inset tr-clip-inset br-clip-inset bl-clip-inset border">
                <div className='container2'>
                    <h1>Discord</h1>
                    <div className='scroll-container'>
                        <motion.div ref={ref} variants={box1} initial="init" animate={control}
                        className='bot' data-augmented-ui="tr-clip-x br-clip bl-rect-y l-rect-y border">
                            <h3>PASS-Mini Bot 📷</h3>
                            <div className='tags'>
                                <h4>Images</h4><h4>Web Navigation</h4><h4>Command Intervals</h4>
                            </div>
                            <p>This is a bot designed to <b>quick access the web without having to leave discord</b>. Currently, the bot can navigate websites, take screenshots, and scrape images from the web.</p>
                            <p><a href='https://discord.com/api/oauth2/authorize?client_id=1011452531286741102&permissions=277025508352&scope=bot' target="_blank" rel="noreferrer">Invite PASS-Mini here!</a></p>
                        </motion.div>
                        <motion.div ref={ref} variants={box2} initial="init" animate={control}
                        className='bot' data-augmented-ui="tr-clip-x br-clip bl-rect-y l-rect-y border">
                            <h3>Tether Bot 📁</h3>
                            <div className='tags'>
                                <h4>Images</h4><h4>Files</h4><h4>Management</h4><h4>Custom Commands</h4>
                            </div>
                            <p>Tether bot is able to <b>save and send images and links on command!</b> All media saved is backed up and downloaded on my server, and is also visible on my site. Connects to the nnexsus-server.</p>
                            <p><a href='https://discord.com/api/oauth2/authorize?client_id=898770846657675305&permissions=277025508352&scope=bot%20applications.commands' target="_blank" rel="noreferrer">Invite Tether Bot here!</a></p>
                        </motion.div>
                        <motion.div ref={ref} variants={box3} initial="init" animate={control} 
                        className='bot' data-augmented-ui="tr-clip-x br-clip bl-rect-y l-rect-y border">
                            <h3>Blade Bot ⚔</h3>
                            <div className='tags'>
                                <h4>Database</h4><h4>In-Game Connectivity</h4><h4>Free API</h4>
                            </div>
                            <p>Blade Bot is an <b>all-in-one Clash of Clans bot.</b> Get information on troops, armies, spells, and buildings. Or, get info on your clan, war, enemies, and balance updates!</p>
                            <p><a href='https://discord.com/api/oauth2/authorize?client_id=978107538295881808&permissions=0&scope=bot%20applications.commands' target="_blank" rel="noreferrer">Invite Blade Bot here!</a></p>
                        </motion.div>
                    </div>
                    <div>
                        {online !== null ?
                        <div className='embed'>
                            {online.members.map((mem) => {
                                if ((mem.username === "PASS-Mini") || (mem.username === "Blade[\u2694] Bot") || (mem.username === "Tether Bot")) {
                                    return (
                                        <div key={`${mem.username}`} className='member' style={{display: 'flex', fontFamily: "monospace", backgroundColor: "rgba(0, 0, 0, 0.3)", padding: "10px", borderRadius: "5px", border: "solid 1px rgba(0, 0, 0, 0.3)", textAlign: "center",}}>
                                            <img alt={`${mem.username} profile picture`} src={`${mem.avatar_url}`} style={{borderRadius: "15px"}}/>
                                            <h2>{mem.username}</h2>
                                            <Online current={mem.status}>●{mem.status}</Online>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        : null}
                    </div>
                </div>
            </div>
        </Wrapper>
    )

}


export default Bots;