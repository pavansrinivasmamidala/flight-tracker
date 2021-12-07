import InputBar from "./components/InputBar/InputBar";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "./components/Map/Map";
import SideBar from "./components/SideBar/SideBar";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import {
  destinationSelector,
  flightAtom,
  flightSelector,
  originSelector,
  scheduleAtom,
  scheduleSelector,
} from "./store";

function App() {


  return (
    <Suspense fallback="loading..">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LinkForFlightTracker />}></Route>
            <Route path="/flight-tracker" element={<FlightTracker />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

function FlightTracker() {
  return (
    <div>
      {/* <InputBar /> */}
      <Map />
      <SideBar />
    </div>
  );
}

function LinkForFlightTracker() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <InputBar /> */}
      <Link to="flight-tracker" style={{ fontSize: "30px" }}>
        Flight Tracker
      </Link>
    </div>
  );
}

export default App;
