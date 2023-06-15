import './ErrorPage.css'
import { MainHeader } from "../MainHeader"
import { MainMenu } from "../MainMenu"
import { IStoreState } from '../../types';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadNewBooks } from '../../redux/action-creators';
import CartPopup from '../CartPopup/CartPopup';

const ErrorPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const activePage = useSelector((state: IStoreState) => state.ui.activePage)
    const cartPopupStatus = useSelector((store:IStoreState)=>store.ui.cartPopupStatus)
    const status404 = useSelector((state: IStoreState) => state.ui.status404)
        let path = ''
    switch (activePage) {
        case 'new': path = '/books/new'
            break
        case 'favorites': path = '/favorites'
            break
        case 'search': path = '/search' 
            break
        case 'viewed': path = '/viewed'
            break
        case 'selected': path = '/books/new'
            break
    }
    const tryRedirect = setInterval(() => {
        console.log(path);
        dispatch(loadNewBooks())
        if (!status404) window.location.pathname= `${path}`
    }, 2000)
    
    useEffect(() => { 
        return clearInterval(tryRedirect)
    },)
    
    return (
        <div className="page-container">
            <MainHeader />
            <MainMenu />
            {cartPopupStatus?<CartPopup />:<></>}
            
            <div className="error-container">
                <span>404</span>    
                <span>ERR_INTERNET_DISCONNECTED</span>
            </div>
        </div>
    )
}

export default ErrorPage