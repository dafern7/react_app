
import React , {Component, useState } from "react";
import { Jumbotron , Button, Container, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import JwtDecode from 'jwt-decode';


import './greetings.css'
import { render } from "react-dom";



class Dashboard extends Component {

    fetchCurrentUser(token) {
        return(JwtDecode(token))
    }


    render() {
        return (
            <div>
            <Jumbotron fluid>
                <Container fluid>
                <h1 className="GreetingHead">Welcome, {this.fetchCurrentUser(Cookies.getJSON('authenticate').token).deviceName} </h1>
                <span className="lead">This place should have a link to a specific device's dashboard</span>
                <hr className="my-2" />
                </Container>
            </Jumbotron>
            </div>
        );
    }
};

Jumbotron.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fluid: PropTypes.bool,
    className: PropTypes.string
  };


export default Dashboard;