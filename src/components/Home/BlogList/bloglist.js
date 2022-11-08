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
    const showBlogs =() => {
        const array = []

        for(let i = 1; i <= blogs.length; i++){
            // array.push(<BlogItem blog={blogs[i]}/>)
            // console.log(typeof blogs[i])
            // console.log(blogs[i])
            // const wrapped1 = [blogs[i]].flat()
            // console.log(wrapped1);
            array.push(blogs[i])
            // console.log()
        }
        // console.log(array)
        const wrapped1 = [array].flat()
        console.log(wrapped1);
        return array

    }
    // const anObj = {name: "Hi"};
    // const anArr = [{name: "Hi"}];
    //
    // const wrapped1 = [anObj].flat()
    // const wrapped2 = [anArr].flat()
    //
    // console.log(wrapped1);  // wrapped1 is [{name: "Hi"}]
    // console.log(wrapped2);
    // console.log(blogs)
    // console.log(blogs.map (blog => typeof blog))
    // blogs.map(blog =><BlogItem blog={blog} key={blog.id}/> )
    return (
        <div id="blog-list" onMouseMoveCapture={onMouseMoveCaptureHandler}>
            {blogs.map(blog =><BlogItem blog={blog} key={blog.id}/> )}
            {/*{showBlogs()}*/}
        </div>
    )
}