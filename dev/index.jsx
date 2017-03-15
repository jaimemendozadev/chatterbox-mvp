import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MsgForm from './components/msg-form.jsx';
import Feed from './components/feed.jsx';


class App extends Component {
  constructor(props){
    super(props);
  }
  
  handleSubmit(evt) {
    evt.preventDefault();
    //make axios call
    //to send msg to DB
    console.log("the event is " + evt.data);

  }

  componentDidMount(){

  }

  render(){
    return(
      <div>
        <h1>Hello Chatterbox!</h1>
        <MsgForm cb={this.handleSubmit.bind(this)} />
        
      </div>

    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


