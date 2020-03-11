import React, { Component } from 'react';
import './App.css';

import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"

class App extends Component {

  state = { userOne: "Abosto", userTwo: "Beathe", userThree: "Chris" };

  onUserOneChange = (event) => {
    console.log("Hey");
    this.setState({ ...this.state, userOne: event.target.value });
  };

  render() {
    return (
      <div className="App" >
        <UserOutput name={this.state.userOne} />
        <UserOutput name={this.state.userTwo} />
        <UserOutput name={this.state.userThree} />
        <UserInput change={this.onUserOneChange} name={this.state.userOne} />
      </div>
    );
  }
}

export default App;
