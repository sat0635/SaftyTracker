import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import {makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Exercises from './Exercises';
import ReactDOM from 'react-dom'
import LinearProgress from '@material-ui/core/LinearProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label:{
    textTransfrom : 'capitalize',
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
    state={
        posts:[],
	states:[],
    };  
    
     async componentDidMount() {
        setInterval(async () => {
        try {
            const res = await fetch('http://34.97.49.139:8000/api/getNearUser/');
            const res2 = await fetch('http://34.97.49.139:8000/api/getstate/');
            const posts = await res.json();
            const states = await res2.json();
            this.setState({
                posts,
		states,
            });

        } catch (e) {
            console.log("cannot fetch the REST API");
        }

       }, 1000);
    }

    render() {
        return  (  

	<div>
	 <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
			10조- 봇듀오
          </Typography>
        </Toolbar>
      </AppBar>
	<br/>
	<LinearProgress/>
	<Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
        	<React.Fragment>
			<Exercises posts={this.state.posts} states={this.state.states} session='1'/>
			<Exercises posts={this.state.posts} states={this.state.states} session='2'/>
        	</React.Fragment>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        	<React.Fragment>
			<Exercises posts={this.state.posts} states={this.state.states} session='3'/>
			<Exercises posts={this.state.posts} states={this.state.states} session='4'/>
        	</React.Fragment>
        </Grid>
      </Grid>
    </div>
	)
    }
}


export default App;
