
import './App.css';
import Nevbar from './Components/Shared/Nevbar';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import AboutUs from './Components/Aboutus/AboutUs';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Topbar from './Components/Shared/Topbar';
import Footer from './Components/Shared/Footer';
import Shops from './Components/Shop/Shops';
import Team from './Components/Page/Team/Team';
import Faq from './Components/Page/FAQ/Faq';
import Contact from './Components/Contact/Contact';
import ShopDetails from './Components/Shop/ShopDetails';

function App() {
  return (
    <div >
      <Topbar></Topbar>
      <Nevbar></Nevbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='shops' element={<Shops />} />
        <Route path='/shop/:shopId' element={<ShopDetails></ShopDetails>}/>
        <Route path='blog' element={<Blog />} />
        <Route path='team' element={<Team />} />
        <Route path='faq' element={<Faq/>} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
