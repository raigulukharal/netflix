import React, { useEffect } from 'react';
import axios from 'axios';
import {  options, TopRateMovies } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import {  getTopRatedMovies } from '../redux/moviesSlice';

const TopRated = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const res = await axios.get(TopRateMovies, options);
        // console.log(res.data.results);
        dispatch(getTopRatedMovies(res.data.results)); // Dispatch action with fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopRatedMovies();
  }, [dispatch]); // Add dispatch as a dependency
};
  
export default TopRated;