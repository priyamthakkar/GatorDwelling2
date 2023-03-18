import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/PersonRounded';
import HomeIcon from '@mui/icons-material/HomeRounded';
import ChatGPTButton from './ChatGPTButton';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })
}));

export default function ButtonAppBar() {

  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: '#ffffff', zIndex: theme.zIndex.drawer + 1 }} elevation={1}>
        <Toolbar>
          <HomeIcon sx={{marginRight: 2}} color="primary"/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="primary">
            Gator Dwelling
          </Typography>
          <ChatGPTButton />
          <Button color="inherit" size="large">My Reviews</Button>
          <Button color="inherit" size="large">Saved Homes</Button>
          <Button color="inherit" size="large">Messages</Button>
          <PersonIcon />
          <Button color="inherit" size="large">John Doe</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
