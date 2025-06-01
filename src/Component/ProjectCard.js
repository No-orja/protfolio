import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import { fonts } from '../fonts';

export default function ProductCard() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const titleFont = isArabic ? fonts.arabicName : fonts.name;
  const descFont = isArabic ? fonts.arabicBody : fonts.divesAkuru;

  return (
    <div style={{ padding: '2rem 0' }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6} lg={4} data-aos="zoom-in" data-aos-delay="100">
          <Card className='card' sx={{ borderRadius: 3, p: 2, boxShadow: 5, width: "100%", maxWidth: 400 }}>
            <CardContent>
              <Typography className='text' variant="h6" gutterBottom style={titleFont}>
                {t('projects.ecommerce.title')}
              </Typography>
              <Typography className='text' variant="body2" sx={{ mb: 2 }} style={descFont}>
                {t('projects.ecommerce.desc')}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                {['React.js', 'BootStrap', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'].map((tech) => (
                  <Chip className='text' key={tech} label={tech} variant="outlined" sx={{ borderColor: '#1a2e47', fontSize: '0.75rem' }} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<GitHubIcon />} sx={{ textTransform: 'none' }}>
                  {t('projects.buttons.github')}
                </Button>
                <Button variant="outlined" startIcon={<LanguageIcon />} sx={{ textTransform: 'none' }}>
                  {t('projects.buttons.website')}
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4} data-aos="zoom-in" data-aos-delay="100">
          <Card className='card' sx={{ borderRadius: 3, p: 2, boxShadow: 5, width: "100%", maxWidth: 400 }}>
            <CardContent>
              <Typography className='text' variant="h6" gutterBottom style={titleFont}>
                {t('projects.social.title')}
              </Typography>
              <Typography className='text' variant="body2" sx={{ mb: 2 }} style={descFont}>
                {t('projects.social.desc')}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                {['HTML', 'CSS', 'JavaScript', 'Axios', 'REST API'].map((tech) => (
                  <Chip key={tech} label={tech} variant="outlined" sx={{ borderColor: '#1a2e47', fontSize: '0.75rem' }} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<GitHubIcon />} sx={{ textTransform: 'none' }}>
                  {t('projects.buttons.github')}
                </Button>
                <Button variant="outlined" startIcon={<LanguageIcon />} sx={{ textTransform: 'none' }}>
                  {t('projects.buttons.website')}
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4} data-aos="zoom-in" data-aos-delay="100">
          <Card className='card' sx={{ borderRadius: 3, p: 2, boxShadow: 5, width: "100%", maxWidth: 400 }}>
            <CardContent>
              <Typography className='text' variant="h6" gutterBottom style={titleFont}>
                {t('projects.movie.title')}
              </Typography>
              <Typography className='text' variant="body2" sx={{ mb: 2 }} style={descFont}>
                {t('projects.movie.desc')}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                {['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'BootStrap'].map((tech) => (
                  <Chip key={tech} label={tech} variant="outlined" sx={{ borderColor: '#1a2e47', fontSize: '0.75rem' }} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<GitHubIcon />} sx={{ textTransform: 'none' }}>
                  {t('projects.buttons.github')}
                </Button>
                <Button variant="outlined" startIcon={<LanguageIcon />} sx={{ textTransform: 'none' }}>
                  {t('projects.buttons.website')}
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4} data-aos="zoom-in" data-aos-delay="100">
          <Card className='card' sx={{ borderRadius: 3, p: 2, boxShadow: 5, width: "100%", maxWidth: 400 }}>
            <CardContent>
              <Typography className='text' variant="h6" gutterBottom style={titleFont}>
                {t('projects.weather.title')}
              </Typography>
              <Typography className='text' variant="body2" sx={{ mb: 2 }} style={descFont}>
                {t('projects.weather.desc')}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                {['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'BootStrap'].map((tech) => (
                  <Chip key={tech} label={tech} variant="outlined" sx={{ borderColor: '#1a2e47', fontSize: '0.75rem' }} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<GitHubIcon />} sx={{ textTransform: 'none' }}>
                  {t('projects.buttons.github')}
                </Button>
                <Button variant="outlined" startIcon={<LanguageIcon />} sx={{ textTransform: 'none' }}>
                  {t('projects.buttons.website')}
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4} data-aos="zoom-in" data-aos-delay="100">
          <Card className='card' sx={{ borderRadius: 3, p: 2, boxShadow: 5, width: "100%", maxWidth: 400 }}>
            <CardContent>
              <Typography className='text' variant="h6" gutterBottom style={titleFont}>
                {t('projects.notes.title')}
              </Typography>
              <Typography className='text' variant="body2" sx={{ mb: 2 }} style={descFont}>
                {t('projects.notes.desc')}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                {['React', 'Redux Toolkit', 'BootStrap', 'Node.js', 'MongoDB', 'Express', 'Axios', 'REST API'].map((tech) => (
                  <Chip key={tech} label={tech} variant="outlined" sx={{ borderColor: '#1a2e47', fontSize: '0.75rem' }} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<GitHubIcon />} sx={{ textTransform: 'none' }}>
                  {t('projects.buttons.github')}
                </Button>
                <Button variant="outlined" startIcon={<LanguageIcon />} sx={{ textTransform: 'none' }}>
                  {t('projects.buttons.website')}
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
