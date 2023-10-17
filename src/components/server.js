import styled from 'styled-components';
import { useContext } from 'react';

import { LinkContext } from './context';

import './css/server.css';

const Server = () => {

    const [state, dispatch] = useContext(LinkContext);
    
    const onImgClick = (link) => dispatch({type: 'update_link', link: link, browser: true})

    return (
        <div className='server-container' data-augmented-ui="tl-2-scoop-xy tr-2-scoop-xy br-2-scoop-xy bl-2-scoop-xy both" id='server'>
            <div className='bg-container'>
            <div className='container'>
                {state.visits.nnserver ? <h3 style={{background: 'green', margin: 0, padding: 0}}>Thank you for visiting nnexsus-server!</h3> : null}
                <div className='container-2'>
                    <h1 className='server-h1'>nnexsus-server</h1>
                    <p style={{background: 'red', color: 'white', textAlign: 'center'}}>Update v1.2 [AMETHYST_UPDATE] is out!!</p>
                    <h3 style={{color: 'white', textAlign: 'center'}}>A google drive like cloud file hosting server.</h3>
                    <p style={{color: 'white', textAlign: 'center'}}>nnexsus-server is a cloud file hosting server similar to google drive. Sign up for a <b>free 50Gb storage!</b></p>
                    <ul className='server-ul' style={{listStyle: "square", color: "white", textAlignLast: "left"}}>
                        <li><p style={{color: "lightgreen"}}>Save large files, <b>secured and uncompressed</b> to prevent data loss!</p></li>
                        <li><p style={{color: "lightgreen"}}>Share files for others to download.</p></li>
                        <li><p style={{color: "lightgreen"}}>Connected <b>discord bot</b> to save and fetch files directly through discord!</p></li>
                    </ul>
                    <img className='server-img' loading={'lazy'} onClick={(e) => onImgClick(e.currentTarget.src)} style={{cursor: 'pointer'}} alt='nnexsus-server logo' width={"100px"} height={'100px'} src={'/images/opener/logofull.webp'} />
                    <button className='server-button'><a style={{color: 'white'}} href='https://nnexsus-server.netlify.app'>Join nnexsus-server here!</a></button>
                    <h3 style={{color: 'white', textAlign: 'center'}}>Amethyst Update Changelog:</h3>
                    <ul style={{listStyle: "square", color: "white", textAlignLast: "left"}}>
                        <li><p style={{color: "lightgreen"}}>Rebuilt Filesharing!</p></li>
                        <li><p style={{color: "lightgreen"}}>New condensed and faster file UI!</p></li>
                        <li><p style={{color: "lightgreen"}}>New file previews, network downsizing, faster uploads, and more!!</p></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Server;