import styled from 'styled-components';
import { useRef, useState } from 'react';

//import nnexsus from './apps/gallery/galleryImages/logobanner.png'
import nnexsus from '../images/bannergif.gif';
import vundo from '../images/vundo.gif';
import connecting from '../images/connecting.gif';
import protocol from '../images/protocolbreach.gif';
import doom from '../images/mydoom.gif';
import loading from '../images/loading.gif';

const Wrapper = styled.div`

    width: 80%;
    margin: 0 auto;
    height: 500px;
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
    }

    sub {
        transform: translate(100px, -55px);
        color: white;
        pointer-events: none;
    }

`;

const Open = () => {

    const backgrounds = [nnexsus, vundo, connecting, doom, protocol, loading]

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
            let scroll = `${(mouseX * 0.1) - 100}px ${(mouseY * 0.1) - 20}px`;
            opener.current.style.backgroundPosition = scroll;
        } catch (error) {
            return;
        }
    }

    return (
        <Wrapper ref={(el) => {
            opener.current = el;
        }} style={{backgroundImage: `url(${backgrounds[bgNum]})`}}>
            <div className='banner' style={{backgroundColor: "red", marginTop: "-30px"}}>
                <a href='#blade'><h4 style={{fontVariant: "all-petite-caps", fontFamily: "monospace", textAlign: "center", fontSize: "18px", color: "white"}}>Clash of Clans API & Discord Bot out now! Click here to visit the new section!</h4></a>
            </div>
            <div>
                <h1 onClick={() => changeBg(bgNum)}>nnexsus</h1>
                <sub style={{display: click ? "none" : "block"}}>click me</sub>
            </div>
        </Wrapper>
    )
}

export default Open;