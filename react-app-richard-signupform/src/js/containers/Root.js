//routes point here first

import React, {Component} from "react";
//import {NavItem, Nav, NavLink, Navbar} from 'reactstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Cookies from 'js-cookie'

import App from "./App"
import Greetings from "./Greetings";
import SignupPage from './SignupPage.js';
import LoginPage from './LoginPage.js';
import NotFound from './NotFound.js';
import Dashboard from './Dashboard.js';


class Root extends Component {

render() {
    return (
        <div>
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={Greetings} />
                        {(!Cookies.get('authenticate')) ?  (
                            <Route path="/login" component = {LoginPage} /> 
                        ) : (
                            <>
                            <>
                            <Route exact path="/" component={Greetings} />
                            </>
                            <>
                            <Route exact path="/dashboard" component = {Dashboard} />
                            </>
                            </>
                        )}
                        <Route path="/register" component={SignupPage} />
                        <Route component={NotFound} />
                    </Switch>
                </App>
            </Router>

        </div>
    )
}
}

export default Root
