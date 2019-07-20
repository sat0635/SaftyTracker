import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import {makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Exercises from './Exercises';

import ReactDOM from 'react-dom'


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
        return   <div>
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
    }
}


export default App;
