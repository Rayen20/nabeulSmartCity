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
import React from "react";
import Logo from './../../assets/img/icons/common/github.svg';
import Logoo from './../../assets/img/icons/common/google.svg';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import { login } from "../../dashboard/UserFunctions";

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
        isLogin: localStorage.getItem("token") === null,
        redirect: false,
        email: '',
        password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    console.log(this.state.isLogin)
    if (this.state.isLogin !== true ) { 
      if(localStorage.getItem("email") === null){
          this.state.redirect = true
      }
    }
   
}
handleChange (e) {
  this.setState({ [e.target.name]: e.target.value });
};

handleSubmit(e) {
  e.preventDefault();

  const user = {
      email: this.state.email,
      password: this.state.password
  };
  
  login(user).then(res => {
    var jwt = require('jsonwebtoken');
    /*  if (res) {
         
        this.props.history.push(`/dashboard`)
        
        
      }*/
    
      if (user != null) {
        localStorage.setItem("user", res.user);
        
           
            localStorage.setItem("token", jwt.decode(res));
            this.props.history.push("/dashboard");

        } else
     {
        console.log(' wrong password ')
    }

    })
  

}

  /*axios.post('http://localhost:5000/users/login', user)
      .then(async res => {
          if (res.status === 200) {
              localStorage.setItem("user", JSON.stringify(res.data.user));
              if (res.data.user) {
                if (res.data.accessToken) {
                 // localStorage.setItem("user", JSON.stringify(res.data.user));
              
                  localStorage.setItem("token", res.data.accessToken);
                }
                  this.props.history.push("dashboard");
                  console.log(user)
              } else {
                  localStorage.setItem("token", res.data.accessToken);
                  this.props.history.push("/dashboard");
              }
          } else {
              console.log(' wrong password ')
          }
      })*/

  render() {
    const { redirect } = this.state;

    if (redirect) {
        return <Redirect to="/dashboard" />;
    } else {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={Logo}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={Logoo}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <Form role="form" onSubmit={this.handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" autoComplete="new-email"name="email" value={this.state.email} onChange={this.handleChange}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" autoComplete="new-password" name="password"value={this.state.password} onChange={this.handleChange}/>
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}
}

export default Login;
