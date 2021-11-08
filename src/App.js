import InputBar from "./components/InputBar/InputBar";
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from "./components/Map/Map";
import SideBar from "./components/SideBar/SideBar";
import React from 'react';
import useFetch from "react-fetch-hook";
function App() {
 // const { isLoading, error, data} = useFetch("http://api.aviationstack.com/v1/flights?access_key=69caf8c72e4a2c0adc3e2e875360ee9b&callback=MY_FUNCTION&flight_status=active")

  return (
    <div className="App">
    <InputBar />
    <Map />
    <SideBar />
    </div>
  );
}

export default App;
