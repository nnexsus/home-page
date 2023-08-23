import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRef } from "react";

const Wrapper = styled.div`

  video {
    box-shadow: 0px 0px 5px 5px black;
    background-color: black;
    opacity: 1;
    
    transition: 3s ease-in-out;
  }

  .videoContainer {
    color: var(--accentTheme);
    margin: 2% 30px;
    padding: 20px;
    border: 2px solid var(--accentTheme);
    border-radius: 2px 55px 2px 2px;
    background-color: rgba(0, 0, 0, 0.2);
    outline: black 2px;

    transition: 1.5s ease-in-out;

    height: inherit;

    backdrop-filter: blur(10px) brightness(2);

    button {
      background: rgba(0, 0, 0, 0.2);
      padding: 3px;
      padding-left: 8px;
      padding-right: 8px;
      border: solid 2px var(--accentTheme);
      cursor: pointer;
      color: white;
      transition: 0.1s ease-in-out;
      font-family: monospace;

      :hover {
        background: rgba(128, 128, 128, 0.7);
      }
    }
  }

  .list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px;
    margin: 0 5px;
    border: solid 2px var(--accentTheme);
    border-radius: 8px; 
    background-color: rgba(123,123,123,0.3);
  }

  .scroller-filters {
    display: flex;
    overflow-x: scroll;
    overflow-y: clip;
  }

  .list-container::-webkit-scrollbar, .scroller-filters::-webkit-scrollbar {
      height: 5px;
      width: 5px;
  }
  
  .list-container::-webkit-scrollbar-track, .scroller-filters::-webkit-scrollbar-track {
      box-shadow: 0 0 5px black inset;
      border-radius: 15px;
      background: rgba(200, 200, 200, 0.6);
  }
  
  .list-container::-webkit-scrollbar-thumb, .scroller-filters::-webkit-scrollbar-thumb {
      background-color: var(--accentTheme); 
      border-radius: 10px;
      transition: 0.2s ease;
  }
  
  .list-container::-webkit-scrollbar-thumb:hover, .scroller-filters::-webkit-scrollbar-thumb:hover {
      background-color: var(--accentTheme);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3) inset;
  }

  .entry-container {
    transform: scale(1);
    transition: 0.6s ease-in-out;
    :hover {
      transform: scale(1.02);
    }
  }

  .theater-grid {
    display: grid; 
    grid-template-columns: 70% 30%; 
    grid-template-rows: 15h 70vh;
    margin-bottom: 15%;
  }

  .filters {
    grid-column: span 2; 
    grid-row: 1; 
    margin-bottom: 25px;
  }

  .player {
    grid-column: 1; 
    grid-row: 2; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
  }

  .videos {
    grid-column: 2; 
    grid-row: 2; 
    overflow-y: scroll; 
    max-height: 450px;
  }

  @media screen and (max-width: 1000px) {
    .list-container {
      padding: 10px 10px;
    }
  }

  @media screen and (max-width: 750px) {
    .theater-grid {
      grid-template-columns: 100%; 
    }
    .filters {
      grid-row: 1; 
      margin-bottom: 25px;
    }
    .player {
      grid-row: 2; 
      display: flex; 
      flex-direction: column; 
      align-items: center;
    }
    .videos {
      grid-column: 1;
      grid-row: 3; 
      overflow-y: scroll; 
      max-height: 450px;
    }
    .list-container {
      flex-direction: row;
    }
    .entry-container {
      min-width: 100px;
    }
    .scroller-filters {
      overflow: hidden;
      display: grid;
      button {
        margin: 0 3px;
      }
    }
  }

  .onhover {
    .controlsContainer, .bar {
      opacity: 0;
      transition: 0.1s ease;
    }
    :hover {
      .controlsContainer, .bar {
        opacity: 1;
      }
    }
  }

  .controlsContainer {
    width: 100%;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .controlsIcon {
    cursor: pointer;
    width: 35px;
    height: 35px;
    padding: 10px;
    box-shadow: 0 0 5px 2px black;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 15px;
  }

  .timecontrols {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    bottom: 4rem;
    margin-left: 10vw;
  }

  .controlsTime {
    font-family: "W95FA";
  }

  .time_progressbarContainer {
    margin: 0 2.5%;
    width: 95%;
    height: 10px;
    z-index: 30;
    position: relative;
    border: solid black 2px;
    border-radius: 15px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    box-shadow: 0 0 10px 3px white;
  }

  .time_progressBar {
    height: 6px;
    background-color: var(--accentTheme); 
    border-radius: 10px;
    border: solid var(--accentThemeEvenDarker) 2px;
    box-shadow: 0 0 1px 0px var(--accentTheme);
    transition: 0.2s ease;
  }

  .smallPreview {
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: 0.2s ease;
    :hover {
      opacity: 1;
    }
  }

  .bar {
    transition: 0.2s ease;
  }

  .bar::-webkit-scrollbar {
      height: 10px;
      width: 8px;
  }
  
  .bar::-webkit-scrollbar-track {
      box-shadow: 0 0 5px black inset;
      border-radius: 15px;
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  }
  
  .bar::-webkit-scrollbar-thumb {
      background-color: var(--accentTheme); 
      border-radius: 10px;
      border: solid var(--accentThemeEvenDarker) 2px;
      //box-shadow: 0 0 5px 0 var(--accentTheme);
      transition: 0.2s ease-in-out;
  }
  
  .bar::-webkit-scrollbar-thumb:hover {
      background-color: var(--accentTheme);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3) inset, 0 0 7px 0 var(--accentThemeEvenDarker);
  }

  .hidden {
    opacity: 0;
  }

  @media screen and (max-width: 750px) {
    .mobilehide {
      display: none;
      margin: 0;
      
    }
  }
`;

