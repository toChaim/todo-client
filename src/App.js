import React, { Component } from 'react';
import Header from './molecules/Header';
import ActivityList from './organisms/ActivityList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      activities: localStorage.getItem('activities') || {
        work: { _id: 0, order: 0, title: 'Work', time: '00:25:00' },
        rest: { _id: 1, order: 1, title: 'Rest', time: '00:05:00' }
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
