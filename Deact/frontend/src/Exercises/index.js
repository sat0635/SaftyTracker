import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import {makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ImagePerson from './ImagePerson';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(100),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar:{
    margin: 10,
    width: 100,
    height: 100,
  },
  box:{
    background:"orange",
    margin: 10,  
    width: 500,
    height: 500,
    
  },
}));
const Exercises = props =>{ return  <Grid item xs={4} className={useStyles().box}>
				<ImagePerson/>		
                </Grid>

	}


export default Exercises;
