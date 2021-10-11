import {takeEvery,call,put,all } from 'redux-saga/effects'


   export function* getItems(data) {   
    yield put({
      type: 'GET_ITEMS_SUCCESS_ACTION',
      payload: data.payload
    });
   }

   export  function* rootSaga() {
    yield all([
   
       takeEvery('SHOW_ITEMS', getItems),

    ]);
  }