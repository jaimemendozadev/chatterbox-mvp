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

  handleSubmit(event){
    console.log("inside handleSubmit for log-in page");
    event.preventDefault();
    axios.post('http://localhost:3000/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.props.cb(this.state.username);


  }

  handleUsername(event) {
    console.log("inside handleUsername " + event.target.value)
    this.setState({username: event.target.value});
  }

  handlePassword(event) {
    console.log("inside handlePassword " + event.target.value)
    this.setState({password: event.target.value});
  }

  render() {
    return(
      <div>
      <p>Please register to use our app.</p>
      <form onSubmit={this.handleSubmit}>
      
        <label>Username:</label>
        <input value={this.state.name} onChange={this.handleUsername} name="username" required /><br />

        <label>Password:</label>
        <input value={this.state.password} onChange={this.handlePassword} type="password" placeholder="Enter Password" required />

        <button type="submit">Submit</button>
      </form>
      </div>

    )
  }
}

export default LogIn;




