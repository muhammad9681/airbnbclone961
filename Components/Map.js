import React from 'react'
import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'
function Map({ SearchResults }) {
    const [seletedlocation, setseletedlocation] = React.useState({})
    const Coordinates=SearchResults.map((item)=>(
        {
            latitude:item.lat,
            longitude:item.long
        }
    ));
    const center=getCenter(Coordinates);
    const [viewport, setVeiwport] = React.useState({
        latitude: center.latitude,
        longitude:center.longitude,
        zoom: 11
    });
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/aliranjha123/cksjsxo121yhr17nyfzscjrf1/draft"
            mapboxApiAccessToken={process.env.mapbox_key}
            width="100%"
            height="100%"
            {...viewport}
            onViewportChange={(newViewPort)=>setVeiwport(newViewPort)}
         >
            {SearchResults.map((results)=>(
                <div key={results.lat}>
                    <Marker
                    latitude={results.lat}
                    longitude={results.long}
                    offsetLeft={-20}
                    offsetTop={-10}
                    >
                       <p
                       onClick={()=>{setseletedlocation(results)}}
                    className="cursor-pointer animate-bounce" >📌
                    </p>
                    </Marker>
                    {seletedlocation.img == results.img ? 
                       (
                        <Popup
                            latitude={results.lat}
                            longitude={results.long}
                            closeButton={true}
                            closeOnClick={true}
                            onClose={() => setseletedlocation({})}
                            dynamicPosition={false}  
                            className="rounded-lg" 
                            >
                            {results.title}
                          </Popup>)
                          :(
                              false
                          )}
                    

                          
                  
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
