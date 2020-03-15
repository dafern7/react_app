import React , {Component} from 'react';
import SignupForm from '../components/SignupForm.js';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {userSignupRequest} from '../actions/index.js'

class SignupPage extends Component {
    // componentDidMount() {
    //     this.props.userSignupRequest();
    //   }

    render() {
        
        return (

            <div className="row">
                <div className="signup">
                    <SignupForm  /> 
                    
                </div>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
      deviceState: state.deviceState
    };
}

// SignupPage.propTypes = {
//     userSignupRequest: PropTypes.func.isRequired
// }

export default connect(mapStateToProps, { })(SignupPage)