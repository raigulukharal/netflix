import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movie,searchMovie=false}) => {
  return (
    <>
    <div className='p-8 no-scrollbar'>
    <div>
        <h1 className={`${searchMovie ? "text-black" : "text-white"} text-3xl font-bold `}>{title}</h1>
    </div>
    <div className='flex items-center gap-2 pt-2 overflow-x-auto no-scrollbar'>
      {
        movie?.map((movies) => {
          return (
            <MovieCard key={movies.id} movieId={movies.id} posterPath={movies.poster_path} />
          );
        }) || <p className="text-white">No movies available</p>
      }
    </div>
    </div>
    </>
  )
}

export default MovieList