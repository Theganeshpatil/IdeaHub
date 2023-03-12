import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory()
    const deleteBlog = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'

        }).then(
            history.push('/')
        )
    }
    return (
        <div className="blog-details">
            <h2>Blog detail - {id} </h2>
            {isPending && <div>Loading... </div>}
            {error && <div>Failed to load</div>}
            {blog &&
                <article>
                    <h1>{blog.title}</h1>
                    <div>{blog.body}</div>
                    <div>{blog.author}</div>
                    <button onClick={(id) => (deleteBlog(id))}>Delete</button>
                </article>}


        </div>
    );
}

export default BlogDetails;