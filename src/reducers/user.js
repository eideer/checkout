import { LOGIN_SUCCESS, LOGOUT } from '../actions';

export const initialState = {};

export const user = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return { ...action.user };

    case LOGOUT:
      return { };

    default:
      return state;
  }
}
