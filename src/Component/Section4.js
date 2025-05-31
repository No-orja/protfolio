import { Container, Typography } from '@mui/material';
import { fonts } from '../fonts';
import ProjectCard from './ProjectCard';

export default function Section4() {
  return (
    <div
      id="section4"
      className='projectsSection'
    >
      <Typography
        className='TextWithbackgroungDark'
        variant="h3"
        style={{textAlign: "center", marginBottom: "2rem", ...fonts.name }}
      >
        Projects
      </Typography>
      <ProjectCard />
    </div>
  );
}
