import styled from "styled-components";

const Wrapper = styled.div`

height: 100vh;
width: 100vw;

background: url('/images/sky1.webp');
background-size: cover;
background-position: center;

overflow: hidden;

.container {
    left: 100%;
    top: 10%;
    animation: zoomin 2s 9s forwards ease;
    width: fit-content;
    overflow: hidden;
}
    
.blur-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: 10px;
  mask-image: url('/images/gradient.png');
  mask-position: 0px 0px;
  mask-repeat: no-repeat;
  mask-size: 500%;
  backdrop-filter: blur(20px) brightness(1.5);
  overflow: hidden;
}

.link {
    display: flex;
    align-items: center;
    font-family: monospace;
    overflow: hidden;

    h1 {
        color: #FF499E;
        margin-left: 20px;
    }

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #49B6FF;
    }

    img {
        border: 0.01px rgba(0,0,0,1) solid;
        border-radius: 50%;
        transition: 0.3s ease;
    }

    .hidden {
        overflow: hidden;
        width: 0%;
        transition: 1s ease;
    }

    :hover {
        img {
            border: 6px #FF499E solid; 
            border-radius: 50%;
        }

        .hidden {
            width: 100%;
        }
    }
}

@keyframes zoomin {
    0% {
        left: 100%;
    } 100% {
        left: 10%;
    }
}

@media screen and (max-width: 550px) {
    .container {
        animation: zoominmobile 2s 9s forwards ease;
        width: 100vw;
    }
    .link {
        p {
            display: none;
        }
    }
    .mobilehide {
        display: none;
    }
    .blur-bg::after {
        mask-size: 250%;
        border-radius: 50px;
    }
    @keyframes zoominmobile {
        0% {
            left: 100%;
        } 100% {
            left: 0%;
        }
    }
}

`;

const QuickLinks = () => {


    return (
        <Wrapper>
            <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2, position: 'absolute'}}>
                <div className="blur-bg" style={{zIndex: 2, position: 'relative', padding: '15px'}}>
                    <a className="link" href="https://youtube/c/nnexsus" rel="noreferrer">
                        <img width={'90px'} height={'90px'} alt="decor" src="/images/opener/youtube-sat.webp"/>
                        <div className="hidden hide-toggle">
                            <h1>Youtube</h1>
                            <p>Check out my youtube channel for music and music videos! New and different content sometime soon.</p>
                        </div>
                    </a>
                    <a className="link" href="https://discord.gg/d8R2tDaBK2" rel="noreferrer">
                        <img width={'90px'} height={'90px'} alt="decor" src="/images/opener/discord-sat.webp"/>
                        <div className="hidden hide-toggle">
                            <h1>Discord</h1>
                            <p>Join my discord for updates on projects or weather! Mainly used only for update announcements.</p>
                        </div>
                    </a>
                    <a className="link" href="https://twitter.com/_nnexsus" rel="noreferrer">
                        <img width={'90px'} height={'90px'} alt="decor" src="/images/opener/twitter-sat.webp"/>
                        <div className="hidden hide-toggle">
                            <h1>Twitter</h1>
                            <p>Check my twitter for updates and other stuff!</p>
                        </div>
                    </a>
                    <a className="link" href="https://github.com/nnexsus" rel="noreferrer">
                        <img width={'90px'} height={'90px'} alt="decor" src="/images/opener/github-sat.webp"/>
                        <div className="hidden hide-toggle">
                            <h1>Github</h1>
                            <p>Check the github for repos on my projects, even this site and page is up on there!</p>
                        </div>
                    </a>
                    <a className="link" href="https://trello.com/b/WjQkpKpc/2023" rel="noreferrer">
                        <img width={'90px'} height={'90px'} alt="decor" src="/images/opener/trello-sat.webp"/>
                        <div className="hidden hide-toggle">
                            <h1>Trello</h1>
                            <p>The ultimate progress tracker. Updated once a few days, or sometimes multiple times a day.</p>
                        </div>
                    </a>
                    <a className="link mobilehide" href="https://georadio.live/" rel="noreferrer">
                        <img width={'70px'} height={'70px'} alt="decor" src="/images/panels/georadio/logo512.png" style={{borderRadius: '50%', padding: '10px'}}/>
                        <div className="hidden hide-toggle">
                            <h1>GeoRadio</h1>
                            <p>Check out my other site project: GeoRadio.</p>
                        </div>
                    </a>              
                </div>
            </div>
        </Wrapper>
    )
}
    

export default QuickLinks;