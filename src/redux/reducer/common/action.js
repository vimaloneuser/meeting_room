import * as types from '../../constants/actionTypes';

export const onBoardingDoneAction = (status) => {
  return {
    type: types.BOARDING_DONE,
    payload: status
  }
}

export const logOutAction = () => {
  return {
    type: types.LOGOUT
  }
}

export const todoModalVisibility = (status) => {
  return {
    type: types.TODO_MODAL_VISIBILITY,
    payload: status
  }
}

export const saveTodo = (data) => {
  return {
    type: types.TODO_DATA,
    payload: data
  }
}

