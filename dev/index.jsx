import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LogIn from './components/log-in.jsx';
import MsgForm from './components/msg-form.jsx';
import Feed from './components/feed.jsx';
const axios = require('axios');


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      msgs: []
    }
    this.sendToServer = this.sendToServer.bind(this);
    this.authenticateCred = this.authenticateCred.bind(this);
  }

/*
  authenticateCred() {
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
*/
  
  saveMessage(message) {
    //make axios call
    //to send msg to DB
    console.log("the message is " + message);
    
    axios.post('/public', {
      username: window.username,
      message: message
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  componentDidMount(){

  }

  render(){
    return(
      <div>
      <h1>Welcome to Chatterbox!</h1>

      {!this.state.username ? (<LogIn />) :
      (<MsgForm cb={this.saveMessage} />)}
      </div>

    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


