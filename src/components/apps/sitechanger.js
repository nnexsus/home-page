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


const SiteChanger = ({number}) => {

    const [state, dispatch] = useContext(LinkContext);
    
    return (
        <div className='content geoslider' style={{border: 'inset 2px', cursor: 'default', scrollBehavior: 'smooth', height: '-moz-calc(100% - 133px)', height: '-webkit-calc(100% - 133px)', height: 'calc(100% - 133px)', overflowY: 'scroll', overflowX: 'hidden'}}>
            <div id='browser-scrollto'></div>
        {state.addbar.includes('http://home.com/') || state.addbar.includes('http://www.home.com/') ? <Home number={number}/> :
        state.addbar.includes('http://twitter.com/') || state.addbar.includes('http://www.twitter.com/') ? <TwitterSite number={number}/> :
        state.addbar.includes('http://youtube.com/') || state.addbar.includes('http://www.youtube.com/') ? <YoutubeSite number={number}/> :
        state.addbar.includes('http://nnexsus-weather.netlify.app/') || state.addbar.includes('http://www.nnexsus-weather.netlify.app/') ? <WeatherSite number={number}/> :
        state.addbar.includes('C:/AE/') ? <AE number={number}/> :
        state.addbar.includes('C:/VS/') ? <VS number={number}/> 
         : <Empty number={number}/>
         }
     </div>
    )
}

export default SiteChanger;