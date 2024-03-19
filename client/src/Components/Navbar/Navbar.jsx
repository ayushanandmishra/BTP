import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import { Box } from '@mui/material';
import lnmiitLogo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ width: '100%', top: 0 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          Student Management Portal
        </Typography>
        <Box 
        component="img"
        sx={{height:64,borderRadius:10}}
        alt='Lnmiit Logo'
        src={lnmiitLogo}>
        </Box>
        {/* <AdbIcon /> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;