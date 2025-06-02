import React, { useEffect } from 'react'
import Header from './header.jsx'
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';
import MovieContainer from './MovieContainer.jsx';
import NowPlayingMoviesComponent from '../hooks/usenowPlayingMovies.js';
import PopularMovie from '../hooks/popularMovies.js';
import TopRated from '../hooks/topRated.js';
import UpcomingMovie from '../hooks/upcomingMovies.js';
import SearchMovies from './SearchMovies.jsx';

const Browse = () => {
const searchMovies=useSelector(store=>store.movie.toggle)
 const user = useSelector((store) => store.app.user); 
 const navigate =useNavigate()
 NowPlayingMoviesComponent()
 PopularMovie()
 TopRated()
 UpcomingMovie()



 
 
 useEffect(() =>{
  if(!user){
    navigate('/')
  }
  }, [])

  return (


    <>
    <Header/>
     <div className='mt-14'>
      {
        searchMovies ? <SearchMovies />: (
          <>
                <MainContainer/>
                <MovieContainer/>
          </>
        )
      }

     </div>
    </>
   
  )
}

export default Browse