const Theater = () => {

    const [videos, setVideos] = useState([]);
    const [tag, setTag] = useState('none');
    const [src, setSrc] = useState('');

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [videoTime, setVideoTime] = useState(0);
    const [progress, setProgress] = useState(0);
  
    const videoHandler = (control) => {
      if (control === "play") {
        videoRef.current.play();
        setPlaying(true);
        var vid = document.getElementById("player");
        setVideoTime(vid.duration);
      } else if (control === "pause") {
        videoRef.current.pause();
        setPlaying(false);
      }
    };
  
    const fastForward = () => {
      videoRef.current.currentTime += 5;
      setCurrentTime(videoRef.current?.currentTime);
      setProgress(((videoRef.current?.currentTime / videoRef.current?.duration) * 100).toFixed(0));
    };
    const revert = () => {
      videoRef.current.currentTime -= 5;
      setCurrentTime(videoRef.current?.currentTime);
      setProgress(((videoRef.current?.currentTime / videoRef.current?.duration) * 100).toFixed(0));
    };

    const cycle = () => {
      setTimeout(() => {
        setCurrentTime(videoRef.current?.currentTime);
        setProgress(((videoRef.current?.currentTime / videoRef.current?.duration) * 100).toFixed(0));
        cycle()
      }, [100])
    }

    const getTag = () => {
      if (tag !== 'none') {
        axios.get(`https://arina.lol/api/mainsite/videos/${tag}`).then((res) => {
          setVideos(res.data.final)
        }).catch((err) => {
          console.log(err)
          setVideos(err)
        })
      } else {
        getAll()
      }
    }

    const getAll = () => {
        axios.get("https://arina.lol/api/mainsite/videos").then((res) => {
        setVideos(res.data)
      }).catch(() => {
        setVideos([
        {name: 'Could not connect to server.', 
        id: 0, 
        fileloc: '-', 
        desc: 'Could not connect to the main nnexsus server (arina.lol). If this issue persists, please contact nnexsus.service@gmail.com',
        tags: []}
      ])
      })
    }

    const blackButton = () => {
      const buttons = document.getElementsByClassName("filter")
      for (var x = 0; x < buttons.length; x++) {
        buttons[x].style.background = "rgba(0,0,0,0.4)";
      }
    }

    useEffect(() => {
    }, [src, progress])

    useEffect(() => {
      document.querySelector('.bar').classList.toggle('hidden')
    }, [playing])

    useEffect(() => {
      getTag()
    }, [tag])

    useEffect(() => {
      getAll()
      cycle()
    }, [])

    const tags1 = ['A', 'P', 'C', 'O']
    const tags = ['After Effects', 'Project', 'Clip', 'Other']

    return (
        <Wrapper>
            <div id='videoplayer' className='videoContainer'>
              <div className="theater-grid">
                <div className="tag-select-bar filters">
                  <input style={{margin: '10px 5px 10px 0', padding: '5px 15px', border: "solid 2px var(--accentThemeDarker)", background: "rgba(255,255,255,0.3)"}} type={"text"} placeholder={"Search by Name"} />
                  <div className="scroller-filters" style={{gap: '5px', alignItems: "center"}}>
                    <h4 style={{color: 'white', margin: '0 10px 0 0', textAlign: 'center', fontFamily: "monospace"}}>Filters: </h4>
                    <button className="filter" onClick={(e) => {setTag("none"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>All</button>
                    <button className="filter" onClick={(e) => {setTag("P"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>Project Showcase</button> 
                    <button className="filter" onClick={(e) => {setTag("A"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>After Effects</button>
                    <button className="filter" onClick={(e) => {setTag("C"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>Clips</button>
                    <button className="filter" onClick={(e) => {setTag("O"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>Other</button>
                  </div>
                </div>

                <div id="video-player" className="player">
                  <video id="player" onEnded={() => setPlaying(false)} src={`${src}`} ref={videoRef} style={{aspectRatio: "3/2", border: "solid 2px var(--accentThemeDarker)", width: '100%'}} />
                  <div className="onhover" style={{width: '100%', marginTop: '-65%', zIndex: 20}}>
                    <div className="controlsContainer">
                      <div className="time_progressbarContainer">
                        <div style={{width: `${progress}%`}} className="time_progressBar"></div>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '10px'}}>
                        <p className="controlsTime">{Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)} /</p>
                        <p className="controlsTime">{Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}</p>
                      </div>
                      <div className="controls">
                        <img onClick={revert} className="controlsIcon" alt="" src="/images/video/backward-5.svg"/>
                        {playing ? (
                          <img onClick={() => videoHandler("pause")} className="controlsIcon" alt="" src="/images/video/pause.svg"/>
                        ) : (
                          <img onClick={() => videoHandler("play")} className="controlsIcon" alt="" src="/images/video/play.svg"/>
                        )}
                        <img className="controlsIcon" onClick={fastForward} alt="" src="/images/video/forward-5.svg"/>
                      </div>
                    </div>
                    <div className="bar hidden mobilehide" style={{display: 'grid', gridTemplateRows: '100%', gridTemplateColumns: 'repeat(10, 1fr)', overflowX: 'scroll', overflowY: 'clip', height: "100%"}}>
                      {videos.map((vid) => {
                        return (
                          <div name={`${vid.id}`} id={`${vid.fileloc}`} onClick={(e) => { 
                            setSrc(`https://arina.lol/api/mainsite/videolocs/${e.currentTarget.id}`);
                          }} className="entry-container" style={{display: 'flex', flexDirection: "column", height: 'fit-content', width: '20vw', cursor: 'pointer', fontFamily: "monospace", border: "2px solid rgba(105,105,255,0.5)", padding: "3px", margin: "5px", backgroundImage: `url('/images/TRI.webp')`, backgroundSize: "6px"}} key={vid.name}>
                            <img loading='lazy' id={`${vid.id}img`} width={'100%'} style={{border: "solid 2px var(--accentThemeDarker)", borderBottom: "0px"}} alt={`${vid.name}`} src={`https://arina.lol/api/mainsite/videothumbs/${vid.fileloc}`} />
                            <div className="smallPreview" style={{margin: '5%', color: 'white'}}>
                              <h2 style={{textShadow: "0px 0px 2px white"}}>{vid.name}</h2>
                              <p style={{textShadow: "0px 0px 2px white"}}>{vid.description}</p>
                              <p style={{color: "rgba(255,255,255,0.5)"}}>Tags: {tags[tags1.indexOf(vid.tags)]}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  
                </div>

                {videos.length >= 1 ?
                <div className="list-container videos">
                  {videos.map((vid) => {
                    return (
                      <div className="entry-container" style={{display: 'flex', flexDirection: "column", fontFamily: "monospace", border: "2px solid rgba(105,105,255,0.5)", padding: "3px", margin: "5px", backgroundImage: `url('/images/TRI.webp')`, backgroundSize: "6px"}} key={vid.name}>
                        <img loading='lazy' id={`${vid.id}img`} width={'100%'} style={{border: "solid 2px var(--accentThemeDarker)", borderBottom: "0px"}} alt={`${vid.name}`} src={`https://arina.lol/api/mainsite/videothumbs/${vid.fileloc}`} />
                        <button name={`${vid.id}`} id={`${vid.fileloc}`} onClick={(e) => { 
                          setSrc(`https://arina.lol/api/mainsite/videolocs/${e.currentTarget.id}`);
                        }}><a href="#videoplayer" style={{color: "white", textDecoration: 'none'}}>Play Video</a></button>
                        <div style={{margin: '5%', color: 'white'}}>
                          <h2 style={{textShadow: "0px 0px 2px white"}}>{vid.name}</h2>
                          <p style={{textShadow: "0px 0px 2px white"}}>{vid.description}</p>
                          <p style={{color: "rgba(255,255,255,0.5)"}}>Tags: {tags[tags1.indexOf(vid.tags)]}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                : null}
              </div>
            </div>
        </Wrapper>
    )
}

export default Theater;