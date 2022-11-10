import './allblogs.css'
import BlogItem from "../../components/Home/BlogList/BlogItem/blogitem";
import MagicText from "../../components/Common/MagicText/magictext";
import Searchbar from "../../components/Home/SearchBar/searchbar";
import {useState} from "react";
import {blogList} from "../../config/data";
export default function AllBlogs() {
    const onMouseMoveCaptureHandler = e => {
        for(const item of document.getElementsByClassName('blog-item'))
        {
            const rect = item.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            item.style.setProperty("--mouse-x",`${x}px`);
            item.style.setProperty("--mouse-y",`${y}px`);
        }
    }
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
                <MagicText word="My" magic="Logs"/>
            </div>
            <Searchbar value={searchKey} formSubmit={handleSearchSubmit} handleSearch={(e)=>setSearchKey(e.target.value)}/>
            <div id="blog-list" onMouseMoveCapture={onMouseMoveCaptureHandler}>
                {blogs.map(blog =><BlogItem blog={blog} key={blog.id}/> )}
            </div>
        </>

    )
}