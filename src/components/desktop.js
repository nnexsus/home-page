import { Wrapper } from './desktop.styles';

import Weather from './apps/weather/weather';
import About from './apps/about/about';
import Gallery from './apps/gallery/gallery';
import Twitter from './apps/twitter/twitter';
import Youtube from './apps/youtube/youtube';
import AfterEffects from './apps/afterEffects/afterEffects';
import VisualStudio from './apps/visualStudio/visualStudio';
import Settings from './apps/settings/settings';

import Clock from './clock/clock';
import Calendar from './calendar/calendar';
import Stats from './stats/stats';
import Trello from './trello/trello';
import Notes from './apps/notes/note';

const Desktop = () => {

    return (
        <Wrapper>
            <About id="app"></About>
            <Weather id="app"></Weather>
            <Youtube id="app"></Youtube>
            <Twitter id="app"></Twitter>  
            <AfterEffects id="app"></AfterEffects>
            <VisualStudio id="app"></VisualStudio>
            <Gallery id="app"></Gallery>
            <Settings id="app"></Settings>
            

            <Clock className="clock"></Clock>
            <Calendar className="calendar"></Calendar>
            <Stats className="stats"></Stats>
            <Notes className="notes"></Notes>
        </Wrapper>
    )
}

export default Desktop;