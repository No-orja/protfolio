import { Container, Typography } from '@mui/material';
import { fonts } from '../fonts';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';


export default function Section4() {
  const { t, i18n } = useTranslation();
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
        {t('nav.projects')}
      </Typography>
      <ProjectCard />
    </div>
  );
}
