import React, { Component } from 'react';
import './App.css';

const InputComponent = (props) => {
  const styles = {
    margin: '16px 30%', 
    padding: '16px', 
    border: '2px solid black'
  }

  let displayInputLength = (<p>Input text length is 0.</p>);

  if (props.input !== undefined){
    displayInputLength = (<p>Input text length is {props.input.length}.</p>);
  }

  return (
    <div style={styles} key='asdf111'>
      <input type="text" onChange={props.changed} name={'TxtInput'} value={props.input} autoFocus={true}/>
      {displayInputLength}
    </div>
  )
}

const ValidationComponent = (props) => {
  const styles = {
    boxShadow: '0, 3px, 4px, #000',
    margin: '16px 30%',
    padding: '16px',
    border: '8px double #000'
  }

  let display = (<p>Text not long enough.</p>);

  if (props.textlength > props.treshold){
      display = (<p>Text length is OK.</p>);
  }

  return(
      <div key='InputLengthValidation' style={styles}>
          {display}
      </div>
  );
}

const CharComponent = (props) => {
  const styles = {
    display: 'inline-block', 
    padding: '16px', 
    textAlign: 'center', 
    margin: '16px', 
    border: '1px solid black'
  }

  return (
    <div style={styles} onClick={props.clicked}>
      <p> {props.mychar} </p>
    </div>
  );

}

class App extends Component {

  state = {chars: [],inputTreshold: 7};

  exerciseListStyle = {
    textAlign: 'left', 
  }

  deleteCharHandler = (index) => {
    const chars = [...this.state.chars];
    chars.splice(index,1);
    this.setState({chars: chars});
  }

  changedHandler = (event) => {
    const oldChars = event.target.value.split('');
    this.setState({chars: oldChars});
  }

  render() {
    return (
      <div className="App">
        <ol style={this.exerciseListStyle}>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop.</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on text length. (e.g. take 5 as minimum length).</li>
          <li>Create another component (=> CharComponent) and style it as an inline box 
            (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of entered text (in the initial input field) as a prop.</li>
          <li>When you click CharComponent it should be removed from entered text.</li>
        </ol>
        <InputComponent 
            changed={this.changedHandler.bind(this)}
            input={this.state.chars.join('')}
        />
        <ValidationComponent textlength={this.state.chars.length} treshold={this.state.inputTreshold}/>
        {this.state.chars.map((charSign,index)=>{
          return (<CharComponent key={'jasd'+index} mychar={charSign} clicked={() => this.deleteCharHandler(index)}/>)
        })}
      </div>
    )
  }
}

export default App;
