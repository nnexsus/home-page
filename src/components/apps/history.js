import { useContext } from 'react';
import { Rnd } from 'react-rnd';
import { LinkContext } from '../context';
import { toHTML } from 'discord-markdown';

const History = () => {

    const [state, dispatch] = useContext(LinkContext);

    const onClick = () => {
        dispatch({type: 'update_app', browser: state.browser, deskBrowser: state.deskBrowser, notes: state.notes, history: !state.history})
    }

    const msg = `${toHTML(updates)}`

    return (
        <Rnd default={{
                x: 0,
                y: document.getElementById('desktop-bounds').offsetTop,
                width: 600,
                height: 410,
            }}
            resizeGrid={[64, 36]}
            dragGrid={[64, 36]}
            cancel={'.content'}
            bounds={"#desktop-bounds"}
            minHeight={288}
            minWidth={512}
            style={{backgroundColor: "#C0C7C8", border: "groove 2px"}}>
                <div style={{display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '25px 21px 3px', overflow: 'hidden'}}>
                    <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img loading='lazy' alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/desktop/Newspaper (yellow).ico'/>
                            <h4 className='title' style={{marginLeft: '2px'}}>Site History</h4>
                        </div>
                        <div className='buttons content' style={{marginRight: '1px'}}>
                            <button className='top-button X' onClick={() => onClick()}><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>X</p></button>
                            <button className='top-button m'><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>◻</p></button>
                            <button className='top-button m' onClick={() => onClick()}><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>_</p></button>
                        </div>
                    </div>
                    
                    <div className='file-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'flex-start', gridRow: '2'}}>
                        <button className='files' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>File</p>
                            <div className='hidemenu dropmenu'>
                                <p className='file'>Back</p>
                                <p className='file'>Refresh</p>
                                <p className='file'>Edit</p>
                                <p className='file X'>Close</p>
                            </div>
                        </button>

                        <button className='edits' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>Edit</p>
                        <div className='hidemenu dropmenu'>
                                <p className='edit'>Copy Link</p>
                                <p className='edit'>Radios</p>
                                <p className='edit'>Songs</p>
                                <p className='edit'>Pages</p>
                            </div>
                        </button>

                        <button className='views' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>View</p>
                        <div className='hidemenu dropmenu'>
                                <p className='view'>Zoom</p>
                                <p className='view'>Find</p>
                                <p className='view'>Snapshot</p>
                            </div>
                        </button>

                        <button className='favorites' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>Favorites</p>
                        <div className='hidemenu dropmenu'>
                                <p className='favorite'>Favorite Page</p>
                                <p className='favorite'>Remove Page</p>
                                <p className='favorite'>Removal All</p>
                            </div>
                        </button>

                        <button className='helps' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>Help</p>
                        <div className='hidemenu dropmenu'>
                                <p className='help'>Navigating</p>
                                <p className='help'>Listening</p>
                                <p className='help'>Apps</p>
                                <p className='help'>Home</p>
                            </div>
                        </button>
                    </div>
                    <hr style={{height: '1px', width: '100%', gridRow: 3, margin: 0}} />
                </div>
                {/* app content below */}
                <div style={{overflowY: 'scroll', maxHeight: 'calc(100% - 49px)'}} className='app-content'>
                    <div style={{fontFamily: 'monospace', color: 'black'}} dangerouslySetInnerHTML={{__html: msg}} className='entry'/>
                </div>
        </Rnd>
    )
}

