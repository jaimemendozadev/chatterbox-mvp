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
    this.saveMessage = this.saveMessage.bind(this);
    this.getUsername = this.getUsername.bind(this);
  }

  getUsername(name){
    console.log("inside getUsername");
    console.log("name is " + name)
    this.setState({ username: name });
  }

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

  render() {
    return(
      <div>
        <h1>Welcome to Chatterbox!</h1>
        {this.state.username ? (<p>Hello {this.state.username}! What's on your mind today?</p>) : (<br />)}
        {this.state.username ? (<MsgForm cb={this.saveMessage} />) : (<LogIn cb={this.getUsername} />)}
      </div>

    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


