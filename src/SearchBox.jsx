import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SerchBox() {
  let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();

    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tepMin: jsonResponse.main.temp_min,
      temMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };
  return (
    <div className="serbox-container">
      <h3 className="serbox-heading">🌤️ Search for the Weather</h3>

      <form className="serbox-form" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          required
          fullWidth
          value={city}
          name="city"
          onChange={handleChange}
        />

        <Button variant="outlined" type="submit" className="serbox-button">
          Search
        </Button>
      </form>
    </div>
  );
}
