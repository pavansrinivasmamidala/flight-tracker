import axios from "axios";
export const fetchFlightData = (iataCode) => {
  try {
    return axios.get(
      `https://aviation-edge.com/v2/public/flights?key=c75eac-812e66&flightIata=${iataCode}`
    );
  } catch (e) {
    return e;
  }
};

export const fetchCityData = (iataCode) => {
  try {
    return axios.get(
      `https://aviation-edge.com/v2/public/cityDatabase?key=c75eac-812e66&codeIataCity=${iataCode}`
    );
  } catch (e) {
    return e;
  }
};

export const fetchTimeTable = (iataCode) => {
  try {
    return axios.get(
      `http://aviation-edge.com/v2/public/timetable?key=c75eac-812e66&flight_iata=${iataCode}`
    );
  } catch (e) {
    return e;
  }
};
