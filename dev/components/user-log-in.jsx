import React, {Component} from 'react';
import ReactDom from 'react-dom';


class UserLogIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "Username",
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
      
        {/*<label>Username:</label>*/}
        <input value={this.state.name} onChange={this.handleUsername} name="username" required />

        {/*<button type="submit">Submit</button>*/}
      </form>
      </div>

    )
  }
}

export default UserLogIn;




