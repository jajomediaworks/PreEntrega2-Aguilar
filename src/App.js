
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';
import Button from './components/Button/Button';
import { CartProvider } from './storage/cartContext';


function App() {
  function logOutSession(params) {
      console.log("LogOut");
  }
  function logInSession(username) {
    alert(`bienvenido usuario ${username}`)
  }
  return (
    <>
          <CartProvider>
              <BrowserRouter>
              {/* // Los eventos no funcionan sobre jsx  click es una props */}
              <Button click={ ()=> console.log("click") }>Test</Button>
              <Button click={ ()=> alert("error") }>error</Button>
              <NavBar onLogin={logInSession} onLogout={logOutSession} />
                  <Routes>
                      <Route path='/' element={ <HomePage />}></Route>
                      {/* URL Params = /detalle/:itemid */} 
                      <Route path='/detalle/:itemid' element={ <ItemDetailContainer /> }></Route>
                      <Route path='/category/:categoryid' element={ <ItemListContainer /> }></Route>
                      <Route path='*' element={ <Page404 /> }></Route>
                  </Routes>
              </BrowserRouter>
          </CartProvider>    
      </>
  );
}

export default App;
