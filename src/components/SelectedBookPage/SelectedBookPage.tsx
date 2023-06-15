import { LoaderBook, MainHeader,SelectedBook } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from '../../types';
import CartPopup from '../CartPopup/CartPopup';
import MainMenu from '../MainMenu/MainMenu';
import { useEffect } from 'react';
import { loadSelectedBook, setActivePage } from '../../redux/action-creators';
import { useParams } from 'react-router-dom';
const SelectedBookPage = () => {
    const cartPopupStatus = useSelector((store: IStoreState) => store.ui.cartPopupStatus)
    const selectedBook = useSelector((state: IStoreState) => state.books.selectedBook)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setActivePage('selected'))
    }, []);

    const { bookIsbn = '' } = useParams();

    useEffect(() => {
        dispatch(loadSelectedBook(bookIsbn))
        dispatch(setActivePage('selected'))

    }, [])
    const loaderStatus = useSelector(
		(state: IStoreState) => state.ui.loaderStatus
	);

    return (<>
        <div className="page-container">
            <MainHeader />
            <MainMenu/>
            {loaderStatus ? <div className="loader-wrapper"
                style={{
                    width: '100%',
                    height: 'calc(100vh - 20rem)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <div className="custom-loader"></div>
                </div> : <></>}
            {JSON.stringify(selectedBook) !== '{}' && <SelectedBook />}
            {cartPopupStatus?<CartPopup />:<></>}
        </div>
    </>

    )
}

export default SelectedBookPage;