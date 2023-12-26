import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
