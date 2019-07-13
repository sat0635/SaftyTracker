import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import {makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles1 = makeStyles(theme1 => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme1.spacing(100),
    textAlign: 'center',
    color: theme1.palette.text.secondary,
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
const ImagePerson = props =>{ return <Avatar alt="person" src="/person.jpg" className={useStyles1().avatar} />
	}


export default ImagePerson;
