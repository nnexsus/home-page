import styled from 'styled-components';

const Open = styled.div`

    margin: 5px;
    padding: 5px;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;

    background: url('/images/desktop/sitemedia/tile2.jpg');

    h4 {
        width: 30%;
        border: solid 2px var(--accentThemeDarker);
        background-color: var(--accentTheme);
        border-radius: 10px;
        padding: 2px;
        margin: 0 auto;
    }

`;

const AE = () => {
    return (
        <Open className='aeContainer'>
            <div className='solar entry'>
                <h3>Solar System Template</h3>
                <a href="https://drive.google.com/drive/folders/1vIbTAC02dqqKXcvN-AGQZc8HkrJ7ayJg?usp=sharing">
                    <img alt='solar system template' src={'/images/desktop/solar1-1.webp'} width={"30%"}></img>
                    <h4>Google Drive Download</h4>
                </a>
            </div>
            <div className='entry'>
                <h3>Screen Template</h3>
                <a href="https://drive.google.com/drive/folders/1wyur29XvuPIoGyLQHvACKPoLVjz_WumT?usp=sharing">
                    <img alt='screen template' src={'/images/desktop/logobanner.webp'} width={"30%"}></img>
                    <h4>Google Drive Download</h4>
                </a>
            </div>
        </Open>
    )
}

export default AE;