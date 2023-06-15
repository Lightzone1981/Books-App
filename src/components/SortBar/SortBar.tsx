import "./SortBar.css";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../types";
import ArrowIcon from "../Icons/ArrowIcon";
import { setSortParam, setSortType } from "../../redux/action-creators";

const SortBar = () => {
    const dispatch = useDispatch();
    const sortType = useSelector((state: IStoreState) => state.ui.sortType)
    const sortParam = useSelector((state: IStoreState) => state.ui.sortParam)
    
    const handleAscClick = () => {
        if (sortType==='desc') dispatch(setSortType('asc'))
    }
    const handleDescClick = () => {
        if (sortType==='asc') dispatch(setSortType('desc'))
    }

    
	return (
		<div className="sort-bar">
            <select className="sort-bar__select" value={`${sortParam}`} onChange={(e:any)=>dispatch(setSortParam(e.target.value))}>
                <option >
                    Sort by Title
                </option>
                <option >
                    Sort by Price
                </option>
            </select>
            <div className="sort-bar__button" data-active={sortType==='asc'} onClick={handleAscClick}>
                <ArrowIcon width='18' height='18' color='#fff' />
            </div>
            <div className="sort-bar__button" data-active={sortType==='desc'} onClick={handleDescClick}>
                <ArrowIcon width='18' height='18' color='#fff'/>
            </div>

		</div>
	);
};

export default SortBar;