import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import React, { useState } from 'react';

import { Img } from '../../desktop.styles';

const Wrapper = styled.div`

    grid-column-start: 2;
    grid-row-end: 3;

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

const Certs = () => {

    const [showNotes, setShowNotes] = useState(false);
    const onClick = () => setShowNotes(showNotes ? false : true);

    return (
    <Wrapper>
        <div>
            <button onClick={() => onClick()}>
                <Img alt='notes icon' src={'/images/desktop/Notes-logo.webp'}></Img>
                <p className='appName'>Certs</p>
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
                minHeight={288}
                minWidth={512}
                data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container" 
                    style={{ 
                        opacity: "0.95",
                    }}>
                    <h2 className='title'>Certifications</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        }}>X</button>
                        <div className='setContainer'>
                            <embed src="/comptiaaplus.pdf" width={"100%"} height={"750px"} />
                        </div>
                    </Rnd>                
                : 
                <div data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>Certifications</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        }}>X</button>
                        <div className='setContainer'>
                          <embed src="/comptiaaplus.pdf" width={"100%"} height={"750px"} />
                        </div>
                    </div>                
                }

            </Open>
        : null}

    </Wrapper>
    )
}

export default Certs;