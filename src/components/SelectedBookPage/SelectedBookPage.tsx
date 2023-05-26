import { MainHeader,SelectedBook } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from '../../types';
import CartPopup from '../CartPopup/CartPopup';
import MainMenu from '../MainMenu/MainMenu';
import { useEffect } from 'react';
import { setActivePage } from '../../redux/action-creators';
const SelectedBookPage = () => {
    const cartPopupStatus = useSelector((store: IStoreState) => store.ui.cartPopupStatus)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setActivePage('selected'))
    }, []);

    return (<>
        <MainHeader />
        <MainMenu/>
        <SelectedBook/>
        {cartPopupStatus?<CartPopup />:<></>}
    </>

    )
}

export default SelectedBookPage;