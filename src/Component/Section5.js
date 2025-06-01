import { Container, Typography } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import { fonts } from '../fonts';
import { useTranslation } from 'react-i18next';

export default function Section5() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';
  const headingFont = isArabic ? fonts.arabicName : fonts.name;
  const bodyFont = isArabic ? fonts.arabicBody : fonts.divesAkuru;

  return (
    <div id="section5" className='contactSection'>
      <Container
        maxWidth="md"
        style={{
          color: "#07292d",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          padding: "3rem 2rem",
          textAlign: isArabic ? 'right' : 'left'
        }}
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <Typography variant="h4" style={{ ...headingFont }}>
          {t('contactTitle')}
        </Typography>

        <Typography variant="h6" style={{ ...bodyFont }}>
          {t('contactDescription')}
        </Typography>

        <div className="contact-icons" style={{ color: "#07292d", display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div className="icon-box" style={{ textAlign: 'center' }}>
            <Email className="icon" />
            <Typography className="icon-text">{t('contact.email')}</Typography>
          </div>
          <div className="icon-box" style={{ textAlign: 'center' }}>
            <LinkedIn className="icon" />
            <Typography className="icon-text">{t('contact.linkedin')}</Typography>
          </div>
          <a href="https://github.com/No-orja" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="icon-box" style={{ textAlign: 'center', cursor: 'pointer' }}>
              <GitHub className="icon" />
              <Typography className="icon-text">{t('contact.github')}</Typography>
            </div>
          </a>

        </div>
      </Container>
    </div>
  );
}
