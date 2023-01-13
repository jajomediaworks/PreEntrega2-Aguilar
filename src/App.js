import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path='/' element={ <HomePage />}></Route>
                {/* URL Params */}
                <Route path='/detalle/:itemid' element={ <ItemDetailContainer /> }></Route>
                <Route path='*' element={ <h2>Pagina no encontrada</h2> }></Route>
            </Routes>
        </BrowserRouter>mpo
    </>
  );
}

export default App;
