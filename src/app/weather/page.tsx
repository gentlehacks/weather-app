"use client"
import {appState} from "@/store"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import WeatherCards from "@/components/WeatherCards"
import WeatherDetails from "@/components/WeatherDetails"
import Sidebar from "@/components/Sidebar"
import WeatherAlertModal from "@/components/WeatherAlertModal"
import ErrorInput from "@/components/ErrorInput"

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

const WeatherApp = () => {
  const {appTheme} = appState()

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [cityName, setCityName] = useState<string>("");
  const [metric, setMetric] = useState<boolean>(false);
  const [searchCity, setSearchCity] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [errorInput, setErrorInput] = useState<string>("");
  const [inputErrorModal, setInputErrorModal] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData[] | null>(null);

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.toLowerCase()}&appid=${API_KEY}&units=${metric ? 'imperial ' : 'metric'}`;

  useEffect(() => {
    const fetchData = async () => {
      setErrorInput("");
      setWeatherData(null);
      setIsModalOpen(false);

      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          const errorInput = await response.json();
          errorInput('Failed to fetch weather data.');
        }

        const data = await response.json()
        setWeatherData(data)

        // Check temperature and trigger modal
        const temperature = data?.main?.temp;
        const isMetric = metric

        let temperatureCelsius = temperature;
        if (isMetric && temperature !== undefined) {
          temperatureCelsius = (temperature - 32) * (5 / 9);
        }

        if (temperatureCelsius !== undefined) {
          if (temperatureCelsius > 35) {
            setModalMessage(`Temperature in ${data?.name} is likely high! (${temperature}°F / ${temperatureCelsius.toFixed(1)}°C)`);
            setIsModalOpen(true);
          } else if (temperatureCelsius < 15) {
            setModalMessage(`Temperature in ${data?.name} is likely low! (${temperature}°F / ${temperatureCelsius.toFixed(1)}°C)`);
            setIsModalOpen(true);
          }
        }

        
      } catch (error) {
        setErrorInput("Error fetching weather!")
      }
    }

    fetchData()

  }, [searchCity, metric]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        errorInput={errorInput}
        setErrorInput={setErrorInput}
        searchCity={searchCity}
        setSearchCity={setSearchCity}
      />
      


      {/* Details */}
      <WeatherDetails 
        weatherData={weatherData} 
        metric={metric}
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
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {isModalOpen && (
        <WeatherAlertModal 
          message={modalMessage}
          onClose={handleCloseModal}
        />
      )}

      {errorInput.length > 1 && inputErrorModal && (        
        <ErrorInput 
          errorInput={errorInput}
          inputErrorModal={inputErrorModal}
          setInputErrorModal={setInputErrorModal}
        />
      )}
      

    </div>
  )
}

export default WeatherApp