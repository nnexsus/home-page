import { useContext } from 'react';
import { LinkContext } from '../../context';

const Empty = () => {

    const [state, dispatch] = useContext(LinkContext);

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link})
    }

    return (
        <div id="empty" style={{width: '100%', backgroundImage: `url(/images/desktop/sitemedia/tile2.jpg)`, paddingTop: '10px'}}>
            <div className='opener' style={{textAlign: 'center', backgroundImage: 'url(/images//desktop/sitemedia/starbd.gif)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset'}}>
                <h1 style={{fontFamily: 'serif'}}>Error 404 --webpage-not-found.</h1>
                <hr style={{width: '80%', height: '1px'}}/>
                <p style={{fontFamily: 'serif', margin: '0 20px'}}>Could not find a webpage at the requested address!</p>
                <p style={{fontFamily: 'serif', margin: '0 20px', opacity: 0.5}}>Navigate to a valid site using the links in the favorite bar above.</p>
            </div>
        </div>
    )
}

export default Empty;