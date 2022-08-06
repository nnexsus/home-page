import React, {useState} from 'react';
import styled from 'styled-components';

import bg1 from '../images/peaks.webp';
import bg2 from '../images/waves.webp';
import bg3 from '../images/blocks.png';

import domain from '../images/increment.webp';
import badge from '../images/badge.webp';
import blade from '../images/blade.webp';
import server from '../images/server.webp';

import Twitter from '../images/Twitter-logo.png';
import Youtube from '../images/Youtube-logo.png';
import Github from '../images/Github-logo.webp';
import Discord from '../images/Discord-logo.webp';

const Wrapper = styled.div`
    
    h1, h2, h3, h4, p, a, li {
        font-family: monospace;
    }

    h1 {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }

    h1, h2, h3, h4, p, li {
        text-shadow: 0px 0px 4px black;
    }

    h1, h2 {
        text-align: center;
        font-size: 48px;
    }

    p, li {
        font-size: 20px;
    }

    ul {
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(2, 1fr);
    }

    .top {
        color: lightcoral;
        margin: 10px;

        .content-container {

            margin: 10px;
            --aug-border-all: 2px;
            --aug-t-extend1: 400px;
            --aug-b-extend1: 400px;
            padding: 15px;

            .content {
                display: flex;

                .webimg {
                    transition: 0.2s ease-in-out;
                    :hover {
                        transform: scale(3) translateX(25%);
                    }
                }

                .otherimg {
                    transition: 0.2s ease-in-out;
                    :hover {
                        transform: scale(3) translateX(-25%);
                    }
                }
            }
        }

        .ptitle {
            grid-column: span 2;
        }

        .p-project {
            background-color: rgba(0, 0, 0, 0.3);
            border: solid rgba(0, 0, 0, 0.3) 2px;
            border-radius: 10px;
            padding: 2px 6px 2px 6px;
            margin: 2px;
            transition: 0.4s ease-in-out;

            display: grid;

            justify-items: center;

            a {
                color: #E6DBE5;
            }

            :hover {
                background-color: rgba(120, 120, 120, 0.6);
            }
        }

        .p-container {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-auto-rows: max-content;
        }
    }

    .front {
        transform-style: preserve-3d;
        transform: skewY(8deg);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0.95;
        border-radius: 4px;
        margin-top: 10%;
        margin-bottom: 165px;

    .mediaLink {
        background-color: rgba(120, 100, 120, 0.2);
        transition: 0.4s ease-in-out;
        margin: 0 10% 0 10%;

        h2 {
            color: white;
        }

        :hover {
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
        }
    }
    
    .aboutMe {
        background-color: #7B4B94;
        background-image: url(${bg1});
        background-size: cover;
        
        h1, h2, h3, h4, p {
            text-shadow: 0px 0px 2px black;
        }

        h1 {
            color: white;
        }

        button {
            margin-top: 5px;
            margin-bottom: 10px;
            width: 100%;
            height: 100%;
            padding: 10px;
            background: lightcoral;
            border-radius: 10px;
            border: solid red 2px;
        }

        button:hover {
            border: dashed 2px lightblue;
            cursor: pointer;
        }

        .aboutButtons {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 2px;
            margin-bottom: 5px;
        }

    }

    .links {
        background-color: #7D82B8;
        background-image: url(${bg2});
        background-size: cover;
        color: white;

        a {
            text-decoration: none;
            div {
                color: #392B58;
                text-shadow: 0px 0px 2px #392B58;
                border: solid 2px #392B58;
                border-radius: 10px;
                padding: 5px;
                margin-bottom: 20px;
            }
        }

    }

    .projects {
        background-color: #98D7B7;
        background-image: url(${bg3});
        background-size: cover;
        color: white;
    }

    .projectContainer {

        h4 {
            background-color: rgba(0, 0, 0, 0.3);
            border: solid 2px white;
            border-radius: 10px;
            color: white;
            padding: 10px;
            transition: 0.3s ease-in-out;

            :hover {
                background-color: rgba(120, 120, 120, 0.6);
            }
        }
        
        div {
            background-color: rgba(0, 0, 0, 0.3);
            padding: 2px;
            margin: 2px;
            border-radius: 4px;
            border: solid black 2px;
            transition: 0.3s ease-in-out;
        }

        div:hover {
            background-color: rgba(120, 120, 120, 0.6);
        }
    }

    .aboutMe, .links, .projects {
        border-radius: 10px;
        margin: 8px;
        padding: 4px;
        text-align: center;
        box-shadow: 0px 0px 4px 3px black;
        border: solid lightcoral 3px;
        transition: 0.3s ease-in-out;
    }

    .aboutMe:hover, .links:hover, .projects:hover {
        opacity: 1;
        transform: scale(1.03);
    }

    .selector {
        text-decoration: underline;
    }

    .contactTitle {
        text-shadow: 0px 0px 7px white;
    }
}

    .ascii {
        background-color: black;
        box-shadow: 0px -20px 20px 20px black;
        margin-top: 10%;
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

    @media screen and (max-width: 720px) {
        .top {
            .content-container {
                --aug-t-extend1: 0px;
                --aug-b-extend1: 0px;
                .content {
                    display: block;

                    .webimg {
                        transition: 0.2s ease-in-out;
                    :hover {
                        transform: scale(1.7) translateX(0);
                        }
                    }

                    .otherimg {
                        transition: 0.2s ease-in-out;
                        :hover {
                            transform: scale(1.7) translateX(0);
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 700px) {
        .front {
            display: block;
        }
    }

`;

