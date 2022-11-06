import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/home";
import Blog from "./pages/Blog/blog";
import './App.css'
import About from "./pages/About/about";
import Navbar from "./components/Common/NavBar/navbar";
import Footer from "./components/Common/Footer/footer";
import NoPage from "./components/Common/404/404";
import Projects from "./pages/Projects/projects";

export default function App() {
    return(
        <>
            <Navbar/>
                <div className="container">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="*" element={<NoPage />}/>
                            <Route path="/about" element={<About />}/>
                            <Route path="/blog/:id" element={<Blog />}/>
                            <Route path="/project/:id" element={<Projects />}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            <Footer/>
        </>
    )
}