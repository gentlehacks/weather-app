"use client"
import {motion} from "framer-motion"
import { appState } from "@/store";

interface Props {
  message: string;
  onClose: () => void;
}

const WeatherAlertModal: React.FC<Props> = ({ message, onClose }) => {
  const {appTheme} = appState()

  return (
    <motion.div
      className="fixed top-0 left-0 inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]"
      onClick={onClose} // Close modal when clicking outside
      initial={{scale: 0.7, opacity: 0.7}}
      animate={{scale: 1, opacity: 1}}
    >
      <div
        className={`relative flex flex-col items-center justify-center p-4 w-[90%] sm:w-lg rounded-xl shadow-lg
          ${appTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
        `}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h3 className="mb-7 text-xl">⚠ Weather Alert!</h3>
        <p className={`rounded-lg p-1 text-center
          ${appTheme ? 'bg-gray-700' : 'bg-gray-300'}
        `}>{message}</p>
        <button onClick={onClose}
          className="absolute top-0 right-0 p-2 rounded-xl bg-red-500 hover:bg-red-600 transition-bg duration-200 ease-in-out"
        >Close</button>
      </div>
    </motion.div>
  );
};

export default WeatherAlertModal;