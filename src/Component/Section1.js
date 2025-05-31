import { Button, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { fonts } from '../fonts';
import { useEffect, useState } from 'react';
import PublicIcon from '@mui/icons-material/Public';

export default function Section1(){
    const [scrolled, setScrolled] = useState(false);
const [language, setLanguage] = useState('en');

const toggleLanguage = () => {
  const newLang = language === 'en' ? 'ar' : 'en';
  setLanguage(newLang);
};

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
        boxShadow: '0 4px 12px rgba(198, 198, 198, 0.36)',
        position: 'fixed',         
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ?
           'rgba(255, 255, 255, 0.64)'
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
            <Typography 
              variant="h6" 
              // className="nav-link" 
              style={{ ...fonts.heading, cursor: "pointer", fontWeight: 'bold', color: scrolled ? '#07292d' : '#e0e0e0' }}
            > About
            </Typography>
          </a>
          <a href="#section4" style={{ textDecoration: "none" }}>
            <Typography 
              variant="h6" 
              // className="nav-link" 
              style={{ ...fonts.heading, cursor: "pointer" , fontWeight: 'bold', color: scrolled ? '#07292d' : '#e0e0e0' }}
              >Projects
            </Typography>            
          </a>
          <a href="#section5" style={{ textDecoration: "none" }}>
            <Typography 
              variant="h6" 
              // className="nav-link" 
              style={{ ...fonts.heading, cursor: "pointer", fontWeight: 'bold', color: scrolled ? '#07292d' : '#e0e0e0'  }}
              > Contact
            </Typography>
          </a>
          </Stack>
        </Grid>        
        <Grid item>
          <Button 
            onClick={toggleLanguage} 
            startIcon={<PublicIcon style={{ color: scrolled ? '#07292d' : '#e0e0e0' }} />} 
            style={{ 
              color: scrolled ? '#07292d' : '#e0e0e0', 
              fontWeight: 'bold', 
              fontFamily: fonts.heading.fontFamily 
            }}
          >
            {language === 'en' ? 'Arabic' : 'الانجليزية'}
          </Button>

        </Grid>
      </Grid>
    </div>
  );
}
