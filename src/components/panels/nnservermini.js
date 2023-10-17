import { useContext } from 'react';
import { LinkContext } from '../context';

import '../css/nnservermini.css';

const NNServerMini = () => {

    const [state, dispatch] = useContext(LinkContext);
    
    const onImgClick = (link) => dispatch({type: 'update_link', link: link, browser: true})

    return (
        <div className='nnsmini'>
            <div style={{marginTop: '-20px', height: '100%'}} id='servermini'>
                <div style={{height: '100%'}} className='nnsmini-container'>
                    {state.visits.nnserver ? <h3 style={{background: 'green', margin: 0, padding: 0}}>Thank you for visiting nnexsus-server!</h3> : null}
                    <div className='nnsmini-container-2'>
                        <p style={{background: 'red'}}>Update v1.2 [AMETHYST_UPDATE] is out!!</p>
                        <h1>nnexsus-server</h1>
                        <h3>A google drive like cloud file hosting server.</h3>
                        <button><a href='#server'>Learn more here!</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NNServerMini;