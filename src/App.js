import React, { Component } from 'react';
import Header from './molecules/Header';
import ActivityList from './organisms/ActivityList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: new Date(),
      time: new Date(),
      activities: localStorage.getItem('activities') || {
        0: { _id: 0, order: 0, title: 'Work', time: 25 * 60 * 1000 },
        1: { _id: 1, order: 1, title: 'Rest', time: 5 * 60 * 1000 }
      },
      activity: localStorage.getItem('activity') || 0
    };
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
          startTime={this.state.startTime}
          activity={this.state.activities[this.state.activity]}
          time={this.state.time}
        />
        <main>
          <ActivityList activities={this.state.activities} />
        </main>
      </div>
    );
  }
}

export default App;
