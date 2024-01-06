import {Routes, Route} from 'react-router-dom';
import './App.css';
// import Login from "../src/pages/Login";
// import Signup from "../src/pages/Signup";
import Account from "../src/pages/Account";
import Home from '../src/pages/Home';
import Navbar from './components/navbar';

import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/footer/footer';
import Club from './pages/Club';
import Country from './pages/country';
import ContactUs from './pages/cont';
const App=()=>{
  const isUserSignedIn=!!localStorage.getItem('token')
  return (
    <>
    
    <Navbar />
    <div className="app">
      <Routes>
    
      <Route path='/' element={<Home />} />
      <Route path="/club" element={<Club />} />
      <Route path="/country" element={<Country />} />
          <Route path="/contact" element={<ContactUs />} />
      <Route path='/SignUp' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart/>} />
      {isUserSignedIn && <Route path='/account' element={<Account />} />}
      </Routes>
    </div>
    <Footer />
    
    
    
    
    </>
    
  )
}

export default App;
