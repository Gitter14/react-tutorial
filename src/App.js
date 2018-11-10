import React, { Component } from 'react';
import './App.css';
import Userinput from './UserInput/UserInput';
import Useroutput from './UserOutput/UserOutput';

class App extends Component {

  state = {};

  handleEnterPressedHandler = (event) => {
    if (event.key === 'Enter'){
      this.addNewUserHandler(event);
    }
  }

  addNewUserHandler = (event) =>{
    if (this.state.users === undefined)
      this.setState({users: [{username: event.target.value}] });
    else {
      // This is reverse order
      //this.setState({users: this.state.users.concat({username: event.target.value}) });
      let userTable = this.state.users;
      userTable.unshift({username: event.target.value});
      this.setState({users: userTable});
    }
  }

  render() {
    return (
      <div className="App">
        <Userinput press={this.handleEnterPressedHandler.bind(this,)}/>
        <Useroutput username={this.state.users}/>
      </div>
    )
  }
}

export default App;
