import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import { ShopContextProvider } from './context/ShopContext';



function App() {
  return (
    <div className="App">
      <ShopContextProvider>

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Shop}/>
          <Route path='/cart' Component={Cart} />

        </Routes>
      </Router>
      </ShopContextProvider>
     
    </div>
  );
}

export default App;
