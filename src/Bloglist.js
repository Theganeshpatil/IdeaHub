import { Link } from 'react-router-dom';
const Bloglist = ({ blogs, title }) => {
    // const blogs = props.blogs
    // const title = props.title

    return (

        <div className="blog-list">
            <h1>{title}</h1>

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={'/blogs/' + blog.id}><h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                        <span> written by {blog.author}</span>

                        {/* <button onClick={() => (handleDelete(blog.id))}>Delete</button> */}
                    </Link>
                </div>

            ))
            }
        </div >
    );
}

export default Bloglist;