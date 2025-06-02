import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const VideoSection = () => {
  return (
    <div className="relative w-screen h-screen">
      <VideoBackground />
      <VideoTitle />
    </div>
  );
};

export default VideoSection;
