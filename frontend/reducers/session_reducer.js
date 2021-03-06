import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import * as _ from 'lodash';

const nullUser = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _.merge({}, state, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default sessionReducer;
