"use client";
import {motion} from "framer-motion"
import { FaCloud, FaLocationDot } from "react-icons/fa6";

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

interface WeatherDetailsProps {
  metric: boolean;
  weatherData: WeatherData | null;
}

const WeatherDetails = ({weatherData, metric}: WeatherDetailsProps) => {

  return (
    <div className="w-full pt-[6rem]  transition-bg duration-200">
      <motion.div className="flex items-center justify-center"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
      >
        <FaLocationDot className="text-3xl text-blue-500" />
        <h1 className="text-3xl font-semibold ml-2">
          {weatherData?.name}
          {!weatherData && "No City"}
          <span className="ml-2">
            {weatherData?.sys.country}
            {!weatherData && "😒"}
          </span>
        </h1>
      </motion.div>

      {/* Weather Icon */}
      <motion.div className="w-full flex items-center justify-center mt-[4rem]"
      >
        {!weatherData && (
          <FaCloud className="text-[7rem]" />
        )}
        {weatherData && (
          <img
            alt="Weather Icon"
            src={`http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`}
            className="w-[7rem] h-[7rem]"
          />
        )}
          
        
      </motion.div>

      <motion.p className="flex items-center justify-center text-lg"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
      >
        
        {weatherData?.weather[0]?.description}
        {!weatherData && 'No weather found!'}
      </motion.p>

      <motion.div className="flex items-center justify-center mt-[1rem]"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
      >
        <h1 className="text-[4rem] font-semibold">
          {weatherData?.main?.temp.toFixed(0)}
          {!weatherData && '0'} 
          <span className="ml-[-1]">°</span> 
        </h1>
        <h1 className="ml-2 text-[3.5rem] font-semibold">
          {metric ? "F" : "C"}
        </h1>
      </motion.div>


    </div>
  )
}

export default WeatherDetails