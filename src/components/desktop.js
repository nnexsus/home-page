import { Overhead, Wrapper } from './desktop.styles';
import { useState, Suspense, useContext } from 'react';
import { LinkContext } from './context';

import Clock from './clock/clock';
import Calendar from './calendar/calendar';
import Stats from './stats/stats';
import Notes from './apps/notes/note';

import SAVER from '../images/dream.webp';
import ANOM from '../images/anomalybg.webp';
import LOADING from '../images/loading.webp';
import Certs from './apps/certs/certs';
import Resume from './apps/resume/resume';
import Browser from './apps/browser';

const Desktop = () => {

    const backgrounds = [ANOM, LOADING, SAVER]

    const [desktopOn, setDesktopOn] = useState(false)
    const [bgNum, setBgNum] = useState(2);
    const [state, dispatch] = useContext(LinkContext);

    const onClick = () => {
        setBgNum(1)
        setTimeout(() => {
            setDesktopOn(!desktopOn)
            setBgNum(0)
            if (desktopOn) {
                setBgNum(2)
            }
        }, 400)
    }

    const toggleBrowser = () => {
        dispatch({type: 'update_app', browser: state.browser, deskBrowser: !state.deskBrowser, notes: state.notes})
    }

    const fallback = () => <p>Loading...</p>;

    return (
        <Overhead>
            {desktopOn ? 
                <Wrapper id='desktop-bounds' style={{backgroundImage: `url(${backgrounds[bgNum]})`}}>
                    <Suspense fallback={fallback}>
                        <div className='desktop-icon' style={{gridColumn: 1, gridRow: 1, margin: '15px', backgroundImage: 'url(/images/desktop/Earth.ico)'}} onClick={() => toggleBrowser()}>
                            <p style={{marginTop: '50px'}}>Internet Explorer</p>
                        </div>
                        <Certs id="app"></Certs>
                        <Resume id="app"></Resume>
                        <Notes className="notes"></Notes>
                        
                        <Clock className="clock"></Clock>
                        <Calendar className="calendar"></Calendar>
                        <Stats className="stats"></Stats>
                        <div className='powerButton' style={{gridColumn: "6", gridRow: "6"}}>
                            <h2>Power Off: </h2>
                            <button onClick={() => onClick()}>POWER</button>
                        </div>
                        <div style={{position: 'absolute', top: '0'}}>
                            {state.deskBrowser ?
                                <Browser/>
                            : null}
                        </div>
                    </Suspense>
               </Wrapper>     
            : 
            <Wrapper id='desktopOffWrapper' style={{backgroundImage: `url(${backgrounds[bgNum]})`}}>
                <div className='powerButton'>
                    <h2>Power On: </h2>
                    <button onClick={() => onClick()}>POWER</button>
                </div>
            </Wrapper>
            }
        </Overhead>
    )
}

export default Desktop;