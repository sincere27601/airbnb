import { useState } from "react";
import ReactMapGL from 'react-map-gl';

function Map() {

    const [viewport, setViewort] = useState({
width: '100%',
height: '100%',
    });
    return (
        <ReactMapGL mapStyle='mapbox://styles/sincere27601/cktlb2utc0bbt18onqlv684rg' mapboxApiAccessToken={process.env.mapbox_key}
        
        >
        
        </ReactMapGL>
    )
}

export default Map;
