import React, {Component} from 'react';
function lookForLinks(msg) {
  
}
function Msg({content}) {
  return(
    <div className="tlMessage">
      <span className="userInfo">{content["username"]} {content["date"]}</span>

      <p>{content["message"]}</p>
    </div>


  )

}

export default Msg;
