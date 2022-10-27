import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { Component } from "react";
import css from './App.module.css'

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state]+1
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    
    return (
      <div className={css.box}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        
        <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? 
          (<Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={this.countTotalFeedback()} 
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) : (<Notification message="There is no feedback" />)
        }
        </Section>
      </div>
    );
  }

};

export default App;