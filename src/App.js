import React from 'react'
import { MovieProvider } from './context/MovieContext';
import './App.css';
import Home from './sections/home/Home';
import Navbar from './components/nav/Navbar';

function App() {

  return (
    <div>
      <MovieProvider>  
        <Navbar />
        <Home />
      </MovieProvider>
    </div>
  )
}

export default App;
