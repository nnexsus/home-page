import planet1 from '../../images/8k_moon.jpg';
import Globe from 'react-globe.gl';

//currently trying to figure this out. will most likely be implemented in the 3.0 release

const Moon = () => {

    const desktop = `<div style="height: 240px; background-color: rgba(0, 0, 0, 0.4); padding: 20px; --aug-border-all: 2px; --aug-border-bg: lightcoral; font-family: monospace;" 
    data-augmented-ui="tl-2-clip-xy t-clip tr-2-clip-xy r-clip br-2-clip-xy b-clip bl-2-clip-xy l-clip both">
    <h1>Desktop App</h1>
    <h3>All purpose, info & interactive desktop.</h3>
    <ul>
        <li></li>
    </ul>
    </div>`

    const projects = `<div style="height: 240px; background-color: rgba(0, 0, 0, 0.4); padding: 20px; --aug-border-all: 2px; --aug-border-bg: lightcoral; font-family: monospace;" 
    data-augmented-ui="tl-2-clip-xy t-clip tr-2-clip-xy r-clip br-2-clip-xy b-clip bl-2-clip-xy l-clip both">
    <h1>Public Projects</h1>
    <h3>View recent published projects.</h3>
    <ul>
        <li></li>
    </ul>
    </div>`
    
    const arcs = [
        {
            startLat: 24, 
            startLng: -71, 
            endLat: 22, 
            endLng: 22
        },
        {
            startLat: -71, 
            startLng: 24, 
            endLat: 22, 
            endLng: 22
        },
        {
            startLat: 24, 
            startLng: -71, 
            endLat: 22, 
            endLng: 22
        },
        {
            startLat: -24, 
            startLng: 71, 
            endLat: 22, 
            endLng: 22
        },
    ]

    const labels = [
        {
            lat: 22,
            lng: 22,
            label: "Desktop"
        },
        {
            lat: -71,
            lng: 24,
            label: "Projects"
        },
        {
            lat: 24,
            lng: -71,
            label: "About"
        },
        {
            lat: -24,
            lng: 71,
            label: "Past Projects"
        }
    ]

    const rings = [
        {
            lat: 22,
            lng: 22
        },
        {
            lat: -71,
            lng: 24,
        },
        {
            lat: 24,
            lng: -71,
        },
        {
            lat: -24,
            lng: 71,
        }
    ]

    const html = [
        {
            lat: 22,
            lng: 22,
            size: 300,
            type: desktop
        },
        {
            lat: -71,
            lng: 24,
            size: 300,
            type: projects
        },
        {
            lat: 24,
            lng: -71,
            size: 300,
            type: projects
        },
        {
            lat: -24,
            lng: 71,
            size: 300,
            type: projects
        }
    ]

    return (
        <div>
            <Globe width="100%" height="100%" 
                globeImageUrl={`${planet1}`} bumpImageUrl={`${planet1}`} 
                atmosphereColor="white"
                showAtmosphere="true"
                showGraticules="true"
                backgroundColor="rgba(0, 0, 0, 0)"

                arcsData={arcs}
                arcColor={() => "rgba(255, 255, 255, 0.5)"}
                arcDashLength={0.4}
                arcDashGap={0.2}
                arcDashAnimateTime={2500}
                arcsTransitionDuration={100}

                labelsData={labels}
                labelText="label"
                labelSize={3}
                labelDotRadius={3}
                labelDotOrientation={'top'}
                labelColor={() => 'rgba(255, 255, 255, 0.7)'}
                labelLabel={d => `<div><p>${d.label}</p></div>`}

                ringsData={rings}
                ringAltitude={0.01}
                ringColor={() => 'lightblue'}
                ringMaxRadius={180}
                ringPropagationSpeed={20}
                ringRepeatPeriod={5000}

                htmlElementsData={html}
                htmlElement={d => {
                    const el = document.createElement('div');
                    el.innerHTML = d.type;
                    el.style.width = `${d.size}px`;
                    el.style.height = `auto`;
                    el.style['pointer-events'] = 'auto';
                    el.style.cursor = 'pointer';
                    el.onclick = () => console.info(d);
                    return el;
                }}
                
            />
        </div>
    )
}

export default Moon;