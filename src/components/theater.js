import styled from "styled-components";

import moon from "../images/moon.mp4";

const Wrapper = styled.div`

  video {
    box-shadow: 0px 0px 5px 5px black;
    background-color: black;
    opacity: 1;
    
    transition: 3s ease-in-out;
  }

  .videoContainer {
    color: lightcoral;
    margin: 2% 20% 2% 20%;
    --aug-border-all: 2px;
    --aug-inlay-bg: rgba(0, 0, 0, 0.4);

    transition: 1.5s ease-in-out;

    height: inherit;

    button {
      position: absolute;
      z-index: 9;
      background: rgba(0, 0, 0, 0.2);
      margin-top: 5px;
      margin-left: 5.4%;
      padding: 3px;
      padding-left: 8px;
      padding-right: 8px;
      border: solid 2px lightcoral;
      cursor: pointer;
      color: white;
      transition: 0.1s ease-in-out;
      font-family: monospace;

      :hover {
        background: rgba(128, 128, 128, 0.7);
      }
    }
  }

  .hide {
    --aug-b-extend1: -34px;
    --aug-t-extend1: -34px;
    --aug-l-extend1: -34px;
    --aug-r-extend1: -34px;
    --aug-tr-extend1: -15px;
    --aug-tr-extend2: -15px;
    --aug-tr-inset1: -15px;
    --aug-tl-extend1: -15px;
    --aug-tl-extend2: -15px;
    --aug-tl-inset1: -15px;
    --aug-br-extend1: -15px;
    --aug-br-extend2: -15px;
    --aug-br-inset1: -15px;
    --aug-bl-extend1: -15px;
    --aug-bl-extend2: -15px;
    --aug-bl-inset1: -15px;
    --aug-inlay-all: none;
    --aug-inlay-bg: rgba(128, 128, 128, 0.0);

    height: 36px;

    video {
      display: none;
      opacity: 0;
    }
  }
`;

const Theater = () => {
    return (
        <Wrapper>
            <div id='videoplayer' data-augmented-ui="tl-2-clip-xy t-rect-x tr-2-clip-xy r-rect-y br-2-clip-xy b-rect-x bl-2-clip-xy l-rect-y both" className='videoContainer hide'>
                <button onClick={() => 
                document.getElementById("videoplayer").classList.contains("hide") ? 
                document.getElementById("videoplayer").classList.remove("hide") 
                : document.getElementById("videoplayer").classList.add("hide")}>
                    Watch Video</button>
                <video style={{zIndex: "2"}} src={`${moon}`} width="100%" autoPlay muted loop controls={false}></video>
                <h2 style={{color: "white", textAlign: "center", margin: "10px", padding: "5px 0px 15px 0px", fontFamily: "monospace"}}>WIP Panel, coming v2.1</h2>
            </div> 
        </Wrapper>
    )
}

export default Theater;