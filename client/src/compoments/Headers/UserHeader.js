/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React ,{useState,useEffect,useRef, Component  }from "react";
import axios from 'axios'

import Logo from './../../assets/img/theme/profile-cover.jpg';

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { signUp } from "../../dashboard/UserFunctions";

class UserHeader extends Component {
  documentData;
  
  constructor(props) {
    super(props);

    this.state = {
      doc: Array().fill(null),
      decoded : null,
      table_header: Array().fill(null),
      user: '',
      email: '',
      password: '',
      first_name:'',
      last_name:'',
      hits: [],
       
      
    }
   
   /* this.state = {
            "email": localStorage.getItem("consultedUser") ? JSON.parse(localStorage.getItem("consultedUser")).email:null,
            "first_name": localStorage.getItem("consultedUser") ? JSON.parse(localStorage.getItem("consultedUser")).first_name:null,
            "last_name": localStorage.getItem("consultedUser") ? JSON.parse(localStorage.getItem("consultedUser")).last_name:null,
            "password": localStorage.getItem("consultedUser") ? JSON.parse(localStorage.getItem("consultedUser")).password:null,
           
            
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)*/
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
}
handleChange = event => {
  const {name, value} = event.target
  this.setState({ [name]: value });
};
handleFirstName(event) {
  this.setState({first_name: event.target.value});
}
handleLastName(event) {
  this.setState({last_name: event.target.value});
}
handleEmail(event) {
  this.setState({email: event.target.value});
}
handlePassword(event) {
  this.setState({password: event.target.value});
}
handleFormSubmit(e) {
  e.preventDefault()
 localStorage.setItem('document',JSON.stringify(this.state));
}
componentDidMount() {
  
  //this.state.user = localStorage.getItem("usertoken");
  var jwt = require('jsonwebtoken');
  this.state.user= jwt.decode(localStorage.getItem("usertoken"));
  console.log(  this.state.user.first_name);
  this.role = window.localStorage.getItem('usertoken');
  localStorage.setItem('first_name', this.state.user.first_name);
  localStorage.setItem('last_name', this.state.user.last_name);
  localStorage.setItem('email', this.state.user.email);

  this.first_name = window.localStorage.getItem('first_name');
  this.last_name = window.localStorage.getItem('last_name');
  this.email = window.localStorage.getItem('email');

 //this.roole =jwt.decode(this.role)
  console.log('role', this.role)
  console.log('first_name', this.first_name)
  console.log('last-name', this.last_name)
  console.log('email', this.email)
  
  this.state.user_id = jwt.decode(localStorage.getItem("usertoken").split("\"")[1]);
  this.state.first_name = localStorage.getItem("usertoken").split("\"")[7];
  console.log(  this.state.user_id);
  fetch('http://localhost:5000/users/profile')
  .then(response => response.json())
  .then(data => {
    this.setState(data);
    data.map(item => { return item.first_name,
      console.log(item)
    })
   
  });

  fetch('http://localhost:5000/users/profile')
  .then(response => response.json())
  .then(data => this.setState({ hits: data.hits },
    
    
    ));
    console.log(  this.hits);
    this.state.data= jwt.decode(localStorage.getItem("usertoken"));
    console.log(  this.state.data.first_name);
   
    
    this.state.user_id = jwt.decode(localStorage.getItem("usertoken").split("\"")[1]);
    this.state.first_name = localStorage.getItem("usertoken").split("\"")[7];
    console.log(  this.state.user_id);
    this.state.user = console.log(  this.callApi().then(res => this.setState({ response: res })));
    
  /*axios.get('http://localhost:5000/users/profile')
  .then((response) => {
    this.setState({
      data: response// maninpulate your response here
      
    })
      });
  
  */
  /*this.callApi()
  .then(res => this.setState({ response: res.express }))
  .catch(err => console.log(err));
 
  console.log(  this.callApi());*/
 
 /* this.documentData = JSON.parse(localStorage.getItem('document'));
console.log(userr)
  if (localStorage.getItem('document')) {
      this.setState({
        email: this.documentData.email,
        first_name: this.documentData.first_name,
        last_name: this.documentData.last_name
  })
} else {
  this.setState({
    email: '',
      first_name: '',
      last_name: ''
  })
}*/
}
handleSubmit( event ){
 
  const {email, password, first_name, last_name} = this.state;
  const user = {
    "email": email,
    "first_name": first_name,
    "last_name": last_name,
    "password": password,
   
  }
 
    console.log(this.hits)
        axios.get("http://localhost:5000/users/profile",user).then(({ response }) => {
          const { token } = response.data;
                localStorage.setItem('token', token);
                localStorage.getItem('token');
                console.log(token);
                    console.log("okk");
        }).catch(function (error) {
          console.log("Error****:", error);
        });
      
     

 
/*axios.get('http://localhost:5000/users/profile',user).then(({ data }) => {
    console.log(data.user);
  }).catch(function (error) {
    console.log("Error****:", error);
  });
  console.log(user);*/

  
  
} 

callApi = async () => {
  var jwt = require('jsonwebtoken');
  this.state.usertoken= jwt.decode(localStorage.getItem("usertoken"));
  const response = await fetch('http://localhost:5000/users/profile');
  //var token = response.body.jwt
  //token = localStorage.getItem("usertoken");
  var body = await jwt.decode(response.json());
  if (response.status !== 200) console.log(body);;
  this.setState({
    user: body,
    
  })
  console.log(this.state.first_name);
  body= jwt.decode(localStorage.getItem("usertoken"));
  console.log(body);
  this.state.user = body;
  this.state.first_name = body.first_name
  console.log(this.state.user);
  for (let index = 0; index < this.state.user.length; index++) {
    this.setState({
      table_header: Object.keys(this.state.user[index]).slice(1, 7),
     
    })
    break
  }
  this.setState({
    table_header: this.state.table_header.slice(0, this.state.table_header.length - 1)
  })
  this.state.table_header.push("Action");
  return body;
  
}
addClient = () => {
  localStorage.removeItem("consultedUser")
  window.location.href = "/users/profile" + undefined;
}

showUser = (user) => {
 
  console.log('this is:', user);
  localStorage.setItem("consultedUser", JSON.stringify(user));
  window.location.href = "/users/profile" + user._id;
  
}



  render() {
  
   // const { decoded } = this.state;
   //return this.table_header(decoded) 
   
   
   const { hits } = this.state;
   console.log('role', this.role)
   console.log('first_name', this.first_name)
   console.log('last_name', this.last_name)
   console.log('email', this.email)
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(" + {Logo}+ ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white"> Hello {this.first_name}</h1>
               
                
                <p className="text-white mt-0 mb-5">
                  This is your profile page. You can find all your informations
       
                </p>
               
                   
                <Button
                  color="info"
                  
                  onClick={event =>  window.location.href='/dashboard/edit-user'}
                 
                >
                  Edit profile
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default UserHeader;
