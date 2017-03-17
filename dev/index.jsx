import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MsgForm from './components/msg-form.jsx';
import Feed from './components/feed.jsx';
const axios = require('axios');


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      msgs: []
    }
  }
  
  sendToServer(msg) {
    //make axios call
    //to send msg to DB
    console.log("the msg is " + msg);
    
    axios.post('/public', {
      username: window.username,
      message: msg
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
        <h1>Hello Chatterbox!</h1>
        <MsgForm cb={this.sendToServer.bind(this)} />
        
      </div>

    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


