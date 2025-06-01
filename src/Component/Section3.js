import { Container, Typography } from '@mui/material';
import { fonts } from '../fonts';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function Section3() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';
  const headingFont = isArabic ? fonts.arabicName : fonts.name;
  const bodyFont = isArabic ? fonts.arabicBody : fonts.divesAkuru;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div id="section3" className='aboutSection'>
      <Container
        maxWidth="md"
        data-aos="fade-up"
        data-aos-delay="100"
        style={{
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          marginBottom: "3rem",
          textAlign: isArabic ? 'right' : 'left'
        }}
      >
        <Typography className='text' variant="h4" style={{ ...headingFont }}>
          {t('aboutMeTitle')}
        </Typography>

        <Typography className='text' variant="h6" style={{ ...bodyFont }}>
          {t('aboutMeText')}
        </Typography>
      </Container>

      <Container
        maxWidth="md"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{ color: "white", flexDirection: "column", gap: "3rem", textAlign: isArabic ? 'right' : 'left' }}
      >
        <Typography className='text' variant="h5">{t('skills')}</Typography>

        <div className='text' style={{ display: "flex", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>

          <div>
            <h4>Languages</h4>
            <ul>
              <li>Java</li>
              <li>C/C++</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Php</li>
              <li>TypeScript</li>
              <li>ReactJS</li>
            </ul>
          </div>

          <div>
            <h4>Frameworks & Tools</h4>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Bootstrap</li>
              <li>Cucumber</li>
              <li>Git/GitHub</li>
            </ul>
          </div>

          <div>
            <h4>Productivity & Developer Tools</h4>
            <ul>
              <li>Project Deployment (Vercel, Netlify)</li>
              <li>GitHub/GitLab</li>
              <li>Axios</li>
              <li>Postman</li>
              <li>Git/GitHub</li>
            </ul>
          </div>

          <div>
            <h4>Specialization</h4>
            <ul>
              <li>Web Development</li>
              <li>Front-end Design</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
