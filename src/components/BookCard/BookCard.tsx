import { IBookInfo, IBookCard, IStoreState, IBookInCart } from '../../types';
import { useState, useEffect } from 'react';
import './BookCard.css'
import CartIcon from '../Icons/CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoriteBook, removeFavoriteBook, setViewedBook, removeViewedBook, setCartBook, setActivePage } from '../../redux/action-creators';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '../Icons/FavoriteIcon';
import { AddToCartButton } from '../AddToCartButton';

const BookCard = ({title, subtitle, isbn13, price, image}: IBookCard) => {

    const getFavoriteStatus = () => 
        favoriteBooks.reduce((found: boolean, el: IBookCard) => {
            if (el.isbn13 === isbn13) {
               found = true
            };
            return found
        }, false)
    
        const hasCartCurrentBook = (isbn13:string) => {
            for (let i = 0; i < cartBooks.length; i++)
                if(cartBooks[i].isbn13 === isbn13) return true
            return false
        }
    
    const favoriteBooks = useSelector((state: IStoreState) => state.books.favoritesBooks)
    const cartBooks = useSelector((state: IStoreState) => state.books.cartBooks)
    const activePage = useSelector((store: IStoreState) => store.ui.activePage)

    const [isFavorite, setFavorite] = useState(getFavoriteStatus())
    const [bookCartStatus, setBookCartStatus] = useState(hasCartCurrentBook(isbn13))
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        setFavorite(getFavoriteStatus());
        setBookCartStatus(hasCartCurrentBook(isbn13))
    })

    const handleTitleClick = (e: any, book: IBookCard) => {
        dispatch(setViewedBook(book))
        dispatch(setActivePage('selected'))
        navigate(`/books/${e.target.id.split('-')[1]}`)
    }

    const handleBookmarkClick = (book: IBookCard) => {
        isFavorite?dispatch(removeFavoriteBook(book.isbn13)):dispatch(setFavoriteBook(book))
        setFavorite(!isFavorite);
    }

    const handleRemoveClick = (isbn13: string) => {
        dispatch(removeViewedBook(isbn13))
    }

    return <div key={isbn13}  className="book-card" id={isbn13} >
        <div className="book-card__image" style={{ background: `url(${image}) center/contain` }}></div>
        <h3 className="book-card__title" id={`title-${isbn13}`} title={subtitle} onClick={(e)=>handleTitleClick(e,{title, subtitle, isbn13, price, image})} >{title}</h3>
        <div className="price-container">
            <div className="book-card__price" data-free={price[1] === '0'}>{price[1] !== '0' ? `${price}` : 'FREE'}</div>
        </div>
        <footer className="book-card__footer">
                <AddToCartButton bookCartStatus={bookCartStatus} title={title} subtitle={subtitle} isbn13={isbn13} price={price} count={1} image={image} />
            {activePage !== 'favorites' ?
                <div className="favorite-button" title='Add to favorites' onClick={() => handleBookmarkClick({ title, subtitle, isbn13, price, image })}>
                <FavoriteIcon width='25' height='25' color={isFavorite?'#FF6600':'#d3d3d3'} />
                </div>
                : <div className="remove-card" title='Remove from favorites' onClick={() => handleBookmarkClick({ title, subtitle, isbn13, price, image })} />}
            {activePage === 'viewed'?<div className="remove-card" title='Remove from viewed' onClick={() => handleRemoveClick(isbn13)}/>:<></>}
            
        </footer>

    </div>;
};

export default BookCard

// authors:"Michael Washington"
// desc:"Microsoft Azure Maps is part of Microsoft Azure Cloud Services and provides a wide range of powerful geospatial capabilities and a rich set of REST APIs. It has SDKs for both web and mobile applications. In Azure Maps Using Blazor Succinctly, learn how you can create sophisticated applications with ..."
// error: "0"
// image: "https://itbook.store/img/books/9781642002263.png"
// isbn10: "1642002267"
// isbn13: "9781642002263"
// language: "English"
// pages: "92"
// pdf: {Free eBook: 'https://www.dbooks.org/d/1642002267-1672420828-cec85a3eb298d9bc/'}
// price: "$0.00"
// publisher: "Syncfusion"
// rating: "0"
// subtitle: ""
// title: "Azure Maps Using Blazor Succinctly"
// url: "https://itbook.store/books/9781642002263"
// year: "2022"



