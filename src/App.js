
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './layouts/Register';
import Login from './pages/Login';
import Footer from './layouts/Footer'
import ProtectedRegister from './pages/ProtectedRegister'
import ProductDetail from './pages/ProductDetail';
import SepetDetail from './pages/SepetDetail';

function App() {
  const login = useSelector(state=>state.user.loginCheck)
  
  
  
  return (
    <Router>
    <div >
      <Navi></Navi>
      <Routes>
        <Route exact path="/" element={ <Dashboard></Dashboard>}> </Route> 
        <Route exact path="/product" element={ <Dashboard></Dashboard>}> </Route> 
        
        
          <Route path="/product/:id" element={<ProductDetail></ProductDetail>}></Route>
          <Route element={<ProtectedRegister/>}>
          <Route element={<Register/>} path="/register" exact></Route>
          <Route path="/login" element={ <Login></Login>}> </Route>
          </Route>
          <Route path="/sepetdetayi" element={<SepetDetail></SepetDetail>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
