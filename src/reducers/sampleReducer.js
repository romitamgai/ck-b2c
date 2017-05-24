import actionTypeConstants from '../constants/actionTypeConstants';

import Immutable from 'immutable';

let initialState = Immutable.Map({
  isLoggedIn: false
});

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypeConstants.LOG_IN:
      return state.set('isLoggedIn', true);

    case actionTypeConstants.LOG_OUT:
      return state.set('isLoggedIn', false);

    default:
      return state;
  }
}