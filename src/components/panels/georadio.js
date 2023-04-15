import { useContext } from 'react';
import styled from 'styled-components';
import { LinkContext } from '../context';

const Wrapper = styled.div`

    box-shadow: 0px 0px 20px 0px black, 0px 0px 20px 0px black inset;
    padding: 10px;

    filter: drop-shadow(0px 0px 10px black);
    
    p, h1, h2, h3, h4, h5, a {
        color: white;
        font-family: 'W95FA';
    }

    h2, h3, h4, p, a, button {
        text-shadow: 0px 0px 5px black;
    }

    button {
        :hover {
            transform: scale(1.1);
        }
    }

    a {
        font-size: 22px;
    }

    .container {

        padding: 25px;
        
        .container-2 {

            display: flex;
            flex-direction: column;
            align-items: center;

            margin: 50px 15%;

            backdrop-filter: blur(5px) brightness(0.5) drop-shadow(0px 0px 15px white);
            border: outset 5px;

            //filter: drop-shadow(0px 0px 5px black);
            //box-shadow: 0px 0px 4px 2px black;

            img {
                margin: 5px;
            }
        }
    }

    .top-button {
        float: right; 
        height: 20px; 
        border: groove 2px; 
        margin: 0 1px;
        cursor: pointer;
    }

    .button-on-bar {
        border: outset 2px; 
        width: 25px; 
        height: 25px; 
        padding: 0;
        background-color: lightgray;
        border-right-color: black;
        border-bottom-color: black;
        border-top-color: #FFF8FF;
        border-left-color: #FFF8FF;
        outline: 1px black solid;
        image-rendering: pixelated;
    }

    .button-on-bar:hover {
        filter: brightness(1.1);
    }

    .button-on-bar2 {
        border: outset 2px; 
        height: 25px; 
        padding: 0 4px;
        background-color: lightgray;
        border-right-color: black;
        border-bottom-color: black;
        border-top-color: #FFF8FF;
        border-left-color: #FFF8FF;
        outline: 1px black solid;
        image-rendering: pixelated;
    }

    .button-on-bar2:hover {
        filter: brightness(1.1);
    }

    .x:hover {
        background-color: red;
    }
    
    .content::-webkit-scrollbar {
        height: 5px;
        width: 15px;
    }
    
    .content::-webkit-scrollbar-track {
        background: darkgray;
    }
    
    .content::-webkit-scrollbar-thumb {
        background-color: lightgray; 
        transition: 0.2s ease;
        border: outset 2px;
        background-color: lightgray;
        border-right-color: black;
        border-bottom-color: black;
        border-top-color: #FFF8FF;
        border-left-color: #FFF8FF;
        outline: 1px black solid;
    }
    
    .content::-webkit-scrollbar-thumb:hover {
        background-color: darkgray;
    }
`;


