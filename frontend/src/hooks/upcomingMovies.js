import React, { useEffect } from 'react';
import axios from 'axios';
import {  options, UpcomingMovies } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import {  getUpcomingMovies } from '../redux/moviesSlice';

const UpcomingMovie= () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook

  useEffect(() => {
    const fetchUpcominigMovies = async () => {
      try {
        const res = await axios.get(UpcomingMovies, options);
        // console.log(res.data.results);
        dispatch(getUpcomingMovies(res.data.results)); // Dispatch action with fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchUpcominigMovies();
  }, [dispatch]); // Add dispatch as a dependency
};
  
export default UpcomingMovie;