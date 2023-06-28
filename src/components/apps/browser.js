import { useState, useEffect, useContext } from 'react';
import { Rnd } from 'react-rnd';
import { LinkContext } from '../context';
import SiteChanger from './sitechanger';

import './browser.css';

const Browser = () => {

    const [addBar, setAddBar] = useState('http://www.home.com/');
    const [state, dispatch] = useContext(LinkContext);

    const onClick = () => {
        dispatch({type: 'update_app', browser: state.browser, deskBrowser: !state.deskBrowser, notes: state.notes, history: state.history})
    }

    useEffect(() => {
        dispatch({type: 'update_link', link: addBar})
    }, [addBar])

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

    const FavBar = () => {
        var favList = ['http://home.com/', 'C:/AE/', 'C:/VS/', 'http://twitter.com/', 'http://youtube.com/', 'http://nnexsus-weather.netlify.app/']
        return (
            <div style={{display: 'flex'}}>
                {favList.map((fav) => (
                    <button className='button-on-bar2' onClick={(e) => setAddBar(e.currentTarget.id)} id={fav} key={fav + Math.random()} style={{display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                        <img loading='lazy' alt='decor' width={'15px'} height={'15px'} src='/images/panels/georadio/explorer/Blank sheet.ico' /><p style={{padding: '0', margin: '0', color: 'black'}}>{fav}</p>
                    </button>
                ))}
            </div>
        )
    }

    return (
        <Rnd default={{
                x: 0,
                y: document.getElementById('desktop-bounds').offsetTop,
                width: 600,
                height: 410,
            }}
            resizeGrid={[64, 36]}
            dragGrid={[64, 36]}
            cancel={'.content'}
            bounds={"#desktop-bounds"}
            minHeight={288}
            minWidth={512}
            style={{backgroundColor: "#C0C7C8", border: "groove 2px"}}>
                <div style={{display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '25px 21px 3px 13px 40px 27px', overflow: 'hidden'}}>
                    <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img loading='lazy' alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='images/panels/georadio/explorer/webdoc.png'/>
                            <h4 className='title' style={{marginLeft: '2px'}}>Internet Explorer - {state.link}</h4>
                        </div>
                        <div className='buttons content' style={{marginRight: '1px'}}>
                            <button className='top-button X' onClick={() => onClick()}><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>X</p></button>
                            <button className='top-button m'><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>◻</p></button>
                            <button className='top-button m' onClick={() => onClick()}><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>_</p></button>
                        </div>
                    </div>

                    <div className='buttons-bar' style={{width: '100%', height: '24px', display: 'flex', alignItems: 'center', gridRow: 4}}>
                        <button title='Home' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' onClick={() => setAddBar('http://www.home.com/')} src='images/panels/georadio/explorer/Home.png' width={'20px'} height={'20px'}/></button>
                        <button title='Back' className='button-on-bar'><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/arrowl-lit.png' width={'20px'} height={'20px'}/></button>
                        <button title='Forward' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/arrowr-unlit.png' width={'20px'} height={'20px'}/></button>
                        <button title='Unload' className='button-on-bar'><img loading='lazy' alt='decor' onClick={() => setAddBar('')} src='images/panels/georadio/explorer/Shred.png' width={'20px'} height={'20px'}/></button>
                        <button title='Refresh' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/Refresh.png' width={'20px'} height={'20px'}/></button>
                        <button title='New Folder' className='button-on-bar'><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/New folder.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy to Folder' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/Copy to Folder.png' width={'20px'} height={'20px'}/></button>
                        <button title='Upscale Text' className='button-on-bar'><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/upsize.png' width={'20px'} height={'20px'}/></button>
                        <button title='Downscale Text' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/downsize.png' width={'20px'} height={'20px'}/></button>
                        <button title='Cut' className='button-on-bar'><img loading='lazy' alt='decor' onClick={() => navigator.clipboard.writeText(addBar)} src='images/panels/georadio/explorer/Cut.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy' className='button-on-bar'><img loading='lazy' alt='decor' onClick={() => navigator.clipboard.writeText(addBar)} src='images/panels/georadio/explorer/Copy.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy to Clipboard' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/Paste.png' width={'20px'} height={'20px'}/></button>
                    </div>
                    <div className='address-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                        <p style={{color: 'black', marginRight: '3px'}}>Address:</p>
                        <input type={'text'} value={state.link} placeholder='https://www.youtube.com/watch?v=6j18-JVmf7w' disabled={false}
                        style={{fontFamily: "W95FA", width: "80%", backgroundColor: 'white', border: 'inset 2px'}} onChange={(e) => setAddBar(e.currentTarget.value)}/>
                    </div>

                    <div style={{gridRow: 5, display: 'flex', alignItems: 'center', margin: '12px 0 0 0', border: 'inset 3px'}} className='favorite-bar'>
                        <p style={{color: 'black', margin: '0', padding: '0'}}>Favorites:</p><img loading='lazy' alt='decor' style={{imageRendering: 'pixelated'}} width={'25px'} height={'25px'} src='/images/panels/georadio/explorer/star.ico' />
                        <FavBar/>
                    </div>
                    
                    <div className='file-bar content' onMouseLeave={() => hideDrops()} style={{width: '100%', height: '25px', display: 'flex', alignItems: 'flex-start', gridRow: '2'}}>
                        <button className='files' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}>File</p>
                            <div className='hidemenu dropmenu'>
                                <p onClick={() => setAddBar('http://www.georadio.net/')} className='file'>Back</p>
                                <p onClick={() => setAddBar(addBar)} className='file'>Refresh</p>
                                <p onClick={() => window.open('https://github.com/nnexsus/georadio', '_blank')} className='file'>Edit</p>
                                <p onClick={() => onClick()} className='file X'>Close</p>
                            </div>
                        </button>

                        <button className='edits' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}>Edit</p>
                        <div className='hidemenu dropmenu'>
                                <p onClick={() => navigator.clipboard.writeText(addBar)} className='edit'>Copy Link</p>
                                <p onClick={() => window.open('https://www.youtube.com/@_nexsus/playlists', '_blank')} className='edit'>Radios</p>
                                <p onClick={() => window.open('https://www.youtube.com/@_nexsus/playlists', '_blank')} className='edit'>Songs</p>
                                <p onClick={() => window.open('https://github.com/nnexsus/georadio', '_blank')} className='edit'>Pages</p>
                            </div>
                        </button>

                        <button className='views' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}>View</p>
                        <div className='hidemenu dropmenu'>
                                <p className='view'>Zoom</p>
                                <p className='view'>Find</p>
                                <p className='view'>Snapshot</p>
                            </div>
                        </button>

                        <button className='favorites' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}>Favorites</p>
                        <div className='hidemenu dropmenu'>
                                <p className='favorite'>Favorite Page</p>
                                <p className='favorite'>Remove Page</p>
                                <p className='favorite'>Removal All</p>
                            </div>
                        </button>

                        <button className='helps' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}>Help</p>
                        <div className='hidemenu dropmenu'>
                                <p onClick={() => setAddBar('//help/navigating/')} className='help'>Navigating</p>
                                <p onClick={() => setAddBar('//help/listening/')} className='help'>Listening</p>
                                <p onClick={() => setAddBar('//help/apps/')} className='help'>Apps</p>
                                <p onClick={() => setAddBar('http://www.home.com')} className='help'>Home</p>
                            </div>
                        </button>
                    </div>
                    <hr style={{height: '1px', width: '100%', gridRow: 3, margin: 0}} />
                </div>
                <SiteChanger/>
        </Rnd>
    )
}

export default Browser;