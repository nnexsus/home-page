import './css/header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div data-augmented-ui="tl-clip t-rect-x br-clip bl-rect-x both" className="header-box">
                <div className='buttons'>
                    <button onClick={() => {window.scrollTo(0, 0, {behavior: 'smooth'})}}>Top</button>
                    <a href="#projects">Projects</a>
                    <a href="#about-me">About</a>
                    <a href="#past-panel" style={{paddingRight: "8px", paddingLeft: "8px"}}>Showcase</a>
                </div>
                <div className='right-container'>
                    <svg className="text-stroke" viewBox="0 0 1000 100" height="100%">
                        <text className="text" x="20" y="75">nnexsus</text>    
                    </svg>
                    <div className='rightButtons'>
                        <a target="blank" href="https://github.com/nnexsus">  <img loading='lazy' alt='github link' src={'/images/desktop/Github-logo.webp'} height={'23px'} width={'23px'}/>  </a>
                        <a target="blank" href="https://youtube.com/c/nnexsus">  <img loading='lazy' alt='youtube link' src={'/images/desktop/Youtube-logo.webp'} height={'20px'} width={'38px'}/>  </a>
                        <a target="blank" href="https://twitter.com/_nnexsus">  <img loading='lazy' alt='twitter link' src={'/images/desktop/Twitter-logo.webp'} height={'22px'} width={'28px'}/>  </a>
                        <a target="blank" href="https://discord.gg/d8R2tDaBK2">  <img loading='lazy' alt='discord link' src={'/images/desktop/Discord-logo.webp'} height={'23px'} width={'23px'}/>  </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header;