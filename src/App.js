import {BrowserRouter} from "react-router-dom";
import './App.css'
import Navbar from "./components/Common/NavBar/navbar";
import Footer from "./components/Common/Footer/footer";
import Animate_page from "./components/Common/Animate_Page/animate_page";
import {AnalyticsWrapper} from "./components/Common/Vercel/analytics";

export default function App() {
    return(
        <>
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