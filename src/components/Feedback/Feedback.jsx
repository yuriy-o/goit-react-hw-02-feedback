import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import { Button } from './Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  onIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const totalNF = this.countTotalFeedback();
    const totalNFP = this.countPositiveFeedbackPercentage();

    return (
      <>
        <p>Please leave feedback</p>
        <Button onClick={this.onIncrementGood}>Good</Button>
        <Button onClick={this.onIncrementNeutral}>Neutral</Button>
        <Button onClick={this.onIncrementBad}>Bad</Button>
        <p>Statistics</p>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {totalNF}</p>
        <p>Positive feedback: {totalNFP}%</p>
      </>
    );
  }
}
