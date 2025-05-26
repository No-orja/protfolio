import { Container, Typography } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material'; 
import { fonts } from '../fonts';

export default function Section5(){
  return (
    <div style={{ backgroundColor: "black", height: "50vh" }}>
      <Container maxWidth="md" style={{
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        padding: "3rem 0"
      }}
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <Typography variant="h4" style={{ ...fonts.name, color: "white" }}>
          Get in Touch
        </Typography>

        <Typography variant="h6" style={{ ...fonts.divesAkuru }}>
           I'm always interested in hearing about new opportunities and collaborations.
          Feel free to reach out through any of the following channels:
        </Typography>

        {/*  Social Row */}
        <div className="contact-icons">
          <div className="icon-box">
            <Email className="icon" />
            <Typography className="icon-text">Email</Typography>
          </div>
          <div className="icon-box">
            <LinkedIn className="icon" />
            <Typography className="icon-text">LinkedIn</Typography>
          </div>
          <div className="icon-box">
            <GitHub className="icon" />
            <Typography className="icon-text">GitHub</Typography>
          </div>
        </div>
      </Container>
    </div>
  );
}
