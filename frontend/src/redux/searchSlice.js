import { createSlice } from "@reduxjs/toolkit";


const searchSlice= createSlice({
    name:"Search",
    initialState:{
        movieName:null,
        searchedMovie:null
    },
    reducers:{
      
        setMovieDetail:(state,action)=>{
      const {searchMovie,movies}=action.payload
      state.movieName=searchMovie
      state.searchedMovie=movies
        }
    }
})

export const {setMovieDetail}=searchSlice.actions
export default searchSlice.reducer

