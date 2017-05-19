import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from './types';

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

function requestSignup(creds) {
  return {
    type: SIGNUP_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function receiveSignup(user) {
  return {
    type: SIGNUP_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user: user
  }
}

function signupError(message) {
  return {
    type: SIGNUP_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

// Auth different actions

export function loginUser(data) {
  return dispatch => {
    return axios.post('/api/auth/sign_in', data)
      .then(response =>
        console.log(response.data)
      )
  };
}
// export function loginUser(creds, currentRoom) {
//   const postUrl = '/api/v0/auth_user';
//   const config = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: `email=${creds.email}&password=${creds.password}`
//   };
//   return dispatch => {
//     // We dispatch requestLogin to kickoff the call to the API
//     dispatch(requestLogin(creds));
//     return fetch(postUrl, config)
//       .then(response =>
//         response.json().then(user => ({ user, response }))
//             ).then(({ user, response }) => {
//         if (!response.ok) {
//           // If there was a problem, we want to
//           // dispatch the error condition
//           dispatch(loginError(user.message));
//           return Promise.reject(user);
//         }
//         // If login was successful, set the token in local storage
//         localStorage.setItem('auth_token', user.auth_token);
//         localStorage.setItem('email', user.user.email);
//         localStorage.setItem('username', user.user.username);
//         localStorage.setItem('user_id', user.user.id);
//         // Dispatch the success action
//         dispatch(receiveLogin(user));
//         toastr.success('Logged in with success', `as ${user.user.username}`);
//         currentRoom ? browserHistory.push(`/rooms/${currentRoom}`) : browserHistory.push('/');
//       }).catch(err => toastr.error('could not connect you', `${err.errors[0]}`));
//   };
// }
export function signupUser(creds, currentRoom) {
  const postUrl = '/api/v0/users';
  const params = { user: {
    username: creds.username,
    email: creds.email,
    password: creds.password,
    password_confirmation: creds.password_confirmation
  } };
  return dispatch => {
    dispatch(requestSignup(creds));
    return axios.post(postUrl, params)
      .then(response => {
        if (response.errors) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(signupError(user.message));
          return Promise.reject(user);
        }
        dispatch(loginUser({ email: creds.email, password: creds.password }, currentRoom));
      }).catch((error) => {
        error.response.data.errors.forEach((e) => {
          toastr.error(`${e}`, { timeOut: 10000 });
        });
      });
  };
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('auth_token');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('user_id');
    dispatch(receiveLogout());
    toastr.success('Logged out successfully', 'Hope to see you soon !');
    browserHistory.push('/');
  };
}
