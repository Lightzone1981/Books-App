import { LOAD_NEW_BOOKS, SET_NEW_BOOKS, LOAD_SEARCH_BOOKS, SET_SEARCH_BOOKS, LOAD_SELECTED_BOOK, SET_SELECTED_BOOK } from "../action-types/index";
import { IBookInfo, IBooksResponse } from '../../types';
import { takeEvery, put } from 'redux-saga/effects'
 
const loadNewBooks = () => ({
    type: LOAD_NEW_BOOKS
})

const loadSearchBooks = (query:string) => ({
    type: LOAD_SEARCH_BOOKS,
    query
})

const loadSelectedBook = (isbn:string) => ({
    type: LOAD_SELECTED_BOOK,
    isbn
})

function* fetchNewBooks() {
    
    let URL = `https://api.itbook.store/1.0/new`
    
    const resp: Response = yield fetch(URL)
    const data: IBooksResponse = yield resp.json()
    yield put(setNewBooks(data.total, data.books))
}

function* fetchSearchBooks(action: any) {
    const { query } = action
    let URL = `https://api.itbook.store/1.0/search/${query}`
    
    const resp: Response = yield fetch(URL)
    const data: IBooksResponse = yield resp.json()
    yield put(setSearchBooks(data.total, data.page, data.books))
}

function* fetchSelectedBook(action: any) {
    
    const { isbn } = action
    const URL = `https://api.itbook.store/1.0/books/${isbn}`
    const resp: Response = yield fetch(URL)
    const data: IBookInfo = yield resp.json()
    yield put(setSelectedBook(data))
}


function* watcherBooks(){
    yield takeEvery(LOAD_NEW_BOOKS, fetchNewBooks)
    yield takeEvery(LOAD_SEARCH_BOOKS, fetchSearchBooks)
    yield takeEvery(LOAD_SELECTED_BOOK, fetchSelectedBook)
}

const setNewBooks = (total:string, books:IBookInfo[]) => ({
    type: SET_NEW_BOOKS,
    data: {
        total,
        books
    }
})

const setSearchBooks = (total:string, page:string, books:IBookInfo[]) => ({
    type: SET_SEARCH_BOOKS,
    data: {
        total,
        page,
        books,
    }
})

const setSelectedBook = (selectedBook:IBookInfo) => ({
    type: SET_SELECTED_BOOK,
    selectedBook
})



export { loadNewBooks, setNewBooks, loadSearchBooks, setSearchBooks, loadSelectedBook, setSelectedBook, watcherBooks};