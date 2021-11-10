import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import {lineDistance, along} from "turf";

mapboxgl.accessToken =
  "pk.eyJ1IjoicGF2YW5zcmluaXZhcyIsImEiOiJja3ZnMm0xb3M3dWRuMm9wZ3pneDY5bzJ0In0.Ko5yxRyzxEK10CfmZXrW1Q";

export default function Map(data) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [lng, setLat] = useState(data.props.data[0].geography.latitude);
  // eslint-disable-next-line no-unused-vars
  const [lat, setLng] = useState(data.props.data[0].geography.longitude);
  // eslint-disable-next-line no-unused-vars
  const [zoom, setZoom] = useState(3.5);

  const origin = [-122.414, 37.776];

  const destination = [-77.032, 38.913];

  const route = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [origin, destination],
        },
      },
    ],
  };

    console.log(data);
  const originName = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: origin,
        },
      },
    ],
  };

 

  const length = lineDistance(route.features[0])
 

  const arc = [];

  const steps = 500

  for (let i = 0; i < length; i += length / steps) {
    const segment = along(route.features[0], i);
    arc.push(segment.geometry.coordinates);
    }

    
    route.features[0].geometry.coordinates = arc;
    // eslint-disable-next-line no-unused-vars
    let counter = 0;

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/pavansrinivas/ckvjy79ek0yui14qmqoka6q09",
      center: [
        (origin[0] + destination[0] + 10) / 2,
        (origin[1] + destination[1]) / 2,
      ],
      zoom: zoom,
    });

    map.current.on("load", () => {


      map.current.addSource("route", {
        type: "geojson",
        data: route,
      });

      map.current.addLayer({
        id: "route",
        source: "route",
        type: "line",
        paint: {
          "line-width": 3,
          "line-color": "#8A6FB5",
        },
      });


      map.current.addSource("originName", {
        type: "geojson",
        data: originName,
     });        
      map.current.addLayer({
          'id':'originName',
          'source':'originName',
          'type':'symbol',
          'layout': {
              'icon-image':'airport',
              //'icon-rotate':['get','bearing'],
              //'icon-rotation-alignment':'map',
             // 'icon-allow-overlap':true,
              //'icon-ignore-placement':true,
              //'icon-rotate':['bearing']
              //'icon-size':0.25
          }
      });


      

    //   map.current.addLayer({
    //     id: "point",
    //     source: "originName",
    //     type: "point",
    //     paint: {
    //       "font-size": "10px",
    //       "color": "white",
    //     },
    //   });

    
    });

    //new mapboxgl.Marker().setLngLat(origin).addTo(map.current)

   // new mapboxgl.Point().add()
  });

  const styles = {
    mapContainer: {
      height: "100vh",
      width: "70vw",
    },

  };

  return (
    <div>
      <div
        ref={mapContainer}
        className="map-container"
        style={styles.mapContainer}
      >
      </div>
    </div>
  );
}
