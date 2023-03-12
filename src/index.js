import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const stores=createStore(reducers,applyMiddleware(thunk))
root.render(
    <Provider store={stores}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
