"use client"
import {appState} from "@/store"
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindy } from "react-icons/ti";
import { PiWindBold } from "react-icons/pi";
import { WeatherData } from "@/types";


const WeatherCards = ({weatherData}: {weatherData: WeatherData | null}) => {
  const {appTheme} = appState()


  return (
    <div className="w-full mt-[3rem] flex items-center justify-center space-x-[1rem] sm:space-x-[3rem]">
      <div className={`w-[7rem] sm:w-[7rem] md:w-[7rem] lg:w-[8rem] h-[9rem] lg:h-[10rem] flex flex-col items-center justify-center p-3 rounded-lg transition-bg duration-200
        ${appTheme ? 'bg-gray-800' : 'bg-gray-200'}
      `}>
        Condition
        <p className="mt-5 mb-2 text-lg items-center">
          <TiWeatherWindy />
        </p>
        <p className="text-md mt-2 font-semibold">
          {weatherData?.weather?.[0]?.main === "Clouds" ? (
          "Cloudy"
        ) : weatherData?.weather?.[0]?.main === "Snow" ? (
          "Snow"
        ) : weatherData?.weather?.[0]?.main === "Mist" || "Fog" ? (
          "Fog"
        ) : weatherData?.weather?.[0]?.main === "Clear" ? (
          "Clear"
        ) : weatherData?.weather?.[0]?.main === "Rain" || "Drizzle" ? (
          "Rain"
        ) : weatherData?.weather?.[0]?.main === "Thunderstorm" ? (
          "Thunderstorm"
        ) : weatherData?.weather?.[0]?.main === "Sand" || "Dust" || "Squall" ? (
          "Dust"
        ) : (
          "Cloudy"
        )}
        </p>
      </div>
      <div className={`w-[7rem] sm:w-[7rem] md:w-[7rem] lg:w-[8rem] h-[9rem] lg:h-[10rem] flex flex-col items-center justify-center p-3 rounded-lg transition-bg duration-200 
        ${appTheme ? 'bg-gray-800' : 'bg-gray-200'}
      `}>
        <WiHumidity className="mt-1 text-3xl" />
        <p className="mt-4 text-lg items-center">
          {weatherData?.main?.humidity} 
          {!weatherData && "0"} 
          <span className="ml-1">%</span>
        </p>
        <p className="text-md mt-2 font-semibold">
          Humidity
        </p>
      </div>
      <div className={`w-[7rem] sm:w-[7rem] md:w-[7rem] lg:w-[8rem] h-[9rem] lg:h-[10rem] flex flex-col items-center justify-center p-3 rounded-lg transition-bg duration-200 
        ${appTheme ? 'bg-gray-800' : 'bg-gray-200'}
      `}>
        <PiWindBold  className="mt-1 text-3xl" />
        <p className="mt-4 text-lg items-center">
          {!weatherData && "0"} 
          {weatherData?.wind?.speed} 
          <span className="ml-1">km/h</span> 
        </p>
        <p className="w-full text-center justify-center text-md mt-2 font-semibold">
          Wind Speed
        </p>
      </div>
    </div>
  )
}

export default WeatherCards