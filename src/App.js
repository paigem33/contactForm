
import React, { Component } from 'react';

import './App.css';
import { TextField, Grid, Typography } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles({
//   textField: {
//     width: '100%'
//   },
//   button: {
//     width: '48%',
//     marginTop: 16,
//     '&:first-of-type': {
//       marginRight: '4%'
//     }
//   }
// });



export default class ContactForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange = (value, name) => {
    console.log(name, value)
    if(name === 'name'){
      this.setState({name:value})
    } else if(name === 'email'){
      this.setState({email:value})
    } else if(name=== 'message'){
      this.setState({message:value})
    }
    console.log(this.state)
  }

  handleSubmit = () => {
    const { email, name, message } = this.state;

    fetch(
      "https://ixy7yi2jm6.execute-api.us-east-1.amazonaws.com/Production",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      }
    )
      .then(res => res.json())
      .then(json => {
        console.log("Response: " + json);
      })
      .catch(err => {
        console.log('***Error: ' + err);
      });

    // clear form
    // document.getElementById("contact-form").reset();
    // this.setState({ name: "", email: "", message: "" });
    // event.preventDefault();
  };
  
  render (){
    // const classes = useStyles();
    const { name, email, message} = this.state
    return (
       <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
       >
      
        <Grid item xs={4}>
            <Card 
            // className={classes.card}
            >
              <CardContent>
              <Typography variant="h3" align="center" gutterBottom>
                Send us a message!
              </Typography>
                <TextField
                  required
                  id="outlined-name "
                  label="Name"
                  type="text"
                  // className={classes.textField}
                  defaultValue={name}
                  name="name"
                  onChange={e => this.handleChange(e.target.value, e.target.name)}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  required
                  id="outlined-email-input "
                  label="Email"
                  type="email"
                  defaultValue={email}
                  name="email"
                  onChange={e => this.handleChange(e.target.value, e.target.name)}
                  // className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  required
                  id="outlined-multiline-static"
                  label="Message"
                  type="text"
                  multiline
                  rows="Infinity"
                  defaultValue={message}
                  name="message"
                  onChange={e => this.handleChange(e.target.value, e.target.name)}
                  // className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
                <Button variant="contained" color="primary" 
                // className={classes.button}
                fullWidth
                onClick={ () => this.handleSubmit()}
                >
                  Submit
                </Button>
              </CardContent>
            </Card>
        </Grid>      
       </Grid>
  );
}
}
