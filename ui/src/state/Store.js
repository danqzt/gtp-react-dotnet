import { applyMiddleware, compose, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
//import promiseMiddleware from "redux-promise-middleware";
import storageSession from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import { RootReducer } from "./AppReducers";

const persistConfig = {
    key: 'root',
    storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, RootReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createAppStore = () => {
    let store = createStore(
        persistedReducer,
        composeEnhancer(applyMiddleware(thunk))
    );

    let persistor = persistStore(store);
    return { store, persistor }
}