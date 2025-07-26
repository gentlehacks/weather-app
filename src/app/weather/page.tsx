"use client"
import {appState} from "@/store"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import WeatherCards from "@/components/WeatherCards"
import WeatherDetails from "@/components/WeatherDetails"
import Sidebar from "@/components/Sidebar"
import { WeatherData } from "@/types"

const WeatherApp = () => {
  const {appTheme} = appState();

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [cityName, setCityName] = useState<string>("");
  const [metric, setMetric] = useState<boolean>(false);
  const [searchCity, setSearchCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false)

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.toLowerCase()}&appid=${API_KEY}&units=${metric ? 'imperial ' : 'metric'}`;

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setWeatherData(data);
        console.log(`Weather of ${cityName} Fetched.`);
        setLoading(false);
      } catch (error) {
        console.log('Error Fetching ', error);
        setLoading(false);
        setWeatherData(null);
      }
    };

    fetchWeather()

  }, [searchCity, metric, API_URL, cityName])


  return (
    <div className={`relative w-full h-screen relative transition-bg duration-200
      ${appTheme ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}
    `}>

      {/* Header */}
      <Header 
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        cityName={cityName}
        setCityName={setCityName}
        setSearchCity={setSearchCity}
        loading={loading}
      />
      


      {/* Details */}
      <WeatherDetails 
        weatherData={weatherData} 
        metric={metric}
        loading={loading}
      />


      {/* Cards */}
      <WeatherCards 
        weatherData={weatherData} 
      />


      {/* Sidebar */}
      {openSidebar && (
        <Sidebar 
          weatherData={weatherData} 
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          metric={metric}
          setMetric={setMetric}
        />
      )}
      

    </div>
  )
}

export default WeatherApp