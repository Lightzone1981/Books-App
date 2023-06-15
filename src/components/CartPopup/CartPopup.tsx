import "./CartPopup.css";
import { IStoreState, IBookCard, IBooksState, IBookInCart } from '../../types';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import CartItem from "./CartItem";
import { clearCart, setActionModal, setCartStatus } from "../../redux/action-creators";
import EmptyCartIcon from '../Icons/EmptyCartIcon';

const CartPopup = () => {
    const dispatch = useDispatch();
	const cartBooks: IBookInCart[] = useSelector(
		(store: IStoreState) => store.books.cartBooks
    );

    const cartBooksTotal= useSelector(
		(store: IStoreState) => store.books.cartBooksTotal
    );

    const getCartTotalPrice = () => {
        let sum = 0
        for (let i = 0; i < cartBooks.length; i++){
            const book = cartBooks[i]
            sum += Math.round(+book.price.split('$')[1]*book.count*100) / 100
        }

        return Math.round(sum*100) / 100
    }

    

    const handleWrapperClick=(e: any) => {
        if(e.target.id==='cart-wrapper') dispatch(setCartStatus(false))
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'Escape')  dispatch(setCartStatus(false))
    }

	useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return ()=>document.removeEventListener('keydown', handleKeyDown)
    },[])


	return (
        <div className="cart-wrapper" id='cart-wrapper' onClick={handleWrapperClick}>
            <div className="cart">
                {cartBooksTotal ?
                    <>
                        <ul className="cart__book-list">
                            {cartBooks.map((el: IBookInCart, index: number) => (
                                <CartItem
                                    key={index}
                                    title={el.title}
                                    subtitle={el.subtitle}
                                    isbn13={el.isbn13}
                                    price={el.price}
                                    count={el.count}
                                    image={el.image}
                                />
                            ))}
                        </ul>
                    
                    </>
                    : <div className="cart__empty">
                        <EmptyCartIcon width='25' height='25' color={'#000'} />
                        Cart is empty
                    </div>
                    }
                <div className="cart__footer">
                    {cartBooksTotal ?
                        <>
                            <span className="cart__total">Total cost: </span>
                            <span className="cart__total-number">{`$${getCartTotalPrice()}` }</span>
                            <button className="cart__buy-button" onClick={() => {}}>Buy now</button>
                            <button className="cart__clear-button" onClick={() => dispatch(setActionModal({visible:true, message:"Are you want clear cart?",callback:()=>dispatch(clearCart() )}))
                                }> Clear cart</button>
                            
                        </>: <></>}
                    <button className="cart__close-button" onClick={() => dispatch(setCartStatus(false))}> Close</button>

                </div>
            </div>
		</div>
	);
};

export default CartPopup;
