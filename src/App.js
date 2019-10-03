import React, { Component } from 'react';
import './App.css';
import { TextField, Grid, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

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
      "https://ixy7yi2jm6.execute-api.us-east-1.amazonaws.com/Production/contactForm-MK",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://contact-form.s3-website-us-west-2.amazonaws.com/'
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
        console.log('Error: ' + err);
        alert('Sorry, there was an error and your message was unable to send.')
      });

  };
  
  render (){
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
            <Card>
              <CardContent>
              <Typography variant="h3" align="center" gutterBottom>
                Send us a message!
              </Typography>
                <TextField
                  required
                  id="outlined-name "
                  label="Name"
                  type="text"
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
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
                <Button variant="contained" color="primary" 
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
