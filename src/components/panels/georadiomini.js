import { useContext } from 'react';
import { LinkContext } from '../context';

import './css/georadio.css';

const GeoRadioMini = () => {

    const [state, dispatch] = useContext(LinkContext);
    
    const onImgClick = (link) => dispatch({type: 'update_link', link: link, browser: true})

    return (
        <div className='georadiomini' id='radiomini'>
            <div style={{display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '25px 21px 27px calc(100% - 76px)', overflow: 'hidden', height: '100%'}}>
                <div className='top-bar active-toggle-bar' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/panels/georadio/Earth (16 colors).ico'/>
                        <h4 className='active-toggle-text text-overflow' style={{marginLeft: '2px'}}>Internet Explorer</h4>
                    </div>
                    <div className='buttons content' style={{marginRight: '1px', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                        <button className='top-button X'><img loading='lazy' alt='x' width={'9px'} height={'9px'} src='/images/panels/georadio/explorer/X.png'/></button>
                        <button className='top-button m'><img loading='lazy' alt='x' width={'9px'} height={'9px'} src='/images/panels/georadio/explorer/Maximize.png'/></button>
                        <button className='top-button m'><img loading='lazy' alt='x' width={'9px'} height={'9px'} src='/images/panels/georadio/explorer/Minimize.png'/></button>
                    </div>
                </div>

                <div className='address-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                    <p style={{color: 'black', marginRight: '3px', fontSize: '14px', marginLeft: '5px',}}>Address:</p>
                    <input type={'text'} value={'https://georadio.live/'} placeholder='https://www.youtube.com/watch?v=6j18-JVmf7w' disabled
                    style={{fontFamily: "W95FA", width: "80%", backgroundColor: 'white'}} className='address-input'/>
                    <button title='Favorite' style={{marginLeft: '5px'}} className='button-on-bar'><img alt='decor' src='/images/panels/georadio/explorer/Earth Rating Document.ico' width={'20px'} height={'20px'}/></button>
                </div>

                <div className='file-bar content' style={{zIndex: 10, width: '25%', height: '21px', marginLeft: '5px', display: 'flex', alignItems: 'flex-start', gridRow: '2'}}>
                    <button className='files' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}}><u>F</u>ile</p></button>
                    <button className='edits' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}}><u>E</u>dit</p></button>
                    <button className='views' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}}><u>V</u>iew</p></button>
                    <button className='favorites' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}}><u>F</u>avorites</p></button>
                    <button className='helps' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}}><u>H</u>elp</p></button>
                </div>

                <div className='content' style={{border: 'inset 2px', cursor: 'default', height: '100%'}}>
                
                {state.visits.georadio ? <h1 style={{background: 'green', margin: 0, padding: 0}}>Thank you for visiting GeoRadio!</h1> : null}

                    <div id="website" style={{width: '100%', height: '100%', backgroundImage: `url(/images/panels/georadio/tile.jpg)`, paddingTop: '10px'}}>
                        <div className='opener' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                            <h4 style={{backgroundColor: 'red', margin: '3px', color: 'white', padding: '0 3px'}}>Update 2!! LIQUID_ELECTRUM, info <a href='#georadio'>HERE</a></h4>
                            <h3 style={{color: 'rgb(255, 0, 153)', fontFamily: 'serif', fontSize: '30px', margin: '3px', whiteSpace: 'nowrap'}}>.::Welcome to GeoRadio::.</h3>
                            <img src='/images/panels/georadio/logo512.png' alt='decor' width={'50px'} height={'50px'} />
                            <hr style={{width: '80%', height: '1px'}}/>
                            <a href='https://georadio.live/' target='_blank' rel='noreferrer'><p style={{color: 'rgb(51, 255, 204)', fontFamily: 'serif', margin: '0 20px', fontSize: '18px'}}>GeoRadio, The 24.7 Web Radio!!</p></a>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default GeoRadioMini;