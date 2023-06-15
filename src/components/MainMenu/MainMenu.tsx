import './MainMenu.css'
import NewIcon from '../Icons/NewIcon';
import SearchIcon from '../Icons/SearchIcon';
import Input from '../Input/Input';
import { useState, useEffect } from 'react';
import FavoriteIcon from '../Icons/FavoriteIcon';
import ViewedIcon from '../Icons/ViewedIcon';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from '../../types';
import { loadSearchBooks, setActivePage, setSearchRequest, setLoaderStatus, setSearchBooks, setPaginationItem, setSearchStatus } from '../../redux/action-creators';
import { useNavigate } from 'react-router-dom';
import { debounce } from "ts-debounce";


const MainMenu = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const activePage = useSelector((store: IStoreState) => store.ui.activePage)
    const { searchRequest, paginationItem} = useSelector((store: IStoreState) => store.ui)
    const favoriteCount = useSelector((store: IStoreState) => store.books.favoritesBooksTotal)
    const viewedCount = useSelector((store: IStoreState) => store.books.viewedBooksTotal)
    const status404 = useSelector((state: IStoreState) => state.ui.status404)

    
    const [request, setRequest] = useState(searchRequest)
    
    const loadSearch = () => {
        dispatch(loadSearchBooks(request, paginationItem))        
    }

    const debouncedLoadSearch = debounce(loadSearch, 1500);
    
    const handleRequestChange = (e: any) => {
        setRequest(e.target.value)
        dispatch(setSearchRequest(e.target.value))
        if (e.target.value === '') { 
          dispatch(setSearchBooks('', '', []))  
          dispatch(setSearchStatus(true))
          dispatch(setPaginationItem(1));
        } 
    }
    

    const handleClearRequest = () => {
        setRequest('')
		dispatch(setSearchBooks('','',[]))
		dispatch(setSearchRequest(''))
        dispatch(setSearchStatus(true))
        dispatch(setPaginationItem(1));
    }

    const handleKeyDown = (e:any) => {
        if (e.key === 'Enter' && searchRequest.length) {
            dispatch(loadSearchBooks(request, 1))
            dispatch (setLoaderStatus(true))
            dispatch(setPaginationItem(1));
        }
    }
    
    
    const handleMenuItemClick = (newActivePage:string) => {
        switch (newActivePage) {
            case 'new': {
                if (activePage !== 'new') {
                    dispatch(setLoaderStatus(true))
                    dispatch(setActivePage('new'))
                    if (!status404) setTimeout(() => navigate('/books/new'), 500)
                }
            }
                break
            case 'search': {
                if (activePage !== 'search') {
                    dispatch(setLoaderStatus(true))
                    dispatch(setActivePage('search'))
                    if (!status404) setTimeout(()=>navigate('/search'),500)
                }
            }
                break
            case 'favorites': {
                if (activePage !== 'favorites') {
                    dispatch(setLoaderStatus(true))
                    dispatch(setActivePage('favorites'))
                    if (!status404) setTimeout(()=>navigate('/favorites'),500)
                }
            }
                break
            case 'viewed': {
                if (activePage !== 'viewed') {
                    dispatch(setLoaderStatus(true))
                    dispatch(setActivePage('viewed'))
                    if (!status404) setTimeout(()=>navigate('/viewed'),500)
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
                <li className="main-menu__item" id='search-menu-item' title='Books search' data-active={activePage === 'search'} onClick={()=>handleMenuItemClick('search')} onKeyDown={handleKeyDown}>
                    <div className="main-menu__stripe main-menu__stripe--search" id='search-stripe'></div>
                    <SearchIcon width='18' height='18' color='#fff' />
                    <Input type='text' value={request} id='search-input' isEnable={true} name='search-input' placeholder='Search...' callback={handleRequestChange} />
                    {request.length && activePage === 'search' ? <>
                    <div className="clear-request" title='Clear request' onClick={handleClearRequest}></div>
                    </>
                        : <></>}
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