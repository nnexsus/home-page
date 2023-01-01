import styled from 'styled-components';

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

        padding: 15px;
        
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
`;


const GeoRadio = () => {

    return (
        <Wrapper id='radio'>
            <div style={{backgroundColor: "#C0C7C8", border: "groove 2px"}}>
                <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/panels/georadio/Earth (16 colors).ico'/>
                        <h4 className='title' style={{marginLeft: '2px'}}>Internet Explorer</h4>
                    </div>
                    <div className='buttons content' style={{marginRight: '1px'}}>
                        <button className='top-button'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>X</p></button>
                        <button className='top-button'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>◻</p></button>
                        <button className='top-button'><p style={{margin: 0, color: 'black', textShadow: 'none'}}>_</p></button>
                    </div>
                </div>
                <div className='file-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center'}}>
                    <button><p style={{margin: 0, color: 'black', textShadow: 'none'}}>File</p></button>
                    <button><p style={{margin: 0, color: 'black', textShadow: 'none'}}>Edit</p></button>
                    <button><p style={{margin: 0, color: 'black', textShadow: 'none'}}>View</p></button>
                    <button><p style={{margin: 0, color: 'black', textShadow: 'none'}}>Favorites</p></button>
                    <button><p style={{margin: 0, color: 'black', textShadow: 'none'}}>Help</p></button>
                </div>
                <div className='buttons-bar' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center'}}>
                    <button style={{width: '25px', height: '25px', padding: '0'}}><img alt='decor' src='images/panels/georadio/Opened Folder.ico' width={'20px'} height={'20px'}/></button>
                    <button style={{width: '25px', height: '25px', padding: '0'}}><img alt='decor' src='images/panels/georadio/New folder.ico' width={'20px'} height={'20px'}/></button>
                    <button style={{width: '25px', height: '25px', padding: '0'}}><img alt='decor' src='images/panels/georadio/TrueType font (logo).ico' width={'20px'} height={'20px'}/></button>
                    <button style={{width: '25px', height: '25px', padding: '0'}}><img alt='decor' src='images/panels/georadio/Document to Document.ico' width={'20px'} height={'20px'}/></button>
                    <button style={{width: '25px', height: '25px', padding: '0'}}><img alt='decor' src='images/panels/georadio/Opened Folder.ico' width={'20px'} height={'20px'}/></button>
                </div>
                <div className='address-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                    <p style={{color: 'black', marginRight: '3px', textShadow: 'none'}}>Address:</p>
                    <input type={'text'} value={'https://georadio.netlify.app/'} placeholder='https://www.youtube.com/watch?v=6j18-JVmf7w' disabled='true'
                    style={{fontFamily: "W95FA", width: "80%", backgroundColor: 'white', border: 'inset 2px'}}/>
                </div>
                <div className='content' style={{border: 'inset 2px', cursor: 'default', height: '538px', overflowY: 'scroll', overflowX: 'hidden'}}>


                    <div id="website" style={{width: '100%', backgroundImage: `url(/images/panels/georadio/tile.jpg)`, paddingTop: '10px'}}>
                        <div className='opener' style={{textAlign: 'center'}}>
                            <h1 style={{color: 'rgb(255, 0, 153)', fontFamily: 'serif', fontSize: '48px', margin: '3px'}}>Welcome to GeoRadio</h1>
                            <hr style={{width: '80%', height: '1px'}}/>
                            <p style={{color: 'rgb(51, 255, 204)', fontFamily: 'serif', margin: '0 20px'}}></p>
                            <div style={{backgroundImage: 'url(/images/panels/georadio/chanf.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}} className='container'>
                                    <div className='container-2'>
                                        <h1>GeoRadio</h1>
                                        <h3>Join us at GeoRadio: The 24/7 online radio app!!</h3>
                                        <p></p>
                                        <img alt='georadio logo' width={"75px"} src='/images/panels/georadio/radiopixellarge.png' />
                                        <button><a href='https://georadio.netlify.app/'>Listen here!!</a></button>
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
                            <img alt='decor' src='/images/panels/georadio/music2.gif' height={'150px'} style={{imageRendering: "pixelated", margin: '50px 0 0 25%'}}/>
                        </div>
                    </div>
                </div>
        </div>
        </Wrapper>
    )
}

export default GeoRadio;