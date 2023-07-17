//import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './Pages/Main';
import './App.css'
import Navbar from './componentes/NavBar/NavBar';

function App() {
  

  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/NavBar' element={<Navbar/>}/>
           
          </Routes>
        </BrowserRouter>
        
      
    </>
  )
}

export default App
