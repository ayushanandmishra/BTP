import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import background from './download.png'
import background1 from './download1.png'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate=useNavigate();

    const navToStudent=()=>{
        navigate('/signup/student');
    }

    const navToTeacher=()=>{
        navigate('/signup/ teacher');
    }
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Student Management Portal
                    </Typography>
                </Toolbar>
            </AppBar>
            <div
                style={{
                    backgroundImage: `url(${background1})`, // Replace "insert_image_source_here" with the actual image source
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 'calc(100vh - 64px)', // Adjust for the height of the navbar
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                   
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="h3" component="h1" gutterBottom>
                        Welcome to Student Management Portal
                    </Typography>
                    
                    <Button onClick={navToStudent} variant="contained" size="large" color="primary" style={{ margin: '10px' }}>
                        Are you a Student?
                    </Button>
                    <Button onClick={navToTeacher} variant="contained" size="large" color="secondary" style={{ margin: '10px' }}>
                        Are you a Teacher?
                    </Button>
                </Container>
            </div>
            <Container maxWidth="md" sx={{ marginTop: '40px' }}>
                <Typography variant="h4" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body1" paragraph>
                    
                </Typography>
                <Typography variant="body1" paragraph>
                We, Ayush Anand, Tushar Chandwanni, and Ashish Goyal, are students of LNMIIT.
                 Our team collaborated on this project as part of our B.Tech project, which spanned
                  a duration of four months. We hope you find our project enjoyable and valuable.
                </Typography>
            </Container>
        </div>
    );
};

export default LandingPage;