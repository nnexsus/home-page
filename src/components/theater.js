import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';

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
    --aug-border-all: 2px;
    --aug-inlay-bg: rgba(0, 0, 0, 0.4);

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
    max-height: 100%;
    aspect-ratio: 1/1.6;
  }

  @media screen and (max-width: 1000px) {
    .list-container {
      padding: 10px 10px;
    }
  }

  @media screen and (max-width: 600px) {
    .theater-grid {
      grid-template-columns: 100%; 
      grid-template-rows: 15h 70vh;
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
      overflow-x: scroll;
    }
  }
`;

const Theater = () => {

    const [videos, setVideos] = useState([]);
    const [tag, setTag] = useState('none');
    const [src, setSrc] = useState('');

    const getTag = () => {
      if (tag !== 'none') {
        axios.get(`https://api-nnexsus-server.cfd/api/mainsite/videos/${tag}`).then((res) => {
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
        axios.get("https://api-nnexsus-server.cfd/api/mainsite/videos").then((res) => {
        setVideos(res.data)
      }).catch(() => {
        setVideos([
        {name: 'Could not connect to server.', 
        id: 0, 
        fileloc: '-', 
        desc: 'Could not connect to the main nnexsus server (api-nnexsus-server.cfd). If this issue persists, please contact nnexsus.service@gmail.com',
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

    }, [src])

    useEffect(() => {
      getTag()
    }, [tag])

    useEffect(() => {
      getAll()
    }, [])

    const tags1 = ['A', 'P', 'C', 'O']
    const tags = ['After Effects', 'Project', 'Clip', 'Other']

    return (
        <Wrapper>
            <div id='videoplayer' data-augmented-ui="tl-2-clip-xy t-rect-x tr-2-clip-xy r-rect-y br-2-clip-xy b-rect-x bl-2-clip-xy l-rect-y both" className='videoContainer'>
              <div className="theater-grid">
                <div className="tag-select-bar filters">
                  <input style={{margin: '10px 5px 10px 0', padding: '5px 15px', border: "solid 2px var(--accentThemeDarker)", background: "rgba(255,255,255,0.3)"}} type={"text"} placeholder={"Search by Name"} />
                  <div className="scroller-filters" style={{display: 'flex', gap: '5px', alignItems: "center"}}>
                    <h4 style={{color: 'white', margin: '0 10px 0 0', textAlign: 'center', fontFamily: "monospace"}}>Filters: </h4>
                    <button className="filter" onClick={(e) => {setTag("none"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>All</button>
                    <button className="filter" onClick={(e) => {setTag("P"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>Project Showcase</button> 
                    <button className="filter" onClick={(e) => {setTag("A"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>After Effects</button>
                    <button className="filter" onClick={(e) => {setTag("C"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>Clips</button>
                    <button className="filter" onClick={(e) => {setTag("O"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>Other</button>
                  </div>
                </div>
                <div id="video-player" className="player">
                  <iframe title="video" src={`${src}`} style={{aspectRatio: "3/2", border: "solid 2px var(--accentThemeDarker)", width: '100%'}} />
                </div>
                {videos.length >= 1 ?
                <div className="list-container videos">
                  {videos.map((vid) => {
                    return (
                      <div className="entry-container" style={{display: 'flex', flexDirection: "column", fontFamily: "monospace", border: "2px solid rgba(105,105,255,0.5)", padding: "3px", margin: "5px", backgroundImage: `url('/images/TRI.webp')`, backgroundSize: "6px"}} key={vid.name}>
                        <img loading='lazy' id={`${vid.id}img`} width={'100%'} style={{border: "solid 2px var(--accentThemeDarker)", borderBottom: "0px"}} alt={`${vid.name}`} src={`https://api-nnexsus-server.cfd/api/mainsite/videothumbs/${vid.fileloc}`} />
                        <button name={`${vid.id}`} id={`${vid.fileloc}`} onClick={(e) => { 
                          setSrc(`https://api-nnexsus-server.cfd/api/mainsite/videolocs/${e.currentTarget.id}`);
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