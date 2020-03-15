import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import './SignupForm.css';
import { userSigninRequest } from "../actions/index.js";
import Cookies from 'js-cookie'
import {Container, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import JwtDecode from 'jwt-decode';


function mapDispatchToProps(dispatch) {
    return {
        userSigninRequest: userData => dispatch(userSigninRequest(userData))
    };
};

const mapStateToProps = (state) => {
    return{authToken: state.currentUser.authToken};
};



class ConnectedLoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            device_name:'',
            //email: '',
            password:'',
            //passwordConfirm:''
            errors: {},
        }

        this.onChange = this.onChange.bind(this) //binds the context of 'this' to the constructor in onChange function
        this.onSubmit = this.onSubmit.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    onChange(e) {
        this.setState( { [e.target.name] : e.target.value }) //require each form to have a target 'name' defined below in the form
    }

    handleLogout(e) {
    
    //need to find a better way to handle logouts then just redirecting 

    }

    onSubmit(e) {
        e.preventDefault();
        this.props.userSigninRequest(this.state).then(
            () => {
                //if response is authorized
                if(Cookies.getJSON('authenticate').auth) {
                    alert('Logged In')
                    const decoded_token = JwtDecode(Cookies.getJSON('authenticate').token)
                    console.log(decoded_token.deviceName)
                    window.location.href = '/'
                }

                if(!Cookies.getJSON('authenticate').auth) {
                    alert('Invalid Login Credentials')
                    this.setState({errors: Cookies.getJSON('authenticate')})
                    Cookies.remove('authenticate')
                    console.log(Cookies.getJSON('authenticate'))
                }
            }
        );
    }
    


    render() {
        const {errors} = this.state
        return (
        <Container className="SignupForm">
            
            <h2 className="PageHeading"> Log In </h2> 
            <Form className="form">
                <Col>
                    <FormGroup row>
                        <Label for="device-label" sm={5}>Device Name</Label>
                        <Col sm={12}> 
                            <Input 
                                value= {this.state.device_name}
                                onChange={this.onChange}
                                type="text"
                                name="device_name"
                                className="form-control" 
                                placeholder = "Enter Device Name"
                            />
                        </Col> 
                    </FormGroup>
    {/*
                    <div className="form-group">
                        <label className="control-label">Email</label>
                        <input
                            value= {this.state.email}
                            onChange={this.onChange}
                            type="text"
                            name="email"
                            className="form-control"
                        />
                    </div>
    */}
                    <FormGroup row>
                        <Label for="password" sm={2}>Password</Label>
                        <Col sm={12}>
                            <Input
                                value= {this.state.password}
                                onChange={this.onChange}
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder = "Enter Password"
                            />
                        {errors.message && <span className="err-block">{errors.message}</span>}
                        </Col>
                    
                    </FormGroup>
                </Col>
{/*
                <div className="form-group">
                    <label className="control-label">Confirm Password</label>
                    <input
                        value= {this.state.passwordConfirm}
                        onChange={this.onChange}
                        type="password"
                        name="passwordConfirm"
                        className="form-control"
                    />s
                </div>
*/}
                <div className="button-grp">
                    <Button color="danger" onClick={this.onSubmit}>
                        Log In
                    </Button>
                </div>
            </Form>
        </Container>  
        );
    }
}


const LoginForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedLoginForm)

LoginForm.propTypes = {
    userSigninRequest: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default LoginForm