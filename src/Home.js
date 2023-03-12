import Bloglist from "./Bloglist";
import useFetch from "./useFetch"
const Home = () => {

    // let Author = "Ganesh Patil"
    // let Books = ['Book1', 'Book2', 2022, 2023]
    // // can't output booleans and objects
    // let link = 'https://www.google.com';

    // const [name, setName] = useState("Jon")

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')


    return (
        <div className="home-section">

            {isPending && <p>Loading...</p>}
            {error && <div>{error}</div>}
            {blogs && <Bloglist blogs={blogs} title={'All blogs'} />}
            {/* <Bloglist blogs={blogs.filter((blog) => (blog.author === 'Mario'))} title={'Mario\'s blogs'} handleDelete={handleDelete} /> */}
            {/* <button onClick={() => setName("Ganesh")}>Change name</button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}

export default Home;