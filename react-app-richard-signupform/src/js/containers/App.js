import React , {Component, useState} from "react";
//import NavigationBar from "../components/navigation";
import {NavItem, Nav, NavLink, Navbar} from 'reactstrap';
import {connect} from 'react-redux';
import Cookies from 'js-cookie'


class App extends Component {
  componentDidMount() {
//    this.props.fetchCurrentUser //for auth, redirect to login page if no user and not on login page

  }
  render() {
    return(
    <div>

      <Navigation />

      <div className="container">
        {true && this.props.children} 
      </div>
    </div>
    );
  }
}

class Navigation extends Component {
  render() {
    return(<Navbar color="light" light expand="md">
                <div className = "container-fluid">

                {Cookies.getJSON('authenticate') ?  (
                <Nav className="navbar-header">
                    <NavItem>
                      <NavLink href="/"> Back To Homepage</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/dashboard">Dashboard</NavLink>
                    </NavItem>
                </Nav>
                ) : (

                  <NavLink href="/"> Back To Homepage</NavLink>

                )}
            
                <Nav className="navbar-header" navbar>
                
                        {Cookies.getJSON('authenticate') ?  (
                        <NavItem>
                            <NavLink href='/' onClick={() => Cookies.remove('authenticate')}>Logout</NavLink>
                        </NavItem>
                        ) : (
                        <>
                        <NavItem>
                          <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/register">Sign up</NavLink>
                        </NavItem>
                        </>

                      )}


                    
  

                </Nav>  

                </div>
 
            </Navbar>)
  }
  
}

const mapStatetoProps = () => {
  return {

  }
}

export default connect(mapStatetoProps, {})(App)