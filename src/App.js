import {BrowserRouter} from "react-router-dom";
import './App.css'
import Navbar from "./components/Common/NavBar/navbar";
import Footer from "./components/Common/Footer/footer";
import Animate_page from "./components/Common/Animate_Page/animate_page";
import {AnalyticsWrapper} from "./components/Common/Vercel/analytics";

export default function App() {
    const cursor = document.getElementsByClassName('.cursor');
    const onCursorMove = e => {
        // cursor.setAttribute("style", "top:" + (e.pageY -10)+ "px; left:" + (e.pageX-10) + "px;")
        cursor.style.setProperty("--mouse-x",`${e.pageY -10}px`);
        cursor.style.setProperty("--mouse-y",`${e.pageX -10}px`);
        // cursor.style.setProperty("top",`${e.pageY -10}px`);
        // cursor.style.setProperty("left",`${e.pageX -10}px`);
    }
    return(
        <>
            {/*<div className="cursor" onMouseMove={onCursorMove}></div>*/}
            <Navbar/>
                <div className="container">
                    <BrowserRouter>
                        <Animate_page/>
                    </BrowserRouter>
                </div>
            <Footer/>
            <AnalyticsWrapper />
        </>
    )
}