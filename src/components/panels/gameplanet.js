import styled from 'styled-components';

import { useState } from 'react';
import Fish from '../fish';

const Wrapper = styled.div`
    transition: 1s ease;

    h1, h2, h3, h4, p {
        color: white;
        text-align: center;
        text-shadow: 0 0 3px black;
        font-family: monospace;
    }

    a {
        color: var(--accentTheme);
        font-weight: bold;
        :visited {
            color: lightblue;
        }
    }

    .placeholder {
        width: 100%; 
        height: 480px; 
        border: rgba(0, 0, 0, 0.3) 6px solid; 
        border-radius: 25px;
        backdrop-filter: blur(3px);
        filter: drop-shadow(0 0 5px black);
    }

    .site-panels {
        padding: 20px;
        border: solid lightblue 4px;
        border-radius: 4px;
        margin: 5px 10px;

        button {
            display: flex;
            align-items: center;
            height: 100%;
            width: 11%;
            border-radius: 25px;
            border: solid 2px rgba(0, 0, 0, 0.3);
            background-color: var(--accentTheme);
            margin: 0;
            color: white;
            text-shadow: 0 0 5px black;
            text-align: center;
            padding: 5px;
            transition: 0.3s ease;

            :hover {
                background-color: var(--accentThemeDarker);
                padding: 8px;
                width: 13%;
                cursor: pointer;
            }
        }

        iframe {
            border: rgba(0, 0, 0, 0.3) 6px solid;
            border-radius: 25px;
            backdrop-filter: blur(3px);
            filter: drop-shadow(0 0 5px black);
        }
    }

    .ascii {
        background-color: black;
        box-shadow: 0px -20px 20px 20px black, 0px 120px 20px 20px black;
        margin-top: 10%;
        margin-bottom: 10%;
        display: flex;
        justify-content: center;
        height: 500px;

        pre {
            margin-top: 5%;
            color: red;
            text-shadow: 0px 0px 20px red;
            cursor: pointer;
        }
    }

    .navigator {
        display: grid;
        grid-template-columns: repeat(3, 25%);
        grid-template-rows: 30px 180px 60px;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(6px);
        margin-bottom: 20px;
        padding-bottom: 120px;

        h2, p {
            color: white;
            font-family: monospace;
            font-weight: bold;
            text-align: center;
            height: 0;
        }
        h2 {
            font-size: 22px;
        }
        svg {
            height: 200px;
            width: 200px;
            justify-self: center;
        }
        circle {
            stroke: white;
            transform-origin: center;
        }
        .dotted {
            stroke-width: 3;
            stroke-dasharray: 4,6.1;
            stroke-linecap: round;
            animation: navSpin 60s linear infinite;
        }
        .orbit {
            stroke-width: 2;
            stroke-dasharray: 4,12.3;
            stroke-linecap: round;
            animation: navSpin 120s linear infinite;
        }
        .line {
            transform-origin: center;
            animation: navSpin 120s linear infinite;
        }
        div {
            height: 100px;
            width: 100px;
            line-height: 75px;
        }

        @keyframes navSpin {
            0% {
                transform: rotate(0deg);
            } 100% {
                transform: rotate(360deg);
            }
        }
    }

    @media screen and (max-width: 1000px) {
        .site-panels {
            grid-template-columns: repeat(1, 100%);
            grid-template-rows: repeat(1, 1fr);
        }
    }
`;

