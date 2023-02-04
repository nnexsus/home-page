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
    margin: 2% 13% 2% 13%;
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
    padding: 10px 100px;
    margin: 0 50px; 
    border-radius: 15px; 
    background-color: rgba(0,0,0,0.5);
  }

  .entry-container {
    transform: scale(1);
    transition: 0.6s ease-in-out;
    :hover {
      transform: scale(1.02);
    }
  }

  .hide {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    .list-container {
      padding: 10px 10px;
    }
  }
`;

const Theater = () => {

    const [videos, setVideos] = useState([]);
    const [tag, setTag] = useState('none');

    const getTag = () => {
      if (tag !== 'none') {
        axios.get(`https://api-nnexsus-server.cfd/api/mainsite/videos/${tag}`).then((res) => { //CHANGEEEEEEEEEEEEEEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!
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
        axios.get("https://api-nnexsus-server.cfd/api/mainsite/videos").then((res) => { //CHANGEEEEEEEEEEEEEEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!
        setVideos(res.data)
      }).catch((err) => {
        console.log(err)
        setVideos(err)
      })
    }

    const blackButton = () => {
      const buttons = document.getElementsByClassName("filter")
      for (var x = 0; x < buttons.length; x++) {
        buttons[x].style.background = "rgba(0,0,0,0.4)";
      }
    }

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
              <div>
                <div style={{marginBottom: "25px"}}>
                  <input style={{margin: '10px 5px 10px 0', padding: '5px 15px', border: "solid 2px var(--accentThemeDarker)", background: "rgba(255,255,255,0.3)"}} type={"text"} placeholder={"Search by Name"} />
                  <div style={{display: 'flex', gap: '5px', alignItems: "center"}}>
                    <h4 style={{color: 'white', margin: '0 10px 0 0', textAlign: 'center', fontFamily: "monospace"}}>Filters: </h4>
                    <button className="filter" onClick={(e) => {setTag("none"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>All</button>
                    <button className="filter" onClick={(e) => {setTag("P"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"/*these need toggle switches*/}}>Project Showcase</button> 
                    <button className="filter" onClick={(e) => {setTag("A"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>After Effects</button>
                    <button className="filter" onClick={(e) => {setTag("C"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>Clips</button>
                    <button className="filter" onClick={(e) => {setTag("O"); blackButton(); e.currentTarget.style.background = "var(--accentThemeDarker)"}}>Other</button>
                  </div>
                </div>
                {videos.length >= 1 ?
                <div className="list-container">
                  {videos.map((vid) => {
                    return (
                      <div className="entry-container" style={{display: 'flex', flexDirection: "column", fontFamily: "monospace", border: "2px solid rgba(105,105,255,0.5)", padding: "3px", margin: "5px", backgroundImage: `url('/images/TRI.webp')`, backgroundSize: "6px"}} key={vid.name}>
                        <img id={`${vid.id}img`} style={{border: "solid 2px var(--accentThemeDarker)", borderBottom: "0px"}} alt={`${vid.name}`} src={`https://api-nnexsus-server.cfd/api/mainsite/videothumbs/${vid.fileloc}`} />
                        <iframe title="video" className="hide" id={`${vid.id}`} src={`https://api-nnexsus-server.cfd/api/mainsite/videolocs/${vid.fileloc}`} style={{aspectRatio: "3/2", border: "solid 2px var(--accentThemeDarker)", borderBottom: "0px"}} />
                        <button name={`${vid.id}`} onClick={(e) => { 
                          if (document.getElementById(e.currentTarget.name).classList.contains("hide")) {
                            document.getElementById(e.currentTarget.name).classList.remove("hide")
                            document.getElementById(e.currentTarget.name + "img").classList.add("hide")
                            e.currentTarget.innerText = "Hide Video"
                          } else {
                            document.getElementById(e.currentTarget.name).classList.add("hide")
                            document.getElementById(e.currentTarget.name + "img").classList.remove("hide")
                            e.currentTarget.innerText = "Hide Video"
                          }
                        }}>Play Video</button>
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