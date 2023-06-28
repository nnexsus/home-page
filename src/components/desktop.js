import { Overhead, Wrapper } from './desktop.styles';
import { useState, Suspense, useContext } from 'react';
import { LinkContext } from './context';

import Clock from './clock/clock';
import Calendar from './calendar/calendar';
import Stats from './stats/stats';
import Notes from './apps/notes/note';

import Certs from './apps/certs/certs';
import Resume from './apps/resume/resume';
import Browser from './apps/browser';
import History from './apps/history';

const Desktop = () => {

    const [state, dispatch] = useContext(LinkContext);

    const onClick = () => {
        document.querySelectorAll('.desktog').forEach((el) => el.classList.toggle('hidden'))
    }

    const toggleBrowser = () => {
        dispatch({type: 'update_app', browser: state.browser, deskBrowser: !state.deskBrowser, notes: state.notes, history: state.history})
    }

    const toggleHistory = () => {
        dispatch({type: 'update_app', browser: state.browser, deskBrowser: state.deskBrowser, notes: state.notes, history: !state.history})
    }

    const Fallback = () => {
        return (
            <p>...</p>
        )
    }

    return (
        <Overhead>
            <div className='desktogpower desktog'>
                <h2>Power On: </h2>
                <button onClick={() => onClick()}>POWER</button>
            </div>
           <Wrapper id='desktop-bounds' className='desktog desktoganim hidden'>
                 <Suspense fallback={<Fallback/>}>
                     <div className='desktop-icon' style={{gridColumn: 1, gridRow: 1, margin: '15px', backgroundImage: 'url(/images/desktop/Earth.ico)'}} onClick={() => toggleBrowser()}>
                         <p style={{marginTop: '50px'}}>Internet Explorer</p>
                     </div>
                     <div className='desktop-icon' style={{gridColumn: 2, gridRow: 1, margin: '15px', backgroundImage: 'url(/images/desktop/News3D.ico)'}} onClick={() => toggleHistory()}>
                         <p style={{marginTop: '50px'}}>Site History</p>
                     </div>
                     <Certs id="app"/>
                     <Resume id="app"/>
                     <Notes className="notes"/>
                     
                     <Clock className="clock"/>
                     <Calendar className="calendar"/>
                     <Stats className="stats"/>
                     <div className='powerButton' style={{gridColumn: "6", gridRow: "6"}}>
                         <h2>Power Off: </h2>
                         <button onClick={() => onClick()}>POWER</button>
                     </div>
                     <div style={{position: 'absolute', top: '0'}}>
                         {state.deskBrowser ?
                             <Browser/>
                         : null}
                     </div>
                     <div style={{position: 'absolute', top: '0'}}>
                         {state.history ?
                             <History/>
                         : null}
                     </div>
                 </Suspense>
            </Wrapper>
        </Overhead>
    )
}

export default Desktop;