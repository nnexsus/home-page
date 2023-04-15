import styled from 'styled-components';

//import css from "https://cdn.syncfusion.com/ej2/material.css";
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';


const Wrapper = styled.div`
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 3;
    grid-column-end: 5;
    border-radius: 20px;
    font-family: monospace;
    font-size: large;

    .header {
        text-align: center;
        border-bottom: solid white 2px;
        font-style: italic;
    }

    .cal {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 15%, rgba(0, 0, 0, 0) 100%);
        padding: 20px;
        margin: 20px;
        border-radius: 10px;
        border: solid var(--accentTheme) 2px;
        border-bottom: solid var(--accentTheme) 1px;
        display: grid;
        align-content: center;
        text-align: center;
        justify-content: center;
        justify-items: center;

        .e-today {
            border: solid white 1px;
            background-color: var(--accentTheme);
            border-radius: 10px;
        }

        button {
            display: none;
        }

        .e-week-header {
            background: rgb(199, 199, 199, 0.5);
            font-variant: small-caps;
        }

        .e-title {
            border-bottom: solid var(--accentTheme) 2px;
        }

        .e-cell {
            font-size: medium;
            padding: 2px;
        }

        .e-other-month {
            span {
                color: rgba(255, 255, 255, 0.5);
            }
        }


    }

    @media screen and (max-width: 720px) {
        .cal {
            margin: 0px;
        }
    }
`;

const Calendar = () => {

    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const month = new Date().getMonth();
    const day = new Date().getDate();

    return (
        <Wrapper className='calendar'>
            <div className='header'>
                <h2>{months[month] + " " + day}</h2>
            </div>
            <div>
                <CalendarComponent className='cal'>
                </CalendarComponent>
            </div>
        </Wrapper>
    )

};

export default Calendar;