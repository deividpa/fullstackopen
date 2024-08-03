import { useState } from 'react';

const Header = () => <h1>give feedback</h1>;

const Button = ({ onClick, text }) => {
    return (
      <button onClick={onClick}>
        {text}
      </button>
    );
};

const Statistics = ({ good, bad, neutral }) => {
    if (good === 0 && bad === 0 && neutral === 0) {
        return <h3>No feedback given</h3>;
    }
    const all = good + neutral + bad;
    const average = (good - bad) / all;
    const positivePerc = (good / all) * 100 + '%';
    return (
        <div>
            <Header text={'statistics'} />
              <table>
                  <tbody>
                      <tr>
                          <td><StatisticLine text="good" value={good} /></td>
                      </tr>
                      <tr>
                          <td><StatisticLine text="neutral" value={neutral} /></td>
                      </tr>
                      <tr>
                          <td><StatisticLine text="bad" value={bad} /></td>
                      </tr>
                      <tr>
                          <td><StatisticLine text="all" value={all} /></td>
                      </tr>
                      <tr>
                          <td><StatisticLine text="average" value={average} /></td>
                      </tr>
                      <tr>
                          <td><StatisticLine text="positive" value={positivePerc} /></td>
                      </tr>
                  </tbody>
              </table>
        </div>
    );
};

const StatisticLine = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
);
const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodClick = () => setGood(good + 1);
    const handleNeutralClick = () => setNeutral(neutral + 1);
    const handleBadClick = () => setBad(bad + 1);

    return (
        <div>
            <Header />
            <Button onClick={handleGoodClick} text="good" />
            <Button onClick={handleNeutralClick} text="neutral" />
            <Button onClick={handleBadClick} text="bad" />
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    );
};

export default App;