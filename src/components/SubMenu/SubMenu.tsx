import "./SubMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../types";
import SortBar from '../SortBar/SortBar';
import { useState } from 'react';
import {
	removeAllFavorites,
	removeAllViewed,
	setActionModal,
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
		console.log(activePage);
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
				
				{(activePage === "favorites" && favoriteCount>1) ||
				(activePage === "viewed" && viewedCount>1) ? 
				<li><SortBar /></li>
				 : 	<></>}


				{(activePage === "favorites" && favoriteCount) ||
				(activePage === "viewed" && viewedCount) ? 
					<li
						className="sub-menu__item"
						id="clear-all-btn"
						onClick={()=>dispatch(setActionModal({visible:true, message:"Are you sure?",  callback:handleRemoveAllClick }))}>
						Remove All
					</li>
				 : 	<></>}
			</ul>
		</div>
	);
};
export default SubMenu;
