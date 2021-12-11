
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "./components/Map/Map";
import SideBar from "./components/SideBar/SideBar";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import { Loading } from "./helpers/Loading";


function App() {


  return (
    <Suspense fallback={<Loading />}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search />}></Route>
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



export default App;
