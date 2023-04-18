import { useContext } from "react";
import { LinkContext } from "../context";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`

    .fl {
        --aug-border-all: 2px;
        --aug-inlay-all: 15px;
        --aug-border-bg: var(--accentTheme);
        --aug-inlay-bg: rgba(0, 0, 0, 0.8);
        background-size: contain;
        image-rendering: pixelated;
    }

    .visit-title {
        color: white; 
        text-shadow: 0 0 2px white; 
        font-family: monospace; 
        text-align: center;
    }

    a {
        color: var(--accentTheme);
    }

    p {
        color: white;
        font-family: monospace;
        text-align: center;
    }

    .button-on-bar2 {
        border: outset 2px; 
        height: 50px; 
        padding: 5px;
        margin: 3px;
        background-color: lightgray;
        border-right-color: black;
        border-bottom-color: black;
        border-top-color: #FFF8FF;
        border-left-color: #FFF8FF;
        outline: 1px black solid;
        image-rendering: pixelated;
        cursor: pointer;
    }

    .button-on-bar2:hover {
        filter: brightness(1.1);
    }

`;

const Visited = () => {
    
    const [state, dispatch] = useContext(LinkContext);
    const [listOpen, setListOpen] = useState(false);

    const List = () => ( <div>
        <p style={{fontSize: '48px'}}>Unlisted Videos 2017-2023</p>
        <ul style={{display: 'flex', flexDirection: 'column-reverse'}}>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/VeltodZMoZQ"><p>Banana</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/SedwYRjverA"><p>rule34</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/rLowN4QFMm8"><p>compilation</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/RhWhNb0nIOk"><p>BONEPILLS</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/F5dMvGtuufA"><p>CONFUSE</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/xhyjfxu07bA"><p>Progress1</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/ezlziIvytLI"><p>DISTORT</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/MjUBrLabwuU"><p>HEY BETER 2.0</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/wK8fcwYPw34"><p>AROODLYTOOTTOOT</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/i-qnrb6oYc4"><p>BETER WITH NET NEUTRALITY</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/UBIcn93PsKc"><p>Overwatch1</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/FRooAoyfjtE"><p>Progress</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/oNSZVGMdWE4"><p>Rift Early Preview</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/dv3Ukwx22-c"><p>Mario Sonic Forces</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/5Pm37HPl8GY"><p>Pops</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/fzzNx1upv4s"><p>Nexsus 70%</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/P2yJFAGdu1Q"><p>quagmireeatsapopsicle.veg</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/w0mUybOeAqY"><p>peter</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/bp_U_LBdOJ4"><p>TheSuperMegalovaniaBros</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/iR-9XqGin3E"><p>enlarge</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/zJBsWWPp_mk"><p>Ddr</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/wPCFoHuqmzU"><p>cucumbers</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/pC90fXHLAOI"><p>Song #5</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/u3MztSeyb3A"><p>gametheorypapyrus</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/dSUDX5EdsfM"><p>papyrusgameing1</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/hhiBsLJKpFw"><p>The Universal Implosion (Headphone warning)</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/9ckkZRowNfM"><p>Origin Layout 90%</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/xL1nWk46NLk"><p>armyoftwov2</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/CKsLW9Cg8Tc"><p>therunewarsopening</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/41lWaWXbX3w"><p>Amazon</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/L0Evq7FSJGY"><p>n0</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/96lN1bG1jx8"><p>justins roblox mic</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/Y0omyhdq1Iw"><p>stayv1</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/oPFCZEV9f0o"><p>googlemeet</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/_8qkhzR2STg"><p>Bison, more like bye son.</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/G8yZiXfXMIk"><p>comcast</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/07ILHOeYZRA"><p>mcfootage</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/JRBWLsUsmZ8"><p>HYPNOTIZED DEREK GOT THE SCHMOVES</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/kNV_sXJjoc8"><p>SAYUPRE</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/V2ubcV099PQ"><p>kingofpie</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/IghCvCi29Rk"><p>Town Hall 8 Sandwich</p></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtu.be/aoiqAzqAotk"><p>ProgressUpdateExstension</p></a></li>
        </ul>
    </div>)
    
    return (
        <Wrapper style={{gridColumn: 'span 2', margin: '20px 10%'}}>
            <div className="fl" style={{padding: '5px', background: 'url(/images/desktop/sitemedia/tile2.jpg)'}} data-augmented-ui="tl-2-scoop-xy tr-2-scoop-xy br-2-scoop-xy bl-2-scoop-xy both">
                <div>
                    <h1 className="visit-title" style={{fontSize: '48px'}}>Visited Sites</h1>
                    <div style={{display: 'grid', gridTemplateColumns: '50% 50%', gridTemplateRows: '50% 50%'}}>
                        <h2 className="visit-title">GeoRadio - {state.visits.georadio ? <div>'✓'<img src="/images/panels/georadio/logo512.png" width={'30px'} height={'30px'}/></div> : <a href="https://georadio.live/">Visit</a> }</h2>
                        <h2 className="visit-title">nnexsus-server - {state.visits.nnserver ? <div>'✓'<img src="/images/opener/logofull.webp" width={'30px'} height={'30px'}/></div> : <a href="https://nnexsus-server.netlify.app/">Visit</a> }</h2>
                        <h2 className="visit-title">Fish Game - {state.visits.fishgame ? <div>'✓'<img src="/images/panels/fish/fish.png" width={'30px'} height={'30px'}/></div> : <a href="https://nnexsus-fish-game.netlify.app/wiki/main">Visit</a> }</h2>
                        <h2 className="visit-title">Weather Site - {state.visits.weather2 ? <div>'✓'<img src="/images/opener/Weather-logo.png" width={'30px'} height={'30px'}/></div> : <a href="https://nnexsus-weather.netlify.app">Visit</a> }</h2>
                    </div>
                </div>
            {state.visits.georadio ? state.visits.nnserver ? state.visits.fishgame ? state.visits.weather2 ? 
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px'}}>
                    <button title="Unlock" className="button-on-bar2" onClick={() => setListOpen(!listOpen)}><img src="/images/panels/georadio/explorer/Doors.gif" width={'30px'} height={'30px'} /></button>
                    {listOpen ? 
                    <List/>
                    : null}
                </div>
            : <p>Visit all my sites to unlock a hidden link!</p> : <p>Visit all my sites to unlock a hidden link!</p> : <p>Visit all my sites to unlock a hidden link!</p> : <p>Visit all my sites to unlock a hidden link!</p> }
            </div>
        </Wrapper>
    )
}

export default Visited;