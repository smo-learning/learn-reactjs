import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    textInput: ""
  }

  onChangeInput = (event) => {
    this.setState({ textInput: event.target.value });
  }

  onCharClick = (index) => {
    const textCopy = this.state.textInput.split("");
    textCopy.splice(index, 1);
    const newText = textCopy.join("");
    this.setState({ textInput: newText });
  }

  render() {

    const chars = this.state.textInput.split("");
    const charComps = chars.map((char, index) => {
      return <CharComponent
        char={char}
        key={index}
        clickListener={() => this.onCharClick(index)} />;
    })

    return (
      <div className="App">
        <input type="text" onChange={this.onChangeInput} value={this.textInput} />
        <p>{this.state.textInput.length}</p>
        <ValidationComponent len={this.state.textInput.length} />
        {charComps}
      </div>
    );
  }
}

export default App;
