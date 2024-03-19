import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import image from './study.jpg'
import MenuAppBar from './Navbar';

const subjectsData = [
  { id: 1, name: 'Analog Electronics', grade: '2nd' },
  { id: 2, name: 'Digital Circuits', grade: '4th' },
  { id: 3, name: 'Principal of Communication', grade: '5th' },
];

const TeacherDashboard = ({ teacherName='Aakash' }) => {
  const handleViewSubject = (subjectId) => {
    // Add logic to view subject
    console.log('Viewing subject with ID:', subjectId);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Teacher's Dashboard
          </Typography>
          <Typography variant="h6" component="div">
            Hello, {teacherName}!
          </Typography>
        </Toolbar>
      </AppBar> */}
      <MenuAppBar/>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h5" component="div" sx={{ marginBottom: '20px' }}>
          Subjects Teaching Now:
        </Typography>
        <Grid container spacing={2}>
          {subjectsData.map((subject) => (
            <Grid item key={subject.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <img src={image} alt="Subject" style={{ height: '140px', width: '100%', objectFit: 'cover' }} />
                  <Typography gutterBottom variant="h5" component="div">
                    {subject.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sem: {subject.grade}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='outlined' size="small" onClick={() => handleViewSubject(subject.id)}>View Subject</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box mt={2}>
          <Button variant="contained" color="primary">
            Add Subject
          </Button>
        </Box>
        <Box mt={2}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ marginBottom: '20px' }}>
                Attendance
              </Typography>
              {/* Add attendance component here */}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default TeacherDashboard;
