import React from "react";
import axios from 'axios'
import { options } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovies } from "../redux/moviesSlice";

const movieById =async (movieId)=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch=useDispatch()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
                // console.log(res.data.results);

                const trailer = res?.data?.results?.filter((item) => {
                    return item.type === "Trailer";
                });
                dispatch(getTrailerMovies(trailer.length > 0 ? trailer[0] : res.data.results[0]));
            } catch (error) {
                console.log(error);
            }
        };

        fetchTrailer();
    }, [movieId, dispatch]);
}
export default movieById