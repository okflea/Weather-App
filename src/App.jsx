import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Axios from "axios";
import "./App.css";

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = async (term) => {
    try {
      const response = await Axios.get("http://api.weatherstack.com/current", {
        params: { access_key: '331580f6f8556dbbd845134d0338ea7d', query: term, units: 'm' }

      });

      setCurrentWeather(response.data);

    } catch (err) {
      console.log(err);
    }

  };
  return (
    <div className="container">
      <p className='text-flicker-in-glow'>Weather App</p>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
