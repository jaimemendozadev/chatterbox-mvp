import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MsgForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      msgToSend: ""
    };
    this.handleMsg = this.handleMsg.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleMsg(event) {
    console.log("event.target.value inside handleMsg is " + event.target.value);
    this.setState({
      msgToSend: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.cb(this.state.msgToSend);
    this.setState({msgToSend: ""})  
    
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Send a Message:</label>
        <input value={this.state.msgToSend} onChange={this.handleMsg} type="text" />
        
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


export default MsgForm;