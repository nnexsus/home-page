import styled from "styled-components";

const Wrapper = styled.div`

    backdrop-filter: blur(20px);
    margin-top: -20px;

    h1, h2, h3, h4, p {
        color: black;
        font-family: monospace;
        text-align: center;
    }
    
    .container {
        box-shadow: 0 0 10px 0px white;
        background: linear-gradient(198deg, rgba(61,199,193,1) 5%, rgba(69,120,166,1) 100%);
        margin: 20px auto;
        padding: 15px;
        background: repeating-linear-gradient(to top, rgba(255, 255, 255, 0.06) 0px 2px, transparent 2px 4px), linear-gradient(198deg, rgba(61,199,193,1) 5%, rgba(69,120,166,1) 100%);

        border: solid 4px rgba(0, 0, 0, 0.4);
        border-radius: 10px;

        width: 20%;
        opacity: 0.03;
        transition: 5s ease-in-out;

        :hover {
            opacity: 1;
            backdrop-filter: blur(20px);
        }
    }

`;

const Teaser = () => {

    return (
        <Wrapper>
            <div className="container">
                <h1>Project: Outlines</h1>
                <h2>Class: Mega-project</h2>
                <h2>Members: Unknown</h2>
                <h3>ETA: Unknown</h3>
                <h3>Link: null</h3>
                <p>Special Note: Send nnexsus#8460 a dm on discord about Project: Outlines if interested.</p>
            </div>
        </Wrapper>
    )
}

export default Teaser;