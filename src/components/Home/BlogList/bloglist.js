import './bloglist.css'
import BlogItem from "./BlogItem/blogitem";
export default function BlogList({blogs}) {
    return (
        <div className="blog-list">
            {blogs.map(blog =><BlogItem blog={blog} key={blog.id}/> )}
        </div>
    )
}