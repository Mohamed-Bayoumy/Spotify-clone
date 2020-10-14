import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateHandler} from'./stateHandler';
import reducer,{ initialState } from './reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateHandler initialState= {initialState}  reducer={reducer}>
    <App />
    </StateHandler>
  </React.StrictMode>,
  document.getElementById('root')
);
