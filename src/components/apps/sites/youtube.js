import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`

    padding: 10px; 
    background: url('/images/desktop/sitemedia/tile.jpg');
    scroll-behavior: smooth;

    .playlist-selector {
        display: grid; 
        grid-template-columns: 50% 50%; 
        grid-template-rows: 25px 50% calc(50% - 25px);

        padding: 3px;
        padding-bottom: 15px;
        background-color: lightgray;
        border: outset 3px;
    }

    .playlist-button {
        border: inset 3px;
        scale: 1;
        transition: 0.1s ease;
        padding: 0;
        border-radius: 4px;
        cursor: pointer;

        aspect-ratio: 16/9;
        margin: 5px;
        background-size: contain;
        :hover {
            scale: 1.02;
        }
    }

    .playlist-button-inner {
        width: 100%; 
        height: 100%;
        backdrop-filter: blur(3px);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button-title {
        font-size: 24px;
        text-shadow: 0 0 4px white;
        padding: 15px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 5px;
    }

    .highlight {
        background-color: white;
    }

`;

const YoutubeSite = () => {

    const [playlist, setPlaylist] = useState('https://www.youtube-nocookie.com/embed/videoseries?list=PLzhN8a1aNzMzLQV-XvjIMG-_yb-jptuGK')

    const play = (e) => {
        setPlaylist(e.currentTarget.id)
        document.getElementById(`${e.currentTarget.id}`).classList.toggle('highlight')
        document.getElementById('yt-player').scrollIntoView()
    }

    return(
        <Wrapper>
            <div className="playlist-selector">
                <h3 style={{margin: '6px 2px', color: 'black', gridColumn: 'span 2'}}>Select a <img width={'23px'} height={'12px'} src="/images/desktop/Youtube-logo.webp"/> playlist.</h3>
                <button onClick={(e) => play(e)} style={{backgroundImage: 'url(https://i.ytimg.com/vi/zolI-wXNCQ8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBhdKWzKzYKhjSftb2SKnvL1Bdysw)'}} className="playlist-button highlight" id="https://www.youtube.com/embed/videoseries?list=PLzhN8a1aNzMzLQV-XvjIMG-_yb-jptuGK">
                    <div className="playlist-button-inner">
                        <p className="button-title">All Projects</p>
                    </div>
                </button>
                <button onClick={(e) => play(e)} style={{backgroundImage: 'url(https://i.ytimg.com/vi/4driqASPxqc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDYOKVrAx7knmTg1tHmHA6I7eqXgw)'}} className="playlist-button" id="https://www.youtube.com/embed/videoseries?list=PLzhN8a1aNzMzn5u1R5S22KfSYvJu1mISA">
                    <div className="playlist-button-inner">
                        <p className="button-title">Favorite Songs</p>
                    </div>
                </button>
                <button onClick={(e) => play(e)} style={{backgroundImage: 'url(https://i.ytimg.com/vi/NJHp6w9dZAI/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYMSBPKHIwDw==&rs=AOn4CLC3UqaAifR-ZBlRXCr2WTOMnI4gFw)'}} className="playlist-button" id="https://www.youtube.com/embed/videoseries?list=PLzhN8a1aNzMzaCUwpnoAjwrTTyG033LPE">
                    <div className="playlist-button-inner">
                        <p className="button-title">Gaming Clips</p>
                    </div>    
                </button>
                <button onClick={(e) => play(e)} style={{backgroundImage: 'url()'}} className="playlist-button" id="">
                    <div className="playlist-button-inner" style={{}}>
                        <p className="button-title">Other</p>
                    </div>
                </button>
            </div>
            <div style={{marginTop: '25px', border: 'outset 3px', background: 'lightgray', padding: '4px 9px 4px 4px'}}>
                <h3 style={{margin: '6px 2px', color: 'black'}}>Player</h3>
                <iframe id="yt-player" style={{aspectRatio: '16/9', border: "inset 3px", outline: "black solid 1px"}} width="100%" height="100%" src={playlist} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
            </div>
        </Wrapper>
    )
}

export default YoutubeSite;