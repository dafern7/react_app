import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import './SignupForm.css'
import { userSignupRequest } from "../actions/index.js";
import {connect} from "react-redux";
import {Container, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

function mapDispatchToProps(dispatch) {
    return {
        userSignupRequest: userData => dispatch(userSignupRequest(userData))
    };
};

class ConnectedSignupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            device_name:'',
            //email: '',
            password:'',
            //passwordConfirm:''
            errors : {}
        }

        this.onChange = this.onChange.bind(this) //binds the context of 'this' to the constructor in onChange function
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState( { [e.target.name] : e.target.value }) //require each form to have a target 'name' defined below in the form
    }

    onSubmit(e) {
        
        e.preventDefault();

        this.props.userSignupRequest(this.state).then(
            () => {
                window.location.replace('/'); //TODO add redirection page ! (dashboard)
            },
            (err) => this.setState({ errors: err.message })
        );
        
        this.setState({device_name:"",password:""})
        //reset the state of the user bar
    }


    //TODO make each error specific to the field of authentication (eg. devicename error appears under devicename/password error appears under password)
    render() {
        const {errors} = this.state
        return (
        <Container className="SignupForm">
            

            <h2 className="PageHeading"> Sign Up </h2> 
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
                        </Col>
                    {/* {errors.message && <span className="err-block">{errors.message}</span>} */}
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
                        Sign Up
                    </Button>
                </div>
            </Form>
        </Container>  
        );
    }
}

// SignupForm.propTypes = {
//     userSignupRequest: PropTypes.func.isRequired
// }

// SignupForm.contextTypes = {
//     router: PropTypes.object.isRequired
// }

const SignupForm = connect(null, mapDispatchToProps)(ConnectedSignupForm)

export default SignupForm