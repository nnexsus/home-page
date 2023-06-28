import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterSite = () => {
    return (
        <div style={{background: 'url(/images/desktop/sitemedia/starbd.gif'}} className='twitContainer'>
            <TwitterTimelineEmbed
            sourceType='profile'
            screenName="_nnexsus"
            options={{height: 600, width: "99%"}}
            theme="dark"
            borderColor="var(--accentTheme)"
            noHeader="true"
            transparent
            />
        </div>
    )
}

export default TwitterSite;