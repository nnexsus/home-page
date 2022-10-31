import styled from 'styled-components';
import { useState } from 'react';
import App from '../../App';

import icon from '../../images/planetIcon.png';

const Wrapper = styled.div`
    grid-row-start: 6;
    grid-column: span 6;
    height: 100%;
    background-color: var(--accentTheme);
    border-radius: 10px;
    
    .nnButton {
        background-color: #89D2DC;
        border: 1px solid white;
        border-radius: 10px;
        transform: scale(1.25);
        cursor: pointer;

        transition: 0.2s ease-in-out;

        img {
            width: 85px;
            border-radius: 10px;
        }

        :hover {
            filter: brightness(0.8);
        }
    }

    .panel {
        position: absolute;
        padding: 10px;
        margin-top: -70px;
        margin-left: 5px;

        button {
            padding: 20px;
            background-color: #89D2DC;
            border: 1px solid white;
            border-radius: 10px;
            cursor: pointer;

            transition: 0.2s ease-in-out;

            :hover {
                filter: brightness(0.8);
            }
        }
    }

`;

const Taskbar = () => {

    const [panel, setPanel] = useState('false')
    const onClick = () => {
        setPanel(panel ? false : true)
    }

    const [screen, setScreen] = useState("true")
    const turnOff = () => {
        setScreen(screen? false: true)
        App.updateScreen(screen)
    }

    return (
        <Wrapper>
            {panel ?
                <div className='panel'>
                    <button onClick={() => turnOff()}>Turn Off</button>
                </div> 
            : null
            }
            <div className='bar'>
                <button className='nnButton' onClick={() => onClick()}><img alt='icon' src={icon}/></button>
                le taske bar
            </div>
        </Wrapper>
    )

}

export default Taskbar;