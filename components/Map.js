import { useState } from "react";
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
   
    

    const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude:  result.lat,
    }));
    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
        
            });

     return (

        <ReactMapGL 
        mapStyle='mapbox://styles/sincere27601/cktlb2utc0bbt18onqlv684rg' 
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
       {searchResults.map((result) => (
           <div key={result.long}>
             <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
              >
              <p className="cursor-pointer text-2xl animate-bounce"> 🏠</p>
              </Marker>
                </div>
             ))}

       </ReactMapGL>
    );
}

export default Map;
