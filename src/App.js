import InputBar from "./components/InputBar/InputBar";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "./components/Map/Map";
import SideBar from "./components/SideBar/SideBar";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
  const [flightTrackData, setFlightTrackData] = useState(null);
  const [originData, setOriginData] = useState(null);
  const [destinationData, setDestinationData] = useState(null);
  const [countryData, setCountryData] = useState(null);

  const fetchFlightData = async () => {
    const flightdata = await axios.get(
      "https://aviation-edge.com/v2/public/flights?key=c75eac-812e66&flightIata=KE31"
    );
    setFlightTrackData(flightdata);
    console.log(flightTrackData);

    const origindata = await axios.get(
      `https://aviation-edge.com/v2/public/cityDatabase?key=c75eac-812e66&codeIataCity=${flightdata?.data[0]?.departure?.iataCode}`
    );
    setOriginData(origindata);
    console.log(originData);

    const destinationdata = await axios.get(
      `https://aviation-edge.com/v2/public/cityDatabase?key=c75eac-812e66&codeIataCity=${flightdata?.data[0]?.arrival?.iataCode}`
    );
    setDestinationData(destinationdata);
    console.log(destinationData);

    const countrydata = await axios.get(
      ` https://aviation-edge.com/v2/public/countryDatabase?key=c75eac-812e66&codeIso2Country=${origindata?.data[0]?.codeIso2Country} `
    );
    setCountryData(countrydata);
    console.log(countryData);

    while (!flightTrackData) {
      fetchFlightData();
    }
  };

  useEffect(() => {
    fetchFlightData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkForFlightTracker />}></Route>
          <Route
            path="/flight-tracker"
            element={
              { flightTrackData } ? (
                <FlightTracker
                  flightData={flightTrackData}
                  originData={originData}
                  countryData={countryData}
                  destinationData={destinationData}
                />
              ) : (
                <div>Loading 1</div>
              )
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function FlightTracker(data) {
  if (data)
   { return (
      <div>
        {/* <InputBar /> */}
        <Map
          flightData={data.flightData}
          originData={data.originData}
          destinationData={data.destinationData}
        />
        {/* <SideBar
          countryData={data.countryData}
          flightData={data.flightData}
          originData={data.originData}
          destinationData={data.destinationData}
        /> */}
      </div>
    );}
  else return <div>Loading..</div>;
}

function LinkForFlightTracker() {
  return (
    <div>
      <Link to="flight-tracker">click here</Link>
    </div>
  );
}

export default App;