const GamePlanet = () => {

    const [showFishgame, setShowFishgame] = useState(false);

    const [ascii, setAscii] = useState(3);
    const asciiClick = () => {
        if (ascii === 2) {
            return;
        } else if (ascii === 5) {
            setAscii(0)
            return;
        }
        setAscii(ascii + 1);
    }

    const aFish = () => {
        if (!showFishgame) {
            document.getElementById("fishgame-activate").style.width = "100%"
            setTimeout(() => {
                setShowFishgame(!showFishgame)
            }, [2000])
        } else {
            setShowFishgame(!showFishgame)
        }
    }

    return (
        <Wrapper>
            <section id='game-section' style={{backgroundImage: `url(/images/opener/planet2banner.webp)`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: "0 0 10px 10px black inset, 0 0 20px 20px black", border: "solid 2px white"}}>
            <div className='navigator'>
                <h1 style={{gridColumn: "span 3", gridRow: 1, fontSize: "44px", marginTop: "80px", zIndex: 1}}>Navigator</h1>
                <div style={{gridColumn: "span 3", gridRow: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "-100px", backgroundColor: "rgba(0, 0, 0, 0.3)", borderRadius: "15px"}}>
                    <p><b>Type:</b> Hot Gas Giant</p>
                    <p><b>Size:</b> 8/10</p>
                    <p><b>Moons:</b> 4 Moons</p>
                </div>
                <a href='#game-recent'><h2>Recent Releases</h2></a>
                    <svg viewBox="0 0 120 120">
                        <defs>
                            <linearGradient id="grad2" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stop-color="rgb(227,171,173)" />
                            <stop offset="50%" stop-color="rgb(181,124,122)"/>
                            <stop offset="100%" stop-color="rgb(131,84,76)" />
                            </linearGradient>
                        </defs>
                        <circle cx="60" cy="60" r="50" class="dotted" fill='url(#grad2)'/>
                        <line x1="20" x2="100" y1="60" y2="60" stroke="rgba(255, 255, 255, 0.2)" stroke-width="20" className='line' stroke-linecap="round"/>
                        <line x1="25" x2="95" y1="30" y2="30" stroke="rgba(255, 255, 255, 0.2)" stroke-width="5" className='line' stroke-linecap="round"/>
                        <line x1="25" x2="95" y1="90" y2="90" stroke="rgba(255, 255, 255, 0.2)" stroke-width="3" className='line' stroke-linecap="round"/>
                        <line x1="35" x2="85" y1="100" y2="100" stroke="rgba(255, 255, 255, 0.2)" stroke-width="3" className='line' stroke-linecap="round"/>
                        <circle cx="60" cy="60" r="57" class="orbit" fill='transparent'/>
                        <foreignObject x="10" y="8" height="100px" width="100px">
                        <div style={{backgroundImage: `url(/images/opener/Fishgame-logo.webp)`, backgroundSize: "40px", backgroundPositionX: "center", backgroundPositionY: "18px", backgroundRepeat: "no-repeat"}}>
                            <p>Demeter</p>
                        </div>
                        </foreignObject>
                    </svg>
                <a href='#game-panels'><h2>Active Games</h2></a>
            </div>
            <hr style={{color: "white", margin: "3px"}}></hr>
                <div id='web-recent' style={{margin: "20px"}}>
                    <h1 style={{fontSize: "48px"}}>Recent Releases</h1>
                    <Fish></Fish>
                </div>
                <div>
                    <h1 style={{fontSize: "48px"}}>Active Games</h1>
                    <p>Published games. Click a button to load the site. To play ASCARDS, scroll to the widget below and click it a few times. You'll be provided a google drive link to the demo.</p>
                </div>
                    <hr style={{color: "white", margin: "3px"}}></hr>
                <div className='site-panels'>
                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.2)", borderRadius: "10px"}}>
                        <h3>Fish Game</h3>
                        <p>Build and upgrade your aquarium as you discover new fish and ocean biomes! Dive deeper into the ocean and discover what creatures lay deep. <a href='#past-panel'>Learn more here.</a></p>
                        <p><i>In case the game isnt loading, use <a href='https://nnexsus-fish-game.netlify.app'>this website</a> to play it directly! Or wait ~30 seconds for AWS to load.</i></p>
                        {showFishgame ? 
                        <div id='fish-div' className='site-box'>
                            <iframe title='fish game game' src='https://fishgame.d1ms72udm9edoe.amplifyapp.com' width={"100%"} height="480px"/>
                            <button id='fishgame-activate' onClick={() => aFish()}><img alt="open site" src={`/images/opener/Fishgame-logo.png`} width="100px"/>▶</button>
                        </div>
                        : <div className='placeholder'>
                            <button id='fishgame-activate' onClick={() => aFish()}><img alt="open site" src={`/images/opener/Fishgame-logo.png`} width="100px"/>▶</button>
                        </div>}
                    </div>
            <section className='ascii' style={{display: "flex", flexDirection: "column", alignItems: "center"}} id='ascards'>
                <a target="_blank" rel="noreferrer" href="https://youtu.be/QtCbgadN3Rc"><p style={{opacity: 0}}>Hidden Song</p></a>
                <pre onClick={() => asciiClick(ascii)}>{copypaste[ascii]}</pre>
            </section>
                </div>
            </section>
                <div style={{marginTop: "350px"}}>
                    <h1>Hi, theres nothing down here quite yet!</h1>
                </div>
        </Wrapper>
    )
}

