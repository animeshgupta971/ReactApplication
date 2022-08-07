import React from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Navbar from './components/Navbar';
import Services from './components/Services';
function App() {
  return (
    <>
    <Navbar/>
    <About/>
<TechnicalSkills/>
<Services></Services>
      <BrowserRouter>
        <Routes>
          <Route exact path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
