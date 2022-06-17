import React, {useState} from 'react';
import styled from 'styled-components';

import bg1 from '../images/peaks.png';
import bg2 from '../images/waves.png';
import bg3 from '../images/blocks.png';

import domain from '../images/increment.png';
import badge from '../images/badge.png';
import blade from '../images/blade.png';

import Twitter from '../images/Twitter-logo.png';
import Youtube from '../images/Youtube-logo.png';
import Github from '../images/Github-logo.png';
import Discord from '../images/Discord-logo.png';

const Wrapper = styled.div`
    
    h1, h2, h3, h4, p, a {
        font-family: monospace;
    }

    h1 {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
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
                align-items: center;

                img {
                    transition: 0.2s ease-in-out;
                    :hover {
                        transform: scale(3);
                    }
                }
            }
        }

        .past1 {
            grid-column-start: 1;
        }

        h1, h2, h3, h4, p {
            text-shadow: 0px 0px 4px black;
        }

        h1, h2 {
            text-align: center;
            font-size: 48px;
        }

        p {
            font-size: 20px;
        }

        .ptitle {
            grid-column: span 2;
        }

        .p-project {
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            padding: 2px;
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
    }

    .front {
        transform-style: preserve-3d;
        transform: skewY(10deg);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0.95;
        border-radius: 4px;
        margin-top: 10%;

    .mediaLink {
        transition: 0.4s ease-in-out;

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
        
        div {
            background-color: rgba(0, 0, 0, 0.3);
            padding: 2px;
            margin: 2px;
            border-radius: 4px;
            border: solid black 2px;
            transition: 0.4s ease-in-out;
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
                    img {
                        :hover {
                            transform: scale(1.7);
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
            <section className='top' id='past'>
                <div data-augmented-ui="tl-2-clip-y t-clip-x tr-2-clip-y br-2-clip-y b-clip-x bl-2-clip-y both" className='content-container'>
                        <h2 className='ptitle'>Past Projects</h2>
                        <div className='content'>
                        <div className='past1 p-project'>
                            <h3>Project: Blade</h3>
                            <img alt='project: blade' loading={'lazy'} src={`${blade}`} width="50%" />
                            <p>A free public API & discord bot for Clash of Clans related content, including a documentation site. API includes info on all army troops, spells, heroes, pets, super troops, and siege machines, as well as 
                                all buidlings data, and some other misc data. Done in pure Javascript.</p>
                            <a href='blade-api.netlify.app'><p>View the API docs here.</p></a>
                            <a href='https://discord.com/api/oauth2/authorize?client_id=978107538295881808&permissions=0&scope=bot%20applications.commands'><p>Invite Blade Bot Here!</p></a>
                        </div>
                        <div className='p-project'>
                            <h3>Project: Badge</h3>
                            <img alt='project: badge' loading={'lazy'} src={`${badge}`} width="50%" />
                            <p>A high use discord bot, capable of awarding badges (achievements) to users for in app activities. Has built in games, commands, events, and profile pages that allow users to show off their achivements.</p>
                        </div>
                        <div className='p-project'>
                            <h3>Project: Domain</h3>
                            <img alt='project: domain' loading={'lazy'} src={`${domain}`} width="100%"/>
                            <p>An image board website complete with profiles, public/private boards, customizable profile pages, and moderation. All done in vanilla HTML, php, and css.</p>
                        </div>
                        <div className='p-project'>
                            <h3>Project: 2021</h3>
                            <p>A two hour long recap and celebration for 2021. (Due to being sick with covid i was too tired to save the stream. It will be recovered sometime soon.)</p>
                        </div>
                        </div>
                    </div>
            </section>
            <section className='front' id='panels'>
                <div className='aboutMe'>
                    <div className='content'>
                        <h1>About Me</h1>
                        <div className='aboutButtons'>
                            <button className='selector' onClick={() => onClickName()}>Nnexsus</button>
                            <button className='selector' onClick={() => onClickWeb()}>Web Developer</button>
                            <button className='selector' onClick={() => onClickGame()}>Game Developer</button>
                            <button className='selector' onClick={() => onClickGraphic()}>Graphic Designer</button>
                        </div>
                            <div className='headTitles'>
                                <Title highlighted={+showName}>Computer and Server Building and Repair, Pentester, Stormchaser, Music Video Artist, Editor, </Title>
                                <Title highlighted={+showWeb}>Php, HTML, CSS, Javascript, React, </Title>
                                <Title highlighted={+showGame}>Python, Java, C++, Godot Engine and GDScript, </Title>
                                <Title highlighted={+showGraphic}>After Effects, Vegas Pro, Photoshop, Blender</Title>
                            </div>
                                <Paragraph highlighted={+showName}>
                                    Hey, I'm Ethan, but I typically go by nnexsus (nec - sus). I'm 19 years old and attend school at Moraine Valley Community College*.
                                    I really enjoy learning and mastering new topics all the time. I also really enjoy creating literally anything.
                                    I like to travel fairly often, so I prefer remote work to fit a schedule as such.
                                    Education speaking, I have taken many online courses to learn, as I found school far to slow. However I have aquired a few certs and such along the way, including the A+. I am only in school for the degree.
                                </Paragraph>
                                <Paragraph highlighted={+showWeb}>
                                    All* my website work can be found through the apps on this site. *Before React, I coded with strictly php, html, and css. Those projects are viewable through my github (Visual Studio Code App) and gallery.
                                </Paragraph>
                                <Paragraph highlighted={+showGame}>
                                    My solo indie game is viewable through demos on Twitter, Youtube, and in the Gallery. After completion a new app will be made for it.
                                </Paragraph>
                                <Paragraph highlighted={+showGraphic}>
                                    Any graphic design and music video work can be found through my Twitter, Youtube, and Gallery.
                                </Paragraph>
                            </div>
                </div>
                <div className='projects'>
                    <div className='projectContainer'>
                        <h1>My Projects</h1>
                        <a href='https://trello.com/b/jsd5zUAq/2022'>   <h4>2022 - More info on my Trello.</h4>  </a>
                            <div>
                                <h3>Project: Circuit</h3>
                                <p>Project: Ciruit is a turn-based strategy card game. I am working on the game in godot engine, solo. The game is most heavily inspired by the turn-based strategy Inscryption. Most everything in the game is created through ASCII art (text-art).</p>
                            </div>
                            <div>
                                <h3>Project: Oort</h3>
                                <p>Project: Oort is a large-ish scope cloud server hosting service I am working on. In January of 2022 I built an 8Tb server machine. On this machine I will be creating and hosting a cloud server for myself, friend, and family.</p>
                            </div>
                            <div>
                            <h3>Project: Tether</h3>
                                <p>Project: Tether is a discord bot that connects my cloud server to discord. The bot will allow for incredibly quick storing of media, using only simple commands, as well as fetching online data, and providing some general use.</p>
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
            <section className='ascii'>
                <pre onClick={() => asciiClick(ascii)}>{copypaste[ascii]}</pre>
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

                            Playable demo available soon.

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