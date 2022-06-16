import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import React, { useState, useEffect } from 'react';

import { Img, ShortcutImg } from '../../desktop.styles';
import icon from "../../../images/Gallery-logo.png";
import shortcut from '../../../images/shortcut.png';
import ImageGallery from 'react-image-gallery';

const Wrapper = styled.div`

    grid-column-start: 2;
    grid-row-end: 1;

    button {
        width: 100px;
        height: 100px;
        padding: 10px;
        background: none;
        border: none;
    }

    button:hover {
        border: lightblue dashed 2px;
    }

    @media screen {
        
        button {
            width: 75px;
            height: 75px;
            padding: 10px;
            background: none;
            border: none;
        }
    
    }

`;

const Open = styled.div`

    display: flex;
    margin: 10px;
    padding: 10px;

    .galContainer {
        padding: 5px;
        overflow: hidden;
    }

    .gallery {

        .image-gallery-swipe {
            display: flex;
            flex-direction: row;
            padding: 5px;
        }

        .image-gallery-image {
            width: 100%;
        }

        .image-gallery-slide {
            position: absolute;
        }

        .image-gallery-thumbnail-image {
            width: 100%;
        }

        .image-gallery-thumbnails-container {
            margin-top: 40%;
        }

    }

    @media screen and (max-width: 420px) {
        .gallery {
            grid-template-columns: repeat(3, 1fr)
        }
    }

`;

const Gallery = () => {

    const [showGallery, setShowGallery] = useState(false);
    const onClick = () => setShowGallery(showGallery ? false : true);

    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('./galleryImages', false, /\.(png|jpe?g)$/));
    const imageAr = []
    images.map((img) => {
        imageAr.push({original: `${img}`})
    })

    return (
    <Wrapper>
        <div>
            <button onClick={() => onClick()}>
                <Img src={icon}></Img>
                <p className='appName'>Gallery</p>
                <ShortcutImg src={shortcut}></ShortcutImg>
            </button>
        </div>
        {showGallery ? 
            <Open id="galApp">
                {window.innerWidth > 720 ? 
                <Rnd default={{
                    x: 0,
                    y: 0,
                    width: 800,
                    height: 400,
                }}
                minHeight={392}
                minWidth={688}
                data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>Gallery</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        document.querySelector('X').style.background = "darkred";
                        }}>X</button>
                        <div className='galContainer'>
                            <div className="gallery">
                                <ImageGallery items={imageAr}/>
                            </div>
                        </div>
                    </Rnd>                
                : 
                <div data-augmented-ui="tl-clip r-rect-y br-clip bl-rect-x l-rect-y both" className="container">
                    <h2 className='title'>Gallery</h2>
                    <button className='X' onClick={() => {
                        onClick()
                        document.querySelector('X').style.background = "darkred";
                        }}>X</button>
                        <div className='galContainer'>
                            <div className='gallery'>
                                <ImageGallery items={imageAr}/>
                            </div>
                        </div>
                    </div>                
                }

            </Open>
        : null}

    </Wrapper>
    )
}

export default Gallery;