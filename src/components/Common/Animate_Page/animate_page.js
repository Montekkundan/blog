import {AnimatePresence} from 'framer-motion'
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../../../pages/Home/home";
import NoPage from "../404/404";
import About from "../../../pages/About/about";
import Blog from "../../../pages/Blog/blog";
import Projects from "../../../pages/Projects/projects";
export default function Animate_page({children}) {
    const location = useLocation()
    return (
        <div>
            <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}/>
                <Route path="*" element={<NoPage />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/blog/:id" element={<Blog />}/>
                <Route path="/project/:id" element={<Projects />}/>
            </Routes>
            </AnimatePresence>
        </div>
    )
}