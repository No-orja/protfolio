import { Avatar, Box, Container, Typography } from "@mui/material";
import { fonts } from "../fonts";
import myImage from "../Images/photo_2025-05-23_18-44-21.jpg";
import 'animate.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Section2(){
    return(
        <div 
            className="main"
            >
                <Container 
                    maxWidth="md" 
                    style={{justifyContent:"center", alignItems:"center", display:"flex", flexDirection: "column", gap: "3rem", padding: "2rem 0"}}
                > 
                    <Box
                        className="avatar-box animate__animated animate__zoomIn animate__delay-0.15s animate__fast"
                        sx={{
                            padding: "5px",
                            border: "6px solid rgba(7, 41, 45, 0.39)",
                            borderRadius: "50%",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
                            display: "inline-block",
                        }}>
                        <Avatar
                            alt="Remy Sharp"
                            id="avatarImg"
                            src={myImage}
                            sx={{ width: 200, height: 200}}
                        />  
                    </Box>
                    <Typography className="TextWithbackgroungDark animate__animated animate__fadeInUp animate__delay-0.15s animate__fast" variant="h3" style={{...fonts.name, fontWeight: 'bold'  }}>Noor Jaber</Typography>
                    <Typography className="TextWithbackgroungDark animate__animated animate__fadeInUp animate__delay-0.30s animate__fast" variant="h4" align="center" sx={{...fonts.divesAkuru}}>Full stack web developer and Computer Science Student at Palestine technical university.</Typography>
                    <a href="#section3">
                        <KeyboardArrowDownIcon className="bounce-arrow" style={{fontSize: 50, cursor: "pointer", color:"white"}}/>                    
                    </a>
                </Container>
        </div>
    )
}