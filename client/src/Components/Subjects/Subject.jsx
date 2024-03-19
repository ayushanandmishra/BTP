import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const registeredStudents = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', rollNumber: 'A001', attendance: 90, rank: 2 },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', rollNumber: 'A002', attendance: 85, rank: 1 },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', rollNumber: 'A003', attendance: 95, rank:3 },
];

const SubjectDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredStudents = registeredStudents.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate rank based on score (you can modify the logic as needed)


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Subject Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h5" component="div" sx={{ marginBottom: '20px' }}>
          Registered Students
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <SearchIcon sx={{ marginRight: '10px' }} />
          <InputBase
            placeholder="Search for a student..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Box>
        {filteredStudents.map((student) => (
          <Card key={student.id} sx={{ marginBottom: '10px' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" component="div" sx={{ marginBottom: '10px' }}>
                {student.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '5px' }}>
                Email: {student.email}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '5px' }}>
                Roll Number: {student.rollNumber}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '5px' }}>
                Attendance: {student.attendance}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rank: {student.rank}
              </Typography>
            </CardContent>
          </Card>
        ))}
        <Button variant="contained" color="primary" sx={{ marginRight: '10px', marginTop: '20px' }}>
          Add Student
        </Button>
        <Button variant="contained" color="secondary" sx={{ marginTop: '20px' }}>
          Update Attendance
        </Button>
      </Box>
    </Box>
  );
};

export default SubjectDashboard;
