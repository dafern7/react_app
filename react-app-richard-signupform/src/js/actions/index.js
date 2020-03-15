import {ADD_DEVICE} from "../constants/action-types"
import Axios from "axios";
import rootReducer from "../reducers";
import Cookies from 'js-cookie'
import JwtDecode from 'jwt-decode';


export function addDevice(payload) {
    return{type: ADD_DEVICE, payload }
};

export function getData() {
    return function(dispatch/*, getState*/) {
        return fetch("/api/v0/devices/") //can call any url or localhost
                .then(response => response.json())
                .then(json => {
                    dispatch({ type: "load_data", payload: json});
                });
    }
}

// export function userSignupRequest(userData) {
//     return function(dispatch) {
//         return Axios.post("/api/v0/devices/auth/", userData)
//     }
// }


export function userSignupRequest(userData) {
    return function(dispatch) {
        return fetch("/api/v0/devices/auth/", { method: 'POST', body: JSON.stringify(userData) , headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'}
        }) //can call any url or localhost
                .then(response => response.json())
                .then(json => {
                    dispatch({ type: "signup", payload: json});
                });
}

}

export function userSigninRequest(userData) {
    return function(dispatch) {
        return fetch("/api/v0/devices/auth/login", { method: 'POST', body: JSON.stringify(userData) , headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'}
        }) //can call any url or localhost
                .then(response => response.json())
                .then(json => {dispatch({ type: "signin", payload: json})})
                // .catch(error => {dispatch({type:"error", payload: error.message})})
                //.catch(error => {dispatch({type: "error", message: error.message})}); make this better
    }
}




