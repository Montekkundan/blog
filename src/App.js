import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/home";
import Blog from "./pages/Blog/blog";
import './App.css'
import About from "./pages/About/about";
import Navbar from "./components/Common/NavBar/navbar";
import Footer from "./components/Common/Footer/footer";

export default function App() {
    return(
        <>
            <Navbar/>
                <div className="container">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/about" element={<About />}/>
                            <Route path="/blog/:id" element={<Blog />}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            <Footer/>
        </>
    )
}