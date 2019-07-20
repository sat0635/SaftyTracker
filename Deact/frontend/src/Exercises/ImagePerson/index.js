import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import {makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

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
    margin: 5,
    width: 150,
    height: 150,
  },
  box:{
    background:"orange",
    margin: 10,  
    width: 500,
    height: 500,
    
  },
}));

const ImagePerson = props =>{ 
		const items=[]
		const classes = useStyles()	
		{props.user.map((item) => {
			 items.push(<Avatar alt="person" src={item} className={classes.avatar} />)
		})}

	
		return( <div>
			 {items}
			</div>
		)

		
}


export default ImagePerson;
