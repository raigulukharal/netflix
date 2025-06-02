import React, { useEffect } from 'react';
import axios from 'axios';
import { Now_Playing_Movies, options } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { getNowPlayingMovies } from '../redux/moviesSlice';

const NowPlayingMoviesComponent = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const res = await axios.get(Now_Playing_Movies, options);
        // console.log(res.data.results);
        dispatch(getNowPlayingMovies(res.data.results)); // Dispatch action with fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchNowPlayingMovies();
  }, [dispatch]); // Add dispatch as a dependency
};
  
export default NowPlayingMoviesComponent;