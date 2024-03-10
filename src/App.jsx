import "./App.css";
import morningVid from "./assets/video/morningVid.mp4";
import eveningVid from "./assets/video/eveningVid.mp4";
import AppBody from "./components/AppBody";
import { useEffect, useState } from "react";
import Greeting from "./components/Greeting";
import { LocationWeatherConextProvider } from "./contexts/weatherContext";
import { TimeContextProvider } from "./contexts/timeContext";

function App() {
  let [bgVid, setBgVid] = useState(morningVid);
  // let [appBoody, setAppBody] = useState(false);
  let [loading, setLoading] = useState(false);
  const api =
    "https://api.weatherapi.com/v1/current.json?key=1e18cf5c7516403dbd4195947240903&q=";
  let [location, setLocation] = useState("");
  const getWeather = (location) => {
    setLoading(true);
    fetch(api + location)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setLoading(false);
        setWeatherData(data);
      });
  };
  let [weatherData, setWeatherData] = useState({});

  const error = null;

  let [currentTime, setCurrentTime] = useState(null);
  const updatedTime = () => {
    const date = new Date();
    setCurrentTime(date.getHours());
  };

  useEffect(() => {
    if (currentTime >= 6 && currentTime < 18) {
      setBgVid(morningVid);
    } else {
      setBgVid(eveningVid);
    }

    updatedTime();

    const intervalId = setInterval(updatedTime, 60000);

    return () => clearInterval(intervalId);
  }, [currentTime]);

  return (
    <LocationWeatherConextProvider
      value={{
        api,
        location,
        setLocation,
        getWeather,
        weatherData,
        loading,
        error,
      }}
    >
      <TimeContextProvider
        value={{
          currentTime,
          updatedTime,
        }}
      >
        <div className="w-full h-screen overflow-y-hidden relative">
          <video
            autoPlay
            muted
            loop
            className="absolute z-10 min-w-full min-h-full object-cover"
            src={bgVid}
          />
          {/* <div>
        <Greeting />
      </div> */}
          <div className="absolute z-20 w-full h-full bg-white bg-opacity-50 ">
            <Greeting />
            <AppBody />
          </div>
        </div>
      </TimeContextProvider>
    </LocationWeatherConextProvider>
  );
}

export default App;
