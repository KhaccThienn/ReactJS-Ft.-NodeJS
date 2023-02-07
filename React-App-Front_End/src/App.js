import { Routes, Route } from 'react-router-dom';
import MasterLayout from './components/layouts/MasterLayout';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Account/Login/Login';
import Register from './components/pages/Account/Register/Register';
import Category from './components/pages/Category/Category';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MasterLayout children={<Home />} />} />
        <Route path='/about' element={<MasterLayout children={<About />} />} />
        <Route path='/category' element={<MasterLayout children={<Category />} />} />

        <Route path='/login' element={<MasterLayout children={<Login />} />} />
        <Route path='/register' element={<MasterLayout children={<Register />} />} />

      </Routes>
    </>
  );
}

export default App;
