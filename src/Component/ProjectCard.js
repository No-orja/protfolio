import { Button, Card, CardActions, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

export default function ProductCard() {
  return (
    <div style={{ padding: '2rem 0' }}>
      <Grid container spacing={3}  justifyContent="center">
        <Grid item xs={12} md={6} lg={4} data-aos="zoom-in" data-aos-delay="100">
          <Card className='card' sx={{borderRadius: 3, p: 2, boxShadow: 5,  width: "100%", maxWidth: 400 }}>
            <CardContent>
              <Typography className='text' variant="h6" gutterBottom>E-Commerce Web Application (MERN Stack):</Typography>
                <Typography className='text' variant="body2" sx={{ mb: 2 }}>
                    Built a full-featured e-commerce platform with user authentication, 
                    product browsing, shopping cart, and order management functionalities. 
                    Implemented a responsive frontend using React and Bootstrap, connected to a RESTful backend API built with Node.js and Express, 
                    with MongoDB used for data storage. 
                    Integrated admin dashboard for managing products, orders, and users, with role-based access control.
              </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                {['React.js', 'BootStrap', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'].map((tech) => (
                  <Chip className='text'  key={tech} label={tech} variant="outlined" sx={{borderColor: '#1a2e47', fontSize: '0.75rem' }} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
                <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<GitHubIcon />} sx={{   textTransform: 'none' }}>
                  View on GitHub
                </Button>
                <Button variant="outlined" startIcon={<LanguageIcon />} sx={{   textTransform: 'none' }}>
                  Visit Website
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4} data-aos="zoom-in" data-aos-delay="100">
          <Card className='card' sx={{borderRadius: 3, p: 2, boxShadow: 5,  width: "100%", maxWidth: 400  }}>
            <CardContent>
              <Typography className='text' variant="h6" gutterBottom>Social media app:</Typography>
                <Typography className='text' variant="body2" sx={{ mb: 2 }}>
                    Developed a dynamic social media interface using pure JavaScript and HTML, consuming external APIs 
                    to enable user login/logout, post creation, editing, deletion, and infinite 
                    scrolling. Ensured seamless navigation and profile management across multiple pages.  
              </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                {['HTML', 'CSS', 'JavaScript', 'Axios', 'REST API'].map((tech) => (
                  <Chip key={tech} label={tech} variant="outlined" sx={{  borderColor: '#1a2e47', fontSize: '0.75rem' }} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
                <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<GitHubIcon />} sx={{   textTransform: 'none' }}>
                  View on GitHub
                </Button>
                <Button variant="outlined" startIcon={<LanguageIcon />} sx={{   textTransform: 'none' }}>
                  Visit Website
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4} data-aos="zoom-in" data-aos-delay="100">
          <Card className='card' sx={{borderRadius: 3, p: 2, boxShadow: 5,  width: "100%", maxWidth: 400}}>
            <CardContent>
              <Typography className='text' variant="h6" gutterBottom>Movie-App</Typography>
                <Typography className='text' variant="body2" sx={{ mb: 2 }}>
                Built a movie web app using HTML, CSS, and JavaScript. 
                Integrated TMDB API to display a list of movies with infinite scroll. 
                Added a details page that shows movie info like title, poster, description, 
                release date, and rating. Used Axios for API calls and handled data dynamically based on URL parameters.
              </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                {['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'BootStrap'].map((tech) => (
                  <Chip key={tech} label={tech} variant="outlined" sx={{  borderColor: '#1a2e47', fontSize: '0.75rem' }} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
                <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<GitHubIcon />} sx={{   textTransform: 'none' }}>
                  View on GitHub
                </Button>
                <Button variant="outlined" startIcon={<LanguageIcon />} sx={{   textTransform: 'none' }}>
                  Visit Website
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4} data-aos="zoom-in" data-aos-delay="100">
          <Card className='card' sx={{ borderRadius: 3, p: 2, boxShadow: 5,  width: "100%", maxWidth: 400}}>
            <CardContent>
              <Typography className='text' variant="h6" gutterBottom>Weather-App</Typography>
                <Typography className='text' variant="body2" sx={{ mb: 2 }}>
                Developed a weather application using React, featuring real-time weather updates, responsive design, and multilingual support (English/Arabic) via i18next.
                Integrated external weather APIs to fetch and display data using reusable components. Employed clean component structure.
              </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                {['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'BootStrap'].map((tech) => (
                  <Chip key={tech} label={tech} variant="outlined" sx={{  borderColor: '#1a2e47', fontSize: '0.75rem' }} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
                <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<GitHubIcon />} sx={{   textTransform: 'none' }}>
                  View on GitHub
                </Button>
                <Button variant="outlined" startIcon={<LanguageIcon />} sx={{   textTransform: 'none' }}>
                  Visit Website
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4} data-aos="zoom-in" data-aos-delay="100">
          <Card className='card'  sx={{ borderRadius: 3, p: 2, boxShadow: 5,  width: "100%", maxWidth: 400}}>
            <CardContent>
              <Typography className='text' variant="h6" gutterBottom>Notes and To-Dos Management Application </Typography>
                <Typography className='text' variant="body2" sx={{ mb: 2 }}>
                    A full-stack notes management web application that allows users to create, edit, 
                    delete notes and todos. The system responsive design, and real-time data updates. 
                    Developed with a focus on simplicity, performance, and scalability to deliver an intuitive user experience.
              </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                {['React', 'Redux Toolkit', 'BootStrap', 'Node.js', 'MongoDB', 'Express', 'Axios', 'REST API'].map((tech) => (
                  <Chip key={tech} label={tech} variant="outlined" sx={{  borderColor: '#1a2e47', fontSize: '0.75rem' }} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
                <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<GitHubIcon />} sx={{   textTransform: 'none' }}>
                  View on GitHub
                </Button>
                <Button variant="outlined" startIcon={<LanguageIcon />} sx={{   textTransform: 'none' }}>
                  Visit Website
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
