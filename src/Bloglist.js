const Bloglist = ({ blogs, title, handleDelete }) => {
    // const blogs = props.blogs
    // const title = props.title

    return (

        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    <span> written by {blog.author}</span>
                    <button onClick={() => (handleDelete(blog.id))}>Delete</button>
                </div>

            ))}
        </div>
    );
}

export default Bloglist;