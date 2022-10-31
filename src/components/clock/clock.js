import styled from 'styled-components';

import timeFont from '../../Streamster.ttf';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`

    @font-face {
        font-family: "Streamster";
        src: local("Streamster"), url(${timeFont});
    }

    grid-column-start: 3;
    grid-column-end: 5;

    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 4px 8px rgba(0, 0, 0, 0.5);
    border-radius: 5px;

    .clockContainer {
        border: solid 2px;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: var(--accentTheme);
        font-family: monospace;
        font-size: x-large;

        --aug-t-extend1: 100px;
    }

    .clockContainer:before {
        display: none;
    }

    .clockContainer:after {
        display: none;
    }

    .time {
        height: 10px;
        width: 100px;
        position: relative;
        left: 50%;
        top: -1%;
        color: white;
        margin-left: -32px;

        font-family: "Streamster";
    }

`;

const Clock = () => {

    const [minute, setTime] = useState(new Date().getMinutes());
    const [hour, setHour] = useState(new Date().getHours());
    const [day, setDay] = useState(new Date().getDay());

    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTime(date.getMinutes());
            setHour(date.getHours());
            setDay(date.getDay());
        }, 1000);
    }, []);

    return (
        <Wrapper className='clock'>
                <div className="time">
                    <p>{(hour % 12) === 0 ? 12 + ":" : (hour % 12) + ":"}{minute < 10 ? "0" + minute : minute} {hour > 12 ? "PM" : "AM"}</p>
                </div>
            <div data-augmented-ui="t-rect-x both" className='clockContainer'>

                <div className="day">
                    <h2>{days[day]}</h2>
                </div>
            </div>
        </Wrapper>
    )

};

export default Clock;