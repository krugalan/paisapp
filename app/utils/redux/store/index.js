import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

/**Reducers */
import sessionReducer from '../reducers/sessionReducer';


const reducers = combineReducers({
  sessionReducer,
});


const persistConfig = {
  key: 'reducer',
  storage: AsyncStorage,
};

const presistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  presistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ));

export const persistor = persistStore(store);




