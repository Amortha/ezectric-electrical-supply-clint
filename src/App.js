import logo from './logo.svg';
import './App.css';
import Nevbar from './Components/Shared/Nevbar';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import AboutUs from './Components/Aboutus/AboutUs';
import Contact from './Components/Page/Page';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Topbar from './Components/Shared/Topbar';
import Footer from './Components/Shared/Footer';
import Shops from './Components/Shop/Shops';
import Tem from './Components/Page/Tem/Tem';

function App() {
  return (
    <div className="">
      <Topbar></Topbar>
      <Nevbar></Nevbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='shops' element={<Shops />} />
        <Route path='contact' element={<Contact />} />
        <Route path='blog' element={<Blog />} />
        <Route path='tem' element={<Tem />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
