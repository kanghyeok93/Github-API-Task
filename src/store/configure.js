import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as modules from './modules';
import rootSaga from './modules/rootSaga';

const reducers = combineReducers(modules);
const rootReducer = (state, action) => {
  return reducers(state, action);
};
const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// 개발 모드일 때만 Redux Devtools 적용
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && composeWithDevTools;
const composeEnhancers = devtools || compose;

const configure = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configure;
