import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './landing_page/home/HomePage.jsx';
import AboutPage from "./landing_page/about/AboutPage.jsx";
import Signup from "./landing_page/signup/SignUp.jsx";
import ProductPage from "./landing_page/products/ProductPage.jsx";
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import SupportPage from "./landing_page/support/SupportPage.jsx";
import Navbar from "../src/landing_page/Navbar.jsx";
import Footer from "../src/landing_page/Footer.jsx";
import NotFound from './landing_page/NotFound.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/product' element={<ProductPage />}/>
            <Route path='/pricing' element={<PricingPage />}/>
            <Route path='/support' element={<SupportPage />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
);
