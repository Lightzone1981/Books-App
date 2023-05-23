import "./CartButton.css";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../types";
import CartIcon from "../Icons/CartIcon";
import { Link } from "react-router-dom";

const CartButton = () => {
	const cartBooksCount = useSelector(
		(store: IStoreState) => store.books.cartBooksTotal
	);

	return (
		<Link to={"/viewed"} >
			<div className="cart-button" title="Cart">
				<CartIcon width="22" height="22" color="#FFF" />
				{cartBooksCount?<span className="cart-count">{cartBooksCount}</span>:<></>}
			</div>
		</Link>
	);
};
export default CartButton;
