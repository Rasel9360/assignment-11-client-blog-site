import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    // console.log(blogs);


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/blogs`)
            .then(response => {
                setBlogs(response.data)
            })
    }, [])

    return (
        <div >
            <h1 className="text-3xl text-center font-bold font-serif my-20">Recent Blogs </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 md:w-10/12 mx-auto">
                {
                    blogs.slice(0,6).map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;