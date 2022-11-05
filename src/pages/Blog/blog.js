import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {blogList} from "../../config/data";
import Labels from "../../components/Common/Labels/labels";
import NoPage from "../../components/Common/404/404";
import './blog.css'
import {motion} from "framer-motion";

export default function Blog() {
    const {id} = useParams()
    const [blog, setBlog] = useState(null);
    useEffect(() => {
        let blog = blogList.find(blog=> blog.title.replaceAll(' ', '-').toLowerCase() === id)
        if (blog){
            setBlog(blog)
        }

    }, []);
    
    return (
        <div>
            <Link to='/' className="back__btn">
                <span>Go Back</span>
            </Link>

            {
                blog ? <div className='blog-wrapper'>
                    <div className="blog-wrapper__top">
                        <header>
                            <p className="blog-wrapper__date">Published {blog.createdAt}</p>
                            <h1>{blog.heading}</h1>
                            <div className='blog-wrapper__sub-category'>
                                {blog.subCategory.map((category, index)=>
                                    (
                                    <div>
                                        <Labels key={index} label={category}/>
                                    </div>
                                    ))
                                }
                            </div>
                        </header>
                        <img className="blog-wrapper__img" src={blog.cover} alt={blog.title} />
                        <p className="blog-wrapper__description">{blog.description}</p>
                    </div>
                    <div className="blog-wrapper__content">
                        {blog.content}
                    </div>
                    <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={() => null}
                    >
                    Launch Model
                    </motion.button>
                </div> : <NoPage/>
            }
        </div>
    )
}