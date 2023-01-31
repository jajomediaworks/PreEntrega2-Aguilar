
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';
import { CartProvider } from './storage/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
// import { exportArray } from './services/firebase';


function App() {
  function logOutSession() {
      console.log("LogOut");
  }
  function logInSession(username) {
    alert(`bienvenido usuario ${username}`)
  }
  return (
    <>
    {/* <button onClick={exportArray}>Exportar firebase</button> */}
          <CartProvider>
              <BrowserRouter>
              <NavBar onLogin={logInSession} onLogout={logOutSession} />
                  <Routes>
                      <Route path='/' element={ <HomePage />}></Route>
                      {/* URL Params = /detalle/:itemid */} 
                      <Route path='/detalle/:itemid' element={ <ItemDetailContainer /> }></Route>
                      <Route path='/cart' element={ <CartContainer /> }></Route>
                      <Route path='/category/:categoryid' element={ <ItemListContainer /> }></Route>
                       <Route path='*' element={ <Page404 /> }></Route>
                      {/* <Route path='/thank-you/:orderid' element={ <h1>GRacias por tu compra</h1>}></Route> */}
                      <Route path="/thank-you" element={ <h1>GRacias por tu compra</h1>}></Route>
                  </Routes>
              </BrowserRouter>
          </CartProvider>    
      </>
  );
}

export default App;
