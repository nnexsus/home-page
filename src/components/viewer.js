import styled from 'styled-components';
import { useState, useEffect, useContext, useRef } from 'react';
import { LinkContext } from './context';

const Wrapper = styled.div`

    width: 100%;
    margin: 25px auto 0;
    position: fixed;
    z-index: 12;

    .viewer {
        margin: 0 30px;
        max-height: 90vh;
        --aug-border-all: 2px;
        --aug-border-bg: var(--accentTheme);
        --aug-inlay-bg: rgba(0, 0, 0, 0.7);
        --aug-t-center: 436px;
        filter: drop-shadow(0px 0px 7px white);
        display: flex;
        overflow-y: scroll;
    }

    .buttons {
        margin-left: 50px;
    }

    button {
        background: rgba(0, 0, 0, 0.2);
        margin-top: 5px;
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

        a {
            color: white;
            text-decoration: none;
        }
    }

    .rightSide {
        margin-left: 18px;
        font-size: 40px;
        margin-top: -40px;
    }

    .font {
        font-family: monospace;
        color: #ffffff;
        text-shadow: 0px 0px 6px black;
        -webkit-text-stroke: var(--accentTheme);
        -webkit-text-stroke-width: 1px;
        letter-spacing: 4px;
    }

    .buttons {

        margin-right: 10px;
        margin-left: auto;
        transition: 0.2s ease-in-out;

        h1 {
            margin: 0;
            transition: 0.2s ease-in-out;
        }

        :hover {
            scale: 1.1;

            h1 {
                margin: 5px;
            }
        }
    }
`;


const Viewer = () => {

    const [visible, setVisible] = useState(false)
    const [state, dispatch] = useContext(LinkContext);

    const isMounted = useRef(false)

    useEffect(() => {
        if (isMounted.current) {
            console.log('test1', state)
            setVisible(state.browser)
        } else {
            isMounted.current = true
        }
    }, [state])

    useEffect(() => {

    })

    const onClick = () => {
        dispatch({type: 'update_link', link: null, browser: false})
    }

    return (
        <Wrapper>
            {visible ?
                <div data-augmented-ui="tl-clip t-rect-x br-clip bl-rect-x both" className="viewer">
                    <div style={{display: 'grid', gridTemplateColumns: '50% 50%', gridTemplateRows: '10vh 10vh 90vh', width: '100%'}}>
                        <div className='rightSide'>
                            <p className='font'>Photo Viewer</p>
                        </div>
                        <div className='buttons'>
                            <button onClick={() => onClick()}><h1>Close</h1></button>
                        </div>
                        <h2 className='font' style={{fontSize: '30px', gridColumn: 'span 2', marginLeft: '10px'}}>Currently viewing: 
                            <b style={{WebkitTextStroke: 'black', fontSize: '25px', background: 'rgba(0,0,0,0.4)', borderRadius: '15px', padding: '5px'}}>{state.link}</b>
                        </h2>
                        <img style={{gridColumn: 'span 2', margin: '0 auto', border: 'solid 5px var(--accentThemeDarker)', boxShadow: '0 0 5px white'}} src={`${state.link}`} width="80%"/>
                    </div>
                </div>
            : null}
        </Wrapper>
    )

}

export default Viewer;