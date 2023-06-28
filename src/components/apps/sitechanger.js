import { useContext } from 'react';
import { LinkContext } from '../context';
//comps
import Empty from './sites/404';
import Home from './sites/home';
import TwitterSite from './sites/twitter';
import YoutubeSite from './sites/youtube';
import WeatherSite from './sites/weather';
import AE from './sites/ae';
import VS from './sites/vs';


const SiteChanger = () => {

    const [state, dispatch] = useContext(LinkContext);
    
    return (
        <div className='content' style={{border: 'inset 2px', cursor: 'default', height: '-moz-calc(100% - 133px)', height: '-webkit-calc(100% - 133px)', height: 'calc(100% - 133px)', overflowY: 'scroll', overflowX: 'hidden'}}>
            <div id='scrollto'></div>
        {state.link.includes('http://home.com/') || state.link.includes('http://www.home.com/') ? <Home/> :
        state.link.includes('http://twitter.com/') || state.link.includes('http://www.twitter.com/') ? <TwitterSite/> :
        state.link.includes('http://youtube.com/') || state.link.includes('http://www.youtube.com/') ? <YoutubeSite/> :
        state.link.includes('http://nnexsus-weather.netlify.app/') || state.link.includes('http://www.nnexsus-weather.netlify.app/') ? <WeatherSite/> :
        state.link.includes('C:/AE/') ? <AE/> :
        state.link.includes('C:/VS/') ? <VS/> 
         : <Empty/>
         }
     </div>
    )
}

export default SiteChanger;