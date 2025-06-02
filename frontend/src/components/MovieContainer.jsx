import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const MovieContainer = () => {

    const movie = useSelector(store => store.movie)
    // console.log(movie)

  return (
    <div className='absolute -mt-40 z-10 p-4 bg-black'>
        <MovieList title={"Popular Movies"} movie={movie.popularMovies}/>
        <MovieList title={"Now Playing Movies"} movie={movie.nowPlayingMovies}/>
        <MovieList title={"Top Rated Movies"} movie={movie.topratedMovies}/>
        <MovieList title={"Upcoming Movies"} movie={movie.upcomingMovies}/>
    </div>
  )
}

export default MovieContainer