import { SET_NEW_BOOKS, SET_SEARCH_BOOKS, SET_SELECTED_BOOK } from "../action-types/index";
import { IBookInfo } from "../../types";

const initialState = {
	newBooks: [] as IBookInfo[],
	newBooksTotal: '0',
	searchBooks: [] as IBookInfo[],
	searchBooksTotal: '0',
	searchBooksPage: '0',
	selectedBook: {} as IBookInfo,
};

const getInitialState = () => {
	const localState = localStorage.BooksLocalState
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
			
		
			
		default: {
			return state;
		}
	}
};

export { booksReducer };
