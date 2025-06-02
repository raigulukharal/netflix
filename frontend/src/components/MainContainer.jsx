import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

 const movie =useSelector(store=>store.movie?.nowPlayingMovies)
 if(!movie) return
const {id}=movie[4];

  return (
    <div className='overflow-x-auto no-scrollbar w-ful'>
      
      <VideoBackground movieId={id} />
  
        
        {/* <VideoTitle title={title}  overview={overview}/> */}
    </div>
  )
}

export default MainContainer