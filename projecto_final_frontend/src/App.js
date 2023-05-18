import './App.scss';
//Elementos de topo e de fundo (header e footer);
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

//Elemento de Rotas de Links
import {BrowserRouter, Routes, Route} from "react-router-dom"; 

//Páginas: 
import AboutUs from './Pages/AboutUs';
import Blog from './Pages/Blog';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Subscribe from './Pages/Subscribe';
import PrivacyPolicy from './Pages/PrivacyPolicy';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="Home" element={<Home></Home>}></Route>
            <Route path="Blog" element={<Blog></Blog>}></Route>
            <Route path="AboutUs" element={<AboutUs></AboutUs>}></Route>
            <Route path="ContactUs" element={<ContactUs></ContactUs>}></Route>
            <Route path="Subscribe" element={<Subscribe></Subscribe>}></Route>
            <Route path="PrivacyPolicy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
