import styled from "styled-components";

const VS = () => {

    const Open = styled.div`

    display: flex;
    flex-direction: column;
    background: url('/images/desktop/sitemedia/mdbg.gif');
    width: 100%;
    padding: 5px;
    height: 600px;

    textarea {
        margin-top: 20px;
        width: 99%;
        height: 400px;
        border: none;
    }

        ul {
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 6px;
            margin: 0 auto;
            text-shadow: 0px 0px 4px black;

            li {
                list-style-type: square;
                transition: 0.4s ease-in-out;
            }

            li:hover {
                transform: scale(1.15);
                background-color: rgba(255, 255, 255, 0.4);
            }

            li:nth-child(odd) {
                background-color: #B1E5F2;
            }
        }

        a {
            text-decoration: none;
            div {
                color: #392B58;
                text-shadow: 0px 0px 2px #392B58;
                border: solid 2px #392B58;
                border-radius: 10px;
                padding: 5px;
                margin-top: 20px;
            }
        }

    .link {
        transition: 0.4s ease-in-out;
        width: 50%;
        margin: 0 auto;
        text-align: center;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.5);

        :hover {
            color: white;
            filter: invert(1);
        }
    }

    .pref {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
        text-align: center;

        div {
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            padding: 10px;
            margin-top: 10px;
        }
    }

`;

    return (
        <Open className='vsContainer'>
            <div className='pref'>
                <div className='web'>
                    <h2>Web Dev</h2>
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Node JS</li>
                        <li>Express API</li>
                        <li>Nodemon</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>Mongoose</li>
                    </ul>
                </div>
                <div className='game'>
                    <h2>Game Dev</h2>
                    <ul>
                        <li>Godot</li>
                        <li>GD-Script</li>
                        <li>Python</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div className='other'>
                    <h2>Other</h2>
                    <ul>
                        <li>Discord JS</li>
                        <li>DBM</li>
                        <li>Linux</li>
                    </ul>
                </div>
            </div>
            <div className='link'>
                    <a target="blank" href="https://github.com/nnexsus"> 
                        <div className='mediaLink'> 
                            <h2>Github</h2> 
                            <img  width={'50px'} height={'50px'} src={'/images/desktop/Github-logo.webp'}/>  
                        </div> 
                    </a>
            </div>
        </Open>
    )
}

export default VS;