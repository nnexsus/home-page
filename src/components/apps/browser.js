import { useState, useEffect, useContext } from 'react';

import { LinkContext } from '../context';
import SiteChanger from './sitechanger';

import '../css/browser.css';

const Browser = ({number}) => {

    const [addBar, setAddBar] = useState('http://www.home.com/');
    const [state, dispatch] = useContext(LinkContext);

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
        var favList = ['http://home.com/', 'http://youtube.com/', 'http://twitter.com/', 'C:/AE/', 'C:/VS/']
        return (
            <div className='geoslider' style={{display: 'flex', overflowX: 'scroll', overflowY: 'hidden'}}>
                {favList.map((fav) => (
                    <button className='button-on-bar2' onClick={(e) => dispatch({type: 'update_addbar', addbar: `${e.currentTarget.id}`})} id={fav} key={fav + Math.random()} style={{display: 'flex', cursor: 'pointer', alignItems: 'center', whiteSpace: 'nowrap', width: '180px', border: '2px outset', outline: '1px solid outline', background: 'lightgray'}}>
                        <img loading='lazy' alt='decor' width={'15px'} height={'15px'} src='/images/panels/georadio/explorer/Blank sheet.ico' /><p style={{fontFamily: 'W95FA', padding: '0', margin: '0', color: 'black', textOverflow: 'ellipsis', maxWidth: '100%', overflow: 'hidden'}}>{fav}</p>
                    </button>
                ))}
            </div>
        )
    }
//                                                               this height selector is - without a doubt - the worst thing i have ever made
//                                                               look at it... github is going to ban me over this shit
//                                                               theres nothing good about it in any way, its just... there
    return (
        <div style={{backgroundColor: "#C0C7C8", border: "groove 2px", height: `${number > 0 ? "calc(100% - 19px)" : 'inherit'}`, width: '100%', boxShadow: '0 0 5px black'}}>
                <div style={{display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '25px 21px 3px 16px 39px 27px', overflow: 'hidden'}}>
                    <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img loading='lazy' alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='images/panels/georadio/explorer/webdoc.png'/>
                            <h4 className='title' style={{marginLeft: '2px', width: '60%', color: 'white', fontFamily: 'W95FA', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Internet Explorer - {state.addbar}</h4>
                        </div>
                        <div className='buttons content' style={{marginRight: '1px', display: 'flex', flexDirection: 'row-reverse'}}>
                            <button className='top-button X'><img loading='lazy' alt='x' width={'9px'} height={'9px'} src='/images/panels/georadio/explorer/X.png'/></button>
                            <button className='top-button m'><img loading='lazy' alt='x' width={'9px'} height={'9px'} src='/images/panels/georadio/explorer/Maximize.png'/></button>
                            <button className='top-button m'><img loading='lazy' alt='x' width={'9px'} height={'9px'} src='/images/panels/georadio/explorer/Minimize.png'/></button>
                        </div>
                    </div>

                    <div className='buttons-bar' style={{marginLeft: '10px', width: 'calc(100% - 10px)', height: '26px', display: 'flex', alignItems: 'center', gridRow: 4}}>
                        <button title='Home' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' onClick={() => dispatch({type: 'update_addbar', addbar: 'http://home.com/'})} src='images/panels/georadio/explorer/Home.png' width={'20px'} height={'20px'}/></button>
                        <button title='Back' className='button-on-bar'><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/arrowl-lit.png' width={'20px'} height={'20px'}/></button>
                        <button title='Forward' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/arrowr-unlit.png' width={'20px'} height={'20px'}/></button>
                        <button title='Unload' className='button-on-bar'><img loading='lazy' alt='decor' onClick={() => dispatch({type: 'update_addbar', addbar: ''})} src='images/panels/georadio/explorer/Shred.png' width={'20px'} height={'20px'}/></button>
                        <button title='Refresh' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/Refresh.png' width={'20px'} height={'20px'}/></button>
                        <button title='New Folder' className='button-on-bar'><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/New folder.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy to Folder' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/Copy to Folder.png' width={'20px'} height={'20px'}/></button>
                        <button title='Upscale Text' className='button-on-bar'><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/upsize.png' width={'20px'} height={'20px'}/></button>
                        <button title='Downscale Text' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/downsize.png' width={'20px'} height={'20px'}/></button>
                        <button title='Cut' className='button-on-bar'><img loading='lazy' alt='decor' onClick={() => navigator.clipboard.writeText(addBar)} src='images/panels/georadio/explorer/Cut.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy' className='button-on-bar'><img loading='lazy' alt='decor' onClick={() => navigator.clipboard.writeText(addBar)} src='images/panels/georadio/explorer/Copy.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy to Clipboard' className='button-on-bar' style={{marginRight: '10px'}}><img loading='lazy' alt='decor' src='images/panels/georadio/explorer/Paste.png' width={'20px'} height={'20px'}/></button>
                    </div>
                    <div className='address-bar content' style={{marginLeft: '10px', width: 'calc(100% - 10px)', height: '25px', display: 'flex', alignItems: 'center', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                        <p style={{fontFamily: 'W95FA', color: 'black', marginRight: '3px'}}>Address:</p>
                        <input type={'text'} value={state.addbar} placeholder='https://www.youtube.com/watch?v=6j18-JVmf7w' disabled={false}
                        style={{fontFamily: "W95FA", width: "80%", backgroundColor: 'white', border: 'inset 2px'}} onChange={(e) => setAddBar(e.currentTarget.value)}/>
                    </div>

                    <div style={{marginLeft: '5px', padding: '0 0 0 5px', width: 'calc(100% - 5px)', outline: 'black solid 1px', gridRow: 5, display: 'flex', alignItems: 'center', margin: '12px 0 0 0', borderStyle: 'solid', borderWidth: '3px', borderTop: 'black', borderRight: 'black', borderBottom: 'white', borderLeft: 'white'}} className='favorite-bar'>
                        <p style={{fontFamily: 'W95FA', color: 'black', margin: '0', padding: '0'}}>Favorites:</p><img loading='lazy' alt='decor' style={{imageRendering: 'pixelated'}} width={'25px'} height={'25px'} src='/images/panels/georadio/explorer/star.ico' />
                        <FavBar/>
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
                </div>
                <SiteChanger number={number} />
        </div>
    )
}

export default Browser;