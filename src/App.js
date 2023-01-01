import React, { Suspense, lazy } from 'react';
import styled from "styled-components";

import panbg from './images/connecting.webp';
import { GlobalStyle } from './GlobalStyle';

import falbert from './images/falbert.webp';

const Desktop = lazy(() => import('./components/desktop'));
const WebPlanet = lazy(() => import('./components/panels/webplanet'));
const GamePlanet = lazy(() => import('./components/panels/gameplanet'));

const Past = lazy(() => import('./components/panels/past'));
const Aboutetc = lazy(() => import('./components/panels/aboutetc'));

const Open = lazy(() => import('./components/open'));
const Theater = lazy(() => import('./components/theater'));

const Server = lazy(() => import('./components/server'));
const Blade = lazy(() => import('./components/blade'));
const Fish = lazy(() => import('./components/fish'));
const Bots = lazy(() => import('./components/bots'));
const GeoRadio = lazy(() => import('./components/panels/georadio.js'));

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
      --aug-inlay-bg: linear-gradient(35deg, rgba(27,40,69,1) 5%, rgba(69,120,166,1) 100%);
      --aug-border-bg: rgba(0, 0, 0, 0.3);
      --aug-delegated-border: 1px;
      margin: 15px;
      background-color: rgba(27,40,69,1);
    }

    #radio {
      border: outset 7px;
      margin: 25px;
      background: linear-gradient(197deg, rgba(7,180,180,1) 17%, rgba(0,128,128,1) 83%);
      height: fit-content;
    }
  }

  .navbar {
    display: flex;
    margin: 20px;

    a {
      color: black;
      background-color: var(--accentTheme);
      font-family: monospace;
      padding: 5px 10px 10px 10px;
      margin: 3px;
      border: solid 2px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      width: 25%;
      height: 14px;
      text-align: center;
      text-shadow: 0 0 3px black;
      transition: 0.2 ease;

      :hover {
        color: white;
        background-color: var(--accentThemeDarker);
        transform: scale(1.2);
      }

      p {
        margin: 0;
      }
    }
  }

  .site-scroll {
    display: grid;
    grid-template-columns: 100% 100% 100%;
    overflow-x: hidden;
  }

  .quick-about {
    color: white; 
    text-align: center; 
    font-family: monospace; 
    background-color: rgba(140, 100, 227, 0.3); 
    backdrop-filter: brightness(2) blur(15px); 
    border: solid rgba(0, 0, 0, 0.2) 4px; 
    border-radius: 5px; 
    padding: 4px;
    margin: 0 5%;

    a {
      color: lightblue;
      :active {
        color: var(--accentTheme);
      }
    }
  }

  @media screen and (max-width: 750px) {
    #desktop-app {
      display: none;
    }
  }

  @media screen and (max-width: 1080px) {
    .production-panels {
      display: flex;
      flex-direction: column;
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
          <div style={{height: "40px"}}>
          </div>
          <h2 style={{fontVariant: 'all-petite-caps', fontFamily: 'monospace', textAlign: 'center', fontSize: '18px', color: 'white', textShadow: '0 0 4px black', backgroundColor: 'red', opacity: '0.5'}}>
            Project: 2022 [PROTOCOL 22] is out! Watch it here: <a target={'_blank'} href='https://youtu.be/AJtKME9VfZk'>https://youtu.be/AJtKME9VfZk</a>
          </h2>
          <Open></Open>
        </section>
        <div className='site-scroll' style={{scrollBehavior: "smooth"}}>
          <div className='moon-site' id='quickdesc' style={{width: "100%"}}>
            <section className='quick-about'>
                <h2 style={{fontSize: "28px",textShadow: "1px 2px 6px black"}}>Hi, I'm Ethan.</h2>
                <p style={{fontSize: "24px", textShadow: "1px 2px 6px black"}}>I'm an app, bot, and game developer. I also like video editing & special effects, and stormchasing. You can find any of my projects through the <a href='#desktop'>Desktop</a> app or the <a href='#past'>Past Projects</a> section (they are sorted by category).</p>
                <p style={{fontSize: "20px", textShadow: "1px 2px 6px black"}}>You can also access any of my Web Projects in <i>this</i> section: <a href='#web-section'>Web Panel</a>, and any Game Projects here: <a href='#game-section'>Games Panel</a>.</p>
            </section>
              <div className='navbar'>
                <a href='#desktop'><p>Desktop App (non-mobile)</p></a>
                <a href='#theater-panel'><p>Theater</p></a>
                <a href='#about-panel'><p>About Me</p></a>
                <a href='#past-panel'><p>Past Projects</p></a>
              </div>
            <section id='desktop-panel' style={{overflow: "hidden", display: 'grid', gridTemplateColumns: "repeat(5, 100%)", margin: "0 20px 0 20px", scrollBehavior: 'smooth', border: "solid 2px black", padding: "0 8px"}}>
              <div id='desktop'>
                <div id='desktop-app'>
                  <h3 className='deskTitle'>Desktop</h3>
                  <Desktop className="desktop"></Desktop>
                </div>
                <section className="production-panels" id='projects'>
                  <h1 style={{textAlign: "center", color: "white", margin: "0 auto", padding: "15px 50px", borderRadius: "10px", backdropFilter: "blur(10px)", fontFamily: "monospace", fontSize: "52px", gridColumn: "span 2", textShadow: "0 0 5px white"}}>Public Projects</h1>
                  <GeoRadio className="georadio"></GeoRadio>
                  <Server className="server"></Server>
                  <Fish className="fish"></Fish>
                  <Blade className="blade"></Blade>
                  <Bots className="bots"></Bots>
                </section>
              </div>
              <div id='theater-panel'>
                <Theater className='theater'></Theater>
              </div>
              <div id='about-panel'>
                <Aboutetc></Aboutetc>
              </div>
              <div id='past-panel' style={{width: "100%"}}>
                <Past></Past>
              </div>
            </section>
          </div>
          <div className='other-sites' style={{width: "100%"}}>
            <WebPlanet></WebPlanet>
          </div>
          <div>
            <GamePlanet></GamePlanet>
          </div>
        </div>
        <section>
          <img alt='' style={{position: "absolute", opacity: 0.03, zIndex: 5}} src={`${falbert}`} width="120px" height="120px"/>
        </section>
        <GlobalStyle/>
      </Suspense>
    </Wrapper>
  );
}

export default App;