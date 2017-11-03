import React, { Component } from 'react';
import Header from './molecules/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }
  render() {
    return (
      <div className="App">
        <Header
          title="Welcome to your life. Enjoy!"
          quote="Welcome Devine moment."
        />
      </div>
    );
  }
}

export default App;
