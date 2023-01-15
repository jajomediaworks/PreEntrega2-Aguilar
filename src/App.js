import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path='/' element={ <HomePage />}></Route>
                {/* URL Params = /detalle/:itemid */} 
                <Route path='/detalle/:itemid' element={ <ItemDetailContainer /> }></Route>
                <Route path='/category/:categoryid' element={ <ItemListContainer /> }></Route>
                <Route path='*' element={ <Page404 /> }></Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
