import "./main.css";
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';

function App() {
  const [token, setToken] = useState('');

  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
 );
}

export default App;
