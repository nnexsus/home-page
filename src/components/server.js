import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useContext } from 'react';
import { LinkContext } from './context';

import bg from '../images/server.webp';

const Wrapper = styled.div`

    box-shadow: 0px 0px 20px 0px black, 0px 0px 20px 0px black inset;
    padding: 1px;

    filter: drop-shadow(0px 0px 10px black);
    
    h1, h2, h3, h4, p, a, button {
        font-family: monospace;
        color: white;
        text-align: center;
    }

    h2, h3, h4, p, a, button {
        text-shadow: 0px 0px 5px black;
    }

    h1 {
        color: white;
        text-shadow: 0px 0px 3px white;
        font-size: 48px;
        margin: 5px;
        background-color: rgba(27,40,69,1);
        padding: 3px 10px 3px 10px;
        border-radius: 5px;
    }

    a, button {
        background-color: rgba(0, 0, 0, 0.5);
        padding: 5px;
        border-radius: 5px;
        transition: 0.2s ease-in-out;

        :hover {
            transform: scale(1.1);
        }
    }

    a {
        font-size: 22px;
    }

    button {
        
    }

    .bg-container {
        background-image: url('/images/opener/geo.webp');
        background-size: 2500px;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
    }

    .container {

        border: solid 1px black;
        border-radius: 3px;

        .button {
            background-color: rgba(0, 0, 0, 0);
            border: none;
            
            :hover {
                cursor: pointer;
            }
        }

        padding: 20px;
        margin: 20px;

        filter: drop-shadow(0px 0px 7px lightblue);

        background-image: url(${bg});
        background-size: contain;
        background-repeat: no-repeat;
        background-origin: content-box;
        background-position-x: center;
        backdrop-filter: blur(3px);
        
        .container-2 {

            display: flex;
            flex-direction: column;
            align-items: center;

            margin: 50px 15%;

            backdrop-filter: blur(5px) brightness(0.5) drop-shadow(0px 0px 15px white);
            border: solid 2px white;
            border-radius: 3px;

            filter: drop-shadow(0px 0px 5px black);
            box-shadow: 0px 0px 4px 2px black;

            ul {
                background-color: rgba(0, 0, 0, 0.2);
                padding: 6px;
                border-radius: 5px;
            }

            img {
                margin: 5px;
            }
        }
    }
`;


const Server = () => {

    const [state, dispatch] = useContext(LinkContext);

    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxanim = {
        init: {opacity: 0, transform: "rotate(1deg) scale(0.9)"},
        end: {opacity: 1, transform: "rotate(0deg) scale(1)", transition: {duration: 2.5}}
    }

    useEffect(() => {
        if (inView) {
            if (state.tier >= 2) {
                control.start("end")
            } else {
                control.set("end")
            }
        }
    }, [control, inView])

    return (
        <Wrapper data-augmented-ui="tl-2-scoop-xy tr-2-scoop-xy br-2-scoop-xy bl-2-scoop-xy both" id='server'>
            <motion.div ref={ref} variants={boxanim} initial="init" animate={control} className='bg-container'>
            <div className='container'>
                <div className='container-2'>
                    <h1>nnexsus-server</h1>
                    <h3>A google drive like cloud file hosting server.</h3>
                    <p>nnexsus-server is a cloud file hosting server similar to google drive. Sign up for a <b>free 50Gb storage!</b></p>
                    <ul style={{listStyle: "square", color: "white", textAlignLast: "left"}}>
                        <li><p style={{color: "lightgreen"}}>Save large files, <b>secured and uncompressed</b> to prevent data loss!</p></li>
                        <li><p style={{color: "lightgreen"}}>Share files for others to download.</p></li>
                        <li><p style={{color: "lightgreen"}}>Connected <b>discord bot</b> to save and fetch files directly through discord!</p></li>
                    </ul>
                    <img alt='nnexsus-server logo' width={"120px"} src={'/images/opener/logofull.webp'} />
                    <button><a href='https://nnexsus-server.netlify.app'>Join nnexsus-server here!</a></button>
                </div>
            </div>
            </motion.div>
        </Wrapper>
    )
}

export default Server;