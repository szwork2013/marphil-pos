import Firebase from 'firebase';
import { hashHistory } from 'react-router';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';
const REMOVE_ERORR = 'REMOVE_ERORR';
const ref = new Firebase('vivid-torch-4276.firebaseio.com');

const init = {
  email: null,
  error: {
    msg: null,
    code: null
  }
};

export default function login(state = init, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        email: action.authData.password.email,
        error: null
      };
    case LOGIN_ERROR:
      return {
        email: null,
        error: {
          msg: action.err.message,
          code: action.err.code
        }
      };
    case REMOVE_ERORR:
      return {
        email: null,
        error: {
          msg: null,
          code: null
        }
      };
    default:
      return state;
  }
}

export function removeError() {
  return {
    type: REMOVE_ERORR
  };
}

export function verifyCreds(email, password, role) {
  return dispatch => (
    ref.authWithPassword({ email, password }, { remember: 'sessionOnly' })
    .then(authData => {
      dispatch({ type: LOGIN_SUCCESS, authData });
      if (role === 'admin') hashHistory.push('/dashboard');
      else hashHistory.push('/terminal');
    })
    .catch(err => dispatch({ type: LOGIN_ERROR, err }))
  );
}
