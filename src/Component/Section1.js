import { Button, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { fonts } from '../fonts';
import { useEffect, useState } from 'react';
import PublicIcon from '@mui/icons-material/Public';
import { useTranslation } from 'react-i18next';


export default function Section1(){
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

const toggleLanguage = () => {
  const newLang = i18n.language === 'en' ? 'ar' : 'en';
  i18n.changeLanguage(newLang);
  document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
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
          <Stack direction={i18n.language === 'ar' ? 'row-reverse' : 'row'}  spacing={4}>
          <a href="#section3" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              style={{
                ...fonts.heading,
                cursor: "pointer",
                fontWeight: 'bold',
                color: scrolled ? '#07292d' : '#e0e0e0',
                minWidth: '80px',        
                textAlign: 'center'      
              }}
            >
              {t('nav.about')}
            </Typography>
          </a>
          <a href="#section4" style={{ textDecoration: "none" }}>
            <Typography 
              variant="h6" 
              // className="nav-link" 
              style={{ ...fonts.heading, cursor: "pointer" , fontWeight: 'bold', color: scrolled ? '#07292d' : '#e0e0e0' }}
              >{t('nav.projects')}
            </Typography>            
          </a>
          <a href="#section5" style={{ textDecoration: "none" }}>
            <Typography 
              variant="h6" 
              // className="nav-link" 
              style={{ ...fonts.heading, cursor: "pointer", fontWeight: 'bold', color: scrolled ? '#07292d' : '#e0e0e0'  }}
              > {t('nav.contact')}
            </Typography>
          </a>
          </Stack>
        </Grid>        
        <Grid item >
          <Button 
            onClick={toggleLanguage} 
            startIcon={<PublicIcon style={{ color: scrolled ? '#07292d' : '#e0e0e0', paddingLeft:'8px', paddingRight:'8px'}} />} 
            style={{ 
              color: scrolled ? '#07292d' : '#e0e0e0', 
              fontWeight: 'bold', 
              fontFamily: fonts.heading.fontFamily 
            }}
          >
            {t('nav.language')}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
