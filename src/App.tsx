import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { SelectedBookPage, NewBookPage, SearchBookPage, FavoriteBooksPage, ViewedBooksPage, ErrorPage} from './components';
import { IStoreState } from './types';
import StartPage from './components/StartPage/StartPage';
import { useSelector } from 'react-redux';
import ModalProfile from './components/ModalProfile/ModalProfile';
import ModalActionConfirmation from './components/ModalActionConfirmation/ModalActionConfirmation';

function App() {
  const authorizedUserName = useSelector((state: IStoreState) => state.user.authorizedUser);
  const profileModalVisible = useSelector((state: IStoreState) => state.ui.profileModalVisibleStatus);
	const actionModal = useSelector((store: IStoreState) => store.ui.actionModal.visible);
  return (
    <BrowserRouter>
      <div className="wrapper">
      {profileModalVisible?<ModalProfile/>:<></>}
			{actionModal?<ModalActionConfirmation />:<></>}

        <Routes>
          <Route path='/' >
          <Route index element={authorizedUserName.username? <Navigate to='/books/new'/>:<StartPage />} />
            <Route path='books' >
              <Route path='new' element={ authorizedUserName.username? <NewBookPage/> :<Navigate to='/'/>}/>
              <Route path=':bookIsbn' element={authorizedUserName.username? <SelectedBookPage/> :<Navigate to='/'/>}/>
            </Route>
              
            <Route path='search' element={authorizedUserName.username? <SearchBookPage/> :<Navigate to='/'/>}/>
            <Route path='favorites' element={authorizedUserName.username? <FavoriteBooksPage/> :<Navigate to='/'/>}/>
            <Route path='viewed' element={authorizedUserName.username? <ViewedBooksPage /> :<Navigate to='/'/>} />
            <Route path='error' element={<ErrorPage />} />
            
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
