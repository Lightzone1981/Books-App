import { IStoreState, IBookCard, IBookInCart } from '../../types';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { decrementBooksCount, incrementBooksCount, removeCartBook, setActivePage, setCartStatus, setViewedBook } from "../../redux/action-creators";

const CartItem = ({ title, subtitle, isbn13, price, count, image }: IBookInCart) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleTitleClick = (e: any, book: IBookCard) => {
        dispatch(setCartStatus(false))
        dispatch(setViewedBook(book))
        dispatch(setActivePage('selected'))
        navigate(`/books/${e.target.id.split('-')[1]}`)
    }

    const handleRemoveCartBook = (isbn13:string) => {
        dispatch(removeCartBook(isbn13))
    }

    const handleDecrementClick = () => { 
        if (count > 1) {
            dispatch(decrementBooksCount(isbn13))
       } 
    }

    const handleIncrementClick = () => { 
        if (count < 5) {
            dispatch(incrementBooksCount(isbn13))
       } 
    }


	return (
        <li key={`${isbn13}`} className="cart__book">
            <div className="remove-card" title='Remove from cart' onClick={()=>handleRemoveCartBook(isbn13)}/>
            <div className="book-cart__image" style={{ background: `url(${image}) center/contain` }}></div>
            <div className="book-cart__info-container">
                <h3 className="book-cart__title" id={`title-${isbn13}`} onClick={(e)=>handleTitleClick(e,{title, subtitle, isbn13, price, image})} >{title}</h3>
                <p className="book-cart__sub-title">{subtitle}</p>
                {price[1] !== "0" ?
                <div className="counter">
                    <button
                        className="counter__button"
                        id={"decrement"}
                        disabled={count === 1}
                        onClick={handleDecrementClick}>
                        -
                    </button>
                    <div className="counter__number">{count}</div>
                    <button
                        className="counter__button"
                        id={"increment"}
                        disabled={count === 5}
                        onClick={handleIncrementClick}>
                        +
                    </button>
                    </div>
                    : <></>
                }
                
                <div className="book-cart__price" data-free={price[1] === "0"}>
                    {price[1] !== "0" ? `${`$${(Math.round(Number(price.split("$")[1]) * 100) * count) / 100}`}` : "FREE"}
                </div>
                
            
            </div>  
		</li>
	);
};

export default CartItem;
