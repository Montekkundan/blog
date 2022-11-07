import Model from "../../components/Home/Model/model";
import {Canvas} from "@react-three/fiber";
import './home.css'
import Header from "../../components/Home/Header/header";
import ProjectItems from "../../components/Home/Projects_items_section/projectItems";
import BlogListSection from "../../components/Home/Blog_List_section/bloglistsection";
import {motion} from "framer-motion";

export default function Home()
{
    const animations = {
        initial: {opacity:0},
        animate: {opacity:1},
    }
    return (
        <div className="home" >
        <div className="home__header__section">
            <Header/>
            {/*Canvas component */}
            <div  className="canvas__model">
                <Canvas
                        shadows
                        camera={ {
                            fov: 45,
                            near: 0.1,
                            far: 200,
                            position: [ 60, 60, 60 ]
                        } }
                ><Model />
                </Canvas>
            </div>
        </div>
        <BlogListSection/>
        <ProjectItems/>
        </div>
    )
}