import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

export const store = configureStore({
  reducer: combineReducers({
    ...rootReducer,
    router: routerReducer,
  }),
  middleware: (gdm) => [
    ...gdm({ serializableCheck: false }).concat([
      routerMiddleware,
      sagaMiddleware,
    ]),
  ],
  devTools: import.meta.env.mode !== 'production',
});

sagaMiddleware.run(rootSaga);

setupListeners(store.dispatch);

export const history = createReduxHistory(store);
