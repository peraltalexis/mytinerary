import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from './StateProvider';
import reducer, {inicialState} from './reducer'

ReactDOM.render(
  <StateProvider inicialState={inicialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);

reportWebVitals();
