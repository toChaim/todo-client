import React, { Component } from 'react';
import Header from './molecules/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () =>
        this.setState({
          time: new Date()
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="App">
        <Header
          title="Welcome to your life. Enjoy!"
          quote="Welcome Devine moment."
          time={this.state.time}
        />
      </div>
    );
  }
}

export default App;
