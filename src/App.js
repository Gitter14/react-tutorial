import React, { Component } from 'react';
import './App.css';
import Userinput from './UserInput/UserInput';
import Useroutput from './UserOutput/UserOutput';

class App extends Component {

  state = {username: ''};

  changeHandler = (event) =>{
      this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <Userinput changed={this.changeHandler.bind(this,)}/>
        <Useroutput username={this.state.username}/>
        <Useroutput username={'Hi'}/>
        <Useroutput username={'Dzień dobry'}/>
      </div>
    )
  }
}

export default App;
