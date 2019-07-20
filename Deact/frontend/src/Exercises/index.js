import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import {makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ImagePerson from './ImagePerson';
import Button from '@material-ui/core/Button';
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
    width: 1000,
    height: 1000,
    background: "orange", 
  },
});
const Exercises = props =>{
	var colorArray=["white", "red","orange","green"]
	var colorIndex=0
	var temp_url=[[],[],[],[],[],[],[],[]];
	var temp_id=[[],[],[],[],[],[],[],[]];
	var dict_state={"good":[], "bad":[]};
                        {
				props.states.map((item) => (
					dict_state[item.state].push(item.id)
				))
			}

			{
				props.posts.map((item) => (
					temp_url[Number(item.session)].push(item.imageUrl),
					temp_id[Number(item.session)].push(item.id)
	                         ))
			}
			
			if ( dict_state["bad"].length !=0 ){
				if ( temp_id[Number(props.session)].indexOf(dict_state["bad"][0]) != -1){
					colorIndex=1
				}else if(temp_url[Number(props.session)].length >=2 ){
					colorIndex=3
        			}else{
					colorIndex=temp_url[Number(props.session)].length+1
				}
			}else if(temp_url[Number(props.session)].length >=2 ){
				colorIndex=3
                        }else{
                                        colorIndex=temp_url[Number(props.session)].length+1
                                }
 
			
			return(
                                <Grid item xs={4} className={useStyles({BackGroundColor : colorArray[colorIndex]}).menuButton}>
					<Button size="large" variant="contained" color="secondary">
        				 	SECTION {props.session}
     					 </Button>	
                                       <ImagePerson user={temp_id[Number(props.session)]}/>
                                </Grid>
                        )
	
	}


export default Exercises;
