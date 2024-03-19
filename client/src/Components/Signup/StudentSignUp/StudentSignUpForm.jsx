import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                xDrive
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function StudentSignUpForm() { // Renamed the component to indicate it's for students


    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({ firstName: "", lastName: "", email: "", password: "", rollNo: "", branch: "" });

    const handleChange = (event) => {
        const changeField = event.target.name;
        const changeValue = event.target.value;

        setFormData(prevState => ({
            ...prevState,
            [changeField]: changeValue
        }));
    }

    function isValidEmail(email) {
        // Regular expression for a valid email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Test the email against the regex
        return emailRegex.test(email);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!isValidEmail(formData.email)) {
            return window.alert('Invalid email entered');
        }

        try
        {
            console.log(formData);
            const savedUserResponse = await fetch(
                "http://localhost:3001/auth/register/student",
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: { "Content-Type": "application/json" }
                }
            );
    
            const response = await savedUserResponse.json();
            console.log("response is "+response);
            navigate('/');
        }
        catch(err)
        {
            console.log(err.message);
        }
        
    }

    const navToLogin=()=>{
        navigate('/login');
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 15,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ marginBottom: 6 }}>
                        Student Sign Up {/* Indicating this is for students */}
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={handleChange}
                                    value={formData.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={handleChange}
                                    value={formData.lastName}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={handleChange}
                                    value={formData.password}
                                />
                            </Grid>
                            {/* Additional fields for student signup */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="rollNo"
                                    label="Roll No"
                                    name="rollNo"
                                    autoComplete="rollNo"
                                    onChange={handleChange}
                                    value={formData.rollNo}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="branch-label">Branch</InputLabel>
                                    <Select
                                        labelId="branch-label"
                                        id="branch"
                                        value={formData.branch}
                                        label="Branch"
                                        onChange={handleChange}
                                        name="branch"
                                    >
                                        <MenuItem value="CSE">CSE</MenuItem>
                                        <MenuItem value="CCE">CCE</MenuItem>
                                        <MenuItem value="ECE">ECE</MenuItem>
                                        <MenuItem value="MME">MME</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link onClick={() => {navToLogin(); }} style={{ cursor: 'pointer' }} variant="body2">
                                    {"Already have an account?"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );


}