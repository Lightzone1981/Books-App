import { BookCardsGrid } from "../BookCardsGrid"
import { MainHeader } from "../MainHeader"
import { MainMenu } from "../MainMenu"
import SubMenu from "../SubMenu/SubMenu"
import CartPopup from '../CartPopup/CartPopup';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from '../../types';
import { useEffect } from 'react';
import { setActivePage } from "../../redux/action-creators";

const FavoriteBooksPage = () => {
    const cartPopupStatus = useSelector((store: IStoreState) => store.ui.cartPopupStatus)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setActivePage('favorites'))
    }, []);


    return (
        <div className="page-container">
            <MainHeader />
            <MainMenu />
            <SubMenu/>
            <BookCardsGrid/>
            {cartPopupStatus?<CartPopup />:<></>}
        </div>
        
    )
}
export default FavoriteBooksPage