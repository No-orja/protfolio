import { IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { fonts } from '../fonts';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect, useState } from 'react';


export default function Section1(){
    const [scrolled, setScrolled] = useState(false);

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
        color: "#D5D5E8", 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.46)',
        position: 'fixed',         
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.67)' : 'transparent',
        transition: 'background-color 0.3s ease',
        backdropFilter: scrolled ? 'blur(4px)' : 'none',
      }}

      className='animate__animated animate__fadeInDown'
    >
      <Grid container alignItems="center" justifyContent="space-between" style={{ padding: "1rem 4rem" }}>
        <Grid item>
          <Stack direction="row" spacing={4}>
            <Typography variant="h6" className="nav-link" style={{ ...fonts.heading, cursor: "pointer" }}>About</Typography>
            <Typography variant="h6" className="nav-link" style={{ ...fonts.heading, cursor: "pointer" }}>Projects</Typography>
            <Typography variant="h6" className="nav-link" style={{ ...fonts.heading, cursor: "pointer" }}>Contact</Typography>
          </Stack>
        </Grid>        
        <Grid item>
          <IconButton className="icon-btn">
            <LightModeIcon  style={{ fontSize: 32, color: "white" }} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
