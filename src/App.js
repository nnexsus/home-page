import React, { Suspense, lazy } from 'react';
import styled from "styled-components";

import panbg from './images/connecting.webp';
import { GlobalStyle } from './GlobalStyle';

/*
import Desktop from "./components/desktop";
import Panels from "./components/panels";

import moon from './images/moon.mp4';

import Open from './components/open';

import Blade from './components/blade';
import Fish from './components/fish';
*/

const moon = lazy(() => import('./images/moon.mp4'));

const Desktop = lazy(() => import('./components/desktop'));
const Panels = lazy(() => import('./components/panels'));

const Open = lazy(() => import('./components/open'));

const Blade = lazy(() => import('./components/blade'));
const Fish = lazy(() => import('./components/fish'));

const Wrapper = styled.div`

  background-image: url(${panbg});
  background-repeat: repeat-y;
  background-size: 130%;
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

    .deskTitle {
      color: white;
      font-family: monospace;
      margin-bottom: -1px;
    }
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

  @media screen and (max-width: 750px) {
    #desktop {
      display: none;
    }
  }

`;

function App() {

  const fallback = () => <p>...</p>

  return (
    <Wrapper className="App">
      <Suspense fallback={fallback}>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/augmented-ui@2/augmented-ui.min.css"/>
        <section>
          <Open></Open>
        </section>
        <section id='quickAbout' style={{color: "white", textAlign: "center", fontFamily: "monospace", margin: "-60px 30px 0px 30px", backgroundColor: "rgba(120, 40, 0, 0.3)", backdropFilter: "brightness(3) blur(15px)", border: "solid rgba(0, 0, 0, 0.2) 4px", borderRadius: "5px", padding: "4px"}}>
            <h2 style={{fontSize: "30px", textShadow: "1px 2px 7px lightblue"}}>Hi, I'm Ethan.</h2>
            <p style={{fontSize: "24px", textShadow: "1px 2px 7px lightblue"}}>I'm an app, bot, and game developer. I also like video editing & special effects, and stormchasing. You can find any of my projects through the <a style={{color: "lightcoral"}} href='#desktop'>Desktop</a> app or the <a style={{color: "lightcoral"}} href='#past'>Past Projects</a> section (they are sorted by category).</p>
        </section>
        <section id='desktop'>
          <h3 className='deskTitle'>Desktop</h3>
          <Desktop className="desktop"></Desktop>
        </section>
        <section>
          <div id='videoplayer' data-augmented-ui="tl-2-clip-xy t-rect-x tr-2-clip-xy r-rect-y br-2-clip-xy b-rect-x bl-2-clip-xy l-rect-y both" className='videoContainer hide'>
            <button onClick={() => 
              document.getElementById("videoplayer").classList.contains("hide") ? 
              document.getElementById("videoplayer").classList.remove("hide") 
              : document.getElementById("videoplayer").classList.add("hide")}>
                Watch Video</button>
            <video style={{zIndex: "2"}} src={moon} width="100%" autoPlay muted loop controls={false}></video>
          </div> 
        </section>
        <section>
          <Fish classList="fish"></Fish>
        </section>
        <section>
          <Blade className="blade"></Blade>
        </section>
        <section>
          <Panels className="panels"></Panels>
        </section>
        <GlobalStyle/>
      </Suspense>
    </Wrapper>
  );
}

export default App;