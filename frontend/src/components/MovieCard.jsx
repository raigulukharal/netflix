import React from 'react'
import { Poster_URL } from '../../utils/constant'
import { useDispatch } from 'react-redux';
import { getID, setOpen } from '../redux/moviesSlice';

const MovieCard = ({posterPath,movieId}) => {
  const dispatch = useDispatch()
  if (posterPath ===null) return null;
 
const handleOpen = () =>{
  dispatch(getID(movieId))
  dispatch(setOpen(true))
}

  return (
    <div className='w-48 ' onClick={handleOpen}>
  <img className="sm:w-32 md:w-40 lg:w-52" src={`${Poster_URL}/${posterPath}`} alt="wait " />
    </div>
  )
}

export default MovieCard