import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { employeeSlice } from './EmployeeReducer';
import { persistReducer, persistStore } from 'redux-persist'
import localStorage from 'redux-persist/es/storage';
import { ApiSlice }from 'ApiSlice';

const persistConfig = {
    key: 'root',
    storage : localStorage,
    timeout: null
}
const rootReducer = combineReducers({
    employee : employeeSlice.reducer,
    [ApiSlice.reducerPath] : ApiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(ApiSlice.middleware)
});

export const persistor = persistStore(store);