import React from 'react'
export default function SearchBar() {
  return (
    <div className='xl:w-[600px] hidden lg:inline ml-8 space-y-5'>
        <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
            <div className='flex items-center p-3 rounded-full bg-red-300 relative'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 z-50 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
                <input className='absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100' type ='text' placeholder='Search Twitter'></input>
            </div>
        </div>
    </div>
  )
}