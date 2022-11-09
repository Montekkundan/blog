import Searchbar from "../SearchBar/searchbar";
import BlogList from "../BlogList/bloglist";
import {useState} from "react";
import {blogList} from "../../../config/data";
import './bloglistsection.css'
import MagicText from "../../Common/MagicText/magictext";
import {Link} from "react-router-dom";

export default function BlogListSection() {
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
            <div className="blog__heading">
            <MagicText word="My" magic="Latest Blogs"/>
            </div>
        <Searchbar value={searchKey} formSubmit={handleSearchSubmit} handleSearch={(e)=>setSearchKey(e.target.value)}/>
         <BlogList blogs={blogs}/>

            <Link to='/blog' className="show__btn">
                <span>Show all</span>
            </Link>
        </>
    )
}