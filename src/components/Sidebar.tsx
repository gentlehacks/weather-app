"use client"
import {appState} from "@/store"
import {motion} from "framer-motion"
import { FaMoon, FaSun } from "react-icons/fa"
import { FaLocationDot, FaXmark } from "react-icons/fa6";
import { FaThermometerEmpty } from "react-icons/fa";

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

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: (openSidebar: boolean) => void;
  metric: boolean;
  setMetric: (metric: boolean) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
  weatherData: WeatherData | null;
}

const Sidebar = ({
  weatherData,
  openSidebar,
  setOpenSidebar,
  metric,
  setMetric,
  setIsModalOpen,
}: SidebarProps) => {
  const {appTheme, setAppTheme} = appState()

  const handleMetricChange = () => {
    setIsModalOpen(false)
    setMetric(!metric)
  }

  return (
    <div 
      onClick={() => setOpenSidebar(!openSidebar)}
    className="w-full h-screen fixed top-0 bg-[rgba(0,0,0,0.3)] transition-bg duration-200">
      <motion.aside 
        onClick={(e) => e.stopPropagation()}
      className={`relative w-[90%] sm:w-[40%] h-screen flex flex-col p-4 rounded-r-lg transition-bg duration-200
        ${appTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}
      `}
        initial={{x: "-100%", opacity: 0.5}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 0.2}}
      >
        <h1 className="mt-2 text-2xl font-semibold">MENU</h1>

        <motion.div 
          onClick={() => setOpenSidebar(!openSidebar)}
        className={`absolute top-4 right-3 flex items-center justify-center w-[2rem] h-[2rem] rounded-full cursor-pointer transition-bg duration-200 ease-in-out
          ${appTheme ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}  
        `}
          initial={{scale: 0.3, rotate: 130}}
          animate={{scale: 1, rotate: 0}}
          transition={{duration: 0.5, delay: 0.2}}
        >
          <FaXmark />
        </motion.div>

        <div className="flex flex-col mt-[2rem]">
          <motion.div className="flex items-center justify-center w-full"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 0.4}}
          >
            <FaLocationDot size={20} />
            <h1 className="flex items-center ml-2">
              {weatherData?.name} 
              {!weatherData && 'No City'}
              <span className="ml-2">
                {weatherData?.sys?.country}
                {!weatherData && '😟'}
              </span>
            </h1>
          </motion.div>

          <motion.div className="flex flex-col w-full mt-[2rem] space-y-2 overflow-hidden h-full"
            initial={{opacity: 0, y: '-3rem'}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.8}}
          >

            {/* Theme Toggler */}
            <div className={`flex items-center p-3 rounded-lg justify-between shadow-md transition-bg duration-200 ease-in-out
              ${appTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}  
            `}>
              <div className="flex items-center">
                {appTheme ? (
                  <FaMoon size={18} />
                ) : (
                  <FaSun size={18} />
                )}
                <h1 className="text-1xl font-semibold flex items-center ml-3">
                  Theme/
                  <span>{appTheme ? 'Dark' : 'Light'}</span>
                </h1>
                
              </div>
              <div className="flex w-12 h-7 rounded-full bg-white shadow-md">
                <motion.div 
                  onClick={() => setAppTheme()}
                className={`w-full h-full relative  rounded-full cursor-pointer
                  ${appTheme ? 'bg-blue-300' : 'bg-white'}
                `}>
                  <motion.div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center bg-blue-500 rounded-full shadow-md"
                    initial={{x: 0}}
                    animate={{x: appTheme ? '1.3rem' : 0}}
                  >
                    {appTheme ? (
                      <FaMoon />
                    ) : (
                      <FaSun />
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Metric Toggler */}
            <div className={`flex items-center p-3 rounded-lg justify-between shadow-md transition-bg duration-200 ease-in-out
              ${appTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}  
            `}>
              <div className="flex items-center">
                <FaThermometerEmpty size={18} />
                <h1 className="text-1xl font-semibold flex items-center ml-3">
                  Metric/
                  <span>{metric ? 'Fahrenheit' : 'Celcius'}</span>
                </h1>
                
              </div>
              <div className="flex w-12 h-7 rounded-full bg-white shadow-md">
                <motion.div 
                  onClick={handleMetricChange}
                className={`w-full h-full relative  rounded-full cursor-pointer
                  ${metric ? 'bg-blue-300' : 'bg-white'}
                `}>
                  <motion.div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center bg-blue-500 rounded-full shadow-md"
                    initial={{x: 0}}
                    animate={{x: metric ? '1.3rem' : 0}}
                  >
                    <p className="text-xs font-light">
                      {metric ? 'F' : 'C'}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* Pexelxus Copy Mark */}
        <div className="absolute bottom-4 left-0 right-0 mx-auto w-full flex items-center justify-center">
          <p className="text-sm">&copy; Pexelxus</p>
        </div>
                  
      </motion.aside>
    </div>
  )
}

export default Sidebar