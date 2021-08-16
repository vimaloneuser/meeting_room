import * as types from '../constants/actionTypes';
import { takeEvery } from 'redux-saga/effects';
import { loginUser } from './loginSaga';

function* rootSaga() {
    yield takeEvery(types.LOGIN_USER, loginUser);
}

export default rootSaga;