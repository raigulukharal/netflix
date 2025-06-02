import {createSlice} from "@reduxjs/toolkit";

const moviesSlice =createSlice({
    name:"movie",
    initialState:{
    nowPlayingMovies:null,
    popularMovies:null,
    topratedMovies:null,
    upcomingMovies:null,
    toggle:false,
    trailerMovies:null,
    open:false,
    id:"",

    },
    reducers:{
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies= action.payload
        }
        ,
        getPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        getTopRatedMovies:(state,action)=>{
            state.topratedMovies=action.payload
        },
        getUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        setToggle:(state)=>{
            state.toggle=!state.toggle
        },
        getTrailerMovies:(state,action)=>{
            state.trailerMovies=action.payload
        },
        setOpen:(state,action)=>{
            state.open=action.payload
        },
        getID:(state,action)=>{
            state.id=action.payload
        }


    }
})

export const {getID,getNowPlayingMovies,getPopularMovies,getTopRatedMovies,getUpcomingMovies,setToggle,getTrailerMovies,setOpen}=moviesSlice.actions
export default moviesSlice.reducer;