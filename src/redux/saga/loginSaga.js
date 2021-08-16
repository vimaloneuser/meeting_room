import * as types from '../constants/actionTypes';
import { put, call } from 'redux-saga/effects';
import Routes from '../../router/routes';
import { callService } from '../../services';
import apiUrl from '../../services/serverEndpoints';
import { notifyMsg, resetNavigation } from '../../utils/commonFunctions';

export function* loginUser(action) {
    debugger;
    let { props } = action.payload;
    yield put({ type: types.LOADING_START, payload: true });
    try {
        const result = yield call(callService, {
            url: apiUrl.login,
            method: 'POST',
            params: action.payload.param,
            props: props,
        });
        if (result) {
            if (result.isSucess) {
                debugger;
                let message = result.Result.message;
                yield put({ type: types.LOGIN_USER_SUCCESS, payload: result.Result.result });
                setTimeout(() => {
                    notifyMsg({ message: message });
                    // resetNavigation(props.navigation, Routes.Authenticated);
                }, 1000);
            } else {
                yield put({ type: types.LOGIN_USER_FAILURE });
                setTimeout(() => {
                    notifyMsg({ message: result?.error?.message, success: false });
                }, 100);
            }
        }
    } catch (error) {
    }
}
