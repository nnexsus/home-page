import styled from 'styled-components';
import { useRef, useState } from 'react';

import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';
import moon from '../images/moon.webp';
import geo from '../images/geo.webp';
import moonbg from '../images/moonbg.webp';

import nnexsus from '../images/bannergif.webp';

const Wrapper = styled.div`

    width: 80%;
    margin: 0 auto;
    margin-bottom: 100px;
    padding-top: 50px;

    box-shadow: 0px 0px 5px 5px black;

    background-color: black;

    background-position: center;
    background-size: cover;
    border: solid lightcoral 2px;

    h1 {
        text-align: center;
        transform: translate(0, 75px);
        font-size: 86px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 6px;
        color: white;
        font-family: monospace;
        -webkit-text-stroke: 1px;
        -webkit-text-stroke-color: white;
        -webkit-text-fill-color: lightcoral;
        text-shadow: 0px 0px 5px black;
        cursor: pointer;
        margin-top: 0px;
        margin-bottom: 5px;
    }

    .v2 {
        text-align: center;
        transform: translate(0, 75px);
        font-size: 44px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 6px;
        color: white;
        font-family: monospace;
        -webkit-text-stroke: 1px;
        -webkit-text-stroke-color: white;
        -webkit-text-fill-color: lightcoral;
        text-shadow: 0px 0px 5px black;
        cursor: pointer;
        margin-bottom: 20px;
    }

    sub {
        transform: translate(100px, -55px);
        color: white;
        pointer-events: none;
    }

    @media screen and (max-width: 600px) {
        h1 {
            font-size: 60px;
        }

        .v2 {
            display: none;
        }
    }

    .para-img {
        position: absolute;
    }
`;

const Open = () => {

    const [bgNum, setBgNum] = useState(0);
    const [click, setClick] = useState(0);

    const changeBg = () => {
        if (bgNum === 5) {
            setBgNum(0);
            return;
        }
        setBgNum(bgNum + 1);
        setClick(1);
    }


    document.addEventListener("mousemove", parallax);
    const opener = useRef(null);

    function parallax(e) {
        try {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let scroll = `${(mouseX * 0.05) - 150}px ${(mouseY * 0.05) - 20}px`;
            opener.current.style.backgroundPosition = scroll;
        } catch (error) {
            return;
        }
    }

    return (
        <Wrapper ref={(el) => {opener.current = el;}} style={{backgroundImage: `url(${window.innerWidth <= 650 ? nnexsus : moonbg})`,
         backgroundSize: `${window.screen.height <= 650 ? "100%" : "130%"}`, backgroundOrigin: "content-box", backgroundPositionY: "center", 
         height: `${window.innerWidth <= 750 ? window.innerWidth <= 660 ? "400" : "750" : window.innerWidth * 0.85}px`}}>
            <div style={{zIndex: 2}}>
                <div className='banner' style={{marginTop: "-30px"}}>
                    <a href='#fish'><h4 style={{fontVariant: "all-petite-caps", fontFamily: "monospace", textAlign: "center", fontSize: "18px", color: "white", textShadow: "0 0 4px black", backgroundColor: "red",}}>Fish Game is out! Click here to jump to the demo section!</h4></a>
                    <a href='#server'><h4 style={{fontVariant: "all-petite-caps", fontFamily: "monospace", textAlign: "center", fontSize: "18px", color: "white", textShadow: "0 0 4px black", backgroundColor: "red",}}>nnexsus-server is here! Click here to learn more!</h4></a>
                </div>
                <div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <a style={{textDecoration: "none"}} href='#desktop'><h1>nnexsus</h1><h4 className='v2'>v2 in progress</h4></a>
                    </div>
                    <sub style={{display: click ? "none" : "block"}}>click me</sub>
                </div>
            </div>
            <div className='parallax' style={{zIndex: 1, height: "0", opacity: `${window.innerWidth <= 650 ? "0" : "1"}`}}>
                <ParallaxProvider>
                    <ParallaxBanner style={{width: "100%", height: "1440px", marginTop: "-13px"}}>
                        <ParallaxBannerLayer speed={-8}>
                            <img width={"100%"} style={{transform: "scale(1.2) translate(0, 23%)"}} src={`${geo}`}/>
                        </ParallaxBannerLayer>
                        <ParallaxBannerLayer speed={-12}>
                            <a href='#projects'><img width={"100%"} style={{transform: "scale(0.5)"}} src={`${moon}`}/></a>
                        </ParallaxBannerLayer>
                    </ParallaxBanner>
                </ParallaxProvider>
            </div>
        </Wrapper>
    )
}

export default Open;