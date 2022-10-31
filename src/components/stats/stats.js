import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Wrapper = styled.div`

    grid-row-start: 4;
    grid-column-start: 3;
    grid-column-end: 5;
    display: grid;
    justify-content: space-around;
    align-items: center;

    p {
        font-family: monospace;
        text-shadow: 0px 0px 4px black;
        text-align: center;
        box-shadow: 0px 0px 10px inset black;
    }

    progress[value] {
        background-color: rgba(255, 255, 255, 0.3); 
        border-radius: 2px;
        height: 3px;
    }
    progress[value]::-webkit-progress-bar {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 2px;
    }
    progress[value]::-webkit-progress-value {
        background-color: var(--accentTheme);
        border-radius: 2px;
    }
    progress[value]::-moz-progress-bar {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 2px;
    }
    
`;

const Stats = () => {

    const [mem, setMem] = useState(0);
    const [bat, setBat] = useState(0);

    function percent() {
        navigator.storage.estimate().then(function(estimate) {
            return (estimate.usage / estimate.quota * 100).toFixed(2);
        });
    }

    function batteryCall() {
        navigator.getBattery().then(battery => {

        return (
            (battery.dischargingTime / battery.level)
        )
    })};

    useEffect(() => {
        setInterval(() => {
            const usage = ((performance.memory.totalJSHeapSize / performance.memory.jsHeapSizeLimit) * 100).toFixed(2)
            setMem(usage)
        }, 1000);
    }, []);

    useEffect(() => {
        setInterval(() => {
            const batUsage = (batteryCall())
            setBat(batUsage)
        })
    })

    return (
        <Wrapper className="stats">
            <div>
                <progress id="percent" value="0" max="100"></progress>
                <p>Site Disk: {percent() > 0 ? percent() : '0'}%</p>
            </div>
            <div>
                <progress id="mem" value={mem} max="100"></progress>
                <p>Site Memory: {mem}%</p>
            </div>
            <div>
                <progress id="percent" value={bat > 0 ? 100 - bat : '100' } max="100"></progress>
                <p>Site Battery Usage: {bat > 0 ? bat : '0'}%</p>
            </div>
            <div>
                <progress id="percent" value={"100"} max="100"></progress>
                <p>Network Size: 15.4Mb</p>
            </div>
        </Wrapper>
    )

}

export default Stats;