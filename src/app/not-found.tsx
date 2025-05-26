"use client"
import {useRouter} from "next/navigation"
import {FaArrowLeft} from "react-icons/fa"

const Notfound = () => {
  const route = useRouter()

  return (
    <div className='w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center'>
       
      <h1 className="text-3xl font-bold mb-4 flex items-center">
        404
        <span className="text-lg font-semibold ml-3">
          Page_Not_Found
        </span>
      </h1>

      <button 
        onClick={() => route.back()} 
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg mt-[2.5rem] flex items-center justify-center"
       >
         <FaArrowLeft className="mr-3" />
         Back home
      </button>
    </div>
  )
}

export default Notfound