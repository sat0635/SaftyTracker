import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import {makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ImagePerson from './ImagePerson';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  avatar:{
    margin: 10,
    width: 100,
    height: 100,
  },
  menuButton: props => ({
   margin:10,
   width: 500,
   height: 500,
   background: props.BackGroundColor,
  }),
  box:{
    margin: 10,  
    width: 500,
    height: 500,
    background: "orange", 
  },
});
const Exercises = props =>{
	var colorArray=["red","orange","green"]
	var a=[];
	var b=[];
	var c=[];
	var d=[];
	var e=[];
	var temp=[a,b,c,d,e];
			{props.posts.map((item) => (
       				temp[Number(item.session)].push(item.imageUrl)
	                         ))} 
			
			console.log(temp[2].length)			
			
			return(
                                <Grid item xs={4} className={useStyles({BackGroundColor : colorArray[temp[Number(props.id)].length]}).menuButton}>
                                       <ImagePerson user={temp[Number(props.id)]}/>
                                </Grid>
                                )
	
	}


export default Exercises;
