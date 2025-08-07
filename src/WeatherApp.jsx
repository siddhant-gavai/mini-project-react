import SerchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css"; // make sure this is imported

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    feelsLike: 31.05,
    humidity: 77,
    temMax: 27.74,
    temp: 27.74,
    tepMin: 27.74,
    weather: "overcast clouds",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div className="weather-app-container">
      <div>
        <h2 className="weather-heading">Weather App By Siddhant 🌤️</h2>
        <SerchBox updateInfo={updateInfo} />
      </div>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
