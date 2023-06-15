import { LOAD_NEW_BOOKS, SET_NEW_BOOKS, LOAD_SEARCH_BOOKS, SET_SEARCH_BOOKS, LOAD_SELECTED_BOOK, SET_SELECTED_BOOK, SET_FAVORITE_BOOK, REMOVE_FAVORITE_BOOK,REMOVE_ALL_FAVORITES, SET_VIEWED_BOOK, REMOVE_VIEWED_BOOK, REMOVE_ALL_VIEWED, SET_CART_BOOK, REMOVE_CART_BOOK, CLEAR_CART, INC_BOOKS_COUNT, DEC_BOOKS_COUNT, SET_BOOKS_RATING} from "../action-types/index";


import { IBookCard, IBookInfo, IBooksResponse } from '../../types';
import { takeEvery, put } from 'redux-saga/effects'
import { set404, setLoaderStatus, setSearchStatus } from "./ui_action_creators";
 
const loadNewBooks = () => ({
    type: LOAD_NEW_BOOKS
})

const loadSearchBooks = (query:string, page:number) => ({
    type: LOAD_SEARCH_BOOKS,
    query,
    page
})

const loadSelectedBook = (isbn:string) => ({
    type: LOAD_SELECTED_BOOK,
    isbn
})

function* fetchNewBooks() {
    let URL = `https://api.itbook.store/1.0/new`
    try {
        const resp: Response = yield fetch(URL)
        if (resp.status === 200) {
            const data: IBooksResponse = yield resp.json()
            yield put(setNewBooks(data.total, data.books))
            yield put(set404(false))
            yield put(setLoaderStatus(false))

    }
    }
    catch (error) {
        console.log('error');
        window.location.pathname = '/error'
        yield put(set404(true))
    }
}

function* fetchSearchBooks(action: any) {
    const { query, page } = action
    let URL = `https://api.itbook.store/1.0/search/${query}/${page}`
    try {
        const resp: Response = yield fetch(URL)
        const data: IBooksResponse = yield resp.json()
        yield put(setSearchStatus(data.total !=='0'))
        yield put(setSearchBooks(data.total, data.page, data.books))
        yield put(setLoaderStatus(false))
    }
    catch (error) {
        window.location.pathname = '/error'
        yield put(set404(true))
    }
}

function* fetchSelectedBook(action: any) {
    const { isbn } = action
    const URL = `https://api.itbook.store/1.0/books/${isbn}`
    try {
        const resp: Response = yield fetch(URL)
        const data: IBookInfo = yield resp.json()

        if (resp.status === 200) {
            yield put(setSelectedBook(data))
            yield put(setLoaderStatus(false))
        }
    }
    catch (error) {
        console.log('error');
        window.location.pathname = '/error'
        yield put(set404(true))
    }
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

const setFavoriteBook = (favoriteBook:IBookCard) => ({
    type: SET_FAVORITE_BOOK,
    favoriteBook
})

const removeFavoriteBook = (isbn13:string) => ({
    type: REMOVE_FAVORITE_BOOK,
    isbn13
})

const removeAllFavorites = () => ({
    type: REMOVE_ALL_FAVORITES,
})

const setViewedBook = (viewedBook:IBookCard) => ({
    type: SET_VIEWED_BOOK,
    viewedBook
})

const removeViewedBook = (isbn13:string) => ({
    type: REMOVE_VIEWED_BOOK,
    isbn13
})

const removeAllViewed = () => ({
    type: REMOVE_ALL_VIEWED,
})

const setCartBook = (book:IBookCard) => ({
    type: SET_CART_BOOK,
    book
})

const removeCartBook = (isbn13:string) => ({
    type: REMOVE_CART_BOOK,
    isbn13
})

const clearCart = () => ({
    type: CLEAR_CART,
})

const incrementBooksCount = (isbn13:string) => ({
    type: INC_BOOKS_COUNT, 
    isbn13
})

const decrementBooksCount = (isbn13:string) => ({
    type: DEC_BOOKS_COUNT,
    isbn13
})

const setBooksRating = (isbn13:string, rating:number) => ({
    type: SET_BOOKS_RATING,
    isbn13,
    rating
})


export { loadNewBooks, setNewBooks, loadSearchBooks, setSearchBooks, setFavoriteBook, removeFavoriteBook, removeAllFavorites, loadSelectedBook, setSelectedBook, setViewedBook, removeViewedBook, removeAllViewed, setCartBook, removeCartBook, clearCart,incrementBooksCount, decrementBooksCount, watcherBooks, setBooksRating};