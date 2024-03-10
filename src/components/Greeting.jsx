import { useContext, useEffect, useState } from "react";
import { LocationWeatherContext } from "../contexts/weatherContext";
import { TimeContext } from "../contexts/timeContext";
const Greeting = () => {
  const { setLocation, getWeather } = useContext(LocationWeatherContext);
  const { currentTime, updatedTime } = useContext(TimeContext);
  let [greeting, setGreeting] = useState("");
  let [locationValue, setLocationValue] = useState("");
  const handleSearch = () => {
    setLocation(locationValue);
    getWeather(locationValue);
    setLocationValue("");
  };

  useEffect(() => {
    if (currentTime >= 5 && currentTime < 18) {
      setGreeting("Good Morning");
    } else {
      setGreeting("Good Evening");
    }

    updatedTime();

    const intervalId = setInterval(updatedTime, 60000);

    return () => clearInterval(intervalId);
  }, [currentTime, updatedTime]);

  return (
    <div>
      <h1 className="mt-5 text-3xl text-center">{greeting}</h1>
      <div className="flex items-center justify-center gap-3 mt-5">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter the Location"
          value={locationValue}
          onChange={(e) => setLocationValue(e.target.value)}
          className="w-1/3 p-3 focus:outline-none focus:border-blue-500 focus:border-solid focus:border-2 rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="p-3 bg-blue-500 border-none rounded-md cursor-pointer hover:scale-105 duration-200"
        >
          <span className="">Search</span>
        </button>
      </div>
    </div>
  );
};

export default Greeting;
