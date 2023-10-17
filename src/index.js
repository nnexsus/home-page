import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { LinkProvider } from './components/context';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import React from 'react';

import CookieSet from './components/router/cookieset';
import Header from './components/header';
import Viewer from './components/viewer';
import App from './App';
import QuickLinks from "./components/router/quicklinks";

const Curtain = styled.div`

width: 100vw;
height: 100vh;

background: url('/images/potentialbanner2.webp');
background-size: cover;
background-position: center;
position: static;

animation: curtain-call 3s cubic-bezier(0.075, 0.82, 0.165, 1) 6s forwards 1;

@keyframes curtain-call {
  0% {
    height: 100vh;
  } 100% {
    height: 0vh;
  }
}

.title-container {
  top: 10%;
}

.title-container2 {
  top: 70%;
}

.title-container, .title-container2 {
  position: absolute;
  left: 10%;
  z-index: 2;
  font-family: monospace;
  color: white;
  padding: 50px;
  width: 30%;
  height: 10%;
  display: block;
  animation: site-load-main 10s ease 1s forwards;
  transition: 0.3s ease;
  
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 10px;
    mask-image: url('/images/gradient.png');
    mask-position: 0px -300px;
    mask-repeat: no-repeat;
    mask-size: 100%;
    backdrop-filter: blur(20px) brightness(1.5);
    animation: site-load 10s ease 1s forwards;
  }

  :hover {
    scale: 1.1;
  }

  @keyframes site-load {
      0% {
        border-radius: 10px;
        mask-position: 0px -300px;
        backdrop-filter: blur(20px) brightness(1.5);
      } 50% {
        border-radius: 50px;
        mask-position: 0px 0px;
        backdrop-filter: blur(20px) brightness(2.5);
      } 100% {
        border-radius: 50px;
        mask-position: 0px 0px;
        backdrop-filter: blur(20px) brightness(2.5);
      }
    }

    @keyframes site-load-main {
      0% {
        width: 30%;
        left: 10%;
      } 50% {
        width: 30%;
        left: 15%;
      } 100% {
        width: 0%;
        left: -50%;
      }
    }

  h4 {
    letter-spacing: 0px;
    white-space: nowrap;
    animation: text-track 6s ease 1s forwards;
  }

  @keyframes text-track {
    0% {
      letter-spacing: 0px;
    } 100% {
      letter-spacing: 10px;
    }
  }
}

`;

ReactDOM.render(
  <React.StrictMode>
    <LinkProvider>
    <Curtain>
      <div className="title-container">
        <h1 style={{margin: 0}}>nnexsus.net v3.0</h1>
        <h4 style={{margin: 0}}>Loading...</h4>
      </div>
      <div className="title-container2">
        <h3 style={{margin: 0}}>Last update: 10/17/2023</h3>
        <h4 style={{margin: 0}}>Fission-Update</h4>
      </div>
    </Curtain>
      <Viewer/>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/quicklinks' element={<QuickLinks/>}/>
          <Route path='/setcookie/:id' element={<CookieSet/>}/>
        </Routes>
      </Router>
    </LinkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);