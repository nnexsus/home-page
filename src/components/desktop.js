import { Overhead, Wrapper } from './desktop.styles';
import { useState, lazy, Suspense } from 'react';

import Clock from './clock/clock';
import Calendar from './calendar/calendar';
import Stats from './stats/stats';
import Notes from './apps/notes/note';

import SAVER from '../images/dream.webp';
import ANOM from '../images/anomalybg.webp';
import LOADING from '../images/loading.webp';
import Certs from './apps/certs/certs';
import Resume from './apps/resume/resume';

const About = lazy(() => import('./apps/about/about'));
const Weather = lazy(() => import('./apps/weather/weather'));
const Twitter = lazy(() => import('./apps/twitter/twitter'));
const Youtube = lazy(() => import('./apps/youtube/youtube'));
const AfterEffects = lazy(() => import('./apps/afterEffects/afterEffects'));
const VisualStudio = lazy(() => import('./apps/visualStudio/visualStudio'));
const Settings = lazy(() => import('./apps/settings/settings'));

const Desktop = () => {

    const backgrounds = [ANOM, LOADING, SAVER]

    const [desktopOn, setDesktopOn] = useState(false)
    const [bgNum, setBgNum] = useState(2);

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

    const fallback = () => <p>Loading...</p>;

    return (
        <Overhead>
            {desktopOn ? 
                <Wrapper style={{backgroundImage: `url(${backgrounds[bgNum]})`}}>
                    <Suspense fallback={fallback}>
                        <About id="app"></About>
                        <Weather id="app"></Weather>
                        <Youtube id="app"></Youtube>
                        <Twitter id="app"></Twitter>  
                        <AfterEffects id="app"></AfterEffects>
                        <VisualStudio id="app"></VisualStudio>
                        <Settings id="app"></Settings>
                        <Certs id="app"></Certs>
                        <Resume id="app"></Resume>
                        
                        <Clock className="clock"></Clock>
                        <Calendar className="calendar"></Calendar>
                        <Stats className="stats"></Stats>
                        <Notes className="notes"></Notes>
                        <div className='powerButton' style={{gridColumn: "6", gridRow: "6"}}>
                            <h2>Power Off: </h2>
                            <button onClick={() => onClick()}>POWER</button>
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