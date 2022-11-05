import './blogitem.css'
import Labels from "../../../Common/Labels/labels";
import {Link} from "react-router-dom";
export default function BlogItem({blog:{title,heading, category, description, createdAt, cover}}) {
    const underscore_url = title.replaceAll(' ', '_').toLowerCase();
    return (
        <div className="blog-item">
            <img src={cover} alt={title} className="blog-item__cover"/>
            <Labels label={category}/>
            <h3>{heading}</h3>
            <p className="blog-item__description">{description}</p>
            <footer>
                <p className="blog-item__date">{createdAt}</p>
                <Link className="blog-item__link" to={`/blog/${underscore_url}`}>
                    ->
                </Link>
            </footer>
        </div>
    )
}