import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/header';

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);