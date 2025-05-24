import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setCity("");
  }

  const API_KEY = process.env.REACT_APP_WEATHER_KEY;

  const getWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric` );
      const data = await res.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert("City not found");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  
  let weatherImg = null;

  if (weather) {
    const desc = weather.weather[0].description.toLowerCase();
    const temp = weather.main.temp;

    if (desc.includes("rain")) {
      weatherImg = <img className="weather-icon" src="/rain.png" alt="rainy" />;
    } else if (desc.includes("cloud")) {
      weatherImg = <img className="weather-icon" src="/clouds.png" alt="cloudy" />;
    } else if (desc.includes("clear")) {

      if (temp < 20) {
        weatherImg = <img className="weather-icon" src="/cloud-sunny.jpg" alt="sunny but cold" />;
      } else if (temp > 30) {
        weatherImg = <img className="weather-icon" src="/hot-sunny.jpg" alt="sunny and hot" />;
      } else {
        weatherImg = <img className="weather-icon" src="/sun.png" alt="regular clear day" />;
      }


    } else if (desc.includes("thunder")) {
      weatherImg = <img className="weather-icon" src="/thunder.png" alt="thunder" />;
    } else {
      if (temp < 20) {
        weatherImg = <img className="weather-icon" src="/clouds.png" alt="cold" />;
      } else if (temp > 30) {
        weatherImg = <img className="weather-icon" src="/hot-sunny.jpg" alt="hot" />;
      } else {
        weatherImg = <img className="weather-icon" src="/sun.png" alt="sunny" />;
      }
    }
  }

  return (
    <div className="weather-Container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}> 🔍︎ </button>

        <div className="clouds"> </div>

        {weather && (
          <div>
         
            <div className="weather-image">{weatherImg}</div>
            

            <div className="temp">
              <p> {Math.round(weather.main.temp)} °C</p>
              <p1>{weather.name}</p1> <br />
               <p2 className="description"> {weather.weather[0].description}</p2>
             
            </div>

            <div className="hs">
              <div className="humidity">
                <div className="img-per-title">
                  <img
                    className="humidity-Img"
                    src="/humidity.png"
                    alt="humidity"
                  />
                  <div className="percentage-Humidity">
                    <p className="percent">{weather.main.humidity} % </p>
                    <span className="humidity-Title"> Humidity </span>
                  </div>
                </div>
              </div>

              <div className="windSpeed">
                <div className="img-per-title">
                  <img
                    className="humidity-Img"
                    src="/wind.png"
                    alt="humidity"
                  />
                  <div className="percentage-Humidity">
                    <p className="percent">{weather.wind.speed} km/h </p>
                    <span className="humidity-Title"> Wind Speed </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Weather;
