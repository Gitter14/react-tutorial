import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
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
      <input type="text" onKeyDown={props.pressed} name={'TxtInput'} value={props.input} autoFocus={true}/>
      {displayInputLength}
    </div>
  )
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

  state = {input: '',chars: [],keys: [],inputTreshold: 7,cursorPosition: 0};

  exerciseListStyle = {
    textAlign: 'left', 
  }

  pressedKeyHandler = (event) => {
    const all = {...this.state};
    let cursorPosition = all.cursorPosition;
    let charArrays = [...this.state.chars];
    let myKeys = [...this.state.keys];
    switch(event.key) {
      case 'Enter':
      case 'Tab':
      case 'Shift':
      case 'Control':
      case 'Alt':
      case 'AltGraph':
      case 'Escape':
      case 'ScrollLock':
      case 'CapsLock':
      case 'NumLock':
      case 'Insert':
      case 'PageUp':
      case 'PageDown':
      case 'F1':
      case 'F2':
      case 'F3':
      case 'F4':
      case 'F5':
      case 'F6':
      case 'F7':
      case 'F8':
      case 'F9':
      case 'F10':
      case 'F11':
      case 'F12':
        break;
      case 'Home':
        cursorPosition = 0;
        break;
      case 'End':
        if (charArrays.length > 0)
          cursorPosition = charArrays.length;
        break;
      case 'Backspace':
        if(cursorPosition>0){
          charArrays.splice(cursorPosition-1,1);
          myKeys.splice(cursorPosition-1,1);
          cursorPosition--;
        }
        break;
      case 'Delete':
        if(cursorPosition<charArrays.length)
          charArrays.splice(cursorPosition,1);
          myKeys.splice(cursorPosition,1);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        break;
      case 'ArrowRight':
        if(cursorPosition < charArrays.length)
          cursorPosition++;
        break;
      case 'ArrowLeft':
        if (cursorPosition > 0)
          cursorPosition--;
        break;
      default:
        charArrays.splice(cursorPosition,0,event.key);
        myKeys.splice(cursorPosition,0,new Date().getTime());
        cursorPosition++;
        break;
    }

    this.setState({input: charArrays.join(''),chars: charArrays,keys: myKeys,cursorPosition: cursorPosition});
  }

  deleteCharHandler = (index) => {
    let chars = [...this.state.chars];
    let keys = [...this.state.keys];
    chars.splice(index,1);
    keys.splice(index,1);
    this.setState({chars: chars,keys: keys});
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
            pressed={this.pressedKeyHandler.bind(this)}
            input={this.state.input}
        />
        <ValidationComponent textlength={this.state.input.length} treshold={this.state.inputTreshold}/>
        {this.state.chars.map((charSign,index)=>{
          return (<CharComponent key={this.state.keys[index]} mychar={charSign} clicked={() => this.deleteCharHandler(index)}/>)
        })}
      </div>
    )
  }
}

export default App;
