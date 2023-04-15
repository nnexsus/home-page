

const YoutubeSite = () => {
    return(
        <div style={{padding: '20px', background: 'url(/images/desktop/sitemedia/tile.jpg)'}}>
            <iframe style={{aspectRatio: '16/9'}} width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLzhN8a1aNzMzLQV-XvjIMG-_yb-jptuGK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
        </div>
    )
}

export default YoutubeSite;