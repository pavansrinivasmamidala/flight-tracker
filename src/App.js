import InputBar from "./components/InputBar/InputBar";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "./components/Map/Map";
import SideBar from "./components/SideBar/SideBar";
import React from "react";
import useFetch from "react-fetch-hook";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  // eslint-disable-next-line no-unused-vars
   const { isLoading, error, data} = useFetch("https://aviation-edge.com/v2/public/flights?key=c75eac-812e66&flightIata=FX77")
    console.log(data);

  

   return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkForFlightTracker />}></Route>
          <Route path="/flight-tracker" element={<FlightTracker data={data} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function FlightTracker(data) {
  return (
    <div>
      <InputBar />
      <Map props={data} />
      <SideBar props={data}/>
    </div>
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
