import  { useState } from 'react';
import Principal from '../componentes/Principal/Principal';
import Navbar from '../componentes/NavBar/NavBar';
import { MdWbSunny, MdBrightness2 } from 'react-icons/md'
import {  IconButton} from '@mui/material';


const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const pageStyle = {
    minHeight: '100vh',
    background: isDarkMode ? '#0a0a0a' : '#f5f5f5',
  };
  
  
  return (
    <div style={pageStyle}>
      <Navbar  />
      <IconButton onClick={toggleDarkMode} edge="end" sx={{ mr: 2 }}>
            {isDarkMode ? (
            <MdWbSunny style={{color:"yellow"}}/> 
            ) : (
            <MdBrightness2 /> )}
     </IconButton>
      <Principal />
    </div>
  );
};

export default Main;