const GeoRadio = () => {

    const [state, dispatch] = useContext(LinkContext);
    
    const onImgClick = (link) => dispatch({type: 'update_link', link: link, browser: true})

    return (
        <Wrapper id='radio'>
            <div style={{backgroundColor: "#C0C7C8", border: "groove 2px"}}>
                <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/panels/georadio/Earth (16 colors).ico'/>
                        <h4 className='title' style={{marginLeft: '2px'}}>Internet Explorer</h4>
                    </div>
                    <div className='buttons content' style={{marginRight: '1px'}}>
                        <button className='top-button x'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>X</p></button>
                        <button className='top-button'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>◻</p></button>
                        <button className='top-button'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>_</p></button>
                    </div>
                </div>
                <div className='file-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center'}}>
                    <button className='button-on-bar2'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>File</p></button>
                    <button className='button-on-bar2'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>Edit</p></button>
                    <button className='button-on-bar2'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>View</p></button>
                    <button className='button-on-bar2'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>Favorites</p></button>
                    <button className='button-on-bar2'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>Help</p></button>
                </div>
                <div className='buttons-bar' style={{width: '100%', height: '24px', display: 'flex', alignItems: 'center', gridRow: 4}}>
                        <button title='Open Folder' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/opendir.png' width={'20px'} height={'20px'}/></button>
                        <button title='Home' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/panels/georadio/explorer/Home.png' width={'20px'} height={'20px'}/></button>
                        <button title='Back' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/arrowl-lit.png' width={'20px'} height={'20px'}/></button>
                        <button title='Forward' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/panels/georadio/explorer/arrowr-unlit.png' width={'20px'} height={'20px'}/></button>
                        <button title='Unload' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/Shred.png' width={'20px'} height={'20px'}/></button>
                        <button title='Refresh' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/panels/georadio/explorer/Refresh.png' width={'20px'} height={'20px'}/></button>
                        <button title='New Folder' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/New folder.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy to Folder' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/panels/georadio/explorer/Copy to Folder.png' width={'20px'} height={'20px'}/></button>
                        <button title='Upscale Text' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/upsize.png' width={'20px'} height={'20px'}/></button>
                        <button title='Downscale Text' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/panels/georadio/explorer/downsize.png' width={'20px'} height={'20px'}/></button>
                        <button title='Cut' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/Cut.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy' className='button-on-bar'><img alt='decor' src='images/panels/georadio/explorer/Copy.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy to Clipboard' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/panels/georadio/explorer/Paste.png' width={'20px'} height={'20px'}/></button>
                    </div>
                <div className='address-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                    <p style={{color: 'black', marginRight: '3px', textShadow: 'none'}}>Address:</p>
                    <input type={'text'} value={'https://georadio.netlify.app/'} placeholder='https://www.youtube.com/watch?v=6j18-JVmf7w' disabled='true'
                    style={{fontFamily: "W95FA", width: "80%", backgroundColor: 'white', border: 'inset 2px'}}/>
                </div>
                <div className='content' style={{border: 'inset 2px', cursor: 'default', height: '538px', overflowY: 'scroll', overflowX: 'hidden'}}>
                
                {state.visits.georadio ? <h1 style={{background: 'green', margin: 0, padding: 0}}>Thank you for visiting GeoRadio!</h1> : null}

                    <div id="website" style={{width: '100%', backgroundImage: `url(/images/panels/georadio/tile.jpg)`, paddingTop: '10px'}}>
                        <div className='opener' style={{textAlign: 'center'}}>
                            <h1 style={{color: 'rgb(255, 0, 153)', fontFamily: 'serif', fontSize: '48px', margin: '3px'}}>.::Welcome to GeoRadio::.</h1>
                            <h3 style={{backgroundColor: 'red'}}>Update v1.1!! NEON_SUNRISE, info below</h3>
                            <hr style={{width: '80%', height: '1px'}}/>
                            <p style={{color: 'rgb(51, 255, 204)', fontFamily: 'serif', margin: '0 20px'}}></p>
                            <div style={{backgroundImage: 'url(/images/panels/georadio/neonsun.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}} className='container'>
                                    <div className='container-2'>
                                        <h1>GeoRadio</h1>
                                        <h3>Join us at GeoRadio: The 24/7 online radio app!!</h3>
                                        <img onClick={(e) => onImgClick(e.currentTarget.src)} alt='georadio logo' width={"100px"} style={{cursor: 'pointer'}} src='/images/panels/georadio/logo512.png' />
                                        <button className='button-on-bar2'><a target='_blank' href='https://georadio.netlify.app/' style={{color: 'yellow'}}>Listen here!!</a></button>
                                    </div>
                                </div>
                        </div>
                        <hr style={{width: '80%', height: '1px'}}/>
                        <div style={{height: '600px', marginTop: '50px'}}>
                            <h2 style={{color: 'rgb(255, 204, 102)', fontFamily: 'serif', textAlign: 'center'}}>About GeoRadio</h2>
                            <hr style={{width: '80%', height: '1px'}}/>
                            <div style={{display: 'flex', textAlign: 'right'}}>
                                <img alt='decor' src='/images/panels/georadio/musica_baile21.gif' width={'150px'} height={'150px'} style={{imageRendering: "pixelated"}}/>
                                <p style={{color: 'rgb(51, 255, 204)', fontFamily: 'serif', margin: '0 20px'}}>GeoRadio is a Windows95 inspired radio immersive webapp that streams music to your browser!! 
                                <br/>
                                <br/>Come hang out and listen to some music with other online listeners!
                                <br/>
                                <br/>Traverse and explore in-app sites to discover new radio stations and other hidden sites!!</p>
                            </div>
                            <hr style={{width: '80%', height: '1px'}}/>
                            <div style={{display: 'flex', textAlign: 'left'}}>
                                <p style={{color: 'pink', fontFamily: 'serif', margin: '0 20px'}}>NEON_SUNRISE Update!! 
                                <br/>
                                <br/>Recently, we've added a Future Funk & Citypop radio to the app, as well as a ton of new features!!</p>
                            </div>
                            <img alt='decor' src='/images/panels/georadio/music2.gif' height={'150px'} style={{imageRendering: "pixelated", margin: '50px 0 0 25%'}}/>
                        </div>
                    </div>
                </div>
        </div>
        </Wrapper>
    )
}

export default GeoRadio;