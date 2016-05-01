import Firebase from 'firebase';
import { hashHistory } from 'react-router';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';
const ref = new Firebase('vivid-torch-4276.firebaseio.com');

export default function login(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        email: action.authData.password.email,
        error: null
      };
    case LOGIN_ERROR:
      return {
        email: null,
        error: action.err.message
      };
    default:
      return state;
  }
}

export function verifyCreds(email, password) {
  return dispatch => (
    ref.authWithPassword({ email, password }, { remember: 'sessionOnly' })
    .then(authData => {
      console.log(authData);
      dispatch({ type: LOGIN_SUCCESS, authData });
      hashHistory.push('/terminal');
    })
    .catch(err => dispatch({ type: LOGIN_ERROR, err }))
  );
}