const updates = `

**--Version 2.5! [Photon-Update]** *6/?/23*
[
+ Theater 2.1! The theater app now has its own custom player, which includes controls, context menus, and a quick player bar!
+ Youtube Site in Desktop 'Internet Explorer' App now has a playlist selector!
+ Added the Site History app to the Desktop panel! From there 
+ The Current Projects & Past Projects panels have been backended for continous updates (without needed to update the entire site)!
>> No more messing around. Full design changes and functionality to mobile without workarounds now.
>> A few panels have more redundancy (appear more than 1 place) on the site to reduce navigation time!
>> Design changes to multiple instructional elements to help with navigation.
>> Updated nnserver panel for missing Amethyst Update info.
>> Many design fixes and updates, including style downsizing.
>> Massive decrease in loading and performance times, as well as a continous downsize on the network download and resource size.
    2.5: | Download Size: 4.7Mb first visit, 637Kb returns. | 8Mb Resource Size | Max Average Loading Time 3s | 
]

4/14/23 [
--Version 2.4! [Valence-Update] //1 Year of nnexsus.net!! https://web.archive.org/web/20220417100459/https://www.nnexsus.net/ - April 2022 version

+ Added Cross-site recognition! Some panels, or other aspects of the site, may change if you've visited any of my other sites! (This uses cookies btw)

+ Added visited sites panel. Each site of mine you visit will update the panel, and unlock something for visiting all 4!

+ About Me 2.0! The about me panel is now updated and much better looking. (The old about-me was the original from the site launch this time last year....)

+ Desktop 2.0! The desktop, as well, is updated. Most apps have been deleted in favor of the GeoRadio in-app browser build. Apps listed below have been converted to sites:
[After Effects, VSCode, Twitter, Youtube, Weather].

+ Discord Feed 2.0! The original discord feeds were impossible to read. Now, I've incorporated markdown and my own stylings to make the panel usable! (I think it looks pretty dang good)

+ Theater 2.0! I've adapted a more 'youtube like' ui to the theater panel, and changed the way videos load, making it faster and a smaller download size!

>> GeoRadio & nnexsus-server panels will now display if you've visited them.

>> Condensed Past Projects panel design.

>> Added ASCII designs for the Past Project panel nav buttons.

>> Various fixes to the photo-viewer, mostly design based.

>> Serious mobile design fixes. Full site is now usable on more devices than before. All panels (except desktop intentionally) completly work on all mobile sizes.

>> New spring/early summer theme!

>> As always, a ton of other design fixes and updates, some very noticable this time, lol.

>> Somehow, despite adding more items yet again, the network size, RAM, and CPU usage of the site have all decreased.

- Removed After Effects, VSCode, Twitter, Youtube, and Weather Desktop Apps.

- Disabled Fish Game quick launch for the time being (until its update v1.1).
]

2/3/23
[
--Version 2.3! [Hydrogen-Update]

+ Added photo viewer! Simply click on an image to expand it on your screen.

+ Added Protocol 22 Winners panel.

>> Optimized site download size from ~15Mb to ~5Mb. Load time quartered. Site now usable on any network 3G-Fast or above.

>> Added a ton of entries to the theater panel (forgot to last time).

>> Slowly backending everything to require less site updates.

>> Cool little ASCII designs for the nav buttons under moon section.

>> A fairly large amount of asset, design, and visual updates and fixes. 

- Blade Bot panel & all references (aside from Past Projects panel).

- Removed gallery, fishgame, and 2048 apps for good on desktop (no point anymore).

]

1/1/23
[
--Version 2.2! [Equinox-Update]

+ GeoRadio Panel

+ GeoRadio quick access from Web Planet (ARINHA)

+ A few opener updates

>> Theme updates for Era Of Descension.

>> Updated color for Era Of Descension, I think it's a nice blue.

>> Updated About Me & Past Projects, and Desktop respective apps.

>> Fixed several design issues with the opener lol.

//Thats about it for this one! Next one has some major desktop changes, feed updates, and sunsetting of Project: Blade. So more to come soon.

]

10/31/2022
[
--Version 2.1! [Midnight-Update]

+ The Theater Panel is finally reworked! Currently hosts AE renders, project showcases, clips, and anything else I see fit.

+ Added Discord Feeds section in the discord bots panel.

+ Added a new redbanner at the top of the site.

>> Changed the theme color for winter, and added some global variable support.

>> Updated red banners to support multiple texts.

>> Opener panel (planets) now has more parallaxing.

>> Optimizations to stuff.

>> A few minor design changes.

- Removed the gallery panel and all references to it.

]

9/22/22
[
--WELCOME TO VERSION 2.0 [Lunar-Update]

+ Planet Destination Navigator

+ Web Specific Project Panel

+ Game Specific Project Panel

+ Quick Access to All Web & Game Projects In Site

+ Accessable Demo to ASCARDS Now Available

>> Desktop App, Theater, About Me, and Past Project Panels are now in a single scroller.

>> Past Project Panel was HEAVILY updated. Much easier to read and navigate, more information and images.

>> Many fixes and improvements to design, especially mobile.

>> Minor updates to several other panels.

>> Changed video panel to Theater panel, to be finished 2.1

>> Fixed several link and app issues.

>> Changes and fixes to parallaxes and scroll effects.

- Opener Removed

- Video Panel Removed for Testing
]

9/16/22
[
+ Fish Game app

+ Fish Game panel

+ Discord panel w/ bot status check

+ Transition scroll effects for project panels

+ Parallax effects in several places

+ Something else...


>> Opener was heavily updated

>> Fish panel updates

>> Project panel updates

>> Desktop updates

>> Updated ASCARDS panel to include demo

>> Changed twitter app to collection type

>> Reduced site download size even futher
]

8/10/22
[
+ Added certs & resume apps

+ Added certs & resume to about me panel

>> Youtube app playlist changed to showcase renders and projects playlist

> Fixed small issues with designs

> Fixed site description
]

8/9/22 
[

+ Updated weather app

]

8/5/22
[

+ Project: Fish section added

+ Brief descriptor w/ links added below banner

+ Desktop can now be turned off for performance/whatever. defaults off

+ Added network size stat

>> Optimized download size from 42Mb to 6Mb

>> Total load & launch time down from 20s to 4s

>> Desktop apps now move and snap on a simple grid

>> Desktop apps no longer move outside the desktop

>> Moon comp no longer downloads & plays on site load

> Banner alert updated

> Most images converted to webp

> Past projects & About panels swapped

> About and Current panels updated

> Past Projects updated, restructured, and redesigned

> Settings app changed to contact

> Other apps updated

> Added lazy loading to most -if not all- components

]

6/16/22 [

+ Code added to github

+ Added Project: Blade section

>> Update designs for mobile use

]

4/17/22 [

+ Initial site deployed!

]
`;

export default History;