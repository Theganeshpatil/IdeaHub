import { Link } from 'react-router-dom';
const Bloglist = ({ blogs, title }) => {
    // const blogs = props.blogs
    // const title = props.title
    return (
        <div className='all-blogs'>
            <h1>{title}</h1>
            <div className="blog-list">


                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={'/blogs/' + blog.id}><h3>{blog.title}</h3>
                            <p>{blog.body.substring(0, 210) + '...'}</p>
                            <span> written by <span className='boldIt'>{blog.author}</span></span>
                            {/* <button onClick={() => (handleDelete(blog.id))}>Delete</button> */}
                        </Link>
                    </div>

                ))
                }
            </div >
        </div >
    );
}

export default Bloglist;