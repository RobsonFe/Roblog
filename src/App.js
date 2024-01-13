import './App.css';

//React Routes
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

//Context API do React
import { AuthProvider } from './context/AuthContext';

//Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//API do Toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

//Paginas
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';


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
    return <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Carregando...</span>
    </div>
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
            <Route path='/posts/create' element={<CreatePost />} />
            <Route path='/dashboard' element={<Dashboard />} />
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
