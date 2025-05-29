import { IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { fonts } from '../fonts';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect, useState } from 'react';

import { useTheme } from '../Cotext/ThemeContext';

export default function Section1(){
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div 
      style={{
        opacity: "0.8",
        boxShadow: theme === 'dark'
        ? '0 4px 12px rgba(7, 7, 7, 0.36)'
        : '0 4px 12px rgba(117, 199, 247, 0.38)',
        position: 'fixed',         
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled
        ? theme === 'dark'
          ? 'rgba(0, 0, 0, 0.64)'
          : 'rgba(255, 255, 255, 0.64)'
        : 'transparent',
        transition: 'background-color 0.3s ease',
        backdropFilter: scrolled ? 'blur(4px)' : 'none',
      }}
      className='navbar animate__animated animate__fadeInDown'
    >
      <Grid container alignItems="center" justifyContent="space-between" style={{ padding: "1rem 4rem" }}>
        <Grid item>
          <Stack direction="row" spacing={4}>
          <a href="#section3" style={{ textDecoration: "none" }}>
            <Typography variant="h6" className="nav-link" style={{ ...fonts.heading, cursor: "pointer"}}>About</Typography>
          </a>
          <a href="#section4" style={{ textDecoration: "none" }}>
            <Typography variant="h6" className="nav-link" style={{ ...fonts.heading, cursor: "pointer" }}>Projects</Typography>            
          </a>
          <a href="#section5" style={{ textDecoration: "none" }}>
            <Typography variant="h6" className="nav-link" style={{ ...fonts.heading, cursor: "pointer" }}>Contact</Typography>
          </a>
          </Stack>
        </Grid>        
        <Grid item>
          <IconButton className="icon-btn" onClick={toggleTheme}>
             {theme === 'light' ? <DarkModeIcon className='icon'/> : <LightModeIcon className='icon'/>}
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
