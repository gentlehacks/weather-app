"use client"
import {appState} from "@/store"
import { BiSearch } from "react-icons/bi"
import { IoMenu } from "react-icons/io5"

interface HeaderProps {
  openSidebar: boolean;
  setOpenSidebar: (openSidebar: boolean) => void;
  cityName: string;
  setCityName: (cityName: string) => void;
  setErrorInput: (errorInput: string) => void;
  setSearchCity: (searchCity: string) => void;
}

const Header = ({
  openSidebar,
  setOpenSidebar,
  cityName,
  setCityName,
  setErrorInput,
  setSearchCity,

}: HeaderProps) => {
  const {appTheme} = appState();

  const handleSearchCity = () => {
    setErrorInput("")
    setSearchCity(cityName)
  }

  return (
    <div className={`w-full py-3 px-4 fixed top-0 shadow-md border-b-1 border-gray-500 transition-bg duration-200
      ${appTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}
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
              placeholder="Search a city here."
              className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
            <button 
              onClick={handleSearchCity}
            className="ml-3 text-2xl hover:text-blue-500 transition duration-200 ease-in-out flex items-center justify-center p-2 cursor-pointer rounded-lg shadow-md">
              <BiSearch />
            </button>
          </div>
        </div>
      </div>
  )
}

export default Header