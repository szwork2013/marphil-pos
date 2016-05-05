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

export default function reducer(state = init, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        email: action.authData.password.email,
        error: {
          msg: null,
          code: null,
        }
      };
    case LOGIN_ERROR:
      return {
        email: null,
        error: {
          msg: action.err.message,
          code: action.err.code,
        }
      };
    case REMOVE_ERORR:
      return {
        email: null,
        error: {
          msg: null,
          code: null,
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
      console.log(role);
      if (role === 'dashboard') hashHistory.push('/dashboard');
      else hashHistory.push('/terminal');
      dispatch({ type: LOGIN_SUCCESS, authData });
    })
    .catch(err => dispatch({ type: LOGIN_ERROR, err }))
  );
}
