
import React from 'react';

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css';
import  Header  from './components/Header';
import Pagelist from './pages/Pagelist';
import Pagenote from './pages/Pagenote';
import Navbar from './components/Navbar';
import Pagedetails from './pages/Pagedetails';
function App() {
  return (
    <div className='navpa'>
    <Header/>
    <Navbar />
      <Routes>
            <Route  path="/restview/" exact element={<Pagelist />} />
              <Route path="/restview/"  element={<Pagenote />} />
                <Route path="/restview/:id" element ={<Pagenote/>} />
                <Route/>
              <Route/>
            <Route>
            <Route path="/new/" element={<Pagedetails/>} />
            </Route>
      </Routes>
         </div>
         
  );
}

export default App;
