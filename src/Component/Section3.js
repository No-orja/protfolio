import { Container, Typography } from '@mui/material';
import { fonts } from '../fonts';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section3() {
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
          marginBottom: "3rem"
        }}
      >
        <Typography className='text' variant="h4" style={{ ...fonts.name}}>About me</Typography>
        <Typography className='text' variant="h6" style={{ ...fonts.divesAkuru }}>
          Enthusiastic MERN stack developer and hardworking second-year college student,
          Committed to continuous learning in the ever-evolving field of technology and eager
          to apply my skills in real-world projects.
        </Typography>
      </Container>

      <Container
        maxWidth="md"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{ color: "white", flexDirection: "column", gap: "3rem" }}
      >
        <Typography className='text' variant="h5">Skills:</Typography>

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
