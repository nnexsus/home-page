import React, {useContext, useState} from 'react';
import styled from "styled-components";
import Desktop from "./components/desktop";
import Panels from "./components/panels";

import panbg from './images/connecting.png';
import moon from './images/moon.mp4';
import moongif from './images/moon.gif';
import monitor from './images/monitor.png';

import { GlobalStyle } from './GlobalStyle';
import Open from './components/open';
import Header from './components/header';
import Blade from './components/blade';

const Wrapper = styled.div`

  background-image: url(${panbg});
  background-repeat: repeat-y;
  background-size: 330%;
  margin: 15px;
  background-color: black;
  box-shadow: 0px 0px 5px 10px black inset;
  scroll-snap-type: y proximity;

  section {

    scroll-snap-align: center;

  }

  video {
    box-shadow: 0px 0px 5px 5px black;
    background-color: black;
    opacity: 1;
    
    transition: 3s ease-in-out;
  }

  #desktop {
    //background-image: url(${monitor});
    //background-position: center;
    //background-repeat: no-repeat;
    //background-size: cover;

    .deskTitle {
      color: white;
      font-family: monospace;
      margin-bottom: -1px;
    }
  }

  .videoContainer {
    color: lightcoral;
    margin: 30px;
    --aug-border-all: 2px;
    --aug-inlay-bg: rgba(0, 0, 0, 0.4);

    transition: 1.5s ease-in-out;

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

    height: 480px;

    video {
      display: none;
      opacity: 0;
    }
  }

  @media screen and (max-width: 550px) {
    #desktop {
      display: none;
    }
  }

`;

function App(props) {


  return (
    <Wrapper className="App">
      <link rel="stylesheet" type="text/css" href="https://unpkg.com/augmented-ui@2/augmented-ui.min.css"/>
      <section>
        <Open></Open>
      </section>
      <section id='desktop'>
        <h3 className='deskTitle'>Desktop</h3>
        <Desktop className="desktop"></Desktop>
      </section>
      <section>
        <div id='videoplayer' data-augmented-ui="tl-2-clip-xy t-rect-x tr-2-clip-xy r-rect-y br-2-clip-xy b-rect-x bl-2-clip-xy l-rect-y both" className='videoContainer'>
          <button onClick={() => 
            document.getElementById("videoplayer").classList.contains("hide") ? 
            document.getElementById("videoplayer").classList.remove("hide") 
            : document.getElementById("videoplayer").classList.add("hide")}>
              Toggle Video</button>
          <video style={{zIndex: "2"}} src={moon} width="100%" autoPlay muted loop controls={false}></video>
        </div> 
      </section>
      <section>
        <Blade className="blade"></Blade>
      </section>
      <section>
        <Panels className="panels"></Panels>
      </section>
      <GlobalStyle/>
    </Wrapper>
  );
}

export default App;