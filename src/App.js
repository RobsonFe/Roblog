import './App.css';

//React Routes
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Context API do React
import { AuthProvider } from './context/AuthContext';

//Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//Paginas
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { ToastContainer } from 'react-toastify';

//API do Toastify
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined; 

  useEffect(()=>{
    onAuthStateChanged(auth, (user) =>{
      setUser(user)
    })
  }, [auth]);

  if(loadingUser){
    return <div className="spinner-border justify-content-center text-secondary" role="status">
    <span className="visually-hidden">Carregando...</span>
  </div>
  }

  return (
    <div className="App">
    <AuthProvider value={ user }>
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
    </AuthProvider>  
    </div>
  );
}

export default App;
