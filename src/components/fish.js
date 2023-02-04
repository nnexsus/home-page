import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useContext } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { LinkContext } from './context';

const Wrapper = styled.div`

    background-image: url('/images/panels/fish/water.webp');
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
        background-image: url('/images/tri.webp');
        background-size: 9px;
        backdrop-filter: blur(5px);
        background-color: rgba(255, 255, 255, 0.2);

        .container2 {
            filter: drop-shadow(2px 4px 11px teal);
            background-image: url('/images/panels/fish/fish.png');
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
            text-shadow: 0px 0px 10px black;
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

    .pre-img {
        cursor: pointer;
        transition: 0.2s ease-in-out;

        :hover {
            scale: 1.2;
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
        .container {
            margin: 50px 5% 50px 5%;
        }
    }

`;

const Fish = () => {

    const [state, dispatch] = useContext(LinkContext);
    
    const onImgClick = (link) => dispatch({type: 'update_link', link: link, browser: true})
    
    const [egg, setEgg] = useState(false)
    const onClick = () => setEgg(!egg)
    
    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxanim = {
        init: {opacity: 0, transform: "translateX(-300px)"},
        end: {opacity: 1, transform: "translateX(0px)", transition: {duration: 0.8}}
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
                            <div style={{margin: '3px', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '35px'}}>
                                <h1>Fish Game</h1>
                            </div>
                            <div className='images' style={{display: 'grid', gridTemplateColumns: '50% 50%', gridTemplateRows: "50% 50%", padding: '50px'}}>
                                <img onClick={(e) => onImgClick(e.currentTarget.src)} className='pre-img' pos="1" alt='fish game preview 1' src={'/images/panels/fish/fishgame1.webp'} width="100%" />
                                <img onClick={(e) => onImgClick(e.currentTarget.src)} className='pre-img' pos="2" alt='fish game preview 2' src={'/images/panels/fish/fishgame2.webp'} width="100%" />
                                <img onClick={(e) => onImgClick(e.currentTarget.src)} className='pre-img' pos="1" alt='fish game preview 3' src={'/images/panels/fish/fishgame3.webp'} width="100%" />
                                <img onClick={(e) => onImgClick(e.currentTarget.src)} className='pre-img' pos="2" alt='fish game preview 4' src={'/images/panels/fish/fishgame4.webp'} width="100%" />
                            </div>
                            <p>Build and upgrade your aquarium as you discover new fish and ocean biomes! Dive deeper into the ocean and discover what creatures lay deep.</p>
                            <h2 style={{color: "var(--accentTheme)"}}><a target="blank" href="https://nnexsus-fish-game.netlify.app">Play it online here!</a><br/><i style={{color: "black"}}>Or play on site here: <a href='#game-section'>Navigate to fish game</a>!</i></h2>
                            {egg ?
                            <a target="blank" href='https://youtu.be/Cpd1WmqyI1w'>Hidden Song</a>
                            : null}
                        </div>
                        <button onClick={() => onClick()} className='button'><img src={'/images/panels/fish/mermaid.png'} style={{width: "70%", marginBottom: "-25px", filter: "drop-shadow(2px 2px 5px lightblue)"}} alt='mermaid'/></button>
                    </motion.div>
                </Parallax>
            </ParallaxProvider>
        </Wrapper>
    )

}


export default Fish;