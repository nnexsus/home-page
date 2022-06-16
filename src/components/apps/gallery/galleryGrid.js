import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`


`;

const GalleryGrid = () => {

    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../../../images/', false, /\.(png|jpe?g)$/));

    const loadImages = () => {
        images.map((image) => {

            const newImg = new Image(480);
            newImg.src = image;
            document.getElementById("gallery").appendChild(newImg)
        });
    }


        return (
          <Wrapper>
              <div id='gallery' onLoad={() => loadImages}>

              </div>
          </Wrapper>
        )
}

export default GalleryGrid;