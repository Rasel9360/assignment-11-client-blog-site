import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "../Components/Blog";

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('')
    // console.log(blogs);


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/all-blogs?filter=${filter}&search=${search}`)
            .then(response => {
                setBlogs(response.data)
            })
    }, [blogs, filter, search])

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.search.value)
    }
    // console.log(search);

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
                    <div className="flex justify-around w-full">
                        {/* short by category */}
                        <div className="border p-1 rounded-xl">
                            <select
                                className="select select-bordered w-full  max-w-xs text-lg font-serif bg-opacity-80"
                                onChange={(e) => setFilter(e.target.value)}
                                value={filter}
                            >
                                <option selected >Filter by category</option>
                                <option value='Technology'>Technology</option>
                                <option value='Web Development'>Web Development</option>
                                <option value='Programming'>Programming</option>
                                <option value='UX Design'>UX Design</option>
                                <option value='Digital Marketing'>Digital Marketing</option>
                                <option value='Career Change'>Career Change</option>
                                <option value='Photography'>Photography</option>
                            </select>
                        </div>
                        {/* search functionality */}
                        <div>
                            <form onSubmit={handleSearch}>
                                <div className='flex p-1 overflow-hidden border bg-opacity-75 rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 bg-white'>
                                    <input
                                        className='px-6 py-2 text-black placeholder-black bg-opacity-30 bg-white outline-none focus:placeholder-transparent'
                                        type='text'
                                        name='search'
                                        placeholder='Enter Blog Title'
                                        aria-label='Enter Job Title'
                                    />

                                    <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                        <span className="relative px-3 py-2 transition-all ease-out  rounded-md group-hover:bg-opacity-0 duration-400">
                                            <span className="relative text-white font-serif">Search</span>
                                        </span>
                                    </button>
                                </div>
                            </form>
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