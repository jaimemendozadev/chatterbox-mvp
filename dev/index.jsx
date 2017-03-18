import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UserLogIn from './components/user-log-in.jsx';
import MsgForm from './components/msg-form.jsx';
import Feed from './components/feed.jsx';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      msgs: []
    }
    this.getUsername = this.getUsername.bind(this);
  }

  getUsername(name){
    this.setState({ username: name });
  }

  

  componentDidMount(){

  }

  render() {
    return(
      <div className="userLogIn">
        <header>
          <h1>Welcome to Chatterbox!</h1>
          {this.state.username ? (<p>Hello {this.state.username}! What's on your mind today?</p>) : (<br />)}
        </header>
        {this.state.username ? (<MsgForm cb={this.sendMsgToDB} user={this.state.username}/>) : (<UserLogIn cb={this.getUsername} />)}
        {this.state.username ? (<Feed />) : <br />}
      </div>

    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));


