import InputBar from "./components/InputBar/InputBar";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "./components/Map/Map";
import SideBar from "./components/SideBar/SideBar";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";


function App() {
  const [flightTrackData, setFlightTrackData] = useState({});
  const [cityData, setCityData] = useState({});
  const [countryData,setCountryData] = useState({});  
   
  const fetchFlightData = async () => {

    const flightdata = await axios.get(
      "https://aviation-edge.com/v2/public/flights?key=c75eac-812e66&flightIata=AC91"
    );
      setFlightTrackData(flightdata);
      console.log(flightTrackData)

    const citydata = await axios.get(
      `https://aviation-edge.com/v2/public/cityDatabase?key=c75eac-812e66&codeIataCity=${flightdata.data[0].departure.iataCode}`
    )
    setCityData(citydata);
    console.log(cityData)

    const countrydata = await axios.get(
      ` https://aviation-edge.com/v2/public/countryDatabase?key=c75eac-812e66&codeIso2Country=${citydata.data[0].codeIso2Country} `
    )
    setCountryData(countrydata);
    console.log(countryData)

  };                                                  
  
 

  useEffect(() => {
     fetchFlightData();
  },[]);


    return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkForFlightTracker />}></Route>
          <Route
            path="/flight-tracker"
            element={<FlightTracker data={flightTrackData,cityData,countryData} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function FlightTracker(flightTrackData,cityData,countryData) {
  return (
    (flightTrackData && cityData && countryData) ? 
    <div>
      <InputBar />
      <Map props={flightTrackData,cityData} />
      <SideBar props={flightTrackData,cityData,countryData} />
    </div>
    :
    <div>Loading...</div>
  );
}

function LinkForFlightTracker() {
  return (
    <div>
      <Link to="flight-tracker">click here</Link>
    </div>
  );
}

export default App;
