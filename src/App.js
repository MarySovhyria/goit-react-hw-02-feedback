import FeedbackOptions from "./feedback/FeedbackOptions";
import Statistics from "./feedback/Statistics";
import React, { Component } from 'react';
import { Notification } from "feedback/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // options: ' ',
  };

  onClickButtons = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1
    }));
  };
  countTotal = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad
  }
  countPercent = () => {
    const {good} = this.state;
    return Math.floor((good / this.countTotal()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;

    const btnNames = Object.keys(this.state)
    return (
      <div className="container">
        <div className="wrapper">
          <FeedbackOptions 
          onClickButtons={this.onClickButtons}
          options={btnNames}
          />
          {this.countTotal() > 0 ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={this.countTotal()}
          percent={this.countPercent()}
         
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
