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
        0: { _id: 0, order: 0, title: 'Work', time: 25 * 1000 },
        1: { _id: 1, order: 1, title: 'Rest', time: 5 * 1000 }
      },
      activity: localStorage.getItem('activity') || 0
    };
    this.nextActivity = this.nextActivity.bind(this);
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

  nextActivity(order) {
    var act = Object.values(this.state.activities).find(
      v => v.order === order + 1
    );
    if (!act) {
      act = this.state.activities.find(v => v.order === 0);
    }
    this.setState({ activity: act._id, startTime: new Date() });
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
          nextActivity={this.nextActivity}
        />
        <main>
          <ActivityList activities={this.state.activities} />
        </main>
      </div>
    );
  }
}

export default App;
