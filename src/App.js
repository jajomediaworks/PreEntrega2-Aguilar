import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path='/' element={ <ItemListContainer title="Productos II" />}></Route>
                <Route path='/detalle' element={ <ItemDetailContainer /> }></Route>
                <Route path='*' element={ <h2>Pagina no encontrada</h2> }></Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
