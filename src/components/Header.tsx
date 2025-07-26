"use client"
import {motion} from "framer-motion"
import {appState} from "@/store"
import { BiSearch } from "react-icons/bi"
import { IoMenu } from "react-icons/io5"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { KeyboardEvent } from "react"

interface HeaderProps {
  openSidebar: boolean;
  setOpenSidebar: (openSidebar: boolean) => void;
  cityName: string;
  setCityName: (cityName: string) => void;
  setSearchCity: (searchCity: string) => void;
  loading: boolean;
}

const Header = ({
  openSidebar,
  setOpenSidebar,
  cityName,
  setCityName,
  setSearchCity,
  loading,

}: HeaderProps) => {
  const {appTheme} = appState();

  // Trigger Search While Press Enter Key
  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter')  setSearchCity(cityName)
  };

  const handleSearchCity = () => {
    setSearchCity(cityName)
  };

  return (
    <div className={`w-full py-3 px-4 md:px-5 lg:px-10 fixed top-0 shadow-md border-b-1  transition-bg duration-200
      ${appTheme ? 'bg-gray-900 text-white border-gray-800' : 'bg-gray-100 text-gray-900 border-gray-300'}
    `}>
        <div className="flex items-center w-full justify-between">
          <button 
            onClick={() => setOpenSidebar(!openSidebar)}
          className="text-[2rem] hover:text-blue-500 cursor-pointer duration-200"
          >
            <IoMenu />
          </button>
          
          <div className="flex items-center w-[85%]">
            <input 
              type="text" 
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              onKeyDown={handlePressEnter}
              placeholder="Search a city here."
              className="w-full lg:w-[80%] px-4 py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
            <motion.button 
              initial={{scale: 1}}
              whileTap={{scale: [0.8, 1.2, 1]}}
              transition={{duration: 0.1, ease: 'easeInOut'}}
            onClick={handleSearchCity}
            disabled={loading}
            className="ml-3 md:ml-4 lg:ml-8 text-2xl bg-blue-500 hover:bg-blue-600 transition-all duration-200 ease-in-out flex items-center justify-center p-2 cursor-pointer rounded-lg shadow-md">
              
              {loading ? (
                <motion.div 
                  animate={{rotate: 360}}
                  transition={{duration: 0.5, repeat: Infinity, repeatType: "loop", ease: 'linear'}}
                className="flex items-center justify-center">
                  <AiOutlineLoading3Quarters />
                </motion.div>
                
              ) : (
                <BiSearch />
              )}
            </motion.button>
          </div>
        </div>
      </div>
  )
}

export default Header