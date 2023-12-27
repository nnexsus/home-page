import { useContext } from 'react';
import { LinkContext } from '../context';

const GeoRadio = () => {

    const [state, dispatch] = useContext(LinkContext);
    
    const onImgClick = (link) => dispatch({type: 'update_link', link: link, browser: true})

    const showDrops = () => {
        document.querySelectorAll('.dropmenu').forEach((el) => {
            el.classList.remove('hidemenu')
        })
    }

    const hideDrops = () => {
        document.querySelectorAll('.dropmenu').forEach((el) => {
            el.classList.add('hidemenu')
        }) 
    }

    return (
        <div className='georadio' id='radio'>
            <div style={{backgroundColor: "#C0C7C8", border: "groove 2px"}}>
            <div style={{display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '25px 21px 3px 29px', overflow: 'hidden'}}>
                <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img loading='lazy' alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='images/panels/georadio/explorer/webdoc.png'/>
                        <h4 className='title' style={{marginLeft: '2px', width: '90%', color: 'white', fontFamily: 'W95FA', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Internet Explorer - GeoRadio Web Radio</h4>
                    </div>
                    <div className='buttons content' style={{marginRight: '1px', display: 'flex', flexDirection: 'row-reverse'}}>
                        <button className='top-button X'><img loading='lazy' alt='x' width={'9px'} height={'9px'} src='/images/panels/georadio/explorer/X.png'/></button>
                        <button className='top-button m'><img loading='lazy' alt='x' width={'9px'} height={'9px'} src='/images/panels/georadio/explorer/Maximize.png'/></button>
                        <button className='top-button m'><img loading='lazy' alt='x' width={'9px'} height={'9px'} src='/images/panels/georadio/explorer/Minimize.png'/></button>
                    </div>
                </div>

                <div className='buttons-bar' style={{margin: '2px 0 2px 10px', width: 'calc(100% - 10px)', height: '24px', display: 'flex', alignItems: 'center', gridRow: 4}}>
                    <button title='Home' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/Home.png' width={'20px'} height={'20px'}/></button>
                    <button title='Back' className='button-on-bar'><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/arrowl-lit.png' width={'20px'} height={'20px'}/></button>
                    <button title='Forward' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/arrowr-unlit.png' width={'20px'} height={'20px'}/></button>
                    <button title='Unload' className='button-on-bar'><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/Shred.png' width={'20px'} height={'20px'}/></button>
                    <button title='Refresh' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/Refresh.png' width={'20px'} height={'20px'}/></button>
                    <button title='New Folder' className='button-on-bar'><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/New folder.png' width={'20px'} height={'20px'}/></button>
                    <button title='Copy to Folder' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/Copy to Folder.png' width={'20px'} height={'20px'}/></button>
                    <button title='Upscale Text' className='button-on-bar'><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/upsize.png' width={'20px'} height={'20px'}/></button>
                    <button title='Downscale Text' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/downsize.png' width={'20px'} height={'20px'}/></button>
                    <button title='Cut' className='button-on-bar'><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/Cut.png' width={'20px'} height={'20px'}/></button>
                    <button title='Copy' className='button-on-bar'><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/Copy.png' width={'20px'} height={'20px'}/></button>
                    <button title='Copy to Clipboard' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/Paste.png' width={'20px'} height={'20px'}/></button>
                </div>

                <div className='address-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                    <p style={{color: 'black', marginRight: '3px', textShadow: 'none'}}>Address:</p>
                    <input type={'text'} value={'https://georadio.live/'} placeholder='https://www.youtube.com/watch?v=6j18-JVmf7w' disabled
                    style={{fontFamily: "W95FA", width: "80%", backgroundColor: 'white', border: 'inset 2px'}}/>
                </div>

                <div className='file-bar content' onMouseLeave={() => hideDrops()} style={{marginLeft: '5px', zIndex: 20, width: '25%', height: '25px', display: 'flex', alignItems: 'flex-start', gridRow: '2'}}>
                    <button className='files' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}><u>F</u>ile</p>
                        <div className='hidemenu dropmenu'>
                            <p className='file'>Back</p>
                            <p className='file'>Refresh</p>
                            <p className='file'>Edit</p>
                            <p className='file X'>Close</p>
                        </div>
                    </button>
                    <button className='edits' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}><u>E</u>dit</p>
                        <div className='hidemenu dropmenu'>
                            <p className='edit'>Copy Link</p>
                            <p className='edit'>Radios</p>
                            <p className='edit'>Songs</p>
                            <p className='edit'>Pages</p>
                        </div>
                    </button>
                    <button className='views' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}><u>V</u>iew</p>
                    <div className='hidemenu dropmenu'>
                            <p className='view'>Zoom</p>
                            <p className='view'>Find</p>
                            <p className='view'>Snapshot</p>
                        </div>
                    </button>
                    <button className='favorites' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}><u>F</u>avorites</p>
                    <div className='hidemenu dropmenu'>
                            <p className='favorite'>Favorite Page</p>
                            <p className='favorite'>Remove Page</p>
                            <p className='favorite'>Removal All</p>
                        </div>
                    </button>
                    <button className='helps' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}><u>H</u>elp</p>
                    <div className='hidemenu dropmenu'>
                            <p className='help'>Navigating</p>
                            <p className='help'>Listening</p>
                            <p className='help'>Apps</p>
                            <p className='help'>Home</p>
                        </div>
                    </button>
                </div>

                <hr style={{height: '1px', width: '100%', gridRow: 3, margin: 0}} />

                <div className='content geoslider' style={{gridRow: 7, border: 'inset 2px', cursor: 'default', height: '538px', overflowY: 'scroll', overflowX: 'hidden'}}>
                
                {state.visits.georadio ? <h1 style={{background: 'green', margin: 0, padding: 0}}>Thank you for visiting GeoRadio!</h1> : null}

                    <div id="website" style={{width: '100%', backgroundImage: `url(/images/panels/georadio/tile.jpg)`, paddingTop: '10px'}}>
                        <div className='opener' style={{textAlign: 'center'}}>
                            <h1 style={{color: 'rgb(255, 0, 153)', fontFamily: 'serif', fontSize: '48px', margin: '3px'}}>.::Welcome to GeoRadio::.</h1>
                            <h3 style={{backgroundColor: 'red'}}>Update 3!! CORTEX_DRIVER, info below</h3>
                            <hr style={{width: '80%', height: '1px'}}/>
                            <p style={{color: 'rgb(51, 255, 204)', fontFamily: 'serif', margin: '0 20px'}}></p>
                            <div style={{backgroundImage: 'url(/images/panels/georadio/neonsun.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}} className='container'>
                                    <div className='container-2'>
                                        <h1>GeoRadio</h1>
                                        <h3>Join us at GeoRadio: The 24/7 online radio app!!</h3>
                                        <img loading={'lazy'} onClick={(e) => onImgClick(e.currentTarget.src)} alt='georadio logo' width={"100px"} height={'100px'} style={{cursor: 'pointer'}} src='/images/panels/georadio/logo512.png' />
                                        <button className='button-on-bar2'><a rel='noreferrer' target='_blank' href='https://georadio.netlify.app/' style={{color: 'black'}}>Listen here!!</a></button>
                                    </div>
                                </div>
                        </div>
                        <hr style={{width: '80%', height: '1px'}}/>
                        <div style={{height: '600px', marginTop: '50px'}}>
                            <h2 style={{color: 'rgb(255, 204, 102)', fontFamily: 'serif', textAlign: 'center'}}>About GeoRadio</h2>
                            <hr style={{width: '80%', height: '1px'}}/>
                            <div style={{textAlign: 'right'}}>
                                <img loading={'lazy'} alt='decor' src='/images/panels/georadio/musica_baile21.gif' width={'150px'} height={'150px'} style={{imageRendering: "pixelated", float: 'left'}}/>
                                <p style={{color: 'rgb(51, 255, 204)', fontFamily: 'serif', margin: '0 20px'}}>GeoRadio is a Windows95 inspired radio immersive webapp that streams music to your browser!! 
                                <br/>
                                <br/>Come hang out and listen to some music with other online listeners!
                                <br/>
                                <br/>Traverse and explore in-app sites to discover new radio stations and other hidden sites!!</p>
                            </div>
                            <hr style={{width: '80%', height: '1px'}}/>
                            <div style={{textAlign: 'right', marginBottom: '40px'}}>
                                <p style={{color: 'red', fontFamily: 'serif', margin: '0 20px'}}><b>LIQUID_ELECTRUM Update!!</b> (Update 3 - November 19th)
                                <br/>
                                <br/>Update 3 [CORTEX_DRIVER] is out!! NEW: HARD-ELECTRO CORTEX_DRIVER and chill trap Golden-Breeze radios! Also, 3 <i>user submitted</i> radios: Late Nite Swim, ZYZZ Hardstyle, and Hallowed Grounds. Radio reworks, shuffle button, direct downloads, new backgrounds, sites, and much more!!</p>
                            </div>
                            <div style={{textAlign: 'left', marginBottom: '40px'}}>
                                <p style={{color: 'lightgreen', fontFamily: 'serif', margin: '0 20px'}}><b>LIQUID_ELECTRUM Update!!</b> (Update 2 - September 30th)
                                <br/>
                                <br/>Update 2 [LIQUID_ELECTRUM] is out!! Check out the new Liquid DnB and Moe radios! Additionally, theres 7 new sites, new (in-site) emails, desktop backgrounds have been added, and an insane amount of micro-design polish and backend work done.</p>
                            </div>
                            <div style={{textAlign: 'right'}}>
                                <p style={{color: 'pink', fontFamily: 'serif', margin: '0 20px'}}>NEON_SUNRISE Update!! (Update 1 - March 26th) 
                                <br/>
                                <br/>Recently, we've added a Future Funk & Citypop radio to the app, as well as a ton of new features!!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default GeoRadio;