"use client"
import { appState } from "@/store";
import { FaXmark } from "react-icons/fa6";

interface ErrorInputProps {
  errorInput: string;
  inputErrorModal: boolean;
  setInputErrorModal: (inputErrorModal: boolean) => void;
}

const ErrorInput = ({
  errorInput, 
  inputErrorModal, 
  setInputErrorModal
}: ErrorInputProps) => {
  const {appTheme} = appState()

  const handleCloseModal = () => {
    if (inputErrorModal === true) {
      setTimeout(() => setInputErrorModal(false), 7000)
    }
  };

  handleCloseModal();

  return (
    <div 
      onClick={() => setInputErrorModal(false)}
    className="fixed top-0 mx-auto inset-0 flex items-center justify-center w-full h-screen bg-[rgba(0,0,0,0.3)]">
      <div 
        onClick={(e) => e.stopPropagation()}
      className={`relative p-2 shadow-md rounded-lg text-center
        ${appTheme 
          ? 'bg-gray-800 text-white border border-gray-600' 
          : 'bg-gray-100 text-gray-900 border border-gray-300'}
      `}>
        <div 
          onClick={() => setInputErrorModal(false)}
        className="absolute top-[-2rem] right-0 cursor-pointer hover:text-red-500 duration-200 ease-in-out">
          <FaXmark size={18} />
        </div>
        <p className="text-center">
          {errorInput}
        </p>
      </div>
    </div>
  )
}

export default ErrorInput