import { combineReducers } from 'redux';
import commonReducer from './common/reducer';
import loginReducer from './login/reducer';
import { reducer as network } from 'react-native-offline';
const rootReducer = combineReducers({
    login: loginReducer,
    common: commonReducer,
    network,
});
export default rootReducer;