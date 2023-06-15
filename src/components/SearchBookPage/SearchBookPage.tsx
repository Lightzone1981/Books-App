import { BookCardsGrid } from "../BookCardsGrid"
import { MainHeader } from "../MainHeader"
import { MainMenu } from "../MainMenu"
import CartPopup from '../CartPopup/CartPopup';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from '../../types';
import { useEffect } from 'react';
import { setActivePage, setLoaderStatus } from "../../redux/action-creators";




const SearchBookPage = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setLoaderStatus(false))

        // dispatch(setActivePage('search'))
    }, []);
    
    const cartPopupStatus = useSelector((store:IStoreState)=>store.ui.cartPopupStatus)
    return (
        <div className="page-container">

            <MainHeader />
            <MainMenu/>
            <BookCardsGrid/>
            {cartPopupStatus?<CartPopup />:<></>}
        </div>

        
    )
}
export default SearchBookPage