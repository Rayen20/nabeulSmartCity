import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";
import Home from './template/Home';
import Rendre from './test/Rendre';
import Login from './dashboard/Login';
import Register from './dashboard/Register';
import Dashboard from './dashboard/Dashboard';
import Test from './template/Test';
import { Ddemo } from './test/Ddemo';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     
    <Switch>
   <App />
    
      </Switch>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();