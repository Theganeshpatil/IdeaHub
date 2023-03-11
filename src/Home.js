import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {

    // let Author = "Ganesh Patil"
    // let Books = ['Book1', 'Book2', 2022, 2023]
    // // can't output booleans and objects
    // let link = 'https://www.google.com';
    const [blogs, setBlogs] = useState([
        { title: "My new webiste", body: 'lorem ipsue ...', author: 'Mario', id: 1 },
        { title: "Welcome Party!", body: 'lorem ipsue ...', author: 'Yosie', id: 2 },
        { title: "Web Dev Tips*", body: 'lorem ipsue ...', author: 'Mario', id: 3 }
    ])
    const [name, setName] = useState("Jon")

    useEffect(() => {
        console.log('use effect ran')
        console.log(blogs)
    }, [name])
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => (blog.id !== id))
        // console.log(newBlogs)
        setBlogs(newBlogs)
    }
    return (
        <div className="home-section">
            <Bloglist blogs={blogs} title={'All blogs'} handleDelete={handleDelete} />
            {/* <Bloglist blogs={blogs.filter((blog) => (blog.author === 'Mario'))} title={'Mario\'s blogs'} handleDelete={handleDelete} /> */}
            <button onClick={() => setName("Ganesh")}>Change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;