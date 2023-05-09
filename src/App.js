import ItemsList from './Components/ItemsList';
import itemsList from './items/items';
import './styles.css';
import Cart from './Components/Cart';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AboutUs from './Components/AboutUs';
import Contacts from './Components/Contacts';
import NotFound from './Components/NotFound';
import Account from './Components/Account';
import FullItem from './Components/FullItem';

export default function App() {
  const [onCart, setOnCart] = useState([]);
  const onCartHandler = (item) => {
    if (onCart.find((el) => el === item)) {
      return;
    }
    setOnCart([...onCart, item]);
  };
  console.log(onCart);
  const [cartOpen, setCartOpen] = useState(false);
  const cartOpenHandler = () => {
    setCartOpen(!cartOpen);
  };
  const deleteFromCartHandler = (index) => {
    setOnCart(onCart.filter((el) => el.id !== index));
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<MainLayout cartOpen={cartOpenHandler} onCart={onCart} />}
          >
            <Route
              index
              element={
                <ItemsList items={itemsList} addOnCart={onCartHandler} />
              }
            />
            <Route path='about' element={<AboutUs />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='account' element={<Account />} />
            <Route path='fullItem' element={<FullItem />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        {cartOpen && (
          <Cart
            cartOpen={cartOpenHandler}
            items={itemsList}
            onCartItems={onCart}
            deleteFromCart={deleteFromCartHandler}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
