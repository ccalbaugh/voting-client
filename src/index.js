import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Voting from './components/Voting';

ReactDOM.render(
  <Voting pair={pair} hasVoted="Trainspotting" />,
  document.getElementById('root')
);
