// Weather.js
import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_KEY;

  const getWeather = async () => {
    if (!city) return;  // input lo eh city enter cheyyakapothe manaki em choopinchadhu return ayipodhi 
    try {
      const res = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await res.json();

      if (data.cod === 200) {                   // cod=== 200 antey success ani meaning 
        setWeather(data);
      } else {
        setWeather(null);
        alert("City not found");
      }

    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
     
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h3>{weather.name}</h3>
          <p>🌡️ Temp: {weather.main.temp} °C</p>
          <p>🌥️ Weather: {weather.weather[0].description}</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
