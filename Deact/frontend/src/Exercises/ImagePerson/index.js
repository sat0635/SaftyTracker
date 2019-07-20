import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import {makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(100),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 10,
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
		const [anchorEl, setAnchorEl] = React.useState(null);

		function handleClick(event){
        		setAnchorEl(anchorEl ? null : event.currentTarget);
		}

		const open = Boolean(anchorEl);
		const id = open ? 'simple-popper' : undefined;

		const items=[]
		const classes = useStyles()	
		

		{props.user.map((item) => {
			var image="/person"
			image+={item}.item
			image+=".jpg"
			 items.push(<div>
				<Avatar	alt="person" src={image} className={classes.avatar} onClick={handleClick} />
				 <Popper id={id} open={open} anchorEl={anchorEl} transition>
        				{({ TransitionProps }) => (
          				<Fade {...TransitionProps} timeout={350}>
            					<Paper>
             						 <Typography className={classes.typography}>user id = {item}</Typography>
          					  </Paper>
          				</Fade>
        			)}
      				</Popper>

				</div>		
			)
		})}
		return( <div>
			 {items}
			</div>
		)		
}


export default ImagePerson;
