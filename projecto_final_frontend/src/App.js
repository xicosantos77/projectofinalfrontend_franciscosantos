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

//artigos: 
import Post1 from './Pages/Posts/Post1';
import Post2 from './Pages/Posts/Post2';
import Post3 from './Pages/Posts/Post3';
import Post4 from './Pages/Posts/Post4';
import Post5 from './Pages/Posts/Post5';
import Post6 from './Pages/Posts/Post6';
import Post7 from './Pages/Posts/Post7';
import Post8 from './Pages/Posts/Post8';
import Post9 from './Pages/Posts/Post9';
import Post10 from './Pages/Posts/Post10';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="Blog" element={<Blog></Blog>}></Route>
            <Route path="AboutUs" element={<AboutUs></AboutUs>}></Route>
            <Route path="ContactUs" element={<ContactUs></ContactUs>}></Route>
            <Route path="Subscribe" element={<Subscribe></Subscribe>}></Route>
            <Route path="PrivacyPolicy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
            <Route path='Post1' element={<Post1></Post1>}></Route>
            <Route path='Post2' element={<Post2></Post2>}></Route>
            <Route path='Post3' element={<Post3></Post3>}></Route>
            <Route path='Post4' element={<Post4></Post4>}></Route>
            <Route path='Post5' element={<Post5></Post5>}></Route>
            <Route path='Post6' element={<Post6></Post6>}></Route>
            <Route path='Post7' element={<Post7></Post7>}></Route>
            <Route path='Post8' element={<Post8></Post8>}></Route>
            <Route path='Post9' element={<Post9></Post9>}></Route>
            <Route path='Post10' element={<Post10></Post10>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
