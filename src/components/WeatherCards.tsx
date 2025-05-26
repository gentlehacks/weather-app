"use client"
import {appState} from "@/store"
import { WiHumidity } from "react-icons/wi";
import { IoCloudy } from "react-icons/io5";
import { TiWeatherWindy } from "react-icons/ti";
import {
  Cloud,
  CloudRain,
  Wind,
  Bolt,      // Thunderstorm
  Snowflake,  // Snow   
  Sun,        // Clear
} from 'lucide-react';
import { PiWindBold } from "react-icons/pi";
import { MdFoggy } from "react-icons/md";


const WeatherCards = ({weatherData}: {weatherData: any}) => {
  const {appTheme} = appState()

// function isRainy(weatherData: WeatherData): boolean {
//   if (weatherData.rain || weatherData.snow) {
//     return true;
//   }
//   if (weatherData.weather && weatherData.weather.some(item => item.main.toLowerCase().includes('rain') || 
//   item.main.toLowerCase().includes('drizzle') || 
//   item.main.toLowerCase().includes('thunderstorm'))) {
//     return true;
//   }
//   return false;
// }

// function isSunny(weatherData: WeatherData): boolean {
//   if (weatherData.weather && weatherData.weather.some(item => item.main.toLowerCase() === 'clear')) {
//     return true;
//   }
//   // You might also consider partly cloudy as somewhat sunny
//   if (weatherData.clouds && weatherData.clouds.all <= 30) { // Example: Less than 30% cloud cover
//     return true;
//   }
//   return false;
// }

//   const isCurrentlyRainy = isRainy(weatherData);
//   const isCurrentlySunny = isSunny(weatherData);


  return (
    <div className="w-full mt-[3rem] flex items-center justify-center space-x-[1rem] sm:space-x-[3rem]">
      <div className={`w-[7rem] flex flex-col items-center justify-center p-3 rounded-lg transition-bg duration-200
        ${appTheme ? 'bg-gray-800' : 'bg-gray-200'}
      `}>

        {weatherData?.weather[0].main === "Clouds" ? (
          <IoCloudy className="mt-1 text-3xl" />
        ) : weatherData?.weather[0].main === "Snow" ? (
          <Snowflake className="mt-1 text-3xl" />
        ) : weatherData?.weather.main === "Mist" || "Fog" ? (
          <MdFoggy className="mt-1 text-3xl"  />
        ) : weatherData?.weather[0].main === "Clear" ? (
          <Sun className="mt-1 text-3xl" />
        ) : weatherData?.weather[0].main === "Rain" || "Drizzle" ? (
          <CloudRain className="mt-1 text-3xl" />
        ) : weatherData?.weather[0].main === "Thunderstorm" ? (
          <Bolt className="mt-1 text-3xl" />
        ) : weatherData?.weather[0].main === "Sand" || "Dust" || "Squall" ? (
          <Wind className="mt-1 text-3xl" />
        ): ""}
        <p className="mt-5 mb-2 text-lg items-center">
          <TiWeatherWindy />
        </p>
        <p className="text-md mt-2 font-semibold">
          {weatherData?.weather[0].main === "Clouds" ? (
          "Cloudy"
        ) : weatherData?.weather[0].main === "Snow" ? (
          "Snow"
        ) : weatherData?.weather.main === "Mist" || "Fog" ? (
          "Fog"
        ) : weatherData?.weather[0].main === "Clear" ? (
          "Clear"
        ) : weatherData?.weather[0].main === "Rain" || "Drizzle" ? (
          "Rain"
        ) : weatherData?.weather[0].main === "Thunderstorm" ? (
          "Thunderstorm"
        ) : weatherData?.weather[0].main === "Sand" || "Dust" || "Squall" ? (
          "Dust"
        ) : (
          "Cloudy"
        )}
        </p>
      </div>
      <div className={`w-[7rem] flex flex-col items-center justify-center p-3 rounded-lg transition-bg duration-200 
        ${appTheme ? 'bg-gray-800' : 'bg-gray-200'}
      `}>
        <WiHumidity className="mt-1 text-3xl" />
        <p className="mt-4 text-lg items-center">
          {weatherData?.main.humidity} 
          {!weatherData && "0"} 
          <span className="ml-1">%</span>
        </p>
        <p className="text-md mt-2 font-semibold">
          Humidity
        </p>
      </div>
      <div className={`w-[7rem] flex flex-col items-center justify-center p-3 rounded-lg transition-bg duration-200 
        ${appTheme ? 'bg-gray-800' : 'bg-gray-200'}
      `}>
        <PiWindBold  className="mt-1 text-3xl" />
        <p className="mt-4 text-lg items-center">
          {!weatherData && "0"} 
          {weatherData?.wind.speed} 
          <span className="ml-1">km/h</span> 
        </p>
        <p className="text-md mt-2 font-semibold">
          Wind Speed
        </p>
      </div>
    </div>
  )
}

export default WeatherCards