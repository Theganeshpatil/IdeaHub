import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Go back simon</h1>
            <p>Page not found</p>
            <Link to='/'>Go to home</Link>
        </div>
    );
}

export default NotFound;