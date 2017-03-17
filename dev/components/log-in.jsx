import React, {Component} from 'react';
import ReactDom from 'react-dom';


/*
MVP Form Boilerplate
*/

class LogIn extends Component {
  constructor(props){
    super(props)
  }

  preventSubmit(evt){
    evt.preventDefault();

  }

  render() {
    return(
      <form onSubmit={this.preventSubmit.bind(this)} action="/login" method="POST">
      
        <label>Username:</label>
        <input name="username" required /><br />

        <label>Username:</label>
        <input type="password" placeholder="Enter Password" required />

        <button type="submit">Submit</button>
      </form>

    )
  }
}

export default LogIn;




