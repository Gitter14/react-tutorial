import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {username: 'supermax'};

  InputComponent = (props) => {
    let displayInputLength = (<p>Input length is 0.</p>);

    if (props.change !== undefined){
      displayInputLength = (<p>Input length is {props.change.length}.</p>);
    }

    return (
      <div>
        <input type="text" onChange={props.change}/>
        {displayInputLength}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        
      </div>
    )
  }
}

export default App;
