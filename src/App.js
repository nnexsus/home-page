import React, { Suspense, lazy } from 'react';
import styled from "styled-components";

import panbg from './images/connecting.webp';
import { GlobalStyle } from './GlobalStyle';

import Teaser from './components/teaser';
/*
import Bots from './components/bots';

import Desktop from "./components/desktop";
import Panels from "./components/panels";

import Open from './components/open';

import Blade from './components/blade';
import Fish from './components/fish';
*/

const Desktop = lazy(() => import('./components/desktop'));
const Panels = lazy(() => import('./components/panels'));

const Open = lazy(() => import('./components/open'));
const Theater = lazy(() => import('./components/theater'));

const Server = lazy(() => import('./components/server'));
const Blade = lazy(() => import('./components/blade'));
const Fish = lazy(() => import('./components/fish'));
const Bots = lazy(() => import('./components/bots'));

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

  #desktop {

    transition: 3s ease-in-out;

    .deskTitle {
      color: white;
      font-family: monospace;
      margin-bottom: -1px;
    }
  }

  .production-panels {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    #bots {
      grid-column: span 2;
    }

    #server {
      grid-column: span 2;
      --aug-inlay-bg: linear-gradient(35deg, rgba(27,40,69,1) 5%, rgba(69,120,166,1) 100%);
      --aug-border-bg: rgba(0, 0, 0, 0.3);
      --aug-delegated-border: 1px;
      margin: 15px;
      background-color: rgba(27,40,69,1);
    }
  }

  @media screen and (max-width: 750px) {
    #desktop {
      display: none;
    }
  }

  @media screen and (max-width: 1080px) {
    .production-panels {
      display: block;
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
          <Theater className='theater'></Theater>
        </section>
        <section className="production-panels" id='projects'>
          <h1 style={{textAlign: "center", color: "white", margin: "0 auto", padding: "15px 50px", borderRadius: "10px", backdropFilter: "blur(10px)", fontFamily: "monospace", fontSize: "52px", gridColumn: "span 2", textShadow: "0 0 5px white"}}>Public Projects</h1>
          <Server className="server"></Server>
          <Fish className="fish"></Fish>
          <Blade className="blade"></Blade>
          <Bots className="bots"></Bots>
        </section>
        <section>
          <Panels className="panels"></Panels>
        </section>
        <section>
          <Teaser className="teaser"></Teaser>
        </section>
        <GlobalStyle/>
      </Suspense>
    </Wrapper>
  );
}

export default App;