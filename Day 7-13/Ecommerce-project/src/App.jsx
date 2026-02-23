import axios from 'axios';
import { HomePage } from './Pages/Home/HomePage';
import { Routes, Route } from 'react-router-dom';
import { CheckoutPage } from './Pages/Checkout/CheckoutPage';
import { OrderPage } from './Pages/Orders/OrderPage';
import { TrackingPage } from './Pages/TrackingPage';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
 const loadCart = async() => {

      const response = await axios.get('/api/cart-items?expand=product')

      setCart(response.data);

    };

  useEffect(() => {
   
    loadCart();

  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart}  loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="orders" element={<OrderPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>

  );
}

export default App
