import React from "react";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import movieReducer from './Movies/reducer'

const persistedConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  movies: movieReducer,
});

const persistedReducer = persistReducer(persistedConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);
// persistor.purge();

const Redux = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export { store, persistor, Redux };
