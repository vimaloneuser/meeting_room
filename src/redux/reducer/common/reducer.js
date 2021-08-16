import * as types from '../../constants/actionTypes';
const initial = {
    boarding: false,
    internet: true
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
            alert("no internet...")
            return {
                ...state,
            };
        case types.NO_INTERNET:
            console.log("no internet")
            return {
                ...state,
            };
        default:
            return state;
    }
};
export default commonReducer;