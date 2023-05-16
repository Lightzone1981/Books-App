import { createStore, combineReducers, applyMiddleware } from 'redux';
import { booksReducer, uiReducer, userReducer } from './reducers/index';
import createSagaMiddleware from 'redux-saga'
import { watcherBooks, watcherUser } from './action-creators';
import { all } from 'redux-saga/effects';


const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
  yield all([
    watcherBooks(), watcherUser()
  ])
}

const store =  createStore(combineReducers({ books: booksReducer, ui: uiReducer, user: userReducer }), applyMiddleware(sagaMiddleware));

function handleStoreChange() {
    const state = store.getState();
    localStorage.setItem('localBooksState', JSON.stringify(state));
  
  }
  
 store.subscribe(handleStoreChange)
  
export default store

sagaMiddleware.run(rootSaga);