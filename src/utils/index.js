import { Platform, NetInfo } from 'react-native';
import { Color } from './color'
import DateUtils from './dateUtils'
import Messages from './messageUtils'
import Constants from './constants'
import CommonStyle from './commonStyles'
import ThemeUtils from './themeUtils'
import { validation, PasswordValidate } from './validationUtils'

const {
    Version,
    OS,
} = Platform;

export const IS_ANDROID = OS === 'android';
export const IS_IOS = OS === 'ios';
export const IS_LT_LOLLIPOP = Version < 21;


// use for check internet connection
export const isNetworkConnected = () => {
    if (Platform.OS === 'ios') {
        return new Promise(resolve => {
            const handleFirstConnectivityChangeIOS = isConnected => {
                NetInfo.isConnected.removeEventListener('change', handleFirstConnectivityChangeIOS);
                resolve(isConnected);
            };
            NetInfo.isConnected.addEventListener('change', handleFirstConnectivityChangeIOS);
        });
    }

    return NetInfo.isConnected.fetch();

};
export default {
    isNetworkConnected,
}

export {
    Color,
    DateUtils,
    Messages,
    Constants,
    CommonStyle,
    ThemeUtils,
    validation,
    PasswordValidate
};