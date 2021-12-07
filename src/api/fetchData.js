import axios from "axios";
export const fetchFlightData = (iataCode) =>{

    return axios.get(
        `https://aviation-edge.com/v2/public/flights?key=c75eac-812e66&flightIata=${iataCode}`
      );

}

export const fetchCityData = (iataCode) =>{
    return  axios.get(
    `https://aviation-edge.com/v2/public/cityDatabase?key=c75eac-812e66&codeIataCity=${iataCode}`
  );
}

export const fetchTimeTable = (iataCode) => {
    return axios.get(
        `http://aviation-edge.com/v2/public/timetable?key=c75eac-812e66&flight_iata=${iataCode}`
      );
}