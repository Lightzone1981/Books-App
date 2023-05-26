import { SET_NEW_BOOKS, SET_SEARCH_BOOKS, SET_SELECTED_BOOK, SET_FAVORITE_BOOK, REMOVE_FAVORITE_BOOK, REMOVE_ALL_FAVORITES, SET_VIEWED_BOOK, REMOVE_VIEWED_BOOK, REMOVE_ALL_VIEWED, SET_CART_BOOK, REMOVE_CART_BOOK, CLEAR_CART, INC_BOOKS_COUNT, DEC_BOOKS_COUNT} from "../action-types/index";
import { IBookCard, IBookInfo, IBookInCart } from '../../types';

const initialState = {
	newBooks: [] as IBookInfo[],
	searchBooks: [] as IBookInfo[],
	searchBooksPage: '0',
	favoritesBooks: [] as IBookCard[],
	favoritesBooksTotal: 0,
	viewedBooks: [] as IBookCard[],
	viewedBooksTotal: 0,
	cartBooks: [] as IBookInCart[],
	cartBooksTotal: 0,
	selectedBook: {} as IBookInfo,
};

const getInitialState = () => {
	const localState = localStorage.localBooksState
	if (localState) {
		const parse = JSON.parse(localState)
		const { books } = parse
		return books
	}
	return initialState
};

const booksReducer = (state = getInitialState(), action: any) => {
	switch (action.type) {

		case SET_NEW_BOOKS: {
			const { data } = action;
			return {
				...state,
				newBooks: data.books,
				newBooksTotal: data.total,
			};
		}
			
		case SET_SEARCH_BOOKS: {
			const { data } = action;
			return {
				...state,
				searchBooks: data.books,
				searchBooksTotal:data.total,
				searchBooksPage: data.page,
			};
		}

		case SET_SELECTED_BOOK: {
			const { selectedBook } = action;
			return {
				...state,
				selectedBook,
			};
		}
			
		case SET_FAVORITE_BOOK: {
			const { favoriteBook } = action;
			let found = false
			state.favoritesBooks.forEach((el: IBookCard) => {
				if (el.isbn13 === favoriteBook.isbn13) {
					found = true
					return
				} 
			})
			if (!found) {
				state.favoritesBooks.push(favoriteBook)
				state.favoritesBooksTotal +=1
			}
			return {
				...state
			};
		}
			
		case REMOVE_FAVORITE_BOOK: {
			const { isbn13 } = action;
			const newArr = (state.favoritesBooks.filter((el: IBookCard) => el.isbn13 !== isbn13));
			const newArrTotal = newArr.length
			return {
				...state,
				favoritesBooks: newArr,
				favoritesBooksTotal: newArrTotal
			};
		}
		
		case REMOVE_ALL_FAVORITES: {
			return {
				...state,
				favoritesBooks: [],
				favoritesBooksTotal: 0
			};
		}
			
		
		case SET_VIEWED_BOOK: {
			const { viewedBook } = action;
			let found = false
			state.viewedBooks.forEach((el: IBookCard) => {
				if (el.isbn13 === viewedBook.isbn13) {
					found = true
					return
				} 
			})
			if (!found) {
				state.viewedBooks.push(viewedBook)
				state.viewedBooksTotal +=1
			}
			return {
				...state
			};
		}
		
		case REMOVE_VIEWED_BOOK: {
			const { isbn13 } = action;
			const newArr = (state.viewedBooks.filter((el: IBookCard) => el.isbn13 !== isbn13));
			const newArrTotal = newArr.length
			return {
				...state,
				viewedBooks: newArr,
				viewedBooksTotal: newArrTotal
			}
		}
			
		case REMOVE_ALL_VIEWED: {
			return {
				...state,
				viewedBooks: [],
				viewedBooksTotal: 0
			};
		}
			
		case SET_CART_BOOK: {
			const { book } = action;
			let found = false
			state.cartBooks.forEach((el: IBookCard) => {
				if (el.isbn13 === book.isbn13) {
					found = true
					return
				} 
			})
			if (!found) {
				state.cartBooks.push(book)
				state.cartBooksTotal +=1
			}
			return {
				...state
			};
		}
			
		case REMOVE_CART_BOOK: {
			const { isbn13 } = action;
			const newArr = (state.cartBooks.filter((el: IBookCard) => el.isbn13 !== isbn13));
			const newArrTotal = newArr.length
			return {
				...state,
				cartBooks: newArr,
				cartBooksTotal: newArrTotal
			};
		}
		
		case CLEAR_CART: {
			return {
				...state,
				cartBooks: [],
				cartBooksTotal: 0
			};
		}
			
		case INC_BOOKS_COUNT: {
			const { isbn13 } = action
			const newArr = (state.cartBooks.map((el: IBookInCart) => {
				if (el.isbn13 === isbn13)
					el.count += 1
				return el
			}));
			
			return {
				...state,
				cartBooks: newArr,
			};
		}

		case DEC_BOOKS_COUNT: {
			const { isbn13 } = action
			const newArr = (state.cartBooks.map((el: IBookInCart) => {
				if (el.isbn13 === isbn13)
					el.count -= 1
				return el
			}));
			
			return {
				...state,
				cartBooks: newArr,
			};
		}
		
		
		default: {
			return state;
		}
	}
};

export { booksReducer };
