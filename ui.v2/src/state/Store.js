import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { employeeSlice } from './EmployeeReducer';
import { persistReducer, persistStore } from 'redux-persist'
import localStorage from 'redux-persist/es/storage';

const persistConfig = {
    key: 'root',
    storage : localStorage,
    timeout: null
}
const rootReducer = combineReducers({
    employee : employeeSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
});

export const persistor = persistStore(store);