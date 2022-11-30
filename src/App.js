import './App.css';
import HeadNav from './Components/HeadNav';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';

function App() {
  return (
    <>
      <HeadNav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
