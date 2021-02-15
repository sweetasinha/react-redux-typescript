import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './app/store'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <Provider store={store}>
//    <App />
//  </Provider>
//  ,
//   document.getElementById('root')
// );

function render() {
 
  const App = require('./App').default
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}
console.log("store",store.getState());
render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', render)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
