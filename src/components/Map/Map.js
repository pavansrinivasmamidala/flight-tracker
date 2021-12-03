import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { lineDistance, along, bearing } from "turf";

mapboxgl.accessToken =
  "pk.eyJ1IjoicGF2YW5zcmluaXZhcyIsImEiOiJja3ZnMm0xb3M3dWRuMm9wZ3pneDY5bzJ0In0.Ko5yxRyzxEK10CfmZXrW1Q";

export default function Map(props) {
  const flightTrackData = props.flightData;
  const originData = props.originData;
  const destinationData = props.destinationData;
  // const locationArray = [cityData.data[0]]
  const mapContainer = useRef(null);
  const map = useRef(null);
  // eslint-disable-next-line no-unused-vars
  //const [lng, setLat] = useState(data.props.data[0].geography.latitude);
  // eslint-disable-next-line no-unused-vars
  //const [lat, setLng] = useState(data.props.data[0].geography.longitude);
  // eslint-disable-next-line no-unused-vars
  const [zoom, setZoom] = useState(3);

  //const origin = [cityData.data[0].latitudeCity, cityData.data[0].longitudeCity];
  const origin = [-122.414, 37.776];
  const destination = [-77.032, 38.913];

  //console.log(cityData.data[0].latitudeCity);

  useEffect(() => {
    const origin = [
      props?.originData?.data?.[0]?.longitudeCity || -122.414,
      props?.originData?.data?.[0]?.latitudeCity || 37.776,
    ];

    const destination = [
      props?.destinationData?.data?.[0]?.longitudeCity || -77.032,
      props?.destinationData?.data?.[0]?.latitudeCity || 38.913,
    ];

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

    const length = lineDistance(route.features[0]);
    console.log(length / 2000);
    setZoom((length / 2000).toFixed(2));
    console.log(zoom);
    const arc = [];

    const steps = 500;
    for (let i = 0; i < length; i += length / steps) {
      const segment = along(route.features[0], i);
      arc.push(segment.geometry.coordinates);
    }

    const originName = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: arc[250],
            //coordinates: [data.props.data[0].geography.longitude,data.props.data[0].geography.latitude ],
          },
          properties: {
            iconSize: [40, 40],
            bearing: [],
          },
        },
      ],
    };

    let counter = 0;

    route.features[0].geometry.coordinates = arc;
    // eslint-disable-next-line no-unused-vars

    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/pavansrinivas/ckvjy79ek0yui14qmqoka6q09",
      //style:"mapbox://styles/mapbox/streets-v11",
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
        id: "originName",
        source: "originName",
        type: "symbol",
        layout: {
          "icon-image": "airport",
          // "bearing":30,
          // "icon-rotation-alignment": "map",
          // 'icon-allow-overlap':true,
          //'icon-ignore-placement':true,
          //'icon-rotate':['bearing']
          //'icon-size':0.25
          //"icon-color":"#8A6FB5",
          //"icon-ignore-placement":true,
          //"icon-rotation-alignment":"map"
        },
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

      const animate = () => {
        const start =
          route.features[0].geometry.coordinates[
            counter >= steps ? counter - 1 : counter
          ];
        const end =
          route.features[0].geometry.coordinates[
            counter >= steps ? counter : counter + 1
          ];

        if (!start || !end) return;

        // Update point geometry to a new position based on counter denoting
        // the index to access the arc
        originName.features[0].geometry.coordinates =
          route.features[0].geometry.coordinates[counter];

        // Calculate the bearing to ensure the icon is rotated to match the route arc
        // The bearing is calculated between the current point and the next point, except
        // at the end of the arc, which uses the previous point and the current point
        originName.features[0].properties.bearing = bearing(start, end);

        // Update the source with this new data
        map.current.getSource("originName").setData(originName);

        // Request the next frame of animation as long as the end has not been reached
        if (counter < steps) {
          requestAnimationFrame(animate);
        }

        counter = counter + 1;
      };
      animate(counter);
    });

    //new mapboxgl.Marker().setLngLat(origin).addTo(map.current)

    // new mapboxgl.Point().add()
  }, []);

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
