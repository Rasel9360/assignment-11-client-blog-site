import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "../Components/Blog";

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [filter, setFilter] = useState('');
    // console.log(blogs);


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/blogs?filter=${filter}`)
            .then(response => {
                setBlogs(response.data)
            })
    }, [blogs, filter])

    return (
        <div>
            <div
                className='w-full bg-center bg-cover h-[12rem]'
                style={{
                    backgroundImage: `url("https://www.impactbnd.com/hubfs/social-suggested-images/5_Blog_Layout_Best_Practices_From_2016-1.jpg")`,
                }}
            >
                <div className='flex flex-col items-center justify-center w-full h-full bg-gray-900/70'>
                    <div className='text-center'>
                        <h1 className='text-2xl md:text-4xl font-semibold text-center text-white lg:text-4xl font-serif'>
                            All Blogs
                        </h1>
                    </div>
                    <div>
                        <div>
                            <select 
                            className="select select-bordered w-full max-w-xs text-lg font-serif"
                            onChange={(e)=> setFilter(e.target.value)}
                            value={filter}
                            >
                                <option  selected >Sort by category</option>
                                <option value='Technology'>Technology</option>
                                <option value='Web Development'>Web Development</option>
                                <option value='Programming'>Programming</option>
                                <option value='UX Design'>UX Design</option>
                                <option value='Digital Marketing'>Digital Marketing</option>
                                <option value='Career Change'>Career Change</option>
                                <option value='Photography'>Photography</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {/* blogs container */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 my-12 gap-10 w-11/12 md:w-10/12 mx-auto">
                {
                    blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;