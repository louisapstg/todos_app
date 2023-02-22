import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const reducers = combineReducers({
   todos: todoSlice
});

const persistConfig = {
   key: 'root',
   storage
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = configureStore({ reducer: persistedReducers });

const persistor = persistStore(store);

export { store, persistor };
