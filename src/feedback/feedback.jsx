import React, { Component } from 'react';
import {Good, Neutral, Bad} from './feedbackStyled'

class FeedbackApp extends Component {
  render() {
    const { good, neutral, bad, handleFeedback, calculateTotal, positivePers} = this.props;
         
    return (
        <div>
          <h2>Збір відгуків</h2>
          <Good onClick={() => handleFeedback('good')}>Добре</Good>
          <Neutral onClick={() => handleFeedback('neutral')}>Нейтрально</Neutral>
          <Bad onClick={() => handleFeedback('bad')}>Погано</Bad>
  
          {calculateTotal() > 0 ? (
            <>
             <p>Добре: {good}</p>
            <p>Нейтрально: {neutral}</p>
            <p>Погано: {bad}</p>
            <p>Загальний рахунок: {calculateTotal()}</p>
            <p>Відсоток позитивних відгуків: {positivePers()}%</p>
            </>
          ) : (
            <p>Немає відгуків</p>
          )}
        </div>
      );
   
  }
}

class Appe extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (feedbackType) => {
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  calculateTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePers = () => {
    const { good, neutral, bad } = this.state;
    if (good + neutral + bad) {
       return ((good/(good + neutral + bad))*100) 
    } else {
        return 0
    }
    
  }

  render() {
    return (
      <div>
        <h1>Feedback Application</h1>
        <FeedbackApp
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          handleFeedback={this.handleFeedback}
          calculateTotal={this.calculateTotal}
          positivePers = {this.positivePers}
        />
      </div>
    );
  }
}

export default Appe;
