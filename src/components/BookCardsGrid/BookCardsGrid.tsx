import "./BookCardsGrid.css";
import { IStoreState, IBookCard } from "../../types";
import {
	loadNewBooks,
	loadSearchBooks,
	setLoaderStatus,
	setPaginationItem,
} from "../../redux/action-creators";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import BookCard from "../BookCard/BookCard";
import EmptyListIcon from "../Icons/EmptyListIcon";
import { Pagination } from "../Pagination";
import getSorted from '../../utils/getSorted';

const getMessage = (activePage: string, request: string) => {
	switch (activePage) {
		case "new": {
			return "OOPS... There is no new books releases";
		}
		case "search": {
			if (request === "") return `Let's find something!`;
			else return "OOPS... No results were found";
		}
		case "favorites": {
			return "OOPS... There is no your favorites books";
		}
		case "viewed": {
			return `OOPS... Books you've viewed should be here`;
		}
	}
};

const BookCardsGrid = () => {
	const dispatch = useDispatch();

	const {	newBooks, searchBooks,	searchBooksTotal, favoritesBooks, viewedBooks,	} = useSelector((state: IStoreState) => state.books);
	const { activePage,	searchRequest,	paginationItem,	loaderStatus, searchErrorStatus, sortParam, sortType} = useSelector((state: IStoreState) => state.ui);
	
	const handlePaginationClick = (e: any) => {
		const page = e.target.id.split("-")[1];
		dispatch(setPaginationItem(+page));
		dispatch(loadSearchBooks(searchRequest, page));
	};

	const handleDotsClick = (e: any, startIndex: number) => {
		if (e.target.id === "dots-1") {
			dispatch(setPaginationItem(startIndex - 1));
			dispatch(loadSearchBooks(searchRequest, startIndex - 1));
		} else {
			dispatch(setPaginationItem(startIndex + 3));
			dispatch(loadSearchBooks(searchRequest, startIndex + 3));
		}
	};

	useEffect(() => {
		if (activePage === "new") dispatch(loadNewBooks());

	}, []);

	let booksArr: IBookCard[] = [];
	switch (activePage) {
		case "new":
			{
				if (newBooks) booksArr = [...newBooks];
			}
			break;
		case "search":
			{
				if (searchBooks) booksArr = [...searchBooks];
			}
			break;
		case "favorites":
			{
				if (favoritesBooks) booksArr = [...getSorted([...favoritesBooks],sortParam, sortType )];
			}
			break;
		case "viewed": {
			if (viewedBooks) booksArr = [...getSorted([...viewedBooks],sortParam, sortType)];
		}
	}

	return !loaderStatus && booksArr.length ? (
		<>
			{activePage === "search" ? (
				<Pagination
					activeItem={paginationItem}
					allPostsCount={searchBooksTotal}
					callback={handlePaginationClick}
					dotsCallback={handleDotsClick}
				/>
			) : (
				<></>
			)}

			<div className="cards-container">
				{booksArr.map((book: IBookCard, index: number) => (
					<BookCard
						key={index}
						title={book.title}
						subtitle={book.subtitle}
						isbn13={book.isbn13}
						price={book.price}
						image={book.image}
					/>
				))}
			</div>
		</>
	) : (
			<div className="message-container">
				{loaderStatus ? <div className="custom-loader"></div>
					: <>
						{!searchErrorStatus ? <EmptyListIcon width="25" height="25" color="#fff" /> : <></>}
						{activePage === 'search' ?<h2 className="search-message">{searchErrorStatus && !searchBooks.length?`Let's find something!`:`OOPS... No results were found`}</h2>
						:<h2 className="search-message">{getMessage(activePage, searchRequest)}</h2>}
					
					</>}
		</div>
	);
};

export default BookCardsGrid;
