import { IBookInfo, IBookCard } from '../../types';
import { useState } from 'react';
import './BookCard.css'

const BookCard = ({title, subtitle, isbn10, isbn13,  price, image}: IBookCard) => {

    const [count, setCount] = useState(1)

    return <div className="book-card" id={isbn10}>
        <div className="book-card__image" style={{ background: `url(${image}) center/contain` }}></div>
        <h3 className="book-card__title" id={`title-${isbn10}`} title={subtitle}>{title}</h3>
        <div className="price-container">
            <div className="book-card__price">{`$${Math.round(Number(price.split('$')[1])*100)*count/100}`}</div>
            <div className="counter">
                <button className="counter__button" id={'decrement'} disabled={ count ===1 } onClick={()=> count>1? setCount(count - 1):()=>{}}>-</button>
                <div className="counter__number">{count}</div>
                <button className="counter__button" id={'increment'} disabled={ count ===5 } onClick={()=> count<5? setCount(count + 1):()=>{}}>+</button>
            </div>
        </div>
        <button className="add-to-cart">Add to cart</button>

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
