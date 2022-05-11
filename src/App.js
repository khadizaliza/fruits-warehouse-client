import logo from './logo.svg';
import './App.css';
import Home from './Home/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import About from './About/About'
import NotFound from './components/NotFound/NotFound';
import Blog from './Blog/Blog';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Checkout from './components/Checkout/Checkout/Checkout';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import ManageInventory from './components/ManageInventory/ManageInventory';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/item/:itemId' element={<ItemDetail></ItemDetail>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/blog'element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
