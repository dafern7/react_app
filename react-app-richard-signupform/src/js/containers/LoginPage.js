import React , {Component} from 'react';
import LoginForm from '../components/LoginForm.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {userSigninRequest} from '../actions/index.js'

class LoginPage extends Component {

    render() {
        const { userSigninRequest } = this.props;
        return (

            <div className="row">
                <div className="signin">
                    <LoginForm userSigninRequest={userSigninRequest} />  
                </div>
            </div>
            
        )
    }
}

LoginPage.propTypes = {
    userSigninRequest: PropTypes.func.isRequired
}




export default connect(null, { userSigninRequest })(LoginPage)