import { useEffect } from 'react';
import { IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { fonts } from '../fonts';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Test(){

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <div>
      <Grid container spacing={9}>
        <Grid item xs={4}>
          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <b>Card 1</b>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <b>Card 2</b>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <b>Card 3</b>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
