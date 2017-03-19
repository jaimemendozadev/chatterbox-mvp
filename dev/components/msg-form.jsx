import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');


class MsgForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: this.props.user,
      msgToSend: ""
    };
    this.handleMsgState = this.handleMsgState.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleMsgState(event) {
    this.setState({
      msgToSend: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    axios.post('/public', {
      message: this.state.msgToSend,
      date: this.getTheDate(),
      username: this.state.username,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({msgToSend: ""})  
    
  }

  getTheDate(){
    //code found in http://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    
    if(dd<10) {
      dd='0'+dd
    } 
    if(mm<10) {
      mm='0'+mm
    } 
    today = mm+'/'+dd+'/'+yyyy;
    return today;
  }




  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="message">Message</label>
        <input name="message" value={this.state.msgToSend} onChange={this.handleMsgState} type="text" />
        
      </form>
    )
  }
}


export default MsgForm;