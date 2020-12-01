import React, { Component } from 'react';



import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';
import Home from './template/Home';
import Dashboard from './dashboard/Dashboard';
import Map from './compoments/parking/Map';
import Login from './dashboard/Login';
import Register from './dashboard/Register';
import Parkingmaphome from './compoments/parking/Parkingmaphome';
import Mappark from './template/Mappark';
import Mapgoogle from './template/Mapgoogle';
import Test from './template/Test';
import Navbar from './template/Navbar';

import Google from './template/Google';
import Googlem from './template/Googlem';
import Testmapp from './template/Testmapp';
import Newapp from './template/Newapp';
import Newwapp from './template/Newwapp';
import Search from './test/Search';
import Newcom from './test/Newcom';

import Demo from './test/Demo';
import {Newfile} from './test/Newfile';
import  {Ddemo} from './test/Ddemo';
import  Newdemo from './test/Newdemo';
import { Mapcontainer } from './test/Mapcontainer';
import Rendre from './test/Rendre';
import Landing from './test/Landing';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AddItem from './test/AddItem';

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";
import EditUser from './views/users/EditUser';

const  client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})
class App extends Component {

  

  render() {
    const current_url  = window.location.href ;
    let is_dashboard = current_url.split("dashboard")[1];
    let is_auth = current_url.split("auth")[1];

    return (
      
      <div>
       

        <Router>
       
       
        
       {is_dashboard === undefined && is_auth === undefined ? <Navbar /> : null}
       
       <div>
          <Switch>
         
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Home} />
            
            
    
            
            <Route   path="/new" component={Newapp} />
            <Route   path="/neww" component={Newwapp} />


         

            
            <Route   path="/demo" component={Demo} />
         
            
            <Route   path="/file" component={Newfile} />
            
            <Route   path="/container" component={Mapcontainer} />
            <Route   path="/containerr" component={Rendre} />
            <Route   path="/landing" component={Landing} />
            <Route   path="/ddd" component={Ddemo} />
          </Switch>
          <Switch>
      <Route path="/dashboard" render={props => <AdminLayout {...props} />} />
      <Route path="/dashboard/edi-user" component={EditUser} render={props => <AdminLayout {...props} />}/>
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
     
   
    </Switch>
        
          </div>

          
        </Router>
      </div>)
  }
}

export default App;
