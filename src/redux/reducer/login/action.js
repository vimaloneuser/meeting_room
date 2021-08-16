import * as types from '../../constants/actionTypes';

export const loginUserAction = (param, props) => {
  debugger
  return {
    type: types.LOGIN_USER,
    payload: { param, props }
  }
}
