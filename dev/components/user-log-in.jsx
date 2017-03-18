import React, {Component} from 'react';
import ReactDom from 'react-dom';


class UserLogIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    this.props.cb(this.state.username);

  }


  handleUsername(event) {
    console.log("inside handleUsername " + event.target.value)
    this.setState({username: event.target.value});
  }



  render() {
    return(
      <div>
      
      <p>What's your name? <br />
      Please enter a username to start using our app.</p>
      <form onSubmit={this.handleSubmit}>
      
        <label>Username:</label>
        <input value={this.state.name} onChange={this.handleUsername} name="username" required />

        <button type="submit">Submit</button>
      </form>
      </div>

    )
  }
}

export default UserLogIn;




