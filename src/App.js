import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Cart from "./Pages/Cart"
import Navbar from "./Components/Navbar";
import CheckOut from './Pages/CheckOut';
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import Login from "./Pages/Login";

function App() {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />

      <Routes>
  
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Home from './Pages/Home';
// import Shop from './Pages/Shop';
// import About from './Pages/About';
// import Contacts from './Pages/Contacts';
// import Products from './Pages/Products';
// import Cart from './Pages/Cart';
// import PlaceOrder from './Pages/PlaceOrder';
// import Order from './Pages/Order';
// import Login from './Pages/Login';

// const App = () => (
//   <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
//     <Navbar />
//     <Routes>
//       {[
//         { path: '/', element: <Home /> },
//         { path: '/shop', element: <Shop /> },
//         { path: '/about', element: <About /> },
//         { path: '/contacts', element: <Contacts /> },
//         { path: '/products', element: <Products /> },
//         { path: '/cart', element: <Cart /> },
//         { path: '/login', element: <Login /> },
//         { path: '/place-order', element: <PlaceOrder /> },
//         { path: '/order', element: <Order /> },
//       ].map(({ path, element }) => (
//         <Route key={path} path={path} element={element} />
//       ))}
//     </Routes>
//   </div>
// );

// export default App