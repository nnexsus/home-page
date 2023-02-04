import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import React, { useState } from 'react';

import { Img } from '../../desktop.styles';

const Wrapper = styled.div`

    grid-column-start: 6;
    grid-row-end: 2;

    button {
        width: 100px;
        height: 100px;
        padding: 10px;
        background: none;
        border: none;
    }

    button:hover {
        border: lightblue dashed 2px;
    }

    a {
        color: var(--accentTheme);
        text-shadow: 0px 0px 3px var(--accentTheme);
    }

    @media screen {
        
    button {
        width: 75px;
        height: 75px;
        padding: 10px;
        background: none;
        border: none;
    }

    }
`;

const Open = styled.div`

    display: flex;

    .setContainer {
        padding: 5px;
        margin: 5px;
        margin-top: 20px;
    }
`;

const Glitch = styled.div`

animation: glitch 1s linear infinite;

margin-top: 20px;
font-size: 20px;

@keyframes glitch{
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
}

:before,
:after{
  content: attr(title);
  position: absolute;
  left: 0;
}

:before{
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop{
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}

:after{
  animation: glitchBottom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBottom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}
`;

const Notes = () => {

    const [showNotes, setShowNotes] = useState(false);
    const onClick = () => setShowNotes(showNotes ? false : true);

    return (
    <Wrapper>
        <div>
            <button onClick={() => onClick()}>
                <Img alt='notes icon' src={'/images/desktop/Notes-logo.webp'}></Img>
                <p className='appName'>notes</p>
            </button>
        </div>
        {showNotes ? 
            <Open id="notesApp">
                {window.innerWidth > 720 ? 
                <Rnd default={{
                    x: 0,
                    y: 0,
                    width: 800,
                    height: 400,
                }}
                resizeGrid={[64, 36]}
                dragGrid={[64, 36]}
                bounds={"#desktop"}
                minHeight={392}
                minWidth={688}
                data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container" 
                    style={{ 
                        opacity: "0.95",
                    }}>
                    <h2 className='title'>notes</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        }}>X</button>
                        <div className='setContainer'>
                            <Glitch><textarea value={"aHR0cHM6Ly95b3V0dS5iZS9qWEh2T3J0NUZCTQ=="}></textarea></Glitch>
                        </div>
                    </Rnd>                
                : 
                <div data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>notes</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        }}>X</button>
                        <div className='setContainer'>
                            <Glitch><textarea value={"aHR0cHM6Ly95b3V0dS5iZS9qWEh2T3J0NUZCTQ=="}></textarea></Glitch>
                        </div>
                    </div>                
                }

            </Open>
        : null}

    </Wrapper>
    )
}

export default Notes;