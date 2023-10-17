import GEAR from '../images/gear.png';
import { useState, useEffect } from 'react';


const Setting = (lowMode) => {

    const [lowmode, setLowmode] = useState(false)

    const onClick = () => {
        setLowmode(!lowmode)
    }

    useEffect(() => {
        lowMode = lowmode
    }, [lowmode])
    
    return (
        <button onClick={() => onClick()} style={{cursor: "pointer", float: "right", marginTop: "972px", border: "none", background: "none"}}><img loading={'lazy'} src={`${GEAR}`} width="75px" style={{filter: "drop-shadow(0 0 4px darkblue)"}} alt="settings gear"/></button>
    )

}

export default Setting;