import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/';
import rootSaga from '../saga/';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNetworkMiddleware } from 'react-native-offline';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const networkMiddleware = createNetworkMiddleware({
    queueReleaseThrottle: 200,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(networkMiddleware, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export let persistor = persistStore(store, null, () => {
    console.log('persist reducer activated');
});

export default store;