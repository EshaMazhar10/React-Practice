import { Routes, Route } from 'react-router-dom';
import  axios  from 'axios';
import { useState, useEffect } from 'react';
import { HomePage } from './Pages/home/HomePage';
import { CheckoutPage } from './Pages/Checkout/CheckoutPage';
import { OrderPage } from './Pages/Orders/OrderPage';
import { Tracking } from './Pages/Tracking';
import './App.css'
function App() {
   const [cart, setCart] = useState([]);
       const loadCart= async() => {
      const response = await axios.get('/api/cart-items?expand=product')
        setCart(response.data);
       };
   useEffect(()=>{
    loadCart();
    
   }, []);
  return (
  <Routes>
     <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
    <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
    <Route path="orders" element={<OrderPage cart={cart} />} />
    <Route path="tracking" element={<Tracking />} />
     </Routes>
  );
}
export default App
