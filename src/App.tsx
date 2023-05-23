import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SelectedBookPage, NewBookPage, SearchBookPage, FavoriteBooksPage, ViewedBooksPage, ErrorPage} from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path='/' >

            <Route path='books' >
              <Route path='new' element={<NewBookPage/>}/>
              <Route path=':bookIsbn' element={<SelectedBookPage/>}/>
            </Route>
              
            <Route path='search' element={<SearchBookPage/>}/>
            <Route path='favorites' element={<FavoriteBooksPage/>}/>
            <Route path='viewed' element={<ViewedBooksPage />} />
            <Route path='error' element={<ErrorPage />} />
            
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
