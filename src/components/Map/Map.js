import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import lineString from "turf-linestring";

mapboxgl.accessToken =
  "pk.eyJ1IjoicGF2YW5zcmluaXZhcyIsImEiOiJja3ZnMm0xb3M3dWRuMm9wZ3pneDY5bzJ0In0.Ko5yxRyzxEK10CfmZXrW1Q";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLat] = useState(51.2538);
  const [lat, setLng] = useState(85.3832);
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

  const originName = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          Name: "SGP",
        },
        geometry: {
          type: "Point",
          coordinates: origin,
        },
      },
    ],
  };


  useEffect(() => {
    if (map.current) return; 
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/pavansrinivas/ckvjy79ek0yui14qmqoka6q09",
      center: [
        (origin[0] + destination[0] + 10) / 2 ,
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
    });


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
      ></div>
    </div>
  );
}
