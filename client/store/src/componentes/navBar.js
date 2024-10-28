import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <a href="/" variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textDecoration:"none", paddingRight:"50px"}}>
          Home
          </a>
          <a href="/news" variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textDecoration:"none", paddingRight:"50px"}}>
          News
          </a>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          About us
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}