import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MsgForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      placeholderText: "Enter a message."
    }
  }

  handleChange(evt){
    this.setState({placeholderText: "Enter a message"});
  }

  render() {
    return(
      <form onSubmit={this.props.cb}>
        <label>Send a Message:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


export default MsgForm;


/*
MVP Form Boilerplate

<form onSubmit={this.preventSubmit.bind(this)} className="form-inline" action="/add" method="POST">
        <label htmlFor="listItem">Write it down!</label>
        

        <input onChange={this.handleInput.bind(this)} value={this.state.fieldDisplay} className="form-control" name="listItem" id="listItem" /><br />

        <button type="submit">Submit</button>
      </form>

*/
