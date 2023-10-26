import FeedbackOptions from "./feedback/FeedbackOptions";
import Statistics from "./feedback/Statistics";
import React, { useState } from 'react';
import { Notification } from "feedback/Notification";

const  App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickButtons = (option) => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotal = () => {
    return good + neutral + bad
  }
  const countPercent = () => {
    const total = good + neutral + bad
    return total > 0 ? Math.floor((good / total) * 100) : 0;
  }


    const btnNames = ['good', 'neutral', 'bad']
    return (
      <div className="container">
        <div className="wrapper">
          <FeedbackOptions 
          onClickButtons={onClickButtons}
          options={btnNames}
          />
          {countTotal() > 0 ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={countTotal()}
          percent={countPercent()}
         
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
          
        </div>
      </div>
    );
  }

export default App;
