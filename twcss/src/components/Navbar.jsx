import React from 'react'
import '../index.css'
function Navbar() {
  return (
    <div>
        <nav className='flex justify-between bg-red-400 h-20 border-t-4 border-blue-900'>
            <div className='flex justify-between w-96 mt-6 ml-6'>
                <div className='text-white text-2xl font-bold'>Kalvium</div>
                <div className="text-green-300 text-lg">About Us</div>
                <div className="text-green-300 text-lg">Contact</div>
                <div className="text-green-300 text-lg">courses</div>
            </div>
            <div className='flex flex-row justify-between w-40'>
            <button className="p-3 m-1 text-white w-20 border-2 border-white hover:bg-gray-50  hover:text-black rounded-md ">Login</button>
            </div>
      </nav>

      <div>
        <button className='mt-10 ml-28 text-white bg-blue-500 p-5 rounded-md'>Button One</button>
      </div>

      <div className="mt-10 ml-28 mr-28 text-red-700 bg-red-200 text-left pl-5 p-5 border-2 border-red-600 rounded-md"><span className='font-extrabold'>Alert! </span>This is awesome!</div>

      <div className='flex justify-center mt-40  '>
        <div className='flex flex-row justify-center items-center shadow-lg p-3     '>
        <img src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" className='h-10' />
        <div className='flex flex-col p-3 items-start'>
            <span className='font-semibold text-lg'>Kalvium Store</span>
            <span>You have a new course!</span>
        </div>
        </div>
      </div>

      <div className="bg-gray-600 text-white text-center pt-4 pb-4 mt-32">
        <p>© Copyright:Kalvium</p>
      </div>
    </div>
    
  )
}

export default Navbar