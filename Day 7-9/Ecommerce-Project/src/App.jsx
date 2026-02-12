import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { CheckoutPage } from './Pages/CheckoutPage';
import { Orders } from './Pages/Orders';
import { Tracking } from './Pages/Tracking';
import './App.css'
function App() {
  return (
  <Routes>
     <Route index element={<HomePage />} />
    <Route path="checkout" element={<CheckoutPage />} />
    <Route path="orders" element={<Orders />} />
    <Route path="tracking" element={<Tracking />} />
     </Routes>
  );
}
export default App
