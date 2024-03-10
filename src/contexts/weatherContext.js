import { createContext, useContext } from "react";

export const LocationWeatherContext = createContext({
  api: "https://api.weatherapi.com/v1/current.json?key=1e18cf5c7516403dbd4195947240903&q=",
  location: "",
  setLocation: () => {},
  getWeather: () => {},
  weatherData: {},
  loading: false,
  error: null,
});

export const LocationWeatherConextProvider = LocationWeatherContext.Provider;

export default function useLocationWeather() {
  return useContext(LocationWeatherContext);
}
