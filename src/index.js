import React from 'react';
import ReactDOM from 'react-dom';
import { LinkProvider } from './components/context';

import Header from './components/header';
import Viewer from './components/viewer';
import SiteRouter from './AppFinal';

ReactDOM.render(
  <React.StrictMode>
    <LinkProvider>
      <Viewer/>
      <Header/>
      <SiteRouter/>
    </LinkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);