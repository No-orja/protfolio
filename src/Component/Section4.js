import { Container, Typography } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material'; // ✅ import icons
import { fonts } from '../fonts';
import Test from './Test';

export default function Section4(){
  return (
    <div style={{ background:'linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 25, 112))', height: "100vh" }}>
        <Container maxWidth="md" style={{
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            padding: "3rem 0"
        }}>
          <Typography
            variant="h3"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            style={{
              color: "white",
              textAlign: "center",
              textShadow: "0 2px 8px rgba(0, 183, 255, 0.5)",
              fontWeight: "bold",
              ...fonts.name,
            }}
          >
            Projects
          </Typography>
          <Test/>
        </Container>
    </div>
  );
}
