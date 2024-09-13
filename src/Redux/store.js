
import { applyMiddleware, legacy_createStore } from 'redux';
import persistedReducer from './reducers/rootReducer';
import { persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';
import customLoggerMiddleware from './customLoggerMiddleware';

const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(thunk,customLoggerMiddleware) 
);

const persistor = persistStore(store);

export { store, persistor };
