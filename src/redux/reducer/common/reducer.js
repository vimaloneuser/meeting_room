import * as types from '../../constants/actionTypes';
const initial = {
    boarding: false,
    internet: true,
    addToDoModal: false,
    todos: []
};
import { offlineActionTypes } from 'react-native-offline';

const commonReducer = (state = initial, action) => {
    switch (action.type) {
        case types.BOARDING_DONE:
            return {
                ...state,
                boarding: action.payload,
            };
        case offlineActionTypes.FETCH_OFFLINE_MODE:
            return {
                ...state,
            };
        case types.NO_INTERNET:
            return {
                ...state,
            };
        case types.TODO_DATA:
            return {
                ...state,
                todos: action.payload
            };
        case types.TODO_MODAL_VISIBILITY:
            return {
                ...state,
                addToDoModal: action.payload
            };
        default:
            return state;
    }
};
export default commonReducer;