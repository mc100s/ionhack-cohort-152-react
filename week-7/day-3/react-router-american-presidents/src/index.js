import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// Import BrowserRouter from 'react-router-dom' and save it into the variable Router
import { BrowserRouter as Router } from 'react-router-dom'

// <Router><App /></Router> => Enable the routing system in the App component (everywhere!!)
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));