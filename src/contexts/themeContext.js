import { useContext } from "react";
import { createContext } from "react";

export const WeatherThemeContext = createContext({
  themeMode: "light",
  changeTheme: () => {},
});

export const WeatherThemeContextProvider = WeatherThemeContext.Provider;

export default function useWeatherTheme() {
  return useContext(WeatherThemeContext);
}
