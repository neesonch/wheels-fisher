import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";
import { useStyles } from './TopBar.styles';



const TopBar = () => {

  const classes = useStyles();
  const history = useHistory();

  const handleHomeNavigation = () => history.push('/');

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="homepage" onClick={handleHomeNavigation}>
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Wheels Fisher
      </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar;