import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import WATER from '../images/water.webp';
import FISH from '../images/fish.png';
import TRI from '../images/tri.webp';
import MERMAID from '../images/mermaid.png';

import { useState } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Wrapper = styled.div`

    background-image: url(${WATER});
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 0px 20px 10px black, 0px 0px 20px 10px black inset;
    padding: 1px;

    filter: drop-shadow(0px 0px 10px black);

    h1, h2, h3, h4, p, a {
        font-family: monospace;
        color: black;
    }

    h1 {
        color: white;
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

        --aug-inlay-bg: lightblue;
        --aug-border-bg: rgba(0, 0, 0, 0.3);

        --aug-tl-extend1: 300px;
        --aug-tr-extend2: 300px;
        --aug-tl-extend2: 30px;
        --aug-tr-extend1: 30px;
        --aug-tl-inset1: 30px;
        --aug-tr-inset2: 30px;
        --aug-tl-inset2: 60px;
        --aug-tr-inset1: 60px;
        --aug-l-center: 900px;
        --aug-r-center: 900px;
        --aug-l-inset1: 150px;
        --aug-r-inset1: 150px;
        --aug-l-extend1: 25px;
        --aug-r-extend1: 25px;
        --aug-delegated-border: 1px;

        filter: drop-shadow(2px 4px 11px teal);
        background-image: url(${TRI});
        background-size: 9px;
        backdrop-filter: blur(5px);
        background-color: rgba(255, 255, 255, 0.2);

        .container2 {
            filter: drop-shadow(2px 4px 11px teal);
            background-image: url(${FISH});
            background-size: 90px;
            background-repeat: space;

            display: grid;

            align-content: center;
            justify-content: center;
            justify-items: center;

            .preview {
                padding: 10px;
                border: solid teal 2px;
                border-radius: 5px;
                
                box-shadow: 0px 0px 10px 4px black, 0px 0px 0px 20px black inset;
            }
        }

        h1 {
            border-radius: 4px;
            padding: 3px;
            text-align: center;
            font-size: 64px;
            text-shadow: 0px 0px 10px #E6DBE5;
            background-color: rgba(0, 0, 0, 0.2);
        }

        p, h2 {
            font-size: 22px;
            text-align: center;
            text-shadow: 0px 0px 4px white;
            background-color: rgba(0, 0, 0, 0.4);
            width: 85%;
            padding: 5px;
            border: darkblue 2px solid;
            border-radius: 5px;
        }

        a {
            -webkit-text-stroke: 0.7px white;
            color: darkblue;
        }

    }
    
    @media screen and (max-width: 550px) {
        .container {

            --aug-tl-extend1: 50px;
            --aug-tr-extend2: 50px;
            --aug-tl-inset2: 00px;
            --aug-tr-inset1: 00px;
            --aug-l-center: 850px;
            --aug-r-center: 850px;

            margin: 50px 5% 50px 5%;

            h1 {
                font-size: 22px;
            }

            h2, p {
                font-size: 14px;
                width: 50%;
            }
        }
    }

    @media screen and (max-width: 1080px) {
        .continer {
            margin: 50px 5% 50px 5%;
        }
    }

`;

const Fish = () => {

    const [egg, setEgg] = useState(false)

    const onClick = () => setEgg(!egg)

    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxanim = {
        init: {opacity: 0, transform: "translateX(-250px) scale(0.9)"},
        end: {opacity: 1, transform: "translateX(0px) scale(1)", transition: {duration: 2}}
    }

    useEffect(() => {
        if (inView) {
            control.start("end")
        }
    }, [control, inView])

    return (
        <Wrapper id='fish'>
            <ParallaxProvider>
                <Parallax speed={-5}>
                    <motion.div className='container' 
                    ref={ref} variants={boxanim} initial="init" animate={control}
                    data-augmented-ui="tl-2-scoop-inset t-round-x tr-2-scoop-inset br-2-scoop-inset b-round-x bl-2-scoop-inset r-round-y l-round-y border">
                        <div className='container2'>
                            <h1>Fish Game</h1>
                            <iframe className='preview' style={{maxWidth: "550px"}} width="95%" height="315" src="https://www.youtube-nocookie.com/embed/1Xs7GNczWPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p>Build and upgrade your aquarium as you discover new fish and ocean biomes! Dive deeper into the ocean and discover what creatures lay deep.</p>
                            <h2 style={{color: "lightcoral"}}><a target="blank" href="https://nnexsus-fish-game.netlify.app">Play it online here!</a></h2>
                            {egg ?
                            <a target="blank" href='https://youtu.be/Cpd1WmqyI1w'>Hidden Song</a>
                            : null}
                        </div>
                        <button onClick={() => onClick()} className='button'><img src={`${MERMAID}`} style={{width: "70%", marginBottom: "-25px", filter: "drop-shadow(2px 2px 5px lightblue)"}} alt='mermaid'/></button>
                    </motion.div>
                </Parallax>
            </ParallaxProvider>
        </Wrapper>
    )

}


export default Fish;