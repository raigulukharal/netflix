import React from 'react';
import { CiPlay1 } from "react-icons/ci";

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 text-white">
    <div className='lg:m-24 sm:m-8 sm:pt-44'>
    <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
      <p className=" w-1/2 text-xs sm:text-sm md:text-md lg:text-lg max-w-xl">
          {overview} 
      </p>
      <div className="mt-4 flex gap-2 sm:gap-4 flex-wrap">
        <button className="flex items-center gap-1 sm:gap-2 bg-white text-black px-3 py-1 sm:px-5 sm:py-2.5 md:px-6 md:py-3 min-w-[30%] rounded hover:bg-gray-200 transition">
          <span className="text-base sm:text-lg bg-white"><CiPlay1 /></span> Play
        </button>
        <button className="flex items-center gap-1 sm:gap-2 bg-gray-700 text-white px-3 py-1 sm:px-5 sm:py-2.5 md:px-4 md:py-3 min-w-[30%] rounded hover:bg-gray-600 transition">
          <span className="text-base sm:text-md border border-white rounded-xl px-1 sm:px-2">i</span> Watch more
        </button>
      </div>
    </div>
    
    </div>
  );
};

export default VideoTitle;