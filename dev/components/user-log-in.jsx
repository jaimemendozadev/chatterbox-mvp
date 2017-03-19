import React, {Component} from 'react';
import ReactDom from 'react-dom';


class UserLogIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    this.props.cb(this.state.name);

  }


  handleUsername(event) {
    this.setState({name: event.target.value});
  }



  render() {
    return(
      <div className="userLogIn">
      
      <p>What's your name? <br />
      Please enter a username to start using our app.</p>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input value={this.state.name} onChange={this.handleUsername} name="username" required />
      </form>
      </div>

    )
  }
}

export default UserLogIn;



/*
  Icons made by Dave Gandy (http://www.flaticon.com/authors/dave-gandy) 
  from Flaticon(http://www.flaticon.com), is licensed by Creative Commons BY 3.0
*/


