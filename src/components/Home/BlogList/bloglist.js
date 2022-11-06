import './bloglist.css'
import BlogItem from "./BlogItem/blogitem";
export default function BlogList({blogs}) {
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
    return (
        <div id="blog-list" onMouseMoveCapture={onMouseMoveCaptureHandler}>
            {blogs.map(blog =><BlogItem blog={blog} key={blog.id}/> )}
        </div>
    )
}