const Paragraph = styled.p`
    color: ${({highlighted}) => highlighted ? "white" : "rgba(1, 1, 1, 0.3)"};
`;

const Title = styled.h4`
    display: inline-flex;
    margin: 0;
    color: ${({highlighted}) => highlighted ? "white" : "rgba(1, 1, 1, 0.3)"};
`;
 
const Img  = styled.img`
    width: 75px;
`;


const Panels = () => {

    const [showName, setShowName] = useState(false);
    const onClickName = () => setShowName(showName ? false : true)

    const [showWeb, setShowWeb] = useState(false);
    const onClickWeb = () => setShowWeb(showWeb ? false : true);

    const [showGame, setShowGame] = useState(false);
    const onClickGame = () => setShowGame(showGame ? false : true);

    const [showGraphic, setShowGraphic] = useState(false);
    const onClickGraphic = () => setShowGraphic(showGraphic ? false : true);

    const [ascii, setAscii] = useState(3);
    const asciiClick = () => {
        if (ascii === 5) {
            setAscii(0);
            return;
        }
        setAscii(ascii + 1);
    }

    return (
        <Wrapper>
            <section className='front' id='panels'>
                <div className='aboutMe'>
                    <div className='content'>
                        <h1>About Me</h1>
                        <h4 style={{color: "white"}}>Click a title below to highlight more.</h4>
                        <div className='aboutButtons'>
                            <button className='selector' onClick={() => onClickName()}>Nnexsus</button>
                            <button className='selector' onClick={() => onClickWeb()}>Web Developer</button>
                            <button className='selector' onClick={() => onClickGame()}>Game Developer</button>
                            <button className='selector' onClick={() => onClickGraphic()}>Graphic Designer</button>
                        </div>
                            <div className='headTitles'>
                                <Title highlighted={+showName}>Network Administrator, Developer, Stormchaser, Editor, </Title>
                                <Title highlighted={+showWeb}>PHP, HTML, CSS, Javascript, React, </Title>
                                <Title highlighted={+showGame}>Python, Java, C++, Godot Engine / GDScript, </Title>
                                <Title highlighted={+showGraphic}>After Effects, Sony Vegas Pro, Photoshop </Title>
                            </div>
                                <Paragraph highlighted={+showName}>
                                    Hello, I'm Ethan, my screen-name is nnexsus (nec - sus). I'm 19 years old and currently do freelance work for any of the above sections.
                                    I really enjoy learning and mastering new topics all the time. I love finding new ways to use my creativity in new fields.
                                    I like to travel fairly often, so I prefer remote work to fit a schedule as such.
                                    I am mostly self taught, with the exceptions of networking and meetups with other developers or sys-admins.
                                    I do not settle easily for uncompleted work. I am not a perfectionist, but if there is improvement to be made I will make it.
                                </Paragraph>
                                <Paragraph highlighted={+showWeb}>
                                    My website work can be found through the apps on this site. Before React, I coded with strictly PHP, HTML, and CSS; these projects are viewable through my github (Visual Studio Code App) or the past projects section.
                                    Some websites listed may not be online, such as the Cloud Server (back & front-end) megaproject I completed. Plans to get this up are underway, but require some routing infrastructure I do not currently have.
                                </Paragraph>
                                <Paragraph highlighted={+showGame}>
                                    Project: Fish (Fish Game) can currently be found in my Twitter previews, but it soon to be playable here as well.
                                    My first solo indie game (ASCARDS) is viewable through demos on Twitter, Youtube, and in the Gallery App.
                                </Paragraph>
                                <Paragraph highlighted={+showGraphic}>
                                    Any graphic design and music video work can be found through my Twitter, Youtube, and Gallery App.
                                </Paragraph>
                            </div>
                </div>
                <div className='projects'>
                    <div className='projectContainer'>
                        <h1>Current Projects</h1>
                        <a href='https://trello.com/b/jsd5zUAq/2022'>   <h4>2022 - More info on my Trello.</h4>  </a>
                            <div>
                                <h3>Project: Fish</h3>
                                <p>Project: Fish is a playable tycoon web game built in Godot engine. Collect and expand your aquarium as you discover new fish, and dive deeper into the ocean. Expansions and updates are expected for the game.</p>
                            </div>
                            <div>
                                <h3>Project: Circuit</h3>
                                <p>Project: Ciruit is a turn-based strategy card game. I am working on the game in godot engine, solo. The game is most heavily inspired by the turn-based strategy Inscryption. Most everything in the game is created through ASCII art (text-art).</p>
                            </div>
                            <div>
                            <h3>Project: Supercell</h3>
                                <p>Project: Supercell is my own study into weather, weather systems, and natural disasters. The end goal is to successfully predict and chase a tornado. Due to gas prices in 2022, this will most likely be held off.</p>
                                </div>
                            <div>
                                <h3>Project: Stone</h3>
                                <p>Project: Stone is a large scale music video. It is meant to be a true test of skill with my After Effects work. This will be the last project of 2022.</p>
                            </div>
                        </div>
                </div>
                <div className='links'>
                    <div>
                        <h1 className='contactTitle'>Links & Contacts</h1>
                        <a target="blank" href="https://twitter.com/_nnexsus"> <div className='mediaLink'> <h2>Twitter</h2>  <Img alt='twitter link' loading={'lazy'} src={Twitter}></Img> </div> </a>
                        <a target="blank" href="https://youtube.com/c/nnexsus"> <div className='mediaLink'> <h2>Youtube</h2>  <Img alt='youtube link' loading={'lazy'} src={Youtube}></Img> </div> </a>
                        <a target="blank" href="https://discord.gg/d8R2tDaBK2"> <div className='mediaLink'> <h2>Discord</h2>  <Img alt='discord link' loading={'lazy'} src={Discord}></Img> </div> </a>
                        <a target="blank" href="https://github.com/nnexsus"> <div className='mediaLink'> <h2>Github</h2> <Img alt='github link' loading={'lazy'} src={Github}></Img>  </div> </a>
                    </div>
                </div>
            </section>

            <section className='top' id='past'>
                <div data-augmented-ui="tl-2-clip-y t-clip-x tr-2-clip-y br-2-clip-y b-clip-x bl-2-clip-y both" className='content-container'>
                        <h2 className='ptitle'>Past Projects</h2>
                        <p style={{textAlign: "center"}}>Any projects that appear here are officially completed. Uncompleted projects will appear in the <a style={{color: "lightblue"}} href='#panels'>About & Links</a> section.</p>
                        <p style={{textAlign: "center", color: "white"}}>Hover an image to expand it!</p>
                        <div className='content'>
                            <div className='p-container web'>

                                <h2>Web - 3</h2>

                                <div className='p-project'>
                                    <h3>Project: Blade</h3>
                                    <img alt='project: blade' className='webimg' loading={'lazy'} src={`${blade}`} width="50%" />
                                    <p>A free public API & discord bot for Clash of Clans related content, including a documentation site.</p>
                                    <ul>
                                        <li>API</li>
                                        <li>Express</li>
                                        <li>HTML</li>
                                        <li>React</li>
                                    </ul>
                                    <a target="_blank" rel="noreferrer" href='blade-api.netlify.app'><p>View the API docs here.</p></a>
                                    <a target="_blank" rel="noreferrer" href='https://discord.com/api/oauth2/authorize?client_id=978107538295881808&permissions=0&scope=bot%20applications.commands'><p>Invite Blade Bot Here!</p></a>
                                </div>

                                <div className='p-project'>
                                    <h3>Project: Oort</h3>
                                    <img alt='project: oort' className='webimg' loading={'lazy'} src={`${server}`} width="50%" />
                                    <p>A megaproject cloud based file storage, similar to google drive. Includes accounts, databases, secure storage, sharing, and a connect discord bot for saving files on command!</p>
                                    <p>Due to lack of infrastructure, this is not online yet. However the project is visable through github or youtube.</p>
                                    <ul>
                                        <li>API</li>
                                        <li>MySQL*</li>
                                        <li>Express</li>
                                        <li>HTML</li>
                                        <li>Axios</li>
                                        <li>React</li>
                                        <li>Linux Server</li>
                                    </ul>
                                    <p>* uses mysql currently, mongodb framework available</p>
                                    <a target="_blank" rel="noreferrer" href='https://github.com/nnexsus/cloud-file-server'><p>Check out the github repo here!</p></a>
                                    <a target="_blank" rel="noreferrer" href='https://youtu.be/j5kwAONZI2w' style={{textAlign: "center"}} ><p>Or watch the youtube example video (shows all features).</p></a>
                                </div>

                                <div className='p-project'>
                                    <h3>Project: Domain</h3>
                                    <img alt='project: domain' className='webimg' loading={'lazy'} src={`${domain}`} width="50%"/>
                                    <p>An image board website complete with profiles, public/private boards, customizable profile pages, and moderation.</p>
                                    <ul>
                                        <li>MySQL</li>
                                        <li>PHP</li>
                                        <li>HTML</li>
                                        <li>JS</li>
                                    </ul>
                                </div>

                            </div>
                            <div className='p-container game'>

                                <h2>Game - 1</h2>
                            
                                <div className='p-project'>
                                    <h3>Project: Dune</h3>
                                    <p>A small mod for minecraft that added better desert generation to the game. This would also evolve to create custom caves with custom biomes.</p>
                                    <a target="_blank" rel="noreferrer" href='https://youtu.be/ovfq6eYdvZo'><p style={{textAlign: "center"}}>Check out a quick youtube demo here.</p></a>
                                </div>

                            </div>
                            <div className='p-container video'>

                                <h2>Video - 5</h2>

                                <div className='p-project'>
                                    <h3>Project: 2021</h3>
                                    <p>A two hour long recap and celebration for freinds in 2021.</p>
                                    <a target="_blank" rel="noreferrer" href='https://youtu.be/TseO_VkxOFM'><p>Watch my favorite clip of it here.</p></a>
                                </div>

                                <div className='p-project'>
                                    <h3>Project: SAYU</h3>
                                    <p>A music video for a song I really enjoyed. The song is 6 minutes total and ultimately I moved on from fully finishing it.</p>
                                    <a target="_blank" rel="noreferrer" href='https://youtu.be/kNV_sXJjoc8'><p>Watch my favorite clip of it here.</p></a>
                                </div>

                                <div className='p-project'>
                                    <h3>Project: String (2020)</h3>
                                    <p>Smaller Music Video I made for a friends song. This is an official music video.</p>
                                    <a target="_blank" rel="noreferrer" href='https://youtu.be/ShyrdpKcUCQ'><p>Watchable Here.</p></a>
                                </div>

                                <div className='p-project'>
                                    <h3>Project: Globe (2020)</h3>
                                    <p>Music Video I made for a a song I really enjoyed at the time.</p>
                                    <a target="_blank" rel="noreferrer" href='https://youtu.be/0VNavpVJK3c'><p>Watchable Here.</p></a>
                                </div>

                                <div className='p-project'>
                                    <h3>Project: Senko (2020)</h3>
                                    <p>Smaller Music Video I made for another song I really enjoyed at the time. My first full music video.</p>
                                    <a target="_blank" rel="noreferrer" href='https://youtu.be/QKkpQcBnCXM'><p>Watchable Here.</p></a>
                                </div>

                            </div>
                            <div className='p-container other'>

                                <h2>More - 1</h2>

                                <div className='p-project'>
                                    <h3>Project: Badge</h3>
                                    <img alt='project: badge' className='otherimg' loading={'lazy'} src={`${badge}`} width="50%" />
                                    <p>A high use discord bot, capable of awarding badges (achievements) to users for in app activities. Has built in games, commands, events, and profile pages that allow users to show off their achivements.</p>
                                </div>

                            </div>
                        </div>
                    </div>
            </section>

            <section className='ascii'>
                <pre onClick={() => asciiClick(ascii)}>{copypaste[ascii]}</pre>
                <a target="_blank" rel="noreferrer" style={{color: "black"}} href="https://youtu.be/QtCbgadN3Rc"><p>Hidden Song</p></a>
            </section>


        </Wrapper>
    )
};

export default Panels;

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
                Previews posted to Twitter and Youtube occasionally.

                            Playable demo available soon*. 


I think lol. Tbh its gonna be a bit. I need to REALLY restructure and optimize that games code.
            I was new to Godot engine still at that point, which is my excuse.
                  Fish Game is highly optimized and runs great however.

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