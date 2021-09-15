import { useState } from "react";
import ReactMapGL from 'react-map-gl';
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
    const [viewport, setViewport] = useState({
width: '100%',
height: '100%',
latitude: 37.7577,
longitude: -122.4376,
zoom: 11,

    });

    const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude:  result.lat,
    }));

    console.log(coordinates);

    return (

        <ReactMapGL 
        mapStyle='mapbox://styles/sincere27601/cktlb2utc0bbt18onqlv684rg' 
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        >
        </ReactMapGL>
    );
};

export default Map;
