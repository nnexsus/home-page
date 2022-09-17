import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import tri from '../images/tri.webp';
import edrag from '../images/edrag.webp';
import edrag2 from '../images/edrag2.webp';
import lightning from '../images/lightning3.webp';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Wrapper = styled.div`

    background-image: url(${lightning});
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 0px 20px 120px black, 0px 0px 20px 20px black inset;

    margin-top: 110px;

    h1, h2, h3, h4, p, a {
        font-family: monospace;
        color: #E6DBE5;
    }

    h1 {
        border-radius: 4px;
        padding: 3px;
        text-align: center;
        font-size: 60px;
        text-shadow: 0px 0px 5px black;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: blue;

        :before {
            position: absolute;
            content: "";
            left: 15%;
            top: 110px;
            right: 0;
            border-top: 2px solid;
            border-color: rgba(121, 226, 226, 0.4);
            width: 70%;
            
            -webkit-transform:rotate(-2deg);
            -moz-transform:rotate(-2deg);
            -ms-transform:rotate(-2deg);
            -o-transform:rotate(-2deg);
            transform:rotate(-2deg);
        }
    }

    .wrap {
        padding: 20px;
        margin: 20px;

        --aug-inlay-bg: #5C82AD;
        --aug-border-bg: #79E2E2;
        --aug-tl2-width: 200px;
        --aug-tr1-width: 200px;
        --aug-tl1-height: 300px;
        --aug-tr2-height: 300px;
        --aug-tl-inset1: 5px;
        --aug-tl-inset2: 20px;
        --aug-tr-inset1: 20px;
        --aug-tr-inset2: 5px;
        --aug-tl1-clipmod-x: 0;
        --aug-tl2-clipmod-x: 0;
        --aug-tr1-clipmod-x: 0;
        --aug-tr2-clipmod-x: 0;
        --aug-bl-extend1: 100px;
        --aug-bl-inset1: 15px;
        --aug-br-extend2: 100px;
        --aug-br-inset2: 15px;
        --aug-b-inset1: 100px;
        --aug-b1-width: 30px;
        --aug-b2-width: 30px;
        --aug-bl1-clipmod-x: 0;
        --aug-br1-clipmod-x: 0;
        --aug-bl2-clipmod-x: 0;
        --aug-br2-clipmod-x: 0;
        filter: drop-shadow(2px 4px 11px blue);
        background-image: url(${tri});
        background-size: 9px;
        backdrop-filter: blur(15px);
        background-color: rgba(255, 255, 255, 0.1);

        .content {
            display: grid;
            grid-template-columns: repeat(2, 50%);
            padding-bottom: 60px;
            padding-top: 20px;
            

            .grid {
                display: flex;
                flex-direction: column;
                align-items: center;
                align-content: center;
                justify-content: space-between;
                text-align: center;
                background-color: rgba(75, 110, 149, 0.5);
                margin: 5px;
                margin-bottom: 15px;
                border-radius: 10px;
                padding: 3px;
                transition: 0.3s ease-in-out;

                :hover {
                    transform: scale(1.03);
                    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.3);
                }
                
                a {
                    font-size: 20px;
                    text-decoration: "";
                    background-color: #A82E25;
                    padding: 10px;
                    border: solid black 2px;
                    border-radius: 5px;
                    color: #E6DBE5;
                    cursor: pointer;
                    transition: 0.2s ease-in-out;

                    :hover {
                        transform: translateY(-30px) scale(1.1);
                        box-shadow: 4px 4px 5px black;
                    }
                }

                h3 {
                    font-size: 18px;
                    text-shadow: 0px 0px 2px black;
                    background-color: rgba(0,0,0,0.3);
                    border-radius: 5px;
                    padding: 2px;
                }

                p {
                    text-shadow: 0px 0px 2px black;
                    background-color: rgba(0,0,0,0.3);
                    border-radius: 5px;
                    padding: 2px;
                }
            }
        }
    }

    .discord {
        background-image: url(${edrag});
        background-size: contain;
        background-repeat: no-repeat;
        background-position-x: center;
        background-blend-mode: overlay;
    }

    .api {
        background-image: url(${edrag2});
        background-size: contain;
        background-repeat: no-repeat;
        background-position-x: center;
        background-blend-mode: overlay;
    }

    @media screen and (max-width: 1080px) {
        .wrap {
            margin: 50px 5% 50px 5%;
        }
    }

    @media screen and (max-width: 950px) {
        .wrap {
            --aug-tl2-width: 100px;
            --aug-tr1-width: 100px;
        }
    }

    @media screen and (max-width: 700px) {
        .wrap {
            margin: 20px;

            --aug-b-inset1: 50px;

            .content {
                grid-template-columns: repeat(1, 100%);
            }
        }
    }
`;


const Blade = () => {

    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxanim = {
        init: {opacity: 0, transform: "translateX(250px) scale(0.9)"},
        end: {opacity: 1, transform: "translateX(0px) scale(1)", transition: {duration: 2}}
    }

    useEffect(() => {
        if (inView) {
            control.start("end")
        }
    }, [control, inView])

    return (
        <Wrapper id='blade'>
            <ParallaxProvider>
                <Parallax speed={-15}>
                    <motion.div
                    ref={ref} variants={boxanim} initial="init" animate={control}
                    data-augmented-ui="tl-2-clip-x t-clip-x tr-2-clip-x br-2-clip-y b-clip-y bl-2-clip-y border" className='wrap'>
                        <h1>Blade Bot</h1>
                        <hr style={{marginTop: "-20px", marginBottom: "10px", borderColor: "#79E2E2", width: "90%"}}></hr>
                        <div className='content'>
                            <div className='grid api'>
                                <h3>API</h3>
                                <p>Need stats on Clash of Clans troops or buildings? The blade API can be found below. It's free to use and requires no signup or keys. The Blade API will be kept up to date for as long as possible.
                                and plans to expand to the builder and capital hall, as well as the skin and event categories in the future.</p>
                                <a style={{fontVariant: "all-petite-caps"}} href='https://blade-api.netlify.app/'>Access the API docs from here!</a>
                            </div>
                            <div className='grid discord'>
                                <h3>Discord Bot</h3>
                                <p>If you'd rather recieve those same stats directly to discord, Blade Bot can be found below. Blade Bot has all army integrations from the Blade API, but also includes the ability to get clan, player,
                                    war, warlog, and patchnote data! Just like the Blade API, Blade Bot plans to expand into the builder and capital halls, as well as the vent category in the near future.
                                </p>
                                <a style={{fontVariant: "all-petite-caps"}} href='https://discord.com/api/oauth2/authorize?client_id=978107538295881808&permissions=0&scope=bot%20applications.commands'>Invite Blade Bot to your server!</a>
                            </div>
                        </div>
                    </motion.div>
                </Parallax>
            </ParallaxProvider>
        </Wrapper>
    )

}

export default Blade;