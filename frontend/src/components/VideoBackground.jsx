import React from 'react';
import movieById from '../hooks/movieById.js';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId, bool }) => {
  const trailerMovies = useSelector((store) => store.movie.trailerMovies);

  movieById(movieId);

  return (
    <div className={`relative ${bool ? "w-screen h-screen" : "w-full aspect-video"}`}>
      <div className="relative w-full h-full overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailerMovies?.key}?autoplay=1&mute=1&controls=1&loop=1&playlist=${trailerMovies?.key}`}
          title="YouTube video player"
          frameBorder="0"
          controls
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Controls section below iframe */}
      {bool && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center">
          {/* Custom Controls if needed */}
          <p>Video Controls Here (Play, Pause, Volume, etc.)</p>
        </div>
      )}

      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
    </div>
  );
};

export default VideoBackground;
