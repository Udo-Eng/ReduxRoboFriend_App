//Formatting the React file to a Redux application 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
//React-redux provider component helps you to pass down the store property 
// down the component tree 
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reportWebVitals from './reportWebVitals';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
//creating  a new redux logger 
const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots })

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
