import React, {Component} from 'react';
function lookForLinks(msg) {
  
}
function Msg({content}) {
  //console.log("the props are " + JSON.stringify(props.content));  
  return(
    <div className="tlMessage">
      <span className="userInfo">{content["username"]} {content["date"]}</span><br />

      {content["message"]}
    </div>


  )

}

export default Msg;

/*
  {"_id":"58cd3fce7e103f5ab7a31e43","message":"You should really watch this video: https://www.youtube.com/watch?v=4r1tq1XBN0w","date":"03/18/2017","username":"jmendoza","__v":0}
*/