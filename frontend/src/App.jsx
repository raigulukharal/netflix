import React from 'react';
import Body from './components/Body.jsx';
import { Toaster } from 'react-hot-toast';
import MovieDialog from './components/MovieDialogue.jsx';

export default function App() {
  return (
  <div>
    <Body />
    <Toaster/>
    <MovieDialog/>
  </div>
  )
}