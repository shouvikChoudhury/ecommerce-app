import HeadNav from './Components/HeadNav';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Prod from './Components/Prod';

function App() {
  return (
    <div style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE=")' }}>
      <HeadNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route exact path='/home/prod' element={<Prod />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
