import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LinkProvider } from './components/context';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Header from './components/header';
import Viewer from './components/viewer';
import CookieSet from './components/router/cookieset';

ReactDOM.render(
  <React.StrictMode>
    <LinkProvider>
      <Viewer/>
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/setcookie/:id' element={<CookieSet/>}/>
        </Routes>
      </Router>
    </LinkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);