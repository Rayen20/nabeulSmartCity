import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'



export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAdmin: localStorage.getItem("role") === "\"admin\"",
            redirect: false,
        };
        if (this.state.isAdmin === false) {
            this.state.redirect = false
        }
    }
    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/login" />;
        } else {
            return (
                <div>
                    <Header />
                    <Menu />
                    <BrowserRouter>
                    <Switch>
                   
                   
                    </Switch>
                    </BrowserRouter>
                    <Footer />
                </div>
            )
        }
    }
}
