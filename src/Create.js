import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Lofi')
    const [isPending, setPending] = useState(false);
    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault()
        setPending(true)
        const blog = { 'title': title, 'body': body, 'author': author }
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog added')
            setPending(false)
            // history.go(-1)
            history.push('/')
        }).catch(err => {
            console.log('Request failed', err)
        })
    }
    return (
        <div className="create-section">
            <h2 style={{
                'textAlign': 'center'
            }}>Add a new Blog </h2>

            <form className="create" onSubmit={(e) => handleClick(e)}>
                <label htmlFor="title"> Title </label>
                <input
                    type="text"
                    id="title"
                    required
                    value={title}
                    onChange={(e) => (setTitle(e.target.value))} />
                <label htmlFor="body"> Body </label>
                <textarea id="body" placeholder="Enter a content of blog" required value={body}
                    onChange={(e) => (setBody(e.target.value))}></textarea>
                <label htmlFor="author"> Author </label>
                <select id="author" required value={author}
                    onChange={(e) => (setAuthor(e.target.value))}>
                    <option value='Mario'>Mario</option>
                    <option value='Lofi'>Lofi</option>
                </select>
                {!isPending && <button >Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
            {/* <div>{`${title}  ${author}  ${body}`}</div> */}
        </div >
    );
}

export default Create;