import { createContext, useContext } from "react";

let date = new Date();

let hours = date.getHours();

export const TimeContext = createContext({
  currentTime: hours,
  updatedTime: () => {},
});

export const TimeContextProvider = TimeContext.Provider;

export default function useTimeContext() {
  return useContext(TimeContext);
}
