// import React from 'react';

import { useContext } from "react";
import { LocationWeatherContext } from "../contexts/weatherContext";

const AppBody = () => {
  const { weatherData, loading } = useContext(LocationWeatherContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center mt-6 w-full">
        <h1 className="text-6xl italic">Loading......</h1>
      </div>
    );
  }

  if (!weatherData || !weatherData.location) {
    return null; // Or return some placeholder component
  }

  return (
    <div className="flex justify-center mt-6 w-full">
      <div className="w-2/5 mx-auto border border-solid border-black p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">{weatherData.location.name}</h1>
          <h2 className="text-lg text-gray-500 italic font-semibold">
            {weatherData.location.country}
          </h2>
        </div>
        <div className="flex justify-evenly mt-3 font-semibold">
          <span>
            {weatherData.location.lat}, {weatherData.location.lon}
          </span>
          <span>{weatherData.location.tz_id}</span>
          <span>{weatherData.location.localtime}</span>
        </div>
        <hr className="mt-5 border-gray-600" />
        <div className="mt-6 flex justify-around">
          <div className="flex flex-col gap-5">
            <span>Temp: {weatherData.current.temp_c} C</span>
            <span>Temp: {weatherData.current.temp_f} F</span>
            <span>{weatherData.current.is_day === 1 ? "Day" : "Night"}</span>
            <span>Condition: {weatherData.current.condition.text}</span>
          </div>
          <div className="flex flex-col gap 5 justify-evenly">
            <span>Feels like: {weatherData.current.feelslike_c} C</span>
            <span>Feels like: {weatherData.current.feelslike_f} F</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBody;
