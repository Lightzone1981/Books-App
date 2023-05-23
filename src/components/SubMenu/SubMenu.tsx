import "./SubMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../types";
import {
	removeAllFavorites,
	removeAllViewed,
} from "../../redux/action-creators";

const SubMenu = () => {
	const dispatch = useDispatch();
	const activePage = useSelector((store: IStoreState) => store.ui.activePage);
	const favoriteCount = useSelector(
		(store: IStoreState) => store.books.favoritesBooksTotal
	);
	const viewedCount = useSelector(
		(store: IStoreState) => store.books.viewedBooksTotal
	);

	const handleRemoveAllClick = () => {
		switch (activePage) {
			case "favorites":
				{
					dispatch(removeAllFavorites());
				}
				break;
			case "viewed": {
				dispatch(removeAllViewed());
			}
		}
	};

	return (
		<div className="sub-menu">
			<ul className="sub-menu__list">
				{(activePage === "favorites" && favoriteCount) ||
				(activePage === "viewed" && viewedCount) ? (
					<li
						className="sub-menu__item"
						id="clear-all-btn"
						onClick={handleRemoveAllClick}>
						Remove All
					</li>
				) : (
					<></>
				)}
			</ul>
		</div>
	);
};
export default SubMenu;
