import './MainMenu.css'
import NewIcon from '../Icons/NewIcon';
import SearchIcon from '../Icons/SearchIcon';
import Input from '../Input/Input';
import { useState } from 'react';
import FavoriteIcon from '../Icons/FavoriteIcon';
import ViewedIcon from '../Icons/ViewedIcon';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from '../../types';
import { loadSearchBooks, setActivePage, setSearchRequest } from '../../redux/action-creators';
import { useNavigate } from 'react-router-dom';


const MainMenu = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const activePage = useSelector((store: IStoreState) => store.ui.activePage)
    const searchRequest = useSelector((store: IStoreState) => store.ui.searchRequest)
    const favoriteCount = useSelector((store: IStoreState) => store.books.favoritesBooksTotal)
    const viewedCount = useSelector((store: IStoreState) => store.books.viewedBooksTotal)
    
    const [request, setRequest] = useState(searchRequest)

    const handleRequestChange = (e: any) => {
        setRequest(e.target.value)
		dispatch(loadSearchBooks(e.target.value))
		dispatch(setSearchRequest(e.target.value))
    }
    
    const handleClearRequest = () => {
        setRequest('')
		dispatch(loadSearchBooks(''))
		dispatch(setSearchRequest(''))
	}
    
    const handleMenuItemClick = (newActivePage:string) => {
        switch (newActivePage) {
            case 'new': {
                if (activePage !== 'new') {
                    dispatch(setActivePage('new'))
                    setTimeout(()=>navigate('/books/new'),500)
                }
            }
                break
            case 'search': {
                if (activePage !== 'search') {
                    dispatch(setActivePage('search'))
                    setTimeout(()=>navigate('/search'),500)
                }
            }
                break
            case 'favorites': {
                if (activePage !== 'favorites') {
                    dispatch(setActivePage('favorites'))
                    setTimeout(()=>navigate('/favorites'),500)
                }
            }
                break
            case 'viewed': {
                if (activePage !== 'viewed') {
                    dispatch(setActivePage('viewed'))
                    setTimeout(()=>navigate('/viewed'),500)
                }
            }
        }
    }
    

    return (
        <div className="main-menu">
            <ul className="main-menu__list">
                <li className="main-menu__item" id='new-menu-item' title='New books releases' data-active={activePage==='new'} onClick={()=>handleMenuItemClick('new')}>
                    <div className="main-menu__stripe main-menu__stripe--new" id='new-stripe'></div>
                    <NewIcon width='22' height='22' color='#fff'/>
                    <h2 className="main-menu__item-title">New Releases</h2>
                </li>
                <li className="main-menu__item" id='search-menu-item' title='Books search' data-active={activePage === 'search'} onClick={()=>handleMenuItemClick('search')}>
                    <div className="main-menu__stripe main-menu__stripe--search" id='search-stripe'></div>
                    <SearchIcon width='18' height='18' color='#fff' />
                    <Input type='text' value={request} id='search-input' name='search-input' placeholder='Search...' callback={handleRequestChange} />
                    {request.length ? <div className="clear-request" title='Clear request' onClick={handleClearRequest}></div>:<></>  }
                </li>
                <li className="main-menu__item" id='favorite-menu-item' title='Favorites books' data-active={activePage==='favorites'} onClick={()=>handleMenuItemClick('favorites')}>
                    <div className="main-menu__stripe main-menu__stripe--favorite" id='favorite-stripe'></div>
                    <FavoriteIcon width='22' height='22' color='#fff'/>
                    <h2 className="main-menu__item-title">My Favorites</h2>
                    {favoriteCount && activePage !== 'favorites' ? <span className="favorite-count" >{favoriteCount}</span>:<></>}
                </li>
                <li className="main-menu__item" id='viewed-menu-item' title='Recently viewed books' data-active={activePage==='viewed'} onClick={()=>handleMenuItemClick('viewed')}>
                    <div className="main-menu__stripe main-menu__stripe--viewed" id='viewed-stripe' ></div>
                    <ViewedIcon width='24' height='24' color='#fff'/>
                    <h2 className="main-menu__item-title">Recently Viewed</h2>
                    {viewedCount && activePage !== 'viewed' ? <span className="viewed-count" >{viewedCount}</span>:<></>}

                </li>
            </ul>
        </div>
    )
}
export default MainMenu