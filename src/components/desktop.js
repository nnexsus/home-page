import { Overhead, Wrapper } from './desktop.styles';
import { useState, lazy, Suspense } from 'react';

import Weather from './apps/weather/weather';
//import About from './apps/about/about';
import Gallery from './apps/gallery/gallery';
import Twitter from './apps/twitter/twitter';
import Youtube from './apps/youtube/youtube';
import AfterEffects from './apps/afterEffects/afterEffects';
import VisualStudio from './apps/visualStudio/visualStudio';
import Settings from './apps/settings/settings';

import Clock from './clock/clock';
import Calendar from './calendar/calendar';
import Stats from './stats/stats';
import Notes from './apps/notes/note';

import SAVER from '../images/dream.webp';
import MOON from '../images/solarbg.png';
import LOADING from '../images/loading.webp';
import Certs from './apps/certs/certs';
import Resume from './apps/resume/resume';

const About = lazy(() => import('./apps/about/about'));

const Desktop = () => {

    const backgrounds = [MOON, LOADING, SAVER]

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

    const fallback = () => <p>...</p>;

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
                        <Gallery id="app"></Gallery>
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