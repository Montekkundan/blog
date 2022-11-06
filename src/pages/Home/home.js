import Model from "../../components/Home/Model/model";
import {Canvas} from "@react-three/fiber";
import './home.css'
import Header from "../../components/Home/Header/header";
import Searchbar from "../../components/Home/SearchBar/searchbar";
import BlogList from "../../components/Home/BlogList/bloglist";
import {blogList} from "../../config/data";
import {useState} from "react";
import ProjectItems from "../../components/Home/Projects_items/projectItems";

export default function Home()
{
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    // Search Submit
    const handleSearchSubmit = event =>{
        event.preventDefault();
        handleSearchResults()
    }

    // Search for blogs and category
    const handleSearchResults = () =>{
        const filterBlogs = blogList.filter((blog) => blog.category.toLowerCase().includes
        (searchKey.toLowerCase().trim()) || blog.title.toLowerCase().includes
        (searchKey.toLowerCase().trim()))

        setBlogs(filterBlogs)
    }
    return (
    <>
        <div className="home">
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
        {/*Search bar */}
        <Searchbar value={searchKey} formSubmit={handleSearchSubmit} handleSearch={(e)=>setSearchKey(e.target.value)}/>
        <BlogList blogs={blogs}/>
        <ProjectItems/>
        </div>
    </>
    )
}