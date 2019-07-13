import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import {makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Exercises from './Exercises';
import ImagePerson from './Exercises/ImagePerson';

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




class App  extends Component {
  state = {
        posts: [],
    };
 
   async componentDidMount() {
        try {
	    var temp = [];
            const res = await fetch('http://34.97.49.139:8000/api/');
            const posts = await res.json();
	    console.log("check1");
            this.setState({
                posts
            });
        } catch (e) {
            console.log("check2");
        }
    }

    render() {
        return   <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
        	<React.Fragment>
			<Exercises/>
			<Exercises/>
        	</React.Fragment>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        	<React.Fragment>
			<Exercises/>
			<Exercises/>
        	</React.Fragment>
        </Grid>
      </Grid>
    </div>
    }
}

export default App;
