import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from './moviesSlice'
import searchSlice from './searchSlice'


const store = configureStore({
    reducer:{
        app:userReducer,
        movie:movieReducer,
        searchMovie:searchSlice
      
    }
});
export default store;