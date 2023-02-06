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
import SingUp from './Components/Login/SingUp';
import RequireAuth from './Components/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrder from './Components/Dashboard/MyOrder';
import MyReview from './Components/Dashboard/MyReview';
import Users from './Components/Dashboard/Users';
import AddProduct from './Components/Dashboard/AddProduct';
import ManageProduct from './Components/Dashboard/ManageProduct';

function App() {
  return (
    <div className="bg-white" >
      <Topbar></Topbar>
      <Nevbar></Nevbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='shops' element={<Shops />} />
        <Route path='/shop/:shopId' element={
          <RequireAuth>
            <ShopDetails />
          </RequireAuth>} />
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>} />
          <Route path='review' element={<MyReview></MyReview>} />
          <Route path='users' element={<Users></Users>} />
          <Route path='addproduct' element={<AddProduct></AddProduct>} />
          <Route path=' manageproduct' element={<ManageProduct></ManageProduct>} />
        </Route>
        <Route path='blog' element={<Blog />} />
        <Route path='team' element={<Team />} />
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SingUp />} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
