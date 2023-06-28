import React, { Suspense, lazy, useContext, useEffect } from 'react';
import styled from "styled-components";
import Cookies from 'universal-cookie';

import { GlobalStyle } from './GlobalStyle';

import { getGPUTier } from 'detect-gpu';
import { LinkContext } from './components/context';
import Visited from './components/panels/visited';

const Desktop = lazy(() => import('./components/desktop'));
const WebPlanet = lazy(() => import('./components/panels/webplanet'));
const GamePlanet = lazy(() => import('./components/panels/gameplanet'));

const Past = lazy(() => import('./components/panels/past'));
const Aboutetc = lazy(() => import('./components/panels/aboutetc'));

const Open = lazy(() => import('./components/open'));
const Theater = lazy(() => import('./components/theater'));

const Server = lazy(() => import('./components/server'));
//const Fish = lazy(() => import('./components/fish'));
const Bots = lazy(() => import('./components/panels/bots'));
const GeoRadio = lazy(() => import('./components/panels/georadio.js'));

const Wrapper = styled.div`

  background-image: url('/images/Connecting.webp');
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
      padding: 5px 10px 10px 10px;
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
    grid-template-columns: 100% 100% 100% 100%;
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

  .winnersdiv {
    --aug-border-all: 5px;
    --aug-border-bg: linear-gradient(90deg, rgba(37,41,142,1) 10%, rgba(223,18,153,1) 90%);;
    --aug-l-extend1: 700px;
    --aug-r-extend1: 700px;
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

  #desktop-panel {
    overflow: hidden; 
    display: grid; 
    grid-template-columns: repeat(5, 100%); 
    margin: 0 20px; 
    scroll-behavior: smooth; 
    border: solid 2px black; 
    padding: 0 8px;
  }

  .pub-title {
    padding: 15px 50px;
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

  @media screen and (max-width: 750px) {
    #desktop-app {
      display: none;
    }
    .production-panels {
      #server {
        margin: 0;
      }
      #radio {
        margin: 0;
      }
    }

    #desktop-panel {
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
      <Suspense fallback={<Fallback/>}>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/augmented-ui@2/augmented-ui.min.css"/>
        <Suspense fallback={<Fallback/>}>
          <section id='open'>
            <Open/>
          </section>
        </Suspense>
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
                <h2 style={{fontSize: "28px",textShadow: "1px 2px 6px black"}}>Welcome to nnexsus.net!!</h2>
                <p style={{fontSize: "24px", textShadow: "1px 2px 6px black"}}>You can find any of my projects through the <a href='#desktop'>Desktop</a> app or the <a href='#past'>Past Projects</a> section (they are sorted by category).</p>
                <p style={{fontSize: "20px", textShadow: "1px 2px 6px black"}}>You can also access any of my Web Projects in <i>this</i> section: <a href='#web-section'>Web Panel</a>, and any Game Projects here: <a href='#game-section'>Games Panel</a>.</p>
            </section>
              <div className='navbar'>
                {window.innerWidth >= 750 ? <a href='#desktop'><pre style={{textDecoration: 'none'}}>{asciiArt[0]}</pre><p>Desktop App</p></a> : <a href='#desktop'><pre style={{textDecoration: 'none'}}>{asciiArt[4]}</pre><p>Projects</p></a> }
                <a href='#theater-panel'><pre style={{textDecoration: 'none'}}>{asciiArt[1]}</pre><p>Theater</p></a>
                <a href='#about-panel'><pre style={{textDecoration: 'none'}}>{asciiArt[2]}</pre><p>About Me</p></a>
                <a href='#past-panel'><pre style={{textDecoration: 'none'}}>{asciiArt[3]}</pre><p>Past Projects</p></a>
              </div>
            </div>
                  <hr style={{border: 'solid var(--accentTheme) 3px', borderRadius: '50%', opacity: 1, width: '100%'}}/>
                  <hr style={{border: 'solid var(--accentTheme) 2.5px', borderRadius: '50%', opacity: 0.8, width: '90%'}}/>
                  <hr style={{border: 'solid var(--accentTheme) 2px', borderRadius: '50%', opacity: 0.65, width: '80%'}}/>
                  <hr style={{border: 'solid var(--accentTheme) 1.75px', borderRadius: '50%', opacity: 0.5, width: '70%'}}/>
                  <hr style={{border: 'solid var(--accentTheme) 1.25px', borderRadius: '50%', opacity: 0.3, width: '60%'}}/>
                  <hr style={{border: 'solid var(--accentTheme) 0.5px', borderRadius: '50%', opacity: 0.1, width: '50%'}}/>
            {/* desktop section */}
            <section id='desktop-panel'>
              <div id='desktop'>
                <div id='desktop-app'>
                  <h3 className='deskTitle'>Desktop</h3>
                  <Desktop className="desktop"/>
                </div>
            {/* public projects & discord panels */}
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
              </div>
              {/* ascii buttons content */}
              <div id='theater-panel'>
                <Suspense fallback={<Fallback/>}>
                  <Theater className='theater'/>
                </Suspense>
              </div>
              <div id='about-panel'>
              <Suspense fallback={<Fallback/>}>
                <Aboutetc/>
              </Suspense>
              </div>
              <div id='past-panel' style={{width: "100%"}}>
              <Suspense fallback={<Fallback/>}>
                <Past/>
              </Suspense>
              </div>
            </section>
        </div>

            {/* other planets */}
          <div className='other-sites' style={{width: "100%"}}>
            <WebPlanet/>
          </div>
          <div>
            <GamePlanet/>
          </div>
          <div>
            <div id='secret'>
              <a target={'_blank'} rel='noreferrer' href='https://youtu.be/KiO8Iy8IBfw'>Enjoy!!</a>
            </div>
          </div>

        </div> {/* end site scroll */}
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