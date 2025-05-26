"use client"
import {motion} from "framer-motion"
import { appState } from '@/store'
import weatherIllustrate from "@/images/weather-illustrate.svg";
import { useRouter } from "next/navigation";
import Image from 'next/image'


const Home = () => {
  const {appTheme} = appState()
  const route = useRouter();

  return (
    <div className={`w-full h-screen p-4 flex flex-col justify-center items-center overflow-hidden
      ${appTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}
    `}>
      <motion.div className="w-full flex items-center justify-center mx-auto overflow-hidden"
        initial={{x: '35%', opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1}}
      >
        <Image
          src={weatherIllustrate}
          alt="weather illustrate image"
          width={200}
          height={200}
          className="w-[13rem] sm:w-[20rem]"
        />
      </motion.div>

      <motion.h1 className="mt-[4.5rem] text-2xl sm:text-4xl font-semibold text-center"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 0.9}}
      >
        Discover weather in your city
      </motion.h1>

      <motion.p className="text-md w-[80%] text-gray-400 text-center mt-[2rem]"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 1.4}}
      >
        Get to know your weather condition and radar precipitation forecast.
      </motion.p>

      
      <motion.button 
        onClick={() => route.push("/weather")}
      className="px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-bg duration-200 ease-in-out  cursor-pointer mt-[4rem]"
        initial={{opacity: 0, scale: 0.8}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 1, delay: 1.8}}
      >
        Get Started
        </motion.button>
      

    </div>
  )
}

export default Home