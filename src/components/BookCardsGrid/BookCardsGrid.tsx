import "./BookCardsGrid.css";
import { IStoreState, IBookInfo } from "../../types";
import {
	loadNewBooks,
	loadSearchBooks,
	loadSelectedBook,
} from "../../redux/action-creators";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import BookCard from "../BookCard/BookCard";

const BookCardsGrid = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadNewBooks());
		dispatch(loadSearchBooks("Mongo"));
		dispatch(loadSelectedBook("9781642002263"));
	}, []);

	const newBooks = useSelector((state: IStoreState) => state.books.newBooks);
	const searchBooks = useSelector(
		(state: IStoreState) => state.books.searchBooks
	);
	const selectedBook = useSelector(
		(state: IStoreState) => state.books.selectedBook
	);
	console.log(newBooks);
	console.log(searchBooks);
	console.log(selectedBook);
	
	return (
		<div className="cards-container">
			{newBooks.map((book:IBookInfo) => 
				<BookCard
				title={book.title}
				subtitle={book.subtitle}
				isbn10={book.isbn10}
				isbn13={book.isbn13}
				price={book.price}
				image={book.image}
			/>)}
		</div>
	)
};

export default BookCardsGrid;
