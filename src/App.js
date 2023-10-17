import React, { Suspense, lazy, useContext, useEffect } from 'react';
import styled from "styled-components";
import Cookies from 'universal-cookie';

import { GlobalStyle } from './GlobalStyle';

import { getGPUTier } from 'detect-gpu';
import { LinkContext } from './components/context';
import Visited from './components/panels/visited';
import DiscordFeed from './components/panels/discordfeed';
import GeoRadioMini from './components/panels/georadiomini';
import NNServerMini from './components/panels/nnservermini';
import Browser from './components/apps/browser';


const Past = lazy(() => import('./components/panels/past'));

const Server = lazy(() => import('./components/server'));
const Bots = lazy(() => import('./components/panels/bots'));
const GeoRadio = lazy(() => import('./components/panels/georadio.js'));

const Wrapper = styled.div`

  background-image: url('/images/Connecting.webp');
  background-repeat: repeat-y;
  background-size: 130%;
  background-color: black;
  box-shadow: 0px 0px 3px 3px black inset;
  scroll-snap-type: y proximity;
  margin: 0;

  .planet {
    margin: -5px;
    border: solid 0px rgba(0, 0, 0, 0.0);
    border-radius: 50%;
    rotate: 0deg;
    display: flex;
    width: 100%;
    aspect-ratio: 1/1;
    transition: 0.7s ease;
    ::before {
        display: none;
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 10%; 
        padding: 0px; 
        background: linear-gradient(45deg,rgba(0,0,0,0),rgba(0,0,0,0));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        scale: 0.1;
        opacity: 0;
        transition: all 1s ease-in-out;
    }
    :hover {
        border: solid 6px #b5a270;
        position: relative;
        ::before {
            display: block;
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%; 
            padding: 5px; 
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 15%, rgba(207,115,255,1) 100%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            scale: 0.65;
            opacity: 1;
        }
    }
    }

  //new grid design
  .site-grid {
    background-image: url('/images/potentialbanner1.webp');

    padding: 20px;
    display: grid;
    grid-template-columns: 60vw 10px calc(40vw - 20px);
    grid-template-rows: 60vh 10px calc(40vw - 20px);
    z-index: 2;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      mask-image: url('/images/gradient.png');
      mask-position: 0px 0px;
      mask-repeat: no-repeat;
      mask-size: 100% 0%;
      backdrop-filter: blur(10px);
      height: 102%;
    }
  }

  section {
    scroll-snap-align: center;
  }

  .production-panels {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    #bots {
      grid-column: span 2;
    }

    #server {
      --aug-inlay-bg: linear-gradient(35deg, #1d2229 5%, #4a5463 100%);
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
    display: grid;
    grid-template-columns: repeat(4, 25%);
    margin: 20px;
    padding: 14px;
    background: rgba(128, 128, 128, 0.5);
    backdrop-filter: blur(20px);
    border-radius: 35px 10px;

    a {
      overflow: hidden;
      color: black;
      background-color: var(--accentTheme);
      font-family: monospace;
      padding: 5px 10px 18px 10px;
      margin: 3px;
      border: solid 2px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      text-align: center;
      text-shadow: 0 0 3px black;
      transition: 0.2 ease;
      text-decoration: none;
      transition: 0.1s ease-in-out;

      :hover {
        color: white;
        background-color: var(--accentThemeDarker);
        transform: scale(1.2);

        :active {
          background-color: var(--accentThemeEvenDarker);
        }

        pre {
          text-shadow: 0 0 5px var(--accentTheme);
        }
      }

      p {
        margin: 0;
      }
    }
  }

  .site-scroll {
    display: grid;
    grid-template-columns: 100%;
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

  pre {
    font-size: 10px;
  }

  .upper-section {
    padding: 0px;
    background: url('/images/Lodi9.webp');
    background-size: cover;
    box-shadow: 0 0 20px 10px black, 0 0 20px 10px black inset;
    border-radius: 35%;
  }

  #main-site {
    overflow: hidden; 
    display: grid; 
    grid-template-columns: repeat(4, 100%);
    margin: 0 20px; 
    scroll-behavior: smooth; 
  }

  .pub-title {
    padding: 15px 50px;
  }

  .bottom-grid {
    grid-column: span 3; 
    grid-row: 2; 
    display: grid; 
    grid-template-columns: 20% 40% 40%;
    max-height: 100%;
  }

  .discord-feed {
    grid-column: 3;
    grid-row: 1;
  }

  .panel {
    scale: 0.95;
    transition: 0.4s ease;
  }

  .panel:hover {
    scale: 1;
  }

  @media screen and (max-width: 450px) {
    .mobilehide {
      display: none;
    }
    .pub-title {
      padding: 15px 0px;
    }
  }

  @media screen and (max-width: 350px) {
    #open {
      display: none;
    }
  }

  @media screen and (max-width: 650px) {
    .site-grid {
      display: flex;
      flex-direction: column;
      padding: 0;
    }
    .discord-feed {
      display: none;
    }
    .bottom-grid {
      grid-column: 1; 
      grid-row: 2; 
      display: flex;
      flex-direction: column-reverse;
      max-height: 100%;
    }
  }

  @media screen and (max-width: 750px) {
    .production-panels {
      #server {
        margin: 0;
      }
      #radio {
        margin: 0;
      }
    }

    #main-site {
      margin: 0;
      padding: 0;
    }

    .navbar {
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(2, 50%);
    }
  }

  @media screen and (max-width: 1080px) {
    .production-panels {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 550px) {
    .site-grid {
      display: none;
    }

    .site-scroll {
      padding-top: 15px;
    }

    pre {
      margin: 0;
    }
  }
`;

