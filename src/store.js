import { atom, selector } from "recoil";
import { fetchCityData, fetchFlightData } from "./api/fetchData";


export const flightIata = atom({
    key:"flightIata",
    default:null
})



export const flightAtom = atom({
  key: "flightData",
  default: null,
});

export const flightSelector = selector({
  key: "flightSelector",
  get: async ({ get }) => {
    const flightIata = get(flightAtom);
    const flightData = await fetchFlightData(flightIata);
    return flightData ? flightData : "flight data not found";
  } 
});

export const originAtom = atom({
  key: "originData",
  default: null,
});

export const originSelector = selector({
  key: "originSelector",
  get: async ({ get }) => {
    const cityIata = get(flightAtom);
    const cityData = await fetchCityData(cityIata?.data[0]?.departure?.iataCode);
    return cityData ? cityData : "city data not found";
  }
});

export const destinationAtom = atom({
  key: "destinationData",
  default: null,
});


export const destinationSelector = selector({
    key:"destinationSelector",
    get: async ({get}) => {
        const cityIata = get(destinationAtom);
        const cityData = await fetchCityData(cityIata?.data[0]?.arrival?.iataCode);
        return cityData ? cityData : "city data not found";
    }
})



export const scheduleAtom = atom({
  key: "scheduleData",
  default: null,
});

export const autocompleteAtom = atom({
  key: "autocompleteData",
  default: null,
});
