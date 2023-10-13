import FeedbackOptions from "./feedback/FeedbackOptions";
import Statistics from "./feedback/Statistics";
import React, { Component } from 'react';
import { Notification } from "feedback/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickButtons = (e) => {
    this.setState((prevState) => {
      if (e === 'Good') {
        return { good: prevState.good + 1 };
      }
      if (e === 'Neutral') {
        return { neutral: prevState.neutral + 1 };
      }
      if (e === 'Bad') {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = good + bad + neutral;
    const percent = Math.floor((good / total) * 100);

    return (
      <div className="container">
        <div className="wrapper">
          <FeedbackOptions onClickButtons={this.onClickButtons} />
          {total > 0 ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          percent={percent}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
          
        </div>
      </div>
    );
  }
}

export default App;