function App() {

  const [state, dispatch] = useContext(LinkContext);

  const gpu = async () => {
      const gpuTier = await getGPUTier();
      dispatch({type: 'update_gpu', tier: gpuTier.tier})
  }

  const visit = async () => {
    const cookies = new Cookies();
    const visits = {
      georadio: cookies.get('georadio'),
      nnserver: cookies.get('nnserver'),
      fishgame: cookies.get('fishgame'),
      weather2: cookies.get('weather2')
    }
    dispatch({type: 'update_visits', visits: visits})
  }

  useEffect(() => {
    gpu()
    visit()
  }, [])

  const Fallback = () => {
    return (
      <p>...</p>
    )
  }

  return (
    <Wrapper className="App">
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/augmented-ui@2/augmented-ui.min.css"/>
    <div className='site-grid'>
      <Suspense fallback={<Fallback/>}>
        <Suspense fallback={<Fallback/>}>
          <section className="panel" style={{gridColumn: 1, gridRow: 1}} id='open'>
            <Browser number={1} />
          </section>
        </Suspense>
        <Suspense fallback={<Fallback/>}>
          <section className='bottom-grid'>
            <div style={{display: 'grid', gridTemplateColumns: '50% 50%', gridTemplateRows: '30% 30% 30%', height: 'calc(40vh - 8px)', maxWidth: '200px'}}>
              <a href='https://twitter.com/_nnexsus' target='_blank' rel='noreferrer'><img loading={'lazy'} className='planet' src='/images/opener/twitter-sat.webp' title='twitter' alt='link decor'/></a>
              <a href='https://discord.gg/d8R2tDaBK2' target='_blank' rel='noreferrer'><img loading={'lazy'} className='planet' src='/images/opener/discord-sat.webp' title='discord' alt='link decor'/></a>
              <a href='https://youtube.com/c/nnexsus' target='_blank' rel='noreferrer'><img loading={'lazy'} className='planet' src='/images/opener/youtube-sat.webp' title='youtube' alt='link decor'/></a>
              <a href='https://github.com/nnexsus' target='_blank' rel='noreferrer'><img loading={'lazy'} className='planet' src='/images/opener/github-sat.webp' title='github' alt='link decor'/></a>
              <a href='https://trello.com/b/WjQkpKpc/2023' target='_blank' rel='noreferrer'><img loading={'lazy'} className='planet' src='/images/opener/trello-sat.webp' title='trello' alt='link decor'/></a>
              <a href='https://twitter.com/_nnexsus' target='_blank' rel='noreferrer'><img loading={'lazy'} className='planet' src='/images/opener/twitter-sat.webp' title='twitter' alt='link decor'/></a>
            </div>
            <div className="panel">
              <GeoRadioMini/>
            </div>
            <div className='panel'>
              <NNServerMini/>
            </div>
          </section>
        </Suspense>
        <Suspense fallback={<Fallback/>}>
          <section className='discord-feed panel'>
            <DiscordFeed/>
          </section>
        </Suspense>
      </Suspense>
    </div>

    <Suspense fallback={<Fallback/>}>
      <div className='site-scroll' style={{scrollBehavior: "smooth"}}>
        <div className='moon-site' id='quickdesc' style={{width: "100%"}}>
            <hr className='mobilehide' style={{border: 'solid var(--accentTheme) 0.5px', borderRadius: '50%', opacity: 0.1, width: '50%'}}/>
            <hr className='mobilehide' style={{border: 'solid var(--accentTheme) 1.25px', borderRadius: '50%', opacity: 0.3, width: '60%'}}/>
            <hr className='mobilehide' style={{border: 'solid var(--accentTheme) 1.75px', borderRadius: '50%', opacity: 0.5, width: '70%'}}/>
            <hr className='mobilehide' style={{border: 'solid var(--accentTheme) 2px', borderRadius: '50%', opacity: 0.65, width: '80%'}}/>
            <hr className='mobilehide' style={{border: 'solid var(--accentTheme) 2.5px', borderRadius: '50%', opacity: 0.8, width: '90%'}}/>
            <hr className='mobilehide' style={{border: 'solid var(--accentTheme) 3px', borderRadius: '50%', opacity: 1, width: '100%'}}/>
          <div className='upper-section'>
          <section className='quick-about'>
            <h2 style={{fontSize: "28px", textShadow: "1px 2px 6px black"}}>Welcome to nnexsus.net!!</h2>
            <p style={{fontSize: "24px", textShadow: "1px 2px 6px black"}}>You can find any of my projects through the <a href='#about-me'>About Me</a> panel or the <a href='#past'>Past Projects</a> section (sorted by category)!</p>
          </section>
            <div className='navbar'>
              <a style={{color: 'white'}} href='#projects'><pre style={{textDecoration: 'none'}}>{asciiArt[0]}</pre><p>Projects & Feeds</p></a>
              <a style={{color: 'white'}} href='#about-me'><pre style={{textDecoration: 'none'}}>{asciiArt[2]}</pre><p>About Me</p></a>
              <a style={{color: 'white'}} href='#past-panel'><pre style={{textDecoration: 'none'}}>{asciiArt[3]}</pre><p>Past Projects</p></a>
              <a style={{color: 'white'}} href='#radio'><pre style={{textDecoration: 'none'}}>{asciiArt[4]}</pre><p>Coming Soon...</p></a>
            </div>
          </div>
            <hr style={{border: 'solid var(--accentTheme) 3px', borderRadius: '50%', opacity: 1, width: '100%'}}/>
            <hr style={{border: 'solid var(--accentTheme) 2.5px', borderRadius: '50%', opacity: 0.8, width: '90%'}}/>
            <hr style={{border: 'solid var(--accentTheme) 2px', borderRadius: '50%', opacity: 0.65, width: '80%'}}/>
            <hr style={{border: 'solid var(--accentTheme) 1.75px', borderRadius: '50%', opacity: 0.5, width: '70%'}}/>
            <hr style={{border: 'solid var(--accentTheme) 1.25px', borderRadius: '50%', opacity: 0.3, width: '60%'}}/>
            <hr style={{border: 'solid var(--accentTheme) 0.5px', borderRadius: '50%', opacity: 0.1, width: '50%'}}/>
          <section id='main-site'>
            <section className="production-panels" id='projects'>
              <hr style={{height: '3px', width: '100%', gridColumn: 'span 2', borderColor: 'var(--accentTheme)', marginTop: '45px', borderRadius: '5px', borderWidth: '2px'}} />
              <h1 className='pub-title' style={{textAlign: "center", color: "white", border: 'solid var(--accentTheme) 2px', margin: "0 auto", borderRadius: "10px", backdropFilter: "blur(10px)", fontFamily: "monospace", fontSize: "52px", gridColumn: "span 2", textShadow: "0 0 5px white"}}>Public Projects</h1>
              <Suspense fallback={<Fallback/>}>
                <GeoRadio className="georadio"/>
                <Server className="server"/>
              </Suspense>
              <Visited/>
              <Bots className="bots"/>
            </section>
            <div id='about-me'>
              <Suspense fallback={<Fallback/>}>
                <Browser number={0} />
              </Suspense>
            </div>
            <div id='past-panel' style={{width: "100%"}}>
              <Suspense fallback={<Fallback/>}>
                <Past/>
              </Suspense>
            </div>
          </section>
        </div>
      </div>
    </Suspense>
    <GlobalStyle/>
    </Wrapper>
  );
}

export default App;

const asciiArt = [`
            .----.
.---------. | == |
|.-"""""-.| |----|
||       || | == |
||       || |----|
|'-.....-'| |::::|
'"")---(""' |___.|
/:::::::::::\\   _
/:::=======:::\\\`\\\`\\
\`"""""""""""""\`  '-'
`, `
.------------------------.
|\\\\////////       90 min |
| \\/  __  ______  __     |
|    /  \\|\\.....|/  \\    |
|    \\__/|/_____|\\__/    |
| A                      |
|    ________________    |
|___/_._o________o_._\\___|
`, `
.--.
/'    '\\
.'      '.
|        |
'.      .'
\\.    ./
'--'
.-''    ''-.
/'          '\\
/              \\
`, `
_.--,_
  .-'      '-.  
 /            \\
 '          _.  '
 \\      "" /  ~(
  '=,,_ =\\__ '  &
        "  "';  \\\\\\
`,
`
_..._
.::::. '.
:::::::.  :
::::::::  :
'::::::' .'
 ''::'-'
`]