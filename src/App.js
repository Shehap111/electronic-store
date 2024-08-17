import { Route, Routes} from "react-router-dom";
import Footer from './conponants/Pages/Fotter/Footer';
import Main_home from './conponants/Pages/Home/Main_home';
import Main_about from './conponants/Pages/About/Main_about';
import Contact from './conponants/Pages/services/Contact';
import Main_blog from './conponants/Pages/Blog/Main_blog';
import Navbar from './conponants/Pages/navbar/Navbar';
import Products from "./conponants/Pages/Products/Products";
import Singel_product from "./conponants/Pages/Products/Singel_product";
import CartPage from "./conponants/Pages/Products/CartPage";
import WishList_page from "./conponants/Pages/Products/WishList_page";
import SERVICES from "./conponants/Pages/services/SERVICES";
import Login from "./conponants/Pages/services/Login";
import Registration from "./conponants/Pages/services/Registration";
import Privacy_Policy from "./conponants/Pages/services/Privacy_Policy";
import Scroll_To_top from "./conponants/Scroll_To_top";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

      <Route path='/' element={<Main_home/>}/>      

      <Route path='/Apout' element={<Main_about/>}/> 

      <Route path='/services' element={<SERVICES/>} />

      <Route path='/Shop' element={<Products/>} />
        
      <Route path='/Products/:id' element={<Singel_product/>} />

      <Route path='/Cart' element={<CartPage/>} />     

      <Route path='/wishlist' element={<WishList_page/>} />            

      <Route path='/Contact' element={<Contact/>} />    

      <Route path='/Login' element={<Login/>} />   

      <Route path='/Registration' element={<Registration />} />   
        
      <Route path='/Privacy_Policy' element={<Privacy_Policy/>} />   



</Routes>
      <Footer />
      <Scroll_To_top/>
    </div>
  );
}

export default App;
