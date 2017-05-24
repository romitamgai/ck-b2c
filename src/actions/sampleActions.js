import actionTypeConstants from '../constants/actionTypeConstants';

export function login() {
  return {
    type: actionTypeConstants.LOG_IN
  };
}

export function logout() {
  return {
    type: actionTypeConstants.LOG_OUT
  };
}

