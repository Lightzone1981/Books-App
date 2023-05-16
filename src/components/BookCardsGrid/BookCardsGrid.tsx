import "./BookCardsGrid.css";
import { IStoreState } from "../../types";
import { loadNewBooks, loadSearchBooks, loadSelectedBook } from "../../redux/action-creators";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux/es/exports";

const BookCardsGrid = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadNewBooks())
		dispatch(loadSearchBooks('Mongo'))
		dispatch(loadSelectedBook('9781642002263'))

		
	}, []);
	
		const newBooks = useSelector((state: IStoreState) => state.books.newBooks);
		const searchBooks = useSelector((state: IStoreState) => state.books.searchBooks);
		const selectedBook = useSelector((state: IStoreState) => state.books.selectedBook);
		console.log(newBooks);
		console.log(searchBooks);
		console.log(selectedBook);

	return <div className="cards-container">Hi</div>;
};

export default BookCardsGrid;
