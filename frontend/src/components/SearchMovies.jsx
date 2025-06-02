import React, {  useState } from "react";
import { options,SearchMoviesUrl } from "../../utils/constant";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { setMovieDetail } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";


const SearchMovies = () => {
    const [ searchMovie, setSearchMovie]=useState("")
    const isLoading = useSelector(store=>store.app.isLoading)
    const {movieName,searchedMovie} =useSelector(store=>store.searchMovie)
    // eslint-disable-next-line no-unused-vars
    const dispatch=useDispatch()
  
  console.log(searchMovie)

  const submitHandler =async (e)=>{
    e.preventDefault();
    dispatch(setLoading(true))
    try {
        const res=await axios.get(`${SearchMoviesUrl}${searchMovie}&include_adult=false&language=en-US&page=1`,options)
      console.log(res.data.results)
      const movies = res?.data?.results;
      dispatch(setMovieDetail({ searchMovie, movies }));
        } catch (error) {
      console.error(error);
      
    }
    finally{
      dispatch(setLoading(false))
    }
   setSearchMovie("")
  }
    



  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col items-center gap-3 justify-center pt-40 ">
        <form onSubmit={submitHandler} >
        <input
          type="text"
          value={searchMovie} onChange={(e)=>{setSearchMovie(e.target.value)}}
          placeholder="Search the movie"
          className="border border-gray-300 rounded-md p-2 m-2 mb-4 w-64"
        />
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          {isLoading ? "Loading":"Search"}
        </button>
        </form>
        <MovieList title={movieName} searchMovie={true} movie={searchedMovie}/>
        </div>
      
      </div>
      
   
  );
};

export default SearchMovies;