export default GamePlanet;


const copypaste = [`
                     .--------------.
                .---'  o        .    '---.
             .-'    .    O  .         .   '-.
          .-'     @@@@@@       .             '-.
        .'@@   @@@@@@@@@@@       @@@@@@@   .    '.
      .'@@@  @@@@@@@@@@@@@@     @@@@@@@@@         '.
     /@@@  o @@@@@@@@@@@@@@     @@@@@@@@@     O     \\
    /        @@@@@@@@@@@@@@  @   @@@@@@@@@ @@     .  \\
   /@  o      @@@@@@@@@@@   .  @@  @@@@@@@@@@@     @@ \\
  /@@@      .   @@@@@@ o       @  @@@@@@@@@@@@@ o @@@@ \\
 /@@@@@                  @ .      @@@@@@@@@@@@@@  @@@@@ \\
 |@@@@@    O    '.-./  .        .  @@@@@@@@@@@@@   @@@  |
/ @@@@@        --'-'       o        @@@@@@@@@@@ @@@    . \\
|@ @@@@ .  @  @    '    @            @@      . @@@@@@    |
|   @@                         o    @@   .     @@@@@@    |
|  .     @   @ @       o              @@   o   @@@@@@.   |
\\     @    @       @       .-.       @@@@       @@@      /
 |  @    @  @              '-'     . @@@@     .    .    |
 \\ .  o       @  @@@@  .              @@  .           . /
  \\      @@@    @@@@@@       .                   o     /
   \\    @@@@@   @@\\@@    /        O          .        /
    \\ o  @@@       \\ \\  /  __        .   .     .--.  /
     \\      .     . \\.-.---                   '--'  /
      '.             '-'      .                   .'
        '.    o     / | '           O     .     .'
          '-.      /  |        o             .-'
             '-.          .         .     .-'
                '---.        .       .---'
                     '--------------'
`,`
 _________________
|# :           : #|
|  :           :  |
|  :           :  |
|  :           :  |
|  :___________:  |
|     _________   |
|    | __      |  |
|    ||  |     |  |
\\____||__|_____|__|
`,`
   . .          . .          . .          . .          . .          . .          . .    
.+'|=|'+.    .+'|=|'+.    .+'|=|'+.    .+'|=|'+.    .+'|=|'+.    .+'|=|'+.    .+'|=|'+. 
|  | |  |    |  | '+.|    |  | '+.|    |  | |  |    |  | |  |    |  | '+ |    |  | '+.| 
|  |=|  |    |  | .       |  |         |  |=|  |    |  |'. '.    |  |  | |    |  | .    
|  | |  |    '+.|=|'+.    |  |         |  | |  |    |  | |  |    |  |  | |    '+.|=|'+. 
|  | |  |    .    |  |    |  |    .    |  | |  |    |  | |  |    |  |  | |    .    |  | 
|  | |  |    |'+. |  |    |  | .+'|    |  | |  |    |  | |  |    |  | .+ |    |'+. |  | 
'+.| |..|    '+.|=|.+'    '+.|=|.+'    '+.| |..|    '+.| |.+'    '+.|=|.+'    '+.|=|.+' 

                      An action, ASCII, turn-based, card game. 
                         Discontinued, but still available!
           This version is VERY incomplete, laggy, and may not work correctly.
                                Also, Windows only.

 https://drive.google.com/drive/folders/1YJCzFLfgTid8tjTIr7_IJAMHyow0a5R2?usp=sharing. 

`,`
     _.--,_
  .-'      '-.  
 /            \\
'          _.  '
 \\      "" /  ~(
  '=,,_ =\\__ '  &
       "  "';  \\\\\\
`,`
.----------------,__
[#+------------------+
[#|/--#   E  C   #--\\|
[#||##% D      K %##||
[#||#%            %#||
[#||%  B  O  O  K  %||
[#|#%   .______.   %#|
[#+-----+  __  +-----+
[#|     + [  []+     |
[#|     + [__[]+     |
[#+-----+______+-----+
[#|#%   '      '   %#|
[#||% V          E %||
[#||#%  O L  U M  %#||
[#||##%   _  _   %##||
[#|\\--#   _||_   #--/|
 '+------------------+
`,`
,_________,
|,__________,
||o         |
| ).------.(
||'|    I3|'|
|| |      | |
|| |SINTEL| |
|| '------' |
'|v_________|
  '          '
`];