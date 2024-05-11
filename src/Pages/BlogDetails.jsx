import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const blog = useLoaderData();
    const { _id, image, title,
        short_description, long_description, date, category } = blog
    console.log(blog);
    return (
        <div className="border my-6 rounded-md w-11/12 lg:w-[60%] p-4 font-serif  mx-auto space-y-12">
            <div>
                <img className="w-full object-cover object-center md:h-[500px] rounded-lg" src={image} alt="" />
            </div>
            <article className="space-y-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="">
                    <h1 className="text-2xl font-bold md:tracking-tight md:text-4xl">{title}</h1>
                    <div className="flex mt-4 flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                        <div className="flex items-center">
                            <p>Posted Date : <span>{new Date(date).toLocaleDateString()}</span></p>
                        </div>
                        <p>Category : {category}</p>
                    </div>
                </div>
                <div className="dark:text-gray-800">
                    <p>{short_description}</p>
                </div>
            </article>
            <div>
                <div>
                    <p className="text-lg text-justify">{long_description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;