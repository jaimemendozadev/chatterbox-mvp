import React, {Component} from 'react';
import ReactDom from 'react-dom';
const axios = require('axios');


class LogIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();

    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
      cb(this.state.username);
    })
    .catch(function (error) {
      console.log(error);
    });
    

  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return(
      <div>
      <h1>Welcome to Chatterbox!</h1>
      <p>Please register to use our app.</p>
      <form onSubmit={this.preventSubmit}>
      
        <label>Username:</label>
        <input value={this.state.name} onChange={this.handleUsername} name="username" required /><br />

        <label>Username:</label>
        <input value={this.state.password} onChange={this.handlePassword} type="password" placeholder="Enter Password" required />

        <button type="submit">Submit</button>
      </form>
      </div>

    )
  }
}

export default LogIn;




