import {createStore,applyMiddleware,compose} from 'redux'
import combineReducers from '../reducer/combinedReducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../redux-saga/sagas'
const sagaMiddleware=createSagaMiddleware()
const midd=[logger,sagaMiddleware]
export const store=createStore(combineReducers,compose( applyMiddleware(...midd),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  )  )
sagaMiddleware.run(rootSaga);


