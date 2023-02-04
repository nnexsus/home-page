import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LinkProvider } from './components/context';

import Header from './components/header';
import Viewer from './components/viewer';

ReactDOM.render(
  <React.StrictMode>
    <LinkProvider>
      <Viewer/>
      <Header></Header>
      <App />
    </LinkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);