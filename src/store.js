import { atom, selector, useRecoilCallback, waitForAll, waitForAllSettled, waitForNone } from "recoil";
import { fetchCityData, fetchFlightData, fetchTimeTable } from "./api/fetchData";


export const flightIataAtom = atom({
    key:"flightIata",
    default:"TK1629"
})



export const flightAtom = atom({
  key: "flightData",
  default: null,
});

export const flightSelector = selector({
  key: "flightSelector",
  get: async ({ get }) => {
    const flightIata = get(flightIataAtom);
    const flightData = await fetchFlightData(flightIata);
    return flightData ? flightData : "flight data not found";
  },
  set: ({set,get}) => {
      set(flightAtom, get(flightSelector));
  }
});

export const originAtom = atom({
  key: "originData",
  default: null,
});

export const originSelector = selector({
  key: "originSelector",
  get: async ({ get }) => {
    const cityIata = get(flightSelector);
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
        const cityIata = get(flightSelector);
        const cityData = await fetchCityData(cityIata?.data[0]?.arrival?.iataCode);
        return cityData ? cityData : "city data not found";
    }
})



export const scheduleAtom = atom({
  key: "scheduleData",
  default: null,
});


export const scheduleSelector = selector({
    key:"scheduleSelector",
    get: async ({get}) => {
        const timetable = await fetchTimeTable(get(flightIataAtom));
        return timetable ? timetable : "time and date not found";
    }
})




export const autocompleteAtom = atom({
  key: "autocompleteData",
  default: null,
});


