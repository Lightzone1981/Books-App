import "./CartButton.css";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../types";
import CartIcon from "../Icons/CartIcon";
import { Link } from "react-router-dom";
import { setCartStatus } from "../../redux/action-creators";

const CartButton = () => {
	const dispatch = useDispatch()
	const cartBooksCount = useSelector(
		(store: IStoreState) => store.books.cartBooksTotal
	);

	return (
			<div className="cart-button" title="Cart" onClick={()=>dispatch(setCartStatus(true))}>
				<CartIcon width="22" height="22" color="#FFF" />
				{cartBooksCount?<span className="cart-count">{cartBooksCount}</span>:<></>}
			</div>
	);
};
export default CartButton;
