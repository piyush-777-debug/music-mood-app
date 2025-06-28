import React from 'react';
import '@qpokychuk/gilroy/normal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ToastContainer,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Home/Navbar';
import Hero from './components/Home/Hero';
import Features from './components/Home/Features';
import Footer from './components/Home/Footer';
import { Route, Routes } from 'react-router-dom';
import Moods from './components/Moods/Moods';
import MoodSongs from './components/Moods/MoodSongs';
import Likes from './components/Likes/Likes';
import About from './components/About/About';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
          <Navbar></Navbar>
          <Hero></Hero>
          <Features></Features>
          <Footer></Footer>
          </>
        }></Route>
        <Route path='/moods' element={<Moods/>}></Route>
        <Route path="/mood/:moodName" element={<MoodSongs />} />
        <Route path='/liked' element={<Likes/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default App;
