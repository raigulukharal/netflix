import React, { useEffect } from 'react';
import axios from 'axios';
import {  options, PopularMovies } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { getPopularMovies } from '../redux/moviesSlice';

const PopularMovie = () => {
    const dispatch = useDispatch(); // Initialize useDispatch hook

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const res = await axios.get(PopularMovies, options);
                // console.log(res.data.results);
                dispatch(getPopularMovies(res.data.results)); // Dispatch action with fetched data
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };

        fetchPopularMovies();
    }, [dispatch]); // Add dispatch as a dependency

    return null; // Ensure the component returns something
};
  
export default PopularMovie;