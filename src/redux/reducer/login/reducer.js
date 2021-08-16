import * as types from '../../constants/actionTypes';
const initial = {
    user: {},
    token: '',
    loading: false,
};
const loginReducer = (state = initial, action) => {
    console.log(action.type, " action types.......")
    switch (action.type) {
        case types.LOADING_START:
            return {
                ...state,
                loading: action.payload,
            };
        case types.LOGIN_USER_SUCCESS:
            console.log(action.payload.token, "======= token")
            return {
                ...state,
                user: action.payload.data,
                token: action.payload.token,
                loading: false,
            };
        case types.LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case types.LOGOUT:
            return {
                ...state,
                user: {},
                token: ''
            };
        default:
            return state;
    }
};
export default loginReducer;