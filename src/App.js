import { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router';
import { UserContext } from "./contexts/user.context";
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Contact from './routes/contact/contact.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from "./routes/checkout/checkout.component";


const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route
          path="auth"
          element={
            currentUser ? <Navigate to="/" replace /> : <Authentication />
          }
        />
